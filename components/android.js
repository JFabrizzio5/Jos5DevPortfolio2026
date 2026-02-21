const AndroidComponent = {
    render: function (contentHtml) {
        return `
            <div class="app-window" id="android-window">
                <!-- Android Status Bar -->
                <div class="android-status-bar select-none">
                    <span id="android-time" class="text-xs font-medium">10:00</span>
                    <div class="flex items-center gap-1.5">
                        <i data-lucide="wifi" class="w-3 h-3"></i>
                        <i data-lucide="signal" class="w-3 h-3"></i>
                        <i data-lucide="battery-full" class="w-3 h-3"></i>
                    </div>
                </div>

                <!-- Main Content Area -->
                <div class="app-content relative bg-[#121212]">
                    ${contentHtml}
                </div>

                <!-- Android Navigation Bar (Bottom) -->
                <div class="android-nav-bar select-none">
                    <div class="nav-btn" onclick="window.shutdownOS()">
                        <div class="w-0 h-0 border-t-[6px] border-t-transparent border-r-[10px] border-r-gray-400 border-b-[6px] border-b-transparent"></div>
                    </div>
                    <div class="nav-btn" onclick="document.querySelector('.app-content').scrollTo({top: 0, behavior: 'smooth'})">
                        <div class="w-3 h-3 rounded-full border-2 border-gray-400"></div>
                    </div>
                    <div class="nav-btn" onclick="window.openLinkedIn()">
                        <div class="w-3 h-3 border-2 border-gray-400 rounded-sm"></div>
                    </div>
                </div>
            </div>
        `;
    },

    init: function () {
        // Android is typically a fixed screen size mimicking a phone/tablet, so dragging isn't as necessary 
        // however we allow it if they use a mouse on desktop for consistency.
        const win = document.getElementById('android-window');
        const title = document.querySelector('.android-status-bar');

        if (win && title) {
            WindowManager.makeDraggable('android-window', win, title);
        }
    }
};

window.AndroidComponent = AndroidComponent;
