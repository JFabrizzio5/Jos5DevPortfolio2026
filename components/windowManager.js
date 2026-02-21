const WindowManager = {
    zIndexCounter: 100,
    windows: {},

    /**
     * Initializes a draggable, resizable window
     * @param {string} id - Unique identifier for the window
     * @param {HTMLElement} windowEl - The main window element `div.app-window`
     * @param {HTMLElement} titlebarEl - The element used as the drag handle
     */
    makeDraggable: function (id, windowEl, titlebarEl) {
        if (!windowEl || !titlebarEl) return;

        // Track window state
        this.windows[id] = {
            el: windowEl,
            isMaximized: false,
            prevStyle: { top: '', left: '', width: '', height: '', transform: '' }
        };

        // Focusing window
        windowEl.addEventListener('mousedown', () => this.focusWindow(id));

        // Dragging Logic
        let isDragging = false;
        let startX, startY, initialLeft, initialTop;

        titlebarEl.addEventListener('mousedown', (e) => {
            // Ignore if clicking on control buttons
            if (e.target.closest('.win-control-btn') || e.target.closest('.mac-btn')) return;

            this.focusWindow(id);
            if (this.windows[id].isMaximized) return; // Don't drag if maximized

            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;

            // Get current computed position
            const rect = windowEl.getBoundingClientRect();
            // If we are centered using margins, we need to convert to absolute positioning for math to work easily
            if (windowEl.style.position !== 'absolute') {
                windowEl.style.position = 'absolute';
                windowEl.style.margin = '0';
                windowEl.style.left = rect.left + 'px';
                windowEl.style.top = rect.top + 'px';
            }

            initialLeft = windowEl.offsetLeft;
            initialTop = windowEl.offsetTop;

            // Optional: add visual cue that dragging started
            windowEl.style.transition = 'none';
            document.body.style.userSelect = 'none'; // Prevent text selection while dragging
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;

            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            // Boundary constraints (don't drag titlebar completely off screen)
            let newTop = initialTop + dy;
            if (newTop < 0) newTop = 0; // Prevent dragging above top edge

            windowEl.style.left = `${initialLeft + dx}px`;
            windowEl.style.top = `${newTop}px`;
        });

        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                windowEl.style.transition = ''; // restore transitions
                document.body.style.userSelect = '';
            }
        });

        // Double Click to Maximize
        titlebarEl.addEventListener('dblclick', () => {
            this.toggleMaximize(id);
        });

        // Add Custom Resizers
        windowEl.style.resize = 'none'; // Overwrite default CSS resize

        const edges = [
            { class: 'resizer-r absolute right-0 top-0 bottom-0 w-2 cursor-e-resize z-50', dir: 'r' },
            { class: 'resizer-l absolute left-0 top-0 bottom-0 w-2 cursor-w-resize z-50', dir: 'l' },
            { class: 'resizer-b absolute bottom-0 left-0 right-0 h-2 cursor-s-resize z-50', dir: 'b' },
            { class: 'resizer-t absolute top-0 left-0 right-0 h-2 cursor-n-resize z-50', dir: 't' },
            { class: 'resizer-br absolute bottom-0 right-0 w-4 h-4 cursor-se-resize z-50', dir: 'br' },
            { class: 'resizer-bl absolute bottom-0 left-0 w-4 h-4 cursor-sw-resize z-50', dir: 'bl' },
            { class: 'resizer-tr absolute top-0 right-0 w-4 h-4 cursor-ne-resize z-50', dir: 'tr' },
            { class: 'resizer-tl absolute top-0 left-0 w-4 h-4 cursor-nw-resize z-50', dir: 'tl' }
        ];

        edges.forEach(edge => {
            const el = document.createElement('div');
            el.className = edge.class;
            windowEl.appendChild(el);

            el.addEventListener('mousedown', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.focusWindow(id);
                if (this.windows[id].isMaximized) return;

                const startX = e.clientX;
                const startY = e.clientY;
                const startWidth = parseInt(document.defaultView.getComputedStyle(windowEl).width, 10);
                const startHeight = parseInt(document.defaultView.getComputedStyle(windowEl).height, 10);

                // Force absolute to handle math
                if (windowEl.style.position !== 'absolute') {
                    const rect = windowEl.getBoundingClientRect();
                    windowEl.style.position = 'absolute';
                    windowEl.style.margin = '0';
                    windowEl.style.left = rect.left + 'px';
                    windowEl.style.top = rect.top + 'px';
                }

                const startLeft = windowEl.offsetLeft;
                const startTop = windowEl.offsetTop;

                // Min dimension constraints
                const minW = 320;
                const minH = 400;

                const doResize = (ev) => {
                    let newW = startWidth;
                    let newH = startHeight;
                    let newL = startLeft;
                    let newT = startTop;

                    if (edge.dir.includes('r')) {
                        newW = startWidth + (ev.clientX - startX);
                    }
                    if (edge.dir.includes('l')) {
                        newW = startWidth - (ev.clientX - startX);
                        if (newW >= minW) newL = startLeft + (ev.clientX - startX);
                    }
                    if (edge.dir.includes('b')) {
                        newH = startHeight + (ev.clientY - startY);
                    }
                    if (edge.dir.includes('t')) {
                        newH = startHeight - (ev.clientY - startY);
                        if (newH >= minH) newT = startTop + (ev.clientY - startY);
                    }

                    if (newW >= minW) {
                        windowEl.style.width = newW + 'px';
                        windowEl.style.left = newL + 'px';
                    }
                    if (newH >= minH) {
                        windowEl.style.height = newH + 'px';
                        windowEl.style.top = newT + 'px';
                    }
                };

                const stopResize = () => {
                    document.removeEventListener('mousemove', doResize);
                    document.removeEventListener('mouseup', stopResize);
                    // Re-enable iframes
                    const iframes = windowEl.querySelectorAll('iframe');
                    iframes.forEach(iframe => iframe.style.pointerEvents = 'auto');
                };

                document.addEventListener('mousemove', doResize);
                document.addEventListener('mouseup', stopResize);

                // Disable pointer events on iframes so dragging works over them
                const iframes = windowEl.querySelectorAll('iframe');
                iframes.forEach(iframe => iframe.style.pointerEvents = 'none');
            });
        });
    },

    focusWindow: function (id) {
        const win = this.windows[id];
        if (win && win.el) {
            this.zIndexCounter++;
            win.el.style.zIndex = this.zIndexCounter;
        }
    },

    toggleMaximize: function (id) {
        const win = this.windows[id];
        if (!win || !win.el) return;

        const el = win.el;

        if (!win.isMaximized) {
            // Save current state Before maximizing
            win.prevStyle = {
                top: el.style.top,
                left: el.style.left,
                width: el.style.width,
                height: el.style.height,
                maxWidth: el.style.maxWidth,
                position: el.style.position,
                margin: el.style.margin,
                transform: el.style.transform
            };

            const isMac = document.body.classList.contains('os-mac');

            // Apply maximized state
            el.style.position = 'absolute';
            el.style.left = '0px';
            el.style.width = '100vw'; // Use 100vw to be explicit
            el.style.maxWidth = 'none';

            // Adjust height according to OS bars
            if (isMac) {
                el.style.top = '28px'; // Accommodate Mac Menu Bar
                el.style.height = 'calc(100% - 28px)';
            } else {
                el.style.top = '0px';
                el.style.height = 'calc(100% - 48px)'; // Accommodate Windows taskbar
            }

            el.style.margin = '0px';
            el.style.transform = 'translate(0px, 0px)';
            el.style.borderRadius = '0px';
            win.isMaximized = true;

        } else {
            // Restore previous state
            el.style.top = win.prevStyle.top || '';
            el.style.left = win.prevStyle.left || '';
            el.style.width = win.prevStyle.width || '';
            el.style.height = win.prevStyle.height || '';
            el.style.maxWidth = win.prevStyle.maxWidth || '';
            el.style.position = win.prevStyle.position || '';
            el.style.margin = win.prevStyle.margin || '';
            el.style.transform = win.prevStyle.transform || '';
            el.style.borderRadius = ''; // restore to css class defined radius
            win.isMaximized = false;
        }
    }
};

window.WindowManager = WindowManager;
