document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------------------------
    // 1. STATE & CONFIGURATION
    // ----------------------------------------------------------------------
    let currentConfig = { ...portfolioData.config };
    window.currentConfig = currentConfig;
    let typeWriterTimeout = null;

    // Setup initial icons
    lucide.createIcons();

    // ----------------------------------------------------------------------
    // 2. DOM ELEMENTS - SETUP SCREEN
    // ----------------------------------------------------------------------
    const setupScreen = document.getElementById('setup-screen');
    const rootLayout = document.getElementById('root-layout');
    const btnBoot = document.getElementById('btn-boot');
    const btnRandomTheme = document.getElementById('btn-random-theme');
    const customColorPicker = document.getElementById('custom-color-picker');
    const customColorWrapper = document.getElementById('custom-color-wrapper');
    const themeToggleBtn = document.getElementById('setup-theme-toggle');
    const themeIcon = document.getElementById('setup-theme-icon');

    // Instantly hide the setup screen so the BIOS boot can play cleanly
    setupScreen.style.display = 'none';
    setupScreen.classList.remove('transition-opacity', 'duration-500');

    // Run the BIOS boot sequence before showing anything
    BootComponent.biosBoot(() => {
        setupScreen.style.display = 'flex';
        setupScreen.classList.add('transition-opacity', 'duration-500', 'opacity-0');

        // Trigger reflow so the browser picks up the class addition
        void setupScreen.offsetWidth;

        setupScreen.classList.remove('opacity-0');
    });

    // Setting up Event Listeners for Config Buttons
    document.querySelectorAll('.config-lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.target.closest('button') || e.currentTarget;
            if (!btnEl) return;
            updateConfig('lang', btnEl.dataset.val);
            startTypewriter(btnEl.dataset.val);
        });
    });

    // Theme Dark/Light Mode
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
            lucide.createIcons();
        });
    }

    // Initialize enhancements
    startTypewriter(currentConfig.lang);
    fetchSetupWeather();

    document.querySelectorAll('.config-os-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.target.closest('button') || e.currentTarget;
            if (!btnEl) return;
            updateConfig('osStyle', btnEl.dataset.val);
        });
    });

    document.querySelectorAll('.config-theme-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const btnEl = e.target.closest('button') || e.currentTarget;
            if (!btnEl) return;
            updateConfig('theme', btnEl.dataset.val);
        });
    });

    btnRandomTheme.addEventListener('click', () => {
        const themes = Object.keys(portfolioData.themePalette).filter(t => t !== 'custom');
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        updateConfig('theme', randomTheme);
    });

    if (customColorPicker) {
        customColorPicker.addEventListener('input', (e) => {
            const hex = e.target.value;
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);

            portfolioData.themePalette['custom'] = {
                id: 'custom',
                name: 'Custom',
                text: 'theme-text-custom',
                textGlow: 'text-glow-custom',
                bg: 'theme-bg-custom',
                border: 'theme-border-custom',
                borderHover: 'theme-border-hover-custom',
                hover: 'theme-hover-custom',
                hex: `rgba(${r}, ${g}, ${b}, 0.4)`
            };

            let styleTag = document.getElementById('custom-theme-style');
            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = 'custom-theme-style';
                document.head.appendChild(styleTag);
            }
            styleTag.innerHTML = `
                .theme-text-custom { color: rgba(${r}, ${g}, ${b}, 1) !important; }
                .text-glow-custom { text-shadow: 0 0 10px rgba(${r}, ${g}, ${b}, 0.8) !important; }
                .theme-bg-custom { background-color: rgba(${r}, ${g}, ${b}, 0.1) !important; }
                .theme-border-custom { border-color: rgba(${r}, ${g}, ${b}, 0.3) !important; }
                .theme-border-hover-custom:hover { border-color: rgba(${r}, ${g}, ${b}, 0.5) !important; }
                .theme-hover-custom:hover { color: rgba(${r}, ${g}, ${b}, 1) !important; }
            `;

            updateConfig('theme', 'custom');
        });
    }

    // ----------------------------------------------------------------------
    // 3. CONFIGURATION LOGIC
    // ----------------------------------------------------------------------
    function updateConfig(key, value) {
        currentConfig[key] = value;
        window.currentConfig = currentConfig;
        renderSetupUI();
    }

    function renderSetupUI() {
        // Update Language Buttons
        document.querySelectorAll('.config-lang-btn').forEach(btn => {
            btn.dataset.selected = btn.dataset.val === currentConfig.lang ? "true" : "false";
        });

        // Update OS Buttons
        document.querySelectorAll('.config-os-btn').forEach(btn => {
            btn.dataset.selected = btn.dataset.val === currentConfig.osStyle ? "true" : "false";
        });

        // Update Theme Buttons
        document.querySelectorAll('.config-theme-btn').forEach(btn => {
            const themeData = portfolioData.themePalette[btn.dataset.val];
            if (!themeData) return;
            const solidColor = themeData.hex.replace('0.4', '1');
            btn.style.backgroundColor = solidColor;

            btn.dataset.selected = btn.dataset.val === currentConfig.theme ? "true" : "false";
        });

        if (customColorWrapper) {
            customColorWrapper.dataset.selected = currentConfig.theme === 'custom' ? "true" : "false";
        }

        // Update Boot Button Color
        const th = portfolioData.themePalette[currentConfig.theme];
        const solidColorSelected = th.hex.replace('0.4', '1');
        btnBoot.style.backgroundColor = solidColorSelected;
        btnBoot.style.color = currentConfig.theme === 'amber' || currentConfig.theme === 'cyan' || currentConfig.theme === 'emerald' ? '#000' : '#fff';

        const setupIcon = document.getElementById('setup-icon');
        if (setupIcon) {
            setupIcon.style.color = solidColorSelected;
        }
    }

    renderSetupUI();

    // ----------------------------------------------------------------------
    // 4. BOOTING SYSTEM
    // ----------------------------------------------------------------------
    btnBoot.addEventListener('click', () => {
        setupScreen.classList.add('opacity-0', 'pointer-events-none');

        // Let the setup screen fade out
        setTimeout(() => {
            setupScreen.style.display = 'none';
            // Start the modular boot sequence
            BootComponent.startSequence(currentConfig.osStyle, () => {
                // Boot complete callback
                initPortfolio();
            });
        }, 500);
    });

    // ----------------------------------------------------------------------
    // 5. MODULAR PORTFOLIO INITIALIZATION
    // ----------------------------------------------------------------------
    function initPortfolio() {
        const th = portfolioData.themePalette[currentConfig.theme];
        const t = portfolioData.translations[currentConfig.lang];

        // 5.1 System Level Overrides
        document.documentElement.style.setProperty('--theme-hex', th.hex);
        document.documentElement.style.setProperty('--theme-hex-solid', th.hex.replace('0.4', '1'));
        document.body.className = `os-${currentConfig.osStyle}`;

        // 5.2 Render Content Template via PortfolioBuilder
        const innerContentHtml = PortfolioBuilder.buildHTML(t, th);

        // 5.3 Wrap Content in OS specifics
        let finalHtml = '';
        if (currentConfig.osStyle === 'mac') {
            finalHtml = MacOSComponent.render(innerContentHtml);
        } else if (currentConfig.osStyle === 'windows') {
            finalHtml = Windows11Component.render(innerContentHtml);
        } else {
            finalHtml = LinuxComponent.render(innerContentHtml);
        }


        rootLayout.innerHTML = finalHtml;
        rootLayout.classList.remove('hidden');
        rootLayout.style.display = 'flex'; // windows and mac need flex to align items usually

        // 5.4 Initialize OS Specific Listeners (Dragging, Window Resizing)
        if (currentConfig.osStyle === 'mac') {
            MacOSComponent.init();
        } else if (currentConfig.osStyle === 'windows') {
            Windows11Component.init();
        } else {
            LinuxComponent.init();
        }

        // 5.5 Shared Post-Render logic (Observers and Icons)
        initIntersectionObserver();
        lucide.createIcons();
        startOSTimeLoop();

        // 5.6 Mobile Menu Toggles
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
            mobileMenu.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
            });
        }
    }

    // ----------------------------------------------------------------------
    // 6. SHARED UTILITIES & OS FUNCTIONS
    // ----------------------------------------------------------------------
    window.shutdownOS = function () {
        // Fade out current OS
        rootLayout.style.opacity = '0';
        rootLayout.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            rootLayout.innerHTML = '';
            rootLayout.classList.add('hidden');
            rootLayout.style.display = 'none';
            rootLayout.style.opacity = '1';
            document.body.className = ''; // Remove OS specific classes to clear backgrounds

            // Fade in setup screen
            setupScreen.style.display = 'flex';
            setupScreen.classList.add('opacity-0');
            setupScreen.classList.remove('pointer-events-none');
            void setupScreen.offsetWidth; // trigger reflow
            setupScreen.classList.remove('opacity-0');
        }, 500);
    };

    window.openLinkedIn = function () {
        window.open('https://www.linkedin.com/in/joseph-fabrizzio-hernandez-gonzalez-045b91270/', '_blank');
    };

    // ----------------------------------------------------------------------
    // 7. SETUP SCREEN ENHANCEMENTS (Weather & Typewriter)
    // ----------------------------------------------------------------------
    function startTypewriter(lang) {
        const isSpanish = (lang === 'es');
        const storyTitle = isSpanish ? "Hola, soy Joseph." : "Hi, I'm Joseph.";
        const storyBody = isSpanish ?
            "Conmigo no contratas a un simple desarrollador; integras un ecosistema tecnológico. Programo desde los 10 años y llevo más de 6 años como profesional, Arquitecto y Líder Tecnológico. Mi objetivo es mejorar el mundo y aportar valor real a tu empresa.<br><br>Sé que tu tiempo es valioso: CRUZA EL PORTAL SELECCIONANDO UN SISTEMA OPERATIVO ABAJO." :
            "You don't just hire a developer; you integrate a tech ecosystem. I've been coding since age 10 with over 6 years as a professional, Architect, and Tech Lead. My goal is to improve the world and add real value to your company.<br><br>I know your time is valuable: CROSS THE PORTAL BY SELECTING AN OS BELOW.";

        const titleEl = document.getElementById('setup-typewriter-title');
        const bodyEl = document.getElementById('setup-typewriter-body');

        if (titleEl && bodyEl) {
            clearTimeout(typeWriterTimeout);
            titleEl.innerHTML = '';
            bodyEl.innerHTML = '';

            typewriterEffect(titleEl, storyTitle, 40, () => {
                typeWriterTimeout = setTimeout(() => {
                    typewriterEffect(bodyEl, storyBody, 15);
                }, 400);
            });
        }
    }

    function typewriterEffect(element, text, speed, callback) {
        let i = 0;
        element.innerHTML = '';

        // Handle explicit html breaks
        const isHtml = text.includes('<br>');
        let safeText = text;

        function typeWriter() {
            if (isHtml) {
                // simple hack for handling <br> when doing char by char
                if (safeText.substring(i, i + 4) === '<br>') {
                    element.innerHTML += '<br>';
                    i += 4;
                } else {
                    element.innerHTML += safeText.charAt(i);
                    i++;
                }
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }

            if (i < text.length) {
                typeWriterTimeout = setTimeout(typeWriter, speed);
            } else if (callback) {
                callback();
            }
        }
        typeWriter();
    }

    async function fetchSetupWeather() {
        try {
            const locRes = await fetch('https://get.geojs.io/v1/ip/geo.json');
            const locData = await locRes.json();
            const city = locData.city || 'Unknown';

            const weatherRes = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
            const weatherData = await weatherRes.json();

            const temp = weatherData.current_condition[0].temp_C;
            const desc = weatherData.current_condition[0].weatherDesc[0].value;

            const cityEl = document.getElementById('setup-weather-city');
            const tempEl = document.getElementById('setup-weather-temp');
            const descEl = document.getElementById('setup-weather-desc');
            const dateEl = document.getElementById('setup-widget-date');

            if (cityEl) cityEl.innerText = city;
            if (tempEl) tempEl.innerText = `${temp}°C`;
            if (descEl) descEl.innerText = desc;
            if (dateEl) {
                const d = new Date();
                dateEl.innerText = d.toLocaleDateString();
            }

        } catch (error) {
            console.error("Failed to fetch weather", error);
            const cityEl = document.getElementById('setup-weather-city');
            if (cityEl) cityEl.innerText = "Offline";
        }
    }

    function initIntersectionObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.glitch-item').forEach(item => {
            observer.observe(item);
        });
    }

    function startOSTimeLoop() {
        function update() {
            const date = new Date();
            const timeStr = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            const dateStr = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
            const shortDay = date.toLocaleDateString('en-US', { weekday: 'short' });

            try { document.getElementById('mac-time').innerText = `${shortDay} ${timeStr}`; } catch (e) { }
            try { document.getElementById('win-time').innerText = timeStr; } catch (e) { }
            try { document.getElementById('win-date').innerText = dateStr; } catch (e) { }
        }
        update();
        setInterval(update, 1000);
    }
});
