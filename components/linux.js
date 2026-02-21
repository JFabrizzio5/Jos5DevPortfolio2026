const LinuxComponent = {
    render: function (contentHtml) {
        return `
            <!-- Exit Button -->
            <div class="fixed bottom-6 right-6 z-[200]">
                <button onclick="window.shutdownOS()" class="flex items-center gap-2 bg-red-900/80 hover:bg-red-800 text-white font-mono text-xs px-4 py-2 border border-red-500/50 rounded transition-colors shadow-lg shadow-red-900/20 backdrop-blur-sm">
                    <i data-lucide="power" class="w-4 h-4"></i> STARTX / EXIT
                </button>
            </div>

            <div class="absolute top-10 right-10 flex flex-col gap-6 select-none z-[100] group" id="linux-desktop-icons" style="opacity: 0; pointer-events: none; transition: opacity 0.5s ease;">
                <div class="flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors" onclick="window.open('Joseph_Fabrizzio_CV.pdf', '_blank')">
                    <div class="p-3 bg-zinc-800 border border-zinc-600 rounded-lg group-hover:bg-zinc-700 transition">
                        <i data-lucide="file-text" class="theme-text w-8 h-8 drop-shadow-md"></i>
                    </div>
                    <span class="text-xs text-zinc-400 group-hover:text-zinc-200 drop-shadow-md text-center leading-tight font-mono">CV_Joseph.pdf</span>
                </div>
            </div>

            <div class="app-window" id="linux-window">
                <!-- Linux Boot Console Layer -->
                <div id="linux-boot-layer" class="absolute inset-0 z-[150] bg-[#09090b] text-zinc-300 font-mono p-4 md:p-8 overflow-hidden flex flex-col transition-opacity duration-1000">
                    <!-- Htop Mockup -->
                    <div id="htop-mockup" class="w-full flex-1 flex flex-col font-mono">
                        <div class="flex gap-4 mb-2 text-[10px] md:text-sm">
                            <div class="flex-1 space-y-0.5">
                                <div class="flex"><span class="w-12 text-zinc-500">1</span> <span class="text-cyan-400 font-bold">[<span class="text-emerald-500">|||||||||||||||||||||||</span><span class="text-yellow-500">|||</span><span class="text-red-500">|</span>                     48.5%]</span></div>
                                <div class="flex"><span class="w-12 text-zinc-500">2</span> <span class="text-cyan-400 font-bold">[<span class="text-emerald-500">||||||||||</span><span class="text-yellow-500">|</span>                             18.2%]</span></div>
                                <div class="flex"><span class="w-12 text-zinc-500">3</span> <span class="text-emerald-400 font-bold">[<span class="text-emerald-500">||||||||||||||||||||||||||||||||</span><span class="text-yellow-500">||||</span>      65.1%]</span></div>
                                <div class="flex"><span class="w-12 text-zinc-500">4</span> <span class="text-cyan-400 font-bold">[<span class="text-emerald-500">||||</span>                                    05.4%]</span></div>
                                <div class="flex"><span class="w-12 text-zinc-500">Mem</span> <span class="text-cyan-400 font-bold">[<span class="text-emerald-500">||||||||||||||||||||||||</span><span class="text-yellow-500">||||||||||||||</span>   <span class="text-zinc-400 text-xs font-normal">8.42G/16.0G</span>]</span></div>
                                <div class="flex"><span class="w-12 text-zinc-500">Swp</span> <span class="text-cyan-400 font-bold">[<span class="text-red-500">||</span>                                      <span class="text-zinc-400 text-xs font-normal">120M/4.00G</span>]</span></div>
                            </div>
                            <div class="flex-1 space-y-0.5 text-xs text-zinc-400">
                                <div class="flex"><span class="w-16">Tasks:</span> 184, 115 thr; 2 running</div>
                                <div class="flex"><span class="w-16">Load:</span> 1.24 1.15 1.08</div>
                                <div class="flex"><span class="w-16">Uptime:</span> 124 days, 15:24:11</div>
                            </div>
                        </div>
                        <div class="flex text-black bg-emerald-500 font-bold px-2 py-0.5 mb-1 mt-2 text-[10px] md:text-sm">
                            <div class="w-10">PID</div><div class="w-16">USER</div><div class="w-8">PRI</div><div class="w-8">NI</div><div class="w-14">VIRT</div><div class="w-14">RES</div><div class="w-14">SHR</div><div class="w-6">S</div><div class="w-12">CPU%</div><div class="w-12">MEM%</div><div class="w-16 hidden md:block">TIME+</div><div class="flex-1">Command</div>
                        </div>
                        <div class="flex-1 overflow-hidden space-y-px text-[9px] md:text-xs text-zinc-400">
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">1</div><div class="w-16">root</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">168M</div><div class="w-14">11M</div><div class="w-14">8M</div><div class="w-6">S</div><div class="w-12">0.0</div><div class="w-12 text-zinc-300">0.1</div><div class="w-16 hidden md:block">0:03.14</div><div class="flex-1 text-white">/sbin/init</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">452</div><div class="w-16">root</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">2.1G</div><div class="w-14">256M</div><div class="w-14">120M</div><div class="w-6">S</div><div class="w-12">2.5</div><div class="w-12 text-zinc-300">1.6</div><div class="w-16 hidden md:block">1:42.50</div><div class="flex-1 text-white">/usr/bin/dockerd -H fd://</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">890</div><div class="w-16">root</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">1.5G</div><div class="w-14">180M</div><div class="w-14">90M</div><div class="w-6">S</div><div class="w-12">1.0</div><div class="w-12 text-zinc-300">1.1</div><div class="w-16 hidden md:block">0:15.22</div><div class="flex-1 text-white">containerd --config /var/run/containerd/</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">1024</div><div class="w-16 text-emerald-400">jos5</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">8.4G</div><div class="w-14">1.2G</div><div class="w-14">256M</div><div class="w-6">S</div><div class="w-12 text-emerald-400">15.4</div><div class="w-12 text-zinc-300">7.5</div><div class="w-16 border-r border-transparent hidden md:block">45:12.8</div><div class="flex-1 text-emerald-300 overflow-hidden text-ellipsis whitespace-nowrap">python3 -m uvicorn main:app --workers 4</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">1025</div><div class="w-16 text-emerald-400">jos5</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">1.1G</div><div class="w-14">80M</div><div class="w-14">40M</div><div class="w-6">S</div><div class="w-12 text-emerald-400">1.2</div><div class="w-12 text-zinc-300">0.5</div><div class="w-16 hidden md:block">2:10.00</div><div class="flex-1 text-white font-mono pl-2 overflow-hidden text-ellipsis whitespace-nowrap">\\_ python3 -m uvicorn main:app --workers 4</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">1500</div><div class="w-16">mysql</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">4.2G</div><div class="w-14">512M</div><div class="w-14">128M</div><div class="w-6">S</div><div class="w-12">0.2</div><div class="w-12 text-zinc-300">3.2</div><div class="w-16 hidden md:block">10:05.1</div><div class="flex-1 text-white">/usr/sbin/mysqld</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">2048</div><div class="w-16 text-emerald-400">jos5</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">1.2G</div><div class="w-14">128M</div><div class="w-14">64M</div><div class="w-6">S</div><div class="w-12">0.5</div><div class="w-12 text-zinc-300">0.8</div><div class="w-16 hidden md:block">0:50.99</div><div class="flex-1 text-white">php artisan horizon</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">2049</div><div class="w-16 text-emerald-400">jos5</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">800M</div><div class="w-14">64M</div><div class="w-14">32M</div><div class="w-6">S</div><div class="w-12">0.1</div><div class="w-12 text-zinc-300">0.4</div><div class="w-16 hidden md:block">0:12.44</div><div class="flex-1 text-white font-mono pl-2 overflow-hidden text-ellipsis whitespace-nowrap">\\_ /usr/bin/php8.2 artisan horizon</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">2900</div><div class="w-16 text-emerald-400">jos5</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">400M</div><div class="w-14">24M</div><div class="w-14">12M</div><div class="w-6">S</div><div class="w-12">0.0</div><div class="w-12 text-zinc-300">0.1</div><div class="w-16 hidden md:block">0:01.20</div><div class="flex-1 text-white">/bin/bash --login</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">3500</div><div class="w-16">redis</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">256M</div><div class="w-14">12M</div><div class="w-14">4M</div><div class="w-6">S</div><div class="w-12">0.3</div><div class="w-12 text-zinc-300">0.1</div><div class="w-16 hidden md:block">5:20.10</div><div class="flex-1 text-white">/usr/bin/redis-server 127.0.0.1:6379</div></div>
                            <div class="flex hover:bg-zinc-800 px-2 py-px"><div class="w-10">3601</div><div class="w-16">nginx</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">128M</div><div class="w-14">8M</div><div class="w-14">4M</div><div class="w-6">S</div><div class="w-12">0.0</div><div class="w-12 text-zinc-300">0.1</div><div class="w-16 hidden md:block">0:00.50</div><div class="flex-1 text-white overflow-hidden text-ellipsis whitespace-nowrap">nginx: master process /usr/sbin/nginx</div></div>
                            <div class="flex bg-emerald-500/20 px-2 py-px"><div class="w-10">4096</div><div class="w-16 text-emerald-400">jos5</div><div class="w-8">20</div><div class="w-8">0</div><div class="w-14">64M</div><div class="w-14">8M</div><div class="w-14">4M</div><div class="w-6">R</div><div class="w-12 text-red-400">99.9</div><div class="w-12 text-zinc-300">0.1</div><div class="w-16 border-r border-transparent hidden md:block">0:00.01</div><div class="flex-1 text-white">htop</div></div>
                        </div>
                    </div>
                    
                    <!-- Execution Console Mockup -->
                    <div id="exec-console" class="hidden w-full flex-1 flex flex-col font-mono text-sm md:text-base">
                        <div id="console-history" class="text-zinc-400 mb-2"></div>
                        <div class="flex items-center gap-2">
                            <span class="text-emerald-500 font-bold">root@jos5dev:~$</span>
                            <span id="console-cursor" class="text-white"></span><span class="w-2.5 h-5 bg-zinc-400 animate-pulse inline-block ml-1"></span>
                        </div>
                    </div>
                </div>

                <div class="app-content relative bg-[#09090b]" id="linux-portfolio-content" style="opacity: 0; pointer-events: none; transition: opacity 1s ease;">
                    ${contentHtml}
                </div>
            </div>
        `;
    },

    init: function () {
        const bootLayer = document.getElementById('linux-boot-layer');
        const htopMockup = document.getElementById('htop-mockup');
        const execConsole = document.getElementById('exec-console');
        const consoleCursor = document.getElementById('console-cursor');
        const content = document.getElementById('linux-portfolio-content');
        const desktopIcons = document.getElementById('linux-desktop-icons');

        if (!bootLayer || !htopMockup || !execConsole || !consoleCursor || !content) return;

        // Sequence: 1. htop (3s) -> 2. clear & write command -> 3. execute -> 4. fade to portfolio
        setTimeout(() => {
            const history = document.getElementById('console-history');

            htopMockup.style.display = 'none';
            execConsole.style.display = 'flex';

            // show the 'kill' command being entered to simulate closing htop and returning to prompt
            history.innerHTML += `<div class="text-zinc-500">[Process 'htop' terminated by signal SIGINT]</div>`;

            setTimeout(() => {
                const command = "python3 portfolio.py";
                let i = 0;

                function typeChar() {
                    if (i < command.length) {
                        consoleCursor.textContent += command.charAt(i);
                        i++;
                        // Delay between 60ms and 150ms for realistic typing
                        setTimeout(typeChar, 60 + (Math.random() * 90));
                    } else {
                        setTimeout(() => {
                            history.innerHTML += `<div class="flex items-center gap-2 mb-2"><span class="text-emerald-500 font-bold">root@jos5dev:~$</span><span class="text-white">${command}</span></div>`;
                            history.innerHTML += `<div class="text-zinc-300">Executing portfolio payload...</div>`;
                            consoleCursor.textContent = '';

                            setTimeout(() => {
                                history.innerHTML += `<div class="text-cyan-400">[OK] Components loaded. Rendering UI...</div>`;

                                setTimeout(() => {
                                    bootLayer.style.opacity = '0';
                                    setTimeout(() => {
                                        bootLayer.style.display = 'none';
                                        content.style.opacity = '1';
                                        content.style.pointerEvents = 'auto';
                                        if (desktopIcons) {
                                            desktopIcons.style.opacity = '1';
                                            desktopIcons.style.pointerEvents = 'auto';
                                        }
                                        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
                                    }, 1000);
                                }, 500);
                            }, 600);
                        }, 500);
                    }
                }
                typeChar(); // Start typing immediately after the 500ms htop clear delay
            }, 500);
        }, 3000);
    }
};

window.LinuxComponent = LinuxComponent;
