const MacOSComponent = {
    render: function (contentHtml) {
        return `
            <div class="mac-menu-bar select-none">
                <div class="flex gap-4 items-center">
                    <i data-lucide="apple" class="w-4 h-4 cursor-pointer hover:text-rose-400 transition-colors" onclick="window.shutdownOS()" title="Shutdown OS"></i>
                    <span class="font-bold">Finder</span>
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Go</span>
                    <span>Window</span>
                    <span>Help</span>
                </div>
                <div class="flex gap-4 items-center">
                    <i data-lucide="battery-full" class="w-4 h-4"></i>
                    <i data-lucide="wifi" class="w-4 h-4"></i>
                    <i data-lucide="search" class="w-4 h-4"></i>
                    <span id="mac-time">Mon 10:00 AM</span>
                </div>
            </div>

            <div class="absolute top-8 right-6 flex flex-col gap-6 select-none z-0">
                <div class="flex flex-col items-center justify-center gap-1 w-20 cursor-pointer p-2 rounded hover:bg-black/20 transition-colors" ondblclick="document.getElementById('mac-finder').style.display='flex'; WindowManager.focusWindow('mac-finder');">
                    <i data-lucide="folder" class="text-blue-400 w-12 h-12 drop-shadow-md"></i>
                    <span class="text-xs text-white drop-shadow-md text-center leading-tight mt-1 bg-black/40 px-2 py-0.5 rounded-full">Files</span>
                </div>
            </div>

            <!-- Main Portfolio Window -->
            <div class="app-window hidden" id="mac-window">
                <div class="mac-titlebar cursor-grab active:cursor-grabbing select-none" id="mac-titlebar">
                    <div class="flex gap-2">
                        <div class="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-400 cursor-pointer mac-btn" title="Close" onclick="document.getElementById('mac-window').style.display='none'"></div>
                        <div class="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-400 cursor-pointer mac-btn" title="Minimize" onclick="document.getElementById('mac-window').style.display='none'"></div>
                        <div class="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-400 cursor-pointer mac-btn" title="Maximize" onclick="WindowManager.toggleMaximize('mac-window')"></div>
                    </div>
                    <div class="font-bold text-gray-300 text-xs flex-1 text-center pr-12">
                        Joseph_Portfolio
                    </div>
                </div>
                
                <div class="app-content relative bg-[#1e1e1e]">
                    ${contentHtml}
                </div>
            </div>

            <!-- Finder Window -->
            <div class="app-window" id="mac-finder" style="display: none; width: 700px; height: 450px; left: 50%; top: 50%; transform: translate(-50%, -50%);">
                <div class="mac-titlebar cursor-grab active:cursor-grabbing select-none bg-[#2d2d2d] border-b border-black/20" id="mac-finder-titlebar">
                    <div class="flex gap-2 w-20">
                        <div class="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-400 cursor-pointer mac-btn" onclick="document.getElementById('mac-finder').style.display='none'"></div>
                        <div class="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-400 cursor-pointer mac-btn" onclick="document.getElementById('mac-finder').style.display='none'"></div>
                        <div class="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-400 cursor-pointer mac-btn" onclick="WindowManager.toggleMaximize('mac-finder')"></div>
                    </div>
                    <div class="flex gap-4 items-center flex-1 ml-4 text-gray-400">
                        <i data-lucide="chevron-left" class="w-5 h-5 cursor-pointer hover:text-white"></i>
                        <i data-lucide="chevron-right" class="w-5 h-5 cursor-pointer opacity-50"></i>
                        <span class="font-bold text-sm text-gray-200 ml-2">Files</span>
                    </div>
                    <div class="flex items-center gap-3 text-gray-400 mr-2">
                        <i data-lucide="layout-grid" class="w-4 h-4 text-white"></i>
                        <i data-lucide="list" class="w-4 h-4 cursor-pointer hover:text-white"></i>
                        <div class="bg-black/20 rounded px-2 py-1 flex items-center gap-2 border border-white/10 ml-2">
                            <i data-lucide="search" class="w-3 h-3"></i>
                            <span class="text-xs w-24">Search</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 overflow-hidden bg-[#1e1e1e]">
                    <!-- Sidebar -->
                    <div class="w-44 bg-[#252525]/80 backdrop-blur-md border-r border-black/20 p-3 flex flex-col gap-1 select-none">
                        <div class="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 ml-2">Favorites</div>
                        <div class="flex items-center gap-2 px-2 py-1.5 rounded bg-blue-500/20 text-blue-400 text-xs font-medium cursor-pointer">
                            <i data-lucide="file" class="w-4 h-4"></i> Files
                        </div>
                        <div class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-gray-300 text-xs cursor-pointer transition-colors">
                            <i data-lucide="clock" class="w-4 h-4"></i> Recents
                        </div>
                        <div class="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 text-gray-300 text-xs cursor-pointer transition-colors">
                            <i data-lucide="download" class="w-4 h-4"></i> Downloads
                        </div>
                    </div>
                    <!-- Content -->
                    <div class="flex-1 p-6 relative">
                        <div class="flex flex-col items-center justify-center gap-2 w-28 cursor-pointer p-3 rounded-xl hover:bg-white/10 transition-colors" ondblclick="window.open('Joseph_Fabrizzio_CV.pdf', '_blank')">
                            <div class="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center relative border border-gray-200">
                                <i data-lucide="file-text" class="text-red-500 w-8 h-8"></i>
                                <div class="absolute bottom-1 right-2 text-[8px] font-bold text-gray-400">PDF</div>
                            </div>
                            <span class="text-xs text-gray-200 text-center leading-tight mt-1">CV_Joseph.pdf</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mac-dock">
                <div class="dock-icon" onclick="document.getElementById('mac-window').style.display='flex'; WindowManager.focusWindow('mac-window');"><i data-lucide="terminal-square" class="theme-text w-6 h-6"></i></div>
                <div class="dock-icon" onclick="window.open('https://www.linkedin.com/in/joseph-fabrizzio-hernandez-gonzalez-045b91270/', '_blank')"><i data-lucide="linkedin" class="text-blue-400 w-6 h-6"></i></div>
                <div class="dock-icon" onclick="document.getElementById('mac-finder').style.display='flex'; WindowManager.focusWindow('mac-finder');"><i data-lucide="folder" class="text-blue-500 w-6 h-6"></i></div>
                <div class="dock-icon" onclick="window.open('https://github.com/JFabrizzio5', '_blank')"><i data-lucide="github" class="text-gray-200 w-6 h-6"></i></div>
            </div>
        `;
    },

    init: function () {
        // Start dragging logic after render via WindowManager
        const win = document.getElementById('mac-window');
        const title = document.getElementById('mac-titlebar');
        const finderWin = document.getElementById('mac-finder');
        const finderTitle = document.getElementById('mac-finder-titlebar');

        // Show main portfolio window initially to avoid confusion
        if (win) win.style.display = 'flex';

        if (win && title) {
            WindowManager.makeDraggable('mac-window', win, title);
        }
        if (finderWin && finderTitle) {
            WindowManager.makeDraggable('mac-finder', finderWin, finderTitle);
        }
    }
};

window.MacOSComponent = MacOSComponent;
