const PortfolioBuilder = {
    buildHTML: function (langConfig, th) {
        const t = langConfig;

        // --- 1. Navigation ---
        let navLinksHTML = '';
        let mobileMenuHTML = '';
        t.nav.forEach(link => {
            navLinksHTML += `<a href="${link.href}" class="text-sm text-zinc-400 transition-colors ${th.hover}">${link.name}</a>`;
            mobileMenuHTML += `<a href="${link.href}" class="text-zinc-300 text-sm py-2 flex items-center gap-2 ${th.hover}"><span class="${th.text}">➜</span> ${link.name}</a>`;
        });
        navLinksHTML += `<a href="tel:${portfolioData.profile.phone}" class="text-sm ${th.bg} ${th.text} border ${th.border} px-3 py-1.5 rounded-md transition-all flex items-center gap-2 ${th.borderHover}"><i data-lucide="phone" class="w-3.5 h-3.5"></i> ${t.footer.contact}</a>`;

        // --- 2. Experience ---
        let experienceHTML = '';
        t.experience.forEach((exp, index) => {
            const delay = (index + 1) * 100;
            const isEs = t.footer.call === 'LLAMAR'; // heuristic for language
            const logLines = exp.details.map(line => `
                <div class="flex items-start gap-3">
                    <span class="${th.text} shrink-0 font-bold">➜</span>
                    <span>${line}</span>
                </div>
            `).join('');

            experienceHTML += `
                <div class="glitch-item terminal-panel cursor-pointer group" data-delay="${delay}" onclick="this.classList.toggle('exp-expanded'); this.querySelector('.exp-content').classList.toggle('hidden'); this.querySelector('.exp-icon').classList.toggle('rotate-90');">
                    <div class="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div class="flex-1">
                            <div class="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                                <h3 class="text-lg font-bold text-white flex items-center gap-2">
                                    <span class="${th.text}">sudo</span> ${exp.role}
                                </h3>
                                <span class="hidden md:block text-zinc-700">|</span>
                                <span class="text-zinc-300 font-semibold text-sm bg-zinc-800/50 px-2.5 py-0.5 rounded border border-zinc-700">
                                    ${exp.company}
                                </span>
                            </div>
                            <p class="text-zinc-400 text-sm max-w-3xl">// ${exp.summary}</p>
                        </div>
                        <div class="flex items-center justify-between md:justify-end gap-6">
                            <div class="text-left md:text-right">
                                <div class="text-sm font-bold text-white">${exp.period}</div>
                                <div class="text-[11px] text-zinc-500 mt-1 uppercase">CONN: ${exp.mode}</div>
                            </div>
                            <div class="exp-icon w-8 h-8 rounded-full flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-400 transition-all duration-300 group-[.exp-expanded]:text-[var(--theme-hex-solid)] group-[.exp-expanded]:border-[var(--theme-hex-solid)]">
                                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div class="exp-content hidden px-5 pb-6 md:px-6">
                        <div class="bg-[#050505] rounded-lg border ${th.border} font-mono text-sm shadow-2xl overflow-hidden mt-4">
                            <div class="bg-zinc-950 px-4 py-2 flex items-center justify-between border-b ${th.border}">
                                <div class="flex gap-2 items-center">
                                    <div class="w-3 h-3 rounded-full bg-rose-500"></div>
                                    <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                                </div>
                                <div class="text-zinc-500 text-xs flex items-center gap-2">
                                    <i data-lucide="monitor-play" class="${th.text} w-3 h-3"></i> process_log.sh
                                </div>
                                <div class="w-12"></div>
                            </div>
                            <div class="p-5">
                                <div class="${th.text} mb-4 pb-2 flex items-center gap-2 border-b border-zinc-900">
                                    <i data-lucide="shield-check" class="w-4 h-4"></i> [ DAEMON_STARTED ]
                                </div>
                                <div class="text-zinc-300 leading-relaxed space-y-2">
                                    ${logLines}
                                    <div class="mt-6 flex items-start gap-3 text-white font-bold">
                                        <span class="shrink-0 ${th.text}">✔</span>
                                        <span>${isEs ? 'EJECUCIÓN FINALIZADA.' : 'EXECUTION FINISHED.'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // --- 3. Projects ---
        let projectsHTML = '';
        const coreProjects = [
            { id: 'cometax', title: 'Cometax_COMPANY', tags: ['SaaS', 'Consulting'], link: 'https://www.instagram.com/cometaxcompany/', ext: true },
            { id: 'rankit', title: 'Rankit.pro', tags: ['Laravel', '.NET', 'Python'], link: 'https://github.com/JFabrizzio5/RanKitLaravel', ext: false },
            { id: 'upiplanet', title: 'UpiPlanet.com', tags: ['Extensión', 'IA'], link: 'https://chromewebstore.google.com/detail/modsaes-open/ciakjkfldggpnfcoggkdmionbpbjmhhj', download: true },
            { id: 'egal', title: 'EGAL-IoT', tags: ['ESP32', 'FastAPI', 'React Native', 'MQTT', 'Docker'], link: 'https://github.com/JFabrizzio5/EGAL-INFORMATICA', doc: 'https://deepwiki.com/JFabrizzio5/EGAL-INFORMATICA' }
        ];

        coreProjects.forEach((p, idx) => {
            const data = t.projects[p.id];
            let headerAction = '';
            if (p.download) {
                headerAction = `<a href="${p.link}" target="_blank" class="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-bold px-3 py-1 rounded transition-colors ${th.borderHover} ${th.hover}"><i data-lucide="download" class="w-3.5 h-3.5"></i> 2000+ DLs</a>`;
            } else {
                let extraAction = '';
                if (p.doc) {
                    extraAction = `<a href="${p.doc}" target="_blank" class="text-zinc-500 hover:text-zinc-300 flex items-center gap-1 text-[11px] font-bold"><i data-lucide="external-link" class="w-3.5 h-3.5"></i> DOCS</a>`;
                }
                const btnIcon = p.ext ? 'external-link' : 'github';
                headerAction = `
                    <div class="flex items-center gap-3">
                        ${!p.doc ? `<span class="text-[10px] ${th.bg} ${th.text} border ${th.border} px-2 py-0.5 rounded-full font-bold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span> ONLINE</span>` : extraAction}
                        <a href="${p.link}" target="_blank" class="text-zinc-500 transition-colors ${th.hover}"><i data-lucide="${btnIcon}" class="w-4.5 h-4.5"></i></a>
                    </div>
                `;
            }

            const tagsHtml = p.tags.map(tag => `<span class="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 font-bold">${tag}</span>`).join('');

            projectsHTML += `
                <div class="glitch-item terminal-panel p-6 flex flex-col h-full group" data-delay="${(idx + 1) * 100}">
                    <div class="flex justify-between items-start mb-4">
                        <h3 class="text-xl font-bold text-white transition-colors ${th.hover}">${p.title}</h3>
                        ${headerAction}
                    </div>
                    <p class="${th.text} text-xs font-bold mb-3 font-mono">TYPE: ${p.id === 'cometax' ? 'Co-Founder' : p.id === 'rankit' ? 'Founder' : p.id === 'upiplanet' ? 'Platform & Extension' : 'Hybrid Architecture'}</p>
                    <p class="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">${data.desc}</p>
                    <div class="flex flex-wrap gap-2 mt-auto">
                        ${tagsHtml}
                    </div>
                </div>
            `;
        });

        // --- 4. Education ---
        let educationHTML = `
            <div class="terminal-panel p-6 md:p-8">
                <div class="text-zinc-500 mb-6 font-mono text-xs">// Result set: Academic Credentials</div>
                <div class="space-y-8 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-zinc-500/50 before:to-transparent">
                    
                    <div class="glitch-item relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group" data-delay="100">
                        <div class="flex items-center justify-center w-3 h-3 rounded-full bg-current ${th.text} border-4 border-[#09090b] shadow-[0_0_10px_current] flex-shrink-0 md:order-1 md:group-odd:-ml-1.5 md:group-even:-mr-1.5 z-10 mt-1.5 md:mt-0"></div>
                        <div class="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-4 md:ml-0 bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg transition-colors ${th.borderHover}">
                            <h4 class="font-bold text-white text-sm">CENEVAL LAW 286</h4>
                            <p class="${th.text} text-[10px] mb-2 font-mono">TIMESTAMP: 2025</p>
                            <p class="text-xs text-zinc-400 leading-relaxed">${t.education.ceneval}</p>
                        </div>
                    </div>

                    <div class="glitch-item relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group" data-delay="200">
                        <div class="flex items-center justify-center w-3 h-3 rounded-full bg-zinc-700 border-4 border-[#09090b] flex-shrink-0 md:order-1 md:group-odd:-ml-1.5 md:group-even:-mr-1.5 z-10 mt-1.5 md:mt-0 transition-colors ${th.text} group-hover:bg-current"></div>
                        <div class="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-4 md:ml-0 bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg transition-colors ${th.borderHover}">
                            <h4 class="font-bold text-white text-sm">IPN UPIICSA</h4>
                            <p class="text-zinc-500 text-[10px] mb-2 font-mono">TIMESTAMP: 2024 - 2025</p>
                            <p class="text-xs text-zinc-400 leading-relaxed">${t.education.ipn}</p>
                        </div>
                    </div>

                    <div class="glitch-item relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group" data-delay="300">
                        <div class="flex items-center justify-center w-3 h-3 rounded-full bg-zinc-700 border-4 border-[#09090b] flex-shrink-0 md:order-1 md:group-odd:-ml-1.5 md:group-even:-mr-1.5 z-10 mt-1.5 md:mt-0 transition-colors ${th.text} group-hover:bg-current"></div>
                        <div class="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-4 md:ml-0 bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg transition-colors ${th.borderHover}">
                            <h4 class="font-bold text-white text-sm">IPN CECYT 9</h4>
                            <p class="text-zinc-500 text-[10px] mb-2 font-mono">TIMESTAMP: 2020 - 2023</p>
                            <p class="text-xs text-zinc-400 leading-relaxed">${t.education.cecyt}</p>
                        </div>
                    </div>

                    <div class="glitch-item relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group" data-delay="400">
                        <div class="flex items-center justify-center w-3 h-3 rounded-full bg-zinc-700 border-4 border-[#09090b] flex-shrink-0 md:order-1 md:group-odd:-ml-1.5 md:group-even:-mr-1.5 z-10 mt-1.5 md:mt-0 transition-colors ${th.text} group-hover:bg-current"></div>
                        <div class="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-4 md:ml-0 bg-zinc-900/50 border border-zinc-800 p-4 rounded-lg transition-colors ${th.borderHover}">
                            <h4 class="font-bold text-white text-sm">EST 43</h4>
                            <p class="text-zinc-500 text-[10px] mb-2 font-mono">TIMESTAMP: 2018 - 2020</p>
                            <p class="text-xs text-zinc-400 leading-relaxed">${t.education.est43}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-4">
                <div class="text-zinc-500 mb-2 font-mono text-xs">// Result set: Awards & Recognitions</div>
                
                <div class="glitch-item terminal-panel p-6 flex gap-5 items-start" data-delay="200">
                    <div class="p-3 bg-zinc-900 rounded-lg border border-zinc-800 ${th.text}">
                        <i data-lucide="award" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-white mb-1">DonkPink Robotics</h4>
                        <p class="text-sm text-zinc-400 leading-relaxed">${t.education.robotics1}</p>
                    </div>
                </div>

                <div class="glitch-item terminal-panel p-6 flex gap-5 items-start" data-delay="300">
                    <div class="p-3 bg-zinc-900 rounded-lg border border-zinc-800 ${th.text}">
                        <i data-lucide="award" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-white mb-1">EST 43 Robotics</h4>
                        <p class="text-sm text-zinc-400 leading-relaxed">${t.education.robotics2}</p>
                    </div>
                </div>
            </div>
        `;

        // --- 5. Skills ---
        const backendSkills = ['Laravel', 'Livewire', 'PHP', 'Python', 'FastAPI', 'Django', 'Flask', 'Spring Boot', 'Kotlin', 'Node.js', 'JSP'];
        const cloudSkills = ['AWS', 'Docker', 'Kubernetes', 'Linux VPS', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Pandas', 'Jira', 'PowerBi', 'CI/CD'];
        const clientSkills = ['React Native', 'Vue', 'Angular', 'Typescript', 'Inertia', 'Tailwind', 'Bootstrap', 'jQuery', 'CSS', 'ESP32', 'NFC/QR', 'MQTT', 'WebSockets'];
        const enterpriseSkills = ['Liderazgo', 'Mentoría', 'Agile', 'Arquitectura', 'Resolución', 'Innovación', 'Marketing', 'Negociación'];

        const createSkillTags = (arr) => arr.map(s => `<span class="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 transition-colors cursor-default ${th.borderHover} ${th.hover}">${s}</span>`).join('');
        const createEntTags = (arr) => arr.map(s => `<span class="text-[11px] font-semibold text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">${s}</span>`).join('');

        let skillsHTML = `
            <div class="glitch-item terminal-panel p-6" data-delay="100">
                <h3 class="${th.text} font-bold mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3 text-sm">
                    <i data-lucide="server" class="w-4 h-4"></i> Backend_Core
                </h3>
                <div class="flex flex-wrap gap-2">
                    ${createSkillTags(backendSkills)}
                </div>
            </div>

            <div class="glitch-item terminal-panel p-6" data-delay="200">
                <h3 class="text-zinc-300 font-bold mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3 text-sm">
                    <i data-lucide="globe" class="${th.text} w-4 h-4"></i> Infra_Cloud
                </h3>
                <div class="flex flex-wrap gap-2">
                    ${createSkillTags(cloudSkills)}
                </div>
            </div>

            <div class="glitch-item terminal-panel p-6 flex flex-col" data-delay="300">
                <h3 class="text-zinc-300 font-bold mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3 text-sm">
                    <i data-lucide="layers" class="${th.text} w-4 h-4"></i> Client_IoT
                </h3>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${createSkillTags(clientSkills)}
                </div>

                <div class="mt-auto pt-4 border-t border-zinc-800 bg-[#000]/40 -mx-6 -mb-6 px-6 pb-6 rounded-b-xl">
                    <p class="text-[10px] font-bold ${th.text} mb-3 font-mono">export ENTERPRISE_SKILLS=</p>
                    <div class="flex flex-wrap gap-2">
                        ${createEntTags(enterpriseSkills)}
                    </div>
                </div>
            </div>
        `;

        // -- Construct Final Content HTML --
        return `
            <!-- CRT Effect overlay -->
            <div class="crt"></div>

            <!-- Linux Status Bar -->
            <div id="status-bar" class="fixed top-0 w-full z-50 bg-[#09090b]/95 border-b border-zinc-800/80 px-4 py-1.5 flex justify-between items-center text-[11px] font-medium text-zinc-500 backdrop-blur-md">
                <div class="flex items-center gap-4">
                    <span class="theme-text flex items-center gap-2 tracking-wider font-bold">
                        <i data-lucide="terminal-square" class="w-3 h-3"></i> JOS5_WORKSPACE_v6.0
                    </span>
                    <span class="hidden md:inline text-zinc-400">usr: root</span>
                    <span class="hidden md:inline text-zinc-400">env: production</span>
                </div>
                <div class="flex items-center gap-4">
                    <span class="hidden md:inline text-zinc-400">auth: verified</span>
                    <span class="text-white flex items-center gap-1">
                        <span class="w-1.5 h-1.5 rounded-full bg-current theme-text animate-pulse"></span>
                        SYS_ONLINE
                    </span>
                </div>
            </div>

            <!-- Main Navigation -->
            <nav id="main-nav" class="fixed top-7 w-full z-[100] bg-[#09090b]/80 border-b border-zinc-800/80 backdrop-blur-lg transition-all">
                <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#inicio" class="text-lg font-bold text-white transition-colors flex items-center gap-2 theme-hover">
                        <span class="theme-text">~/</span>JOS5DEV
                    </a>
                    <div class="hidden md:flex gap-6 items-center">${navLinksHTML}</div>
                    <button class="md:hidden theme-text" id="mobile-menu-btn"><i data-lucide="menu" class="w-6 h-6"></i></button>
                </div>
                <div id="mobile-menu" class="hidden md:hidden bg-[#09090b] border-b border-zinc-800 px-6 py-4 flex flex-col gap-2">
                    ${mobileMenuHTML}
                </div>
            </nav>

            <div class="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24 font-mono">

                <!-- HERO -->
                <header id="inicio" class="mb-32 scroll-mt-36">
                    <div class="grid md:grid-cols-12 gap-12 items-center">
                        <div class="md:col-span-8 order-2 md:order-1">
                            <div class="mb-6 font-mono text-xs space-y-1.5 h-16" id="boot-sequence">
                                <div class="text-zinc-500"><span class="${th.text}">❯</span> Initializing core architecture... <span class="text-zinc-300">[OK]</span></div>
                                <div class="text-zinc-500"><span class="${th.text}">❯</span> Loading microservices & cloud configs... <span class="text-zinc-300">[OK]</span></div>
                                <div class="text-zinc-500"><span class="${th.text}">❯</span> Resolving legacy technical debt... <span class="text-zinc-300">[SUCCESS]</span></div>
                                <div class="${th.text}"><span class="${th.text}">❯</span> System ready. Awaiting instructions.</div>
                            </div>
                            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-zinc-800/80 text-zinc-300 text-xs font-semibold mb-8 bg-zinc-900/30">
                                <i data-lucide="terminal" class="theme-text w-3.5 h-3.5"></i> ROLE="<span>${t.role}</span>"
                            </div>
                            <h1 class="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.15] mb-6">
                                ${t.heroTitle}<br />
                                <span><span class="theme-text text-glow-theme">${t.heroHighlight}<span class="blink theme-text">_</span></span></span>
                            </h1>
                            <div class="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
                                <span class="text-zinc-600 font-bold">/* </span>${t.heroDesc}<span class="text-zinc-600 font-bold"> */</span>
                            </div>
                            <div class="flex flex-wrap gap-4 font-bold text-sm">
                                <a href="#experiencia" class="flex items-center gap-2 theme-text !text-[#09090b] px-6 py-3 rounded-md transition-all hover:scale-105" style="background-color: var(--theme-hex-solid);">
                                    ${t.ctaStart} <i data-lucide="arrow-right" class="w-4 h-4"></i>
                                </a>
                                <a href="${portfolioData.profile.githubUrl}" target="_blank" rel="noreferrer" class="flex items-center gap-2 bg-transparent border border-zinc-700 text-zinc-300 px-6 py-3 rounded-md transition-all theme-border-hover theme-hover">
                                    git branch --all <i data-lucide="github" class="w-4.5 h-4.5"></i>
                                </a>
                            </div>
                        </div>
                        
                        <!-- Hero Image -->
                        <div class="md:col-span-4 order-1 md:order-2 flex justify-center md:justify-end">
                            <div class="glitch-item relative w-56 h-56 md:w-72 md:h-72 rounded-2xl p-[2px] overflow-hidden group" style="background: linear-gradient(to bottom right, var(--theme-hex-solid), rgba(0,0,0,1))">
                                <div class="absolute inset-[2px] bg-[#09090b] rounded-xl overflow-hidden">
                                    <img src="${portfolioData.profile.imageUrl}" alt="Profile" class="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#09090b]/80 backdrop-blur-md border border-zinc-800/80 text-[10px] px-3 py-1.5 rounded-full font-bold tracking-widest flex items-center gap-1.5">
                                        <div class="w-1.5 h-1.5 rounded-full bg-current theme-text animate-pulse"></div>
                                        <span class="theme-text">ID_VERIFIED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <!-- SYSTEM STATS -->
                <section class="mb-32">
                    <div class="text-zinc-500 mb-4 font-bold text-sm flex items-center gap-2"><span class="theme-text">➜</span> cat system_stats.json</div>
                    <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                        <div class="glitch-item md:col-span-2 terminal-panel p-6 flex flex-col justify-center relative overflow-hidden" data-delay="100">
                            <div class="absolute -right-4 -bottom-4 text-zinc-800/20 text-[120px] font-black pointer-events-none select-none">10</div>
                            <div class="relative z-10">
                                <div class="flex items-center gap-2 theme-text text-xs font-bold mb-4 theme-bg border theme-border w-max px-2.5 py-1 rounded-md">
                                    <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> SYSTEM_FOUNDATION
                                </div>
                                <h3 class="text-xl md:text-2xl font-bold text-white mb-2">${t.stats.title1}</h3>
                                <p class="text-zinc-400 text-sm leading-relaxed">${t.stats.desc1}</p>
                            </div>
                        </div>
                        <div class="glitch-item md:col-span-1 terminal-panel p-6 flex flex-col justify-center items-center text-center" data-delay="200">
                            <div class="text-4xl font-bold text-white mb-2 text-glow-theme">+6</div>
                            <div class="text-xs text-zinc-400 uppercase tracking-widest font-bold">${t.stats.yearsTitle}</div>
                            <div class="text-[10px] text-zinc-600 mt-2 font-mono">{ uptime }</div>
                        </div>
                        <div class="glitch-item md:col-span-1 terminal-panel p-6 flex flex-col justify-center items-center text-center" data-delay="300">
                            <div class="text-3xl md:text-4xl font-bold text-white mb-2">3,821</div>
                            <div class="text-xs text-zinc-400 uppercase tracking-widest font-bold">${t.stats.commitsTitle}</div>
                            <div class="text-[10px] theme-text mt-2 font-mono flex items-center gap-1">
                                <i data-lucide="git-commit" class="w-2.5 h-2.5"></i> 2025_record
                            </div>
                        </div>
                        <div class="glitch-item md:col-span-1 terminal-panel p-6 flex flex-col justify-center items-center text-center" data-delay="400">
                            <div class="text-4xl font-bold text-white mb-2">100%</div>
                            <div class="text-xs text-zinc-400 uppercase tracking-widest font-bold">${t.stats.uptimeTitle}</div>
                            <div class="text-[10px] text-zinc-600 mt-2 font-mono">{ migrations }</div>
                        </div>
                    </div>
                </section>

                <!-- EXPERIENCE LOGS -->
                <section id="experiencia" class="mb-32 scroll-mt-36">
                    <div class="glitch-item flex items-center gap-4 mb-8">
                        <div class="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800"><i data-lucide="terminal-square" class="theme-text w-6 h-6"></i></div>
                        <div>
                            <h2 class="text-2xl font-bold text-white">${t.sections.exp}</h2><p class="text-zinc-500 text-xs font-mono">/var/log/professional_journey</p>
                        </div>
                    </div>
                    <div class="space-y-4">${experienceHTML}</div>
                </section>
                
                <!-- PROJECTS -->
                <section id="proyectos" class="mb-32 scroll-mt-36">
                    <div class="glitch-item flex items-center gap-4 mb-8">
                        <div class="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800"><i data-lucide="cpu" class="text-zinc-300 w-6 h-6"></i></div>
                        <div>
                            <h2 class="text-2xl font-bold text-white">${t.sections.proj}</h2><p class="text-zinc-500 text-xs font-mono">./bin/projects/start</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-5">${projectsHTML}</div>
                </section>

                <!-- EDUCATION -->
                <section id="educacion" class="mb-32 scroll-mt-36">
                    <div class="glitch-item flex items-center gap-4 mb-8">
                        <div class="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800"><i data-lucide="database" class="theme-text w-6 h-6"></i></div>
                        <div>
                            <h2 class="text-2xl font-bold text-white">${t.sections.edu}</h2><p class="text-zinc-500 text-xs font-mono">Querying academic & awards records...</p>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-6">${educationHTML}</div>
                </section>
                
                <!-- SKILLS -->
                <section id="skills" class="mb-24 scroll-mt-36">
                    <div class="glitch-item flex items-center gap-4 mb-8">
                        <div class="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800"><i data-lucide="code-2" class="theme-text w-6 h-6"></i></div>
                        <div>
                            <h2 class="text-2xl font-bold text-white">${t.sections.skills}</h2><p class="text-zinc-500 text-xs font-mono">Tech stack & competencies</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">${skillsHTML}</div>
                </section>

                <!-- FOOTER -->
                <footer class="mt-20 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 pb-8">
                    <div class="text-zinc-600 text-xs flex items-center gap-2 font-mono">
                        <span class="theme-text">~/jos5dev</span> $ exit
                        <span class="w-2 h-3 bg-current theme-text blink block"></span>
                    </div>
                    <div class="flex gap-6 items-center">
                        <a href="tel:${portfolioData.profile.phone}" class="text-zinc-500 transition-colors flex items-center gap-1.5 text-xs font-semibold theme-hover">
                            <i data-lucide="phone" class="w-3.5 h-3.5"></i> <span>${t.footer.call}</span>
                        </a>
                        <div class="w-px h-4 bg-zinc-800 hidden md:block"></div>
                        <a href="${portfolioData.profile.githubUrl}" target="_blank" rel="noreferrer" class="text-zinc-500 hover:text-white transition-colors">
                            <i data-lucide="github" class="w-4.5 h-4.5"></i>
                        </a>
                        <a href="${portfolioData.profile.website}" target="_blank" rel="noreferrer" class="text-zinc-500 transition-colors theme-hover">
                            <i data-lucide="globe" class="w-4.5 h-4.5"></i>
                        </a>
                        <a href="mailto:${portfolioData.profile.email}" class="text-zinc-500 transition-colors theme-hover">
                            <i data-lucide="mail" class="w-4.5 h-4.5"></i>
                        </a>
                    </div>
                </footer>
            </div>
        `;
    }
};

window.PortfolioBuilder = PortfolioBuilder;
