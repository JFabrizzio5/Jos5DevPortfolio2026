const BootComponent = {
    biosBoot: function (callback) {
        const container = document.createElement('div');
        container.id = 'bios-boot';
        container.className = 'fixed inset-0 z-[2000] bg-black text-gray-300 font-mono text-sm sm:text-base p-6 overflow-hidden select-none flex flex-col';
        document.body.appendChild(container);

        container.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="flex flex-col">
                    <div class="text-4xl sm:text-6xl font-bold text-white mb-4 tracking-widest border-b-4 border-white inline-block pb-2">Jos5Dev</div>
                    <div class="mt-4 break-words max-w-2xl text-lg sm:text-xl leading-relaxed text-gray-200 uppercase">
                        Excellence, creativity, leading teams, and building top-tier architecture IS THE BARE MINIMUM I DO.
                    </div>
                </div>
                <div class="hidden sm:block text-right">
                    <div class="text-yellow-500 font-bold mb-1">Energy</div>
                    <div class="text-xs">EPA POLLUTION PREVENTER</div>
                </div>
            </div>
            <div id="bios-lines" class="mt-12 flex flex-col gap-1"></div>
        `;

        const linesContainer = document.getElementById('bios-lines');

        const lines = [
            `Jos5Dev BIOS (C)2026 American Megatrends, Inc.`,
            `BIOS Date 10/24/26 10:00:00 Ver 08.00.15`,
            `CPU : Intel(R) Core(TM) i9 Architecture Processor`,
            `Speed : 5.00 GHz`,
            ``,
            `Press DEL to run Setup`,
            `Press F8 for BBS POPUP`,
            `Press ALT+F2 to execute EZ Flash 2`,
            `Initializing USB Controllers .. Done.`,
            `<span id="mem-test">64MB OK</span>`
        ];

        let i = 0;
        const lineInterval = setInterval(() => {
            if (i < lines.length) {
                const div = document.createElement('div');
                div.innerHTML = lines[i];
                linesContainer.appendChild(div);
                i++;
            } else {
                clearInterval(lineInterval);

                const memTest = document.getElementById('mem-test');
                let mem = 64;
                const memInterval = setInterval(() => {
                    mem += Math.floor(Math.random() * 32000);
                    if (mem >= 65536) {
                        mem = 65536;
                        clearInterval(memInterval);
                        memTest.innerText = `${mem}MB OK`;

                        setTimeout(() => linesContainer.innerHTML += `<div class="mt-4">Auto-Detecting Pri Master..IDE Hard Disk</div>`, 100);
                        setTimeout(() => linesContainer.innerHTML += `<div>Auto-Detecting Pri Slave...Not Detected</div>`, 200);
                        setTimeout(() => linesContainer.innerHTML += `<div class="mt-4">Booting from Hard Disk...</div>`, 300);

                        setTimeout(() => {
                            container.style.transition = 'opacity 0.2s';
                            container.style.opacity = '0';
                            setTimeout(() => {
                                container.remove();
                                callback();
                            }, 200);
                        }, 500);
                    } else {
                        memTest.innerText = `${mem}MB OK`;
                    }
                }, 10);
            }
        }, 30);
    },

    startSequence: function (osStyle, callback) {
        // Create an overlay div for the boot sequence
        const bootOverlay = document.createElement('div');
        bootOverlay.id = 'boot-overlay';
        bootOverlay.className = 'fixed inset-0 z-[1000] bg-black text-white font-mono text-sm p-4 overflow-hidden select-none flex flex-col justify-end';
        document.body.appendChild(bootOverlay);

        if (osStyle === 'windows') {
            this.windowsBoot(bootOverlay, callback);
        } else if (osStyle === 'mac') {
            this.macBoot(bootOverlay, callback);
        } else {
            this.linuxBoot(bootOverlay, callback);
        }
    },

    linuxBoot: function (container, callback) {
        container.innerHTML = `<div id="boot-lines" class="w-full flex-1 flex flex-col justify-end"></div>`;
        const textContainer = document.getElementById('boot-lines');

        const lines = [
            `Loading Linux 6.8.0-40-generic ...`,
            `Loading initial ramdisk ...`,
            `[    0.000000] Linux version 6.8.0-40-generic (buildd@lcy02-amd64-073) (x86_64-linux-gnu-gcc-13 (Ubuntu 13.2.0-23ubuntu4) 13.2.0, GNU ld (GNU Binutils for Ubuntu) 2.42)`,
            `[    0.000001] Command line: BOOT_IMAGE=/boot/vmlinuz-6.8.0-40-generic root=UUID=1234-5678 ro quiet splash`,
            `[    0.000002] KERNEL supported cpus:`,
            `[    0.000003]   Intel GenuineIntel`,
            `[    0.000004]   AMD AuthenticAMD`,
            `[    0.000005] x86/fpu: Supporting XSAVE feature 0x001: 'x87 floating point registers'`,
            `[    0.000006] x86/fpu: Supporting XSAVE feature 0x002: 'SSE registers'`,
            `[    0.050321] Initializing cgroup subsys cpuset`,
            `[    0.050325] Initializing cgroup subsys cpu`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Started Show Plymouth Boot Screen.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Reached target Paths.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Reached target Basic System.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Started D-Bus System Message Bus.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Started Network Manager.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Started WPA supplicant.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Started User Login Management.`,
            `[  <span class="text-green-500 font-bold">OK</span>  ] Started JOS5 Software Architecture Portfolio Services.`,
            `Starting Developer Environment...`
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < lines.length) {
                const p = document.createElement('div');
                p.innerHTML = lines[i];
                textContainer.appendChild(p);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    container.style.transition = 'opacity 0.3s';
                    container.style.opacity = '0';
                    setTimeout(() => {
                        container.remove();
                        callback();
                    }, 300);
                }, 200);
            }
        }, 15); // ultra fast scrolling text
    },

    macBoot: function (container, callback) {
        container.className = 'fixed inset-0 z-[1000] bg-black text-white flex flex-col items-center justify-center select-none';
        container.innerHTML = `
            <i data-lucide="apple" class="w-24 h-24 mb-16 text-white"></i>
            <div class="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
                <div id="mac-progress" class="h-full bg-white w-0 shadow-[0_0_10px_white]"></div>
            </div>
        `;
        // reinit lucide for the apple icon
        lucide.createIcons();

        const progress = document.getElementById('mac-progress');
        let width = 0;
        const interval = setInterval(() => {
            width += Math.random() * 40;
            if (width >= 100) {
                width = 100;
                clearInterval(interval);
                progress.style.width = '100%';
                setTimeout(() => {
                    container.style.transition = 'opacity 0.4s';
                    container.style.opacity = '0';
                    setTimeout(() => {
                        container.remove();
                        callback();
                    }, 400);
                }, 300);
            } else {
                progress.style.width = width + '%';
            }
        }, 50);
    },

    windowsBoot: function (container, callback) {
        container.className = 'fixed inset-0 z-[1000] bg-black text-white flex flex-col items-center justify-center select-none';
        container.innerHTML = `
            <div class="mb-16 grid grid-cols-2 gap-1 w-24 h-24">
                <div class="bg-[#00a4ef]"></div><div class="bg-[#00a4ef]"></div>
                <div class="bg-[#00a4ef]"></div><div class="bg-[#00a4ef]"></div>
            </div>
            <div class="flex gap-2 loader-dots">
                <div class="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style="animation-delay: 0.1s"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style="animation-delay: 0.3s"></div>
                <div class="w-1.5 h-1.5 rounded-full bg-white animate-bounce" style="animation-delay: 0.4s"></div>
            </div>
        `;

        setTimeout(() => {
            container.style.transition = 'opacity 0.4s';
            container.style.opacity = '0';
            setTimeout(() => {
                container.remove();
                callback();
            }, 400);
        }, 800);
    }
};

window.BootComponent = BootComponent;
