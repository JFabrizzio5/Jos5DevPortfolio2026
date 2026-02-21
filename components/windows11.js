const Windows11Component = {
    render: function (contentHtml) {
        return `
            <!-- Windows 11 Wallpaper -->
            <div class="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none" style="background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'); filter: brightness(0.85);"></div>

            <!-- Desktop Icons -->
            <div class="absolute top-4 left-4 flex flex-col gap-4 select-none z-10 w-24">
                <div class="flex flex-col items-center justify-center gap-1 w-full cursor-pointer px-1 py-2 rounded hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors group" ondblclick="document.getElementById('win-window').style.display='flex'; WindowManager.focusWindow('win-window');">
                    <i data-lucide="terminal-square" class="theme-text w-9 h-9 drop-shadow-lg group-hover:scale-105 transition-transform"></i>
                    <span class="text-xs text-white text-center leading-tight font-medium mt-1 w-full break-words" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">Portfolio.exe</span>
                </div>
                <div class="flex flex-col items-center justify-center gap-1 w-full cursor-pointer px-1 py-2 rounded hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors group" ondblclick="window.openLinkedIn()">
                    <i data-lucide="linkedin" class="text-[#0a66c2] bg-white rounded flex items-center justify-center p-0.5 w-9 h-9 drop-shadow-lg group-hover:scale-105 transition-transform"></i>
                    <span class="text-xs text-white text-center leading-tight font-medium mt-1 w-full break-words" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">LinkedIn</span>
                </div>
                <div class="flex flex-col items-center justify-center gap-1 w-full cursor-pointer px-1 py-2 rounded hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors group" ondblclick="window.open('https://github.com/JFabrizzio5', '_blank')">
                    <i data-lucide="github" class="text-white bg-zinc-800 rounded-full w-9 h-9 drop-shadow-lg p-0.5 group-hover:scale-105 transition-transform"></i>
                    <span class="text-xs text-white text-center leading-tight font-medium mt-1 w-full break-words" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">GitHub</span>
                </div>
                <div class="flex flex-col items-center justify-center gap-1 w-full cursor-pointer px-1 py-2 rounded hover:bg-white/10 border border-transparent hover:border-white/10 transition-colors group" ondblclick="document.getElementById('win-explorer').style.display='flex'; WindowManager.focusWindow('win-explorer');">
                    <i data-lucide="folder" class="text-[#fecb00] fill-[#fecb00]/20 w-10 h-10 drop-shadow-lg group-hover:scale-105 transition-transform"></i>
                    <span class="text-xs text-white text-center leading-tight font-medium mt-1 w-full break-words" style="text-shadow: 0 1px 3px rgba(0,0,0,0.8);">Files</span>
                </div>
            </div>

            <!-- Main Portfolio Window -->
            <div class="app-window win11-shadows win11-mica hidden" id="win-window">
                <div class="win-titlebar cursor-grab active:cursor-grabbing select-none" id="win-titlebar">
                    <div class="flex items-center gap-2 text-xs text-gray-300">
                        <i data-lucide="terminal-square" class="theme-text w-3 h-3"></i>
                        Portfolio.exe
                    </div>
                    <div class="win-controls">
                        <div class="win-control-btn" title="Minimize" onclick="document.getElementById('win-window').style.display='none'"><i data-lucide="minus" class="w-4 h-4"></i></div>
                        <div class="win-control-btn" title="Maximize" onclick="WindowManager.toggleMaximize('win-window')"><i data-lucide="square" class="w-3 h-3"></i></div>
                        <div class="win-control-btn close" title="Close" onclick="document.getElementById('win-window').style.display='none'"><i data-lucide="x" class="w-4 h-4"></i></div>
                    </div>
                </div>

                <div class="app-content relative bg-[#202020]/90">
                    ${contentHtml}
                </div>
            </div>

            <!-- File Explorer Window -->
            <div class="app-window win11-shadows win11-mica" id="win-explorer" style="display: none; width: 800px; height: 500px; left: 50%; top: 50%; transform: translate(-50%, -50%);">
                <!-- Titlebar -->
                <div class="win-titlebar cursor-grab active:cursor-grabbing select-none bg-black/40 border-b border-white/5" id="win-explorer-titlebar">
                    <div class="flex items-center gap-3 text-[11px] text-gray-200 p-2">
                        <i data-lucide="folder" class="text-yellow-400 w-4 h-4 shadow-sm"></i>
                        <span>File Explorer</span>
                    </div>
                    <div class="win-controls">
                        <div class="win-control-btn" onclick="document.getElementById('win-explorer').style.display='none'"><i data-lucide="minus" class="w-4 h-4"></i></div>
                        <div class="win-control-btn" onclick="WindowManager.toggleMaximize('win-explorer')"><i data-lucide="square" class="w-3 h-3"></i></div>
                        <div class="win-control-btn close" onclick="document.getElementById('win-explorer').style.display='none'"><i data-lucide="x" class="w-4 h-4"></i></div>
                    </div>
                </div>
                <!-- Ribbon/Command Bar -->
                <div class="flex items-center gap-2 px-2 py-2 bg-[#202020]/80 border-b border-white/5 select-none">
                    <div class="flex items-center gap-1">
                        <div class="p-1.5 rounded hover:bg-white/10 text-gray-300 cursor-pointer"><i data-lucide="arrow-left" class="w-4 h-4"></i></div>
                        <div class="p-1.5 rounded text-gray-600"><i data-lucide="arrow-right" class="w-4 h-4"></i></div>
                        <div class="p-1.5 rounded hover:bg-white/10 text-gray-300 cursor-pointer"><i data-lucide="arrow-up" class="w-4 h-4"></i></div>
                        <div class="p-1.5 rounded hover:bg-white/10 text-gray-300 cursor-pointer"><i data-lucide="rotate-cw" class="w-4 h-4"></i></div>
                    </div>
                    <!-- Address Bar -->
                    <div class="flex-1 flex items-center bg-[#191919] border border-white/10 rounded overflow-hidden">
                        <div class="px-2 py-1 text-gray-400 bg-transparent flex items-center gap-1 text-xs">
                            <i data-lucide="monitor" class="w-3 h-3 text-white"></i> This PC <i data-lucide="chevron-right" class="w-3 h-3"></i> Documents <i data-lucide="chevron-right" class="w-3 h-3"></i> Files
                        </div>
                    </div>
                    <!-- Search Bar -->
                    <div class="w-48 flex items-center bg-[#191919] border border-white/10 rounded px-2 py-1 text-gray-400 text-xs">
                        <i data-lucide="search" class="w-3 h-3 mr-2"></i> Search Files...
                    </div>
                </div>
                <div class="flex flex-1 overflow-hidden bg-[#1c1c1c]">
                    <!-- Nav Pane -->
                    <div class="w-56 border-r border-white/5 p-2 flex flex-col gap-1 select-none overflow-y-auto">
                        <div class="flex items-center gap-2 p-1.5 rounded hover:bg-white/10 text-xs text-gray-300 cursor-pointer">
                            <i data-lucide="star" class="w-4 h-4 text-gray-400"></i> Quick access
                        </div>
                        <div class="flex items-center gap-2 p-1.5 rounded hover:bg-white/10 text-xs text-gray-300 cursor-pointer">
                            <i data-lucide="monitor" class="w-4 h-4 text-white"></i> This PC
                        </div>
                        <div class="pl-5 flex flex-col gap-1 mt-1">
                            <div class="flex items-center gap-2 p-1.5 rounded hover:bg-white/10 text-xs text-gray-300 cursor-pointer">
                                <i data-lucide="monitor-down" class="w-4 h-4 text-blue-400"></i> Desktop
                            </div>
                            <div class="flex items-center gap-2 p-1.5 rounded hover:bg-white/10 text-xs text-gray-300 cursor-pointer">
                                <i data-lucide="download" class="w-4 h-4 text-blue-400"></i> Downloads
                            </div>
                            <div class="flex items-center gap-2 p-1.5 rounded bg-white/10 text-xs text-white cursor-pointer border border-white/5">
                                <i data-lucide="file" class="w-4 h-4 text-blue-400"></i> Documents
                            </div>
                        </div>
                    </div>
                    <!-- Main Area -->
                    <div class="flex-1 p-6 relative bg-[#191919]">
                        <div class="text-xs text-gray-400 border-b border-white/5 pb-2 mb-4 grid grid-cols-12 gap-4 font-semibold select-none shadow-sm">
                            <div class="col-span-6 pl-2">Name</div>
                            <div class="col-span-3">Date modified</div>
                            <div class="col-span-3">Type</div>
                        </div>

                        <!-- File Row -->
                        <div class="grid grid-cols-12 gap-4 items-center p-2 rounded border border-transparent hover:bg-white/5 hover:border-white/10 cursor-pointer select-none transition-colors" ondblclick="window.open('Joseph_Fabrizzio_CV.pdf', '_blank')">
                            <div class="col-span-6 flex items-center gap-3">
                                <i data-lucide="file-text" class="text-red-500 w-5 h-5 drop-shadow"></i>
                                <span class="text-sm text-gray-200">Joseph_Fabrizzio_CV.pdf</span>
                            </div>
                            <div class="col-span-3 text-xs text-gray-500">2/21/2026 10:00 AM</div>
                            <div class="col-span-3 text-xs text-gray-500">PDF Document</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="win-taskbar select-none">
                <div class="taskbar-icon hover-bg-win" title="Start" onclick="window.shutdownOS()"><i data-lucide="layout-grid" class="text-blue-400 w-5 h-5"></i></div>
                <div class="taskbar-icon hover-bg-win" title="Search"><i data-lucide="search" class="text-gray-300 w-5 h-5"></i></div>
                <div class="taskbar-icon active hover-bg-win" title="Portfolio.exe" onclick="document.getElementById('win-window').style.display='flex'; WindowManager.focusWindow('win-window');"><i data-lucide="terminal-square" class="theme-text w-5 h-5"></i></div>
                <div class="taskbar-icon hover-bg-win" title="File Explorer" onclick="document.getElementById('win-explorer').style.display='flex'; WindowManager.focusWindow('win-explorer');"><i data-lucide="folder" class="text-yellow-500 w-5 h-5"></i></div>
                
                <div class="absolute right-4 flex items-center gap-3 text-xs text-gray-300 font-sans">
                    <i data-lucide="chevron-up" class="w-4 h-4 cursor-pointer"></i>
                    <i data-lucide="wifi" class="w-4 h-4 cursor-pointer"></i>
                    <i data-lucide="volume-2" class="w-4 h-4 cursor-pointer"></i>
                    <div class="flex flex-col text-right leading-tight cursor-pointer px-2 py-1 hover:bg-white/10 rounded">
                        <span id="win-time">10:00 AM</span>
                        <span id="win-date">10/24/2026</span>
                    </div>
                </div>
            </div>
        `;
    },

    init: function () {
        // Start dragging logic after render via WindowManager
        const win = document.getElementById('win-window');
        const title = document.getElementById('win-titlebar');
        const explorerWin = document.getElementById('win-explorer');
        const explorerTitle = document.getElementById('win-explorer-titlebar');

        // Show main portfolio initially
        if (win) win.style.display = 'flex';

        if (win && title) {
            WindowManager.makeDraggable('win-window', win, title);
        }

        if (explorerWin && explorerTitle) {
            WindowManager.makeDraggable('win-explorer', explorerWin, explorerTitle);
        }

        // Initialize Light/Dark Mode Toggle
        const themeBtn = document.getElementById('win-theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', () => {
                document.body.classList.toggle('light-mode');

                // Switch icon
                if (document.body.classList.contains('light-mode')) {
                    themeBtn.setAttribute('data-lucide', 'moon');
                } else {
                    themeBtn.setAttribute('data-lucide', 'sun');
                }
                lucide.createIcons();
            });
        }

        // Initialize Typewriter Story
        const isSpanish = (currentConfig && currentConfig.lang === 'es');
        const storyTitle = isSpanish ? "Hola, soy Joseph." : "Hi, I'm Joseph.";
        const storyBody = isSpanish ?
            "Conmigo no contratas a un simple desarrollador; integras un ecosistema tecnológico. Programo desde los 10 años y llevo más de 6 años como profesional, Arquitecto y Líder Tecnológico. Mi objetivo es aportar valor real a tu empresa.\\n\\nDisfruta de este entorno interactivo." :
            "You don't just hire a developer; you integrate a tech ecosystem. I've been coding since age 10 with over 6 years as a professional, Architect, and Tech Lead. My goal is to add real value to your company.\\n\\nEnjoy this interactive environment.";

        const titleEl = document.getElementById('win-typewriter-title');
        const bodyEl = document.getElementById('win-typewriter-body');

        if (titleEl && bodyEl) {
            this.typewriterEffect(titleEl, storyTitle, 40, () => {
                setTimeout(() => {
                    this.typewriterEffect(bodyEl, storyBody, 20);
                }, 400);
            });
        }

        // Initialize Weather Data
        this.fetchWeather();
    },

    typewriterEffect: function (element, text, speed, callback) {
        let i = 0;
        element.innerHTML = '';

        // Handle newlines
        const formattedText = text.replace(/\\n/g, '<br>');

        // We type literal HTML differently, so for simplicity we just split by chars 
        // but if it's <br> we need to insert it as HTML.
        const chars = text.split('');

        function typeWriter() {
            if (i < chars.length) {
                if (chars[i] === '\\' && chars[i + 1] === 'n') {
                    element.innerHTML += '<br>';
                    i += 2;
                } else {
                    element.innerHTML += chars[i];
                    i++;
                }
                setTimeout(typeWriter, speed);
            } else if (callback) {
                callback();
            }
        }
        typeWriter();
    },

    fetchWeather: async function () {
        try {
            // Get location via IP
            const locRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
            const locData = await locRes.json();
            const city = locData.city || 'Unknown';

            // Get weather
            const weatherRes = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
            const weatherData = await weatherRes.json();

            const temp = weatherData.current_condition[0].temp_C;
            const desc = weatherData.current_condition[0].weatherDesc[0].value;

            const cityEl = document.getElementById('win-weather-city');
            const tempEl = document.getElementById('win-weather-temp');
            const descEl = document.getElementById('win-weather-desc');
            const dateEl = document.getElementById('win-widget-date');

            if (cityEl) cityEl.innerText = city;
            if (tempEl) tempEl.innerText = `${temp}°C`;
            if (descEl) descEl.innerText = desc;
            if (dateEl) {
                const d = new Date();
                dateEl.innerText = d.toLocaleDateString();
            }

        } catch (error) {
            console.error("Failed to fetch weather", error);
            const cityEl = document.getElementById('win-weather-city');
            if (cityEl) cityEl.innerText = "Offline";
        }
    }
};

window.Windows11Component = Windows11Component;
