const portfolioData = {
    // Current Global Configurations
    config: {
        lang: 'en', // Default language: 'en' or 'es'
        theme: 'cyan', // Default UI Accent: 'cyan', 'emerald', 'purple', 'amber', 'rose'
        osStyle: 'linux' // Default OS Style: 'mac', 'windows', 'linux'
    },

    // Theme Colors
    themePalette: {
        cyan: { id: 'cyan', name: 'Cyan', text: 'text-cyan-400', textGlow: 'text-glow-cyan', bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', borderHover: 'hover:border-cyan-500/50', hover: 'hover:text-cyan-400', hex: 'rgba(34, 211, 238, 0.4)' },
        emerald: { id: 'emerald', name: 'Emerald', text: 'text-emerald-400', textGlow: 'text-glow-emerald', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', borderHover: 'hover:border-emerald-500/50', hover: 'hover:text-emerald-400', hex: 'rgba(52, 211, 153, 0.4)' },
        purple: { id: 'purple', name: 'Purple', text: 'text-purple-400', textGlow: 'text-glow-purple', bg: 'bg-purple-500/10', border: 'border-purple-500/30', borderHover: 'hover:border-purple-500/50', hover: 'hover:text-purple-400', hex: 'rgba(192, 132, 252, 0.4)' },
        amber: { id: 'amber', name: 'Amber', text: 'text-amber-400', textGlow: 'text-glow-amber', bg: 'bg-amber-500/10', border: 'border-amber-500/30', borderHover: 'hover:border-amber-500/50', hover: 'hover:text-amber-400', hex: 'rgba(251, 191, 36, 0.4)' },
        rose: { id: 'rose', name: 'Rose', text: 'text-rose-400', textGlow: 'text-glow-rose', bg: 'bg-rose-500/10', border: 'border-rose-500/30', borderHover: 'hover:border-rose-500/50', hover: 'hover:text-rose-400', hex: 'rgba(251, 113, 133, 0.4)' }
    },

    // Profile Details
    profile: {
        imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQE8S7kVKvRzwQ/profile-displayphoto-scale_200_200/B4EZg0PDAsGYAY-/0/1753223017912?e=1773273600&v=beta&t=8TSRZ3AKA9KPPSipXr9IGA-1QrkHTANbEVTL5hGXbY4",
        githubUrl: "https://github.com/JFabrizzio5",
        phone: "+525583837450",
        website: "https://www.jos5dev.com",
        email: "Josephfabrizziocorreo@gmail.com",
        version: "v6.0.2"
    },

    // Translations
    translations: {
        es: {
            nav: [
                { name: '~/experiencia', href: '#experiencia' },
                { name: '~/proyectos', href: '#proyectos' },
                { name: '~/educacion', href: '#educacion' },
                { name: '~/skills', href: '#skills' },
            ],
            role: 'LEAD_SOFTWARE_ARCHITECT',
            heroTitle: 'Planeo, rescato y construyo',
            heroHighlight: 'arquitecturas seguras.',
            heroDesc: 'Conmigo no contratas a un simple desarrollador; integras todo un ecosistema tecnológico adaptado a tus necesidades corporativas. Mi viaje comenzó de forma autodidacta en 2016 hasta consolidarme como Arquitecto de Software y Líder Técnico (AWS, Laravel, Python). Desde rescatar sistemas heredados críticos sin código fuente, hasta fundar soluciones SaaS y diseñar arquitecturas Multi-tenant para millones de transacciones, transformo problemas complejos en ingeniería pura.',
            ctaStart: './iniciar_sistema',
            stats: {
                title1: 'Programando desde los 10 años.',
                desc1: 'Más de la mitad de mi vida escribiendo código. La arquitectura de software no es un trabajo, es la estructuración lógica que rige mi pensamiento.',
                yearsTitle: 'Años Exp.',
                commitsTitle: 'Commits',
                uptimeTitle: 'Uptime'
            },
            sections: {
                exp: 'Experience.log',
                proj: 'Active_Daemons.sh',
                edu: 'SELECT * FROM EDUCATION;',
                skills: 'Skills_Matrix.yml'
            },
            experience: [
                {
                    id: 'puntozip', role: 'Sr Software Engineer / Consultor', company: 'PuntoZip Software Consulting', period: 'Ene 2025 — Pres.', mode: 'Remoto Global',
                    summary: 'Rescate crítico de arquitectura e infraestructura Cloud para empresas internacionales.',
                    details: [
                        'Ejecutando script de rescate: PuntoZip Software Consulting...',
                        'Rescaté a una empresa de seguros de vida migrando sistemas legacy VB.NET 2 a AWS sin el código base original.',
                        'Actualicé servicios legacy PHP Laravel a arquitecturas modernas con Vue y MySQL.',
                        'Migré microservicios de pago garantizando 100% de uptime (Zero Disruption).',
                        'Capacité equipos de ingeniería en Laravel-Inertia, Python, FastAPI y despliegues AWS (100% efectividad).',
                        'Diseñé procesos de documentación bajo normativas de cumplimiento ISO para clientes internacionales.'
                    ]
                },
                {
                    id: 'jmb-p2', role: 'Lead Software Architect', company: 'JMB Accountants & Consulting', period: '2023 — Presente', mode: 'Híbrido CDMX',
                    summary: 'Diseño de arquitectura Multi-tenant, microservicios y gestión de presupuestos millonarios.',
                    details: [
                        'Lideré la migración total de un monolito Laravel a una arquitectura multi-tenant y multi-servicio.',
                        'Diseñé e implementé un sistema de transacciones 100% auditable para asegurar el cumplimiento fiscal.',
                        'Desarrollé planes de contingencia y disaster recovery, incrementando la resiliencia del negocio.',
                        'Implementé Redis caching, Redis Streams (Pub/Sub) y WebSockets para reducir latencia masivamente.',
                        'Apliqué principios de Screaming Architecture, desplegando Docker y microservicios en VPS Linux desde cero.'
                    ]
                },
                {
                    id: 'jmb-p1', role: 'Software Engineer', company: 'JMB Accountants & Consulting', period: '2023', mode: 'Híbrido CDMX',
                    summary: 'Desarrollo Core en monolito Laravel para automatización fiscal.',
                    details: [
                        'Desarrollé y mantuve un monolito Laravel + Livewire + MongoDB gestionando módulos core.',
                        'Construí módulos para análisis de facturas XML y automaticé integraciones con los web services del SAT.',
                        'Preparé el sistema completo para su futura migración a arquitectura escalable multi-tenant.'
                    ]
                },
                {
                    id: 'freelance', role: 'Freelance Software Engineer', company: 'Independiente', period: '2020 — 2023', mode: 'Remoto',
                    summary: 'Desarrollo de soluciones a medida, forjando bases sólidas en arquitectura.',
                    details: [
                        'Desarrollé software y soluciones a medida para diversas compañías y clientes independientes.',
                        'Diseñé modelos de bases de datos e implementé APIs RESTful adaptadas a reglas de negocio complejas.',
                        'Desplegué aplicaciones web en la nube, forjando los cimientos técnicos de mis arquitecturas actuales.'
                    ]
                }
            ],
            projects: {
                cometax: { desc: 'Fundando una empresa SaaS en modo Stealth. Diseñando estrategia de producto, frameworks internos y arquitecturas de software hiper-escalables para entornos empresariales.' },
                rankit: { desc: 'Plataforma SaaS para gestión de torneos eSports. Integraciones con OBS automatizando registros, horarios y puntajes en vivo para torneos de Fortnite.<br><br><a href="https://github.com/JFabrizzio5/RanKitLaravel" target="_blank" class="text-blue-400 hover:underline">RanKitLaravel</a> | <a href="https://github.com/JFabrizzio5/Rankit-.Net-" target="_blank" class="text-blue-400 hover:underline">Rankit-.Net</a> | <a href="https://github.com/JFabrizzio5/RanKiT-visibility-tracker-Python" target="_blank" class="text-blue-400 hover:underline">RanKiT-visibility-tracker-Python</a> | <a href="https://rankit.pro" target="_blank" class="text-blue-400 hover:underline">Rankit.pro</a>' },
                upiplanet: { desc: 'Plataforma escolar para automatizar horarios/tareas vía IA. Extensiones de Chrome para productividad estudiantil (+2000 descargas comprobadas).<br><br><a href="https://chromewebstore.google.com/detail/modsaes-open/ciakjkfldggpnfcoggkdmionbpbjmhhj" target="_blank" class="text-blue-400 hover:underline">Chrome Extension</a> | <a href="https://upiplanet.com" target="_blank" class="text-blue-400 hover:underline">UpiPlanet.com</a>' },
                egal: { desc: 'Sistema IoT de acceso para hoteles de lujo. Hardware ESP32 para cerraduras, backend FastAPI (JWT, WebSockets), y App React Native con NFC/QR para Check-in sin contacto.<br><br><a href="https://github.com/JFabrizzio5/EGAL-INFORMATICA" target="_blank" class="text-blue-400 hover:underline">GitHub</a> | <a href="https://deepwiki.com/JFabrizzio5/EGAL-INFORMATICA" target="_blank" class="text-blue-400 hover:underline">AI Auto Doc</a>' }
            },
            education: {
                ceneval: 'Acreditación mediante programa de experiencia profesional probada.',
                ipn: 'Ingeniería en Informática.',
                cecyt: 'Técnico en Programación.',
                est43: 'Técnico en Electrónica y Sistemas de Control.',
                robotics1: 'Reconocimiento destacado en competiciones estatales y nacionales de robótica avanzada.',
                robotics2: 'Posicionado en 3er y 4to lugar en la competencia nacional de robots Minisumo (2018-2020).'
            },
            footer: { call: 'LLAMAR', contact: 'Contacto' },
            osOptions: {
                linux: 'Linux Console',
                mac: 'macOS UI',
                windows: 'Windows 11'
            },
            setupTitle: 'CONFIGURACIÓN DE ENTORNO'
        },
        en: {
            nav: [
                { name: '~/experience', href: '#experiencia' },
                { name: '~/projects', href: '#proyectos' },
                { name: '~/education', href: '#educacion' },
                { name: '~/skills', href: '#skills' },
            ],
            role: 'LEAD_SOFTWARE_ARCHITECT',
            heroTitle: 'I plan, rescue, and build',
            heroHighlight: 'secure architectures.',
            heroDesc: "With me, you don't just hire a simple developer; you integrate an entire technological ecosystem tailored to your enterprise needs. My journey started auto-didactically in 2016, evolving into a Software Architect and Tech Lead (AWS, Laravel, Python). From rescuing critical legacy systems without source code, to founding SaaS solutions and designing Multi-tenant architectures for millions of transactions, I transform complex problems into pure engineering.",
            ctaStart: './boot_system',
            stats: {
                title1: 'Coding since age 10.',
                desc1: 'More than half my life writing code. Software architecture isn\'t just a job, it\'s the logical structuring that governs my thinking.',
                yearsTitle: 'Years Exp.',
                commitsTitle: 'Commits',
                uptimeTitle: 'Uptime'
            },
            sections: {
                exp: 'Experience.log',
                proj: 'Active_Daemons.sh',
                edu: 'SELECT * FROM EDUCATION;',
                skills: 'Skills_Matrix.yml'
            },
            experience: [
                {
                    id: 'puntozip', role: 'Sr Software Engineer / Consultant', company: 'PuntoZip Software Consulting', period: 'Jan 2025 — Pres.', mode: 'Global Remote',
                    summary: 'Critical rescue of Cloud infrastructure and architecture for international companies.',
                    details: [
                        'Executing rescue script: PuntoZip Software Consulting...',
                        'Rescued a life insurance company by migrating legacy VB.NET 2 systems to AWS without original source code.',
                        'Upgraded legacy PHP Laravel services to modern architectures with Vue and MySQL.',
                        'Migrated payment microservices ensuring 100% uptime (Zero Disruption).',
                        'Trained engineering teams in Laravel-Inertia, Python, FastAPI and AWS deployments (100% effectiveness).',
                        'Designed documentation processes under ISO compliance regulations for international clients (Merck).'
                    ]
                },
                {
                    id: 'jmb-p2', role: 'Lead Software Architect', company: 'JMB Accountants & Consulting', period: '2023 — Present', mode: 'Hybrid CDMX',
                    summary: 'Design of Multi-tenant architecture, microservices, and million-dollar budget management.',
                    details: [
                        'Led full system migration from a Laravel monolith to a multi-tenant, multi-service architecture.',
                        'Designed and implemented a 100% auditable transaction system to ensure fiscal compliance.',
                        'Developed contingency and disaster recovery plans, increasing business resilience.',
                        'Implemented Redis caching, Redis Streams (Pub/Sub) and WebSockets to massively reduce latency.',
                        'Applied Screaming Architecture principles, deploying Docker and microservices on Linux VPS from scratch.'
                    ]
                },
                {
                    id: 'jmb-p1', role: 'Software Engineer', company: 'JMB Accountants & Consulting', period: '2023', mode: 'Hybrid CDMX',
                    summary: 'Core development in Laravel monolith for fiscal automation.',
                    details: [
                        'Developed and maintained a Laravel + Livewire + MongoDB monolith managing core modules.',
                        'Built modules for XML invoice analysis and automated integrations with SAT web services.',
                        'Prepared the entire system for future migration to a scalable multi-tenant architecture.'
                    ]
                },
                {
                    id: 'freelance', role: 'Freelance Software Engineer', company: 'Independent', period: '2020 — 2023', mode: 'Remote',
                    summary: 'Development of custom solutions, forging solid foundations in architecture.',
                    details: [
                        'Developed custom software and solutions for various companies and independent clients.',
                        'Designed database models and implemented RESTful APIs adapted to complex business rules.',
                        'Deployed web applications in the cloud, forging the technical foundations of my current architectures.'
                    ]
                }
            ],
            projects: {
                cometax: { desc: 'Founding a SaaS company in Stealth mode. Designing product strategies, internal frameworks, and hyper-scalable software architectures for Enterprise environments.' },
                rankit: { desc: 'SaaS platform for eSports tournament management. OBS integrations automating registrations, schedules, and live scoring for Fortnite tournaments.<br><br><a href="https://github.com/JFabrizzio5/RanKitLaravel" target="_blank" class="text-blue-400 hover:underline">RanKitLaravel</a> | <a href="https://github.com/JFabrizzio5/Rankit-.Net-" target="_blank" class="text-blue-400 hover:underline">Rankit-.Net</a> | <a href="https://github.com/JFabrizzio5/RanKiT-visibility-tracker-Python" target="_blank" class="text-blue-400 hover:underline">RanKiT-visibility-tracker-Python</a> | <a href="https://rankit.pro" target="_blank" class="text-blue-400 hover:underline">Rankit.pro</a>' },
                upiplanet: { desc: 'School platform to automate schedules/tasks via AI. Chrome extensions for student productivity (2000+ verified downloads).<br><br><a href="https://chromewebstore.google.com/detail/modsaes-open/ciakjkfldggpnfcoggkdmionbpbjmhhj" target="_blank" class="text-blue-400 hover:underline">Chrome Extension</a> | <a href="https://upiplanet.com" target="_blank" class="text-blue-400 hover:underline">UpiPlanet.com</a>' },
                egal: { desc: 'IoT access system for luxury hotels. ESP32 hardware for locks, FastAPI backend (JWT, WebSockets), and React Native App with NFC/QR for contactless Check-in.<br><br><a href="https://github.com/JFabrizzio5/EGAL-INFORMATICA" target="_blank" class="text-blue-400 hover:underline">GitHub</a> | <a href="https://deepwiki.com/JFabrizzio5/EGAL-INFORMATICA" target="_blank" class="text-blue-400 hover:underline">AI Auto Doc</a>' }
            },
            education: {
                ceneval: 'Accreditation through proven professional experience program.',
                ipn: 'Bachelor in Computer Engineering (Informatics).',
                cecyt: 'Technician in Programming.',
                est43: 'Technician in Electronics and Control Systems.',
                robotics1: 'Outstanding recognition in state and national advanced robotics competitions.',
                robotics2: 'Ranked 3rd and 4th place in the national Minisumo robot competition (2018-2020).'
            },
            footer: { call: 'CALL', contact: 'Contact' },
            osOptions: {
                linux: 'Linux Console',
                mac: 'macOS UI',
                windows: 'Windows 11'
            },
            setupTitle: 'ENVIRONMENT SETUP'
        }
    }
};

// Make it available globally
window.portfolioData = portfolioData;
