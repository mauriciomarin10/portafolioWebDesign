document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling & Active Nav Links
    const navLinks = document.querySelectorAll('.glass-nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 1.5. Menú de Hamburguesa para móviles
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Cerrar el menú al hacer clic en un enlace en móviles
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    navList.classList.remove('active');
                }
            });
        });
    }

    // 2. Projects Carousel Functionality
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const projectCards = document.querySelectorAll('.project-card');
    const dots = document.querySelectorAll('#carousel-dots span');

    // Remove old classes as they are no longer needed
    projectCards.forEach(card => card.classList.remove('primary', 'secondary', 'tertiary'));

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    if (track) {
        // Update dots on scroll
        track.addEventListener('scroll', () => {
            const index = Math.round(track.scrollLeft / track.clientWidth);
            updateDots(index);
        });
    }

    function getCarouselScrollStep() {
        if (!projectCards.length || !track) return 300;
        const style = window.getComputedStyle(track);
        const gap = parseFloat(style.gap) || 20;
        return projectCards[0].offsetWidth + gap;
    }

    if (nextBtn && track) {
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            track.scrollBy({ left: getCarouselScrollStep(), behavior: 'smooth' });
        });
    }

    if (prevBtn && track) {
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            track.scrollBy({ left: -getCarouselScrollStep(), behavior: 'smooth' });
        });
    }

    // 3.5. Modal Logic for Projects
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalMediaContainer = document.getElementById('modal-media-container');

    const projectDetails = [
        {
            title: "GRANO DE ORO",
            desc: "Aquí podrás observar todo lo que conlleva una identidad de marca y su estrategia de branding corporativo desarrollo del proyecto Grano de Oro.",
            media: [
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868291/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-01.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868292/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-02.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868293/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-03.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868294/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-04.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868295/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-05.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868296/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-06.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868296/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-07.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868297/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-08.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868298/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-09.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868299/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-10.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868299/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-11.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868300/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-12.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868301/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-13.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868302/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-14.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868303/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-15.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868303/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-16.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868304/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-17.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868305/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-18.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868306/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-19.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868306/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-20.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868307/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-21.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868308/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-22.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868309/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-23.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868310/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-24.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868310/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-25.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868311/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-26.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868312/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-27.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868313/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-28.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868314/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-29.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868314/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-30.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868315/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-31.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868316/MANUAL_DE_MARCA_CAFE_GRANO_DE_ORO-32.jpg' },
            ]
        },
        {
            title: "CRITICAL THOUGHT",
            desc: "Aquí podrás observar todo el proceso creativo de mi marca personal, desde la investigación hasta la creación de la identidad de marca.",
            media: [
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868372/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_1.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868384/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_2.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868390/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_3.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868391/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_4.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868392/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_5.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868393/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_6.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868394/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_7.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868395/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_8.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868396/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_9.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868373/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_10.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868374/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_11.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868375/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_12.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868376/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_13.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868377/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_14.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868378/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_15.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868379/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_16.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868380/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_17.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868381/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_18.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868383/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_19.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868384/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_20.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868385/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_21.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868387/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_22.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868388/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_23.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868389/MARCA_PERSONAL_OSO_CRITICAL_THOUGHT_ESTRUCTURA_24.png' },
            ]
        },
        {
            title: "FLAYER TIPOGRÁFICO",
            desc: "Estas piezas vectoriales, se diseñaron con el fin de experimentar con el movimiento de la tipografía y cómo esta puede ser un elemento principal en una composición.",
            media: [
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868350/FLAYER_JAZZ_Mesa_de_trabajo_1.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868351/FLAYER_JAZZ_Mesa_de_trabajo_2.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868352/FLAYER_JAZZ_Mesa_de_trabajo_3.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868353/FLAYER_JAZZ_Mesa_de_trabajo_4.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868354/FLAYER_JAZZ_Mesa_de_trabajo_5.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868355/FLAYER_JAZZ_Mesa_de_trabajo_6.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868356/FLAYER_JAZZ_Mesa_de_trabajo_7.png' } 
            ]
        },
        {
            title: "PANACHI PROYECTO",
            desc: "Podrás ver las piezas gráficas creadas para sus redes sociales en idioma español e inglés.",
            media: [
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868191/Panachi_01.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868192/Panachi_02.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868193/Panachi_03.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868193/Panachi_04.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868194/Panachi_05.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868191/Panachi-English_01.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868191/Panachi-English_02.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868191/Panachi-English_03.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868191/Panachi-English_04.jpg' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868191/Panachi-English_05.jpg' },
            ]
        },
        {
            title: "PROYECTO ASTROLUMEN",
            desc: "Branding y creación de identidad de marca.",
            media: [
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868434/Manual-de-Marca---AstrolumenMesa-de-trabajo-1.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868447/Manual-de-Marca---AstrolumenMesa-de-trabajo-2.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868459/Manual-de-Marca---AstrolumenMesa-de-trabajo-3.png' },        
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868461/Manual-de-Marca---AstrolumenMesa-de-trabajo-4.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868462/Manual-de-Marca---AstrolumenMesa-de-trabajo-5.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868463/Manual-de-Marca---AstrolumenMesa-de-trabajo-6.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868464/Manual-de-Marca---AstrolumenMesa-de-trabajo-7.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868465/Manual-de-Marca---AstrolumenMesa-de-trabajo-8.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868467/Manual-de-Marca---AstrolumenMesa-de-trabajo-9.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868435/Manual-de-Marca---AstrolumenMesa-de-trabajo-10.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868436/Manual-de-Marca---AstrolumenMesa-de-trabajo-11.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868437/Manual-de-Marca---AstrolumenMesa-de-trabajo-12.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868439/Manual-de-Marca---AstrolumenMesa-de-trabajo-13.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868440/Manual-de-Marca---AstrolumenMesa-de-trabajo-14.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868441/Manual-de-Marca---AstrolumenMesa-de-trabajo-15.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868442/Manual-de-Marca---AstrolumenMesa-de-trabajo-16.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868443/Manual-de-Marca---AstrolumenMesa-de-trabajo-17.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868444/Manual-de-Marca---AstrolumenMesa-de-trabajo-18.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868445/Manual-de-Marca---AstrolumenMesa-de-trabajo-19.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868448/Manual-de-Marca---AstrolumenMesa-de-trabajo-20.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868449/Manual-de-Marca---AstrolumenMesa-de-trabajo-21.png' },    
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868450/Manual-de-Marca---AstrolumenMesa-de-trabajo-22.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868451/Manual-de-Marca---AstrolumenMesa-de-trabajo-23.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868452/Manual-de-Marca---AstrolumenMesa-de-trabajo-24.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868453/Manual-de-Marca---AstrolumenMesa-de-trabajo-25.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868454/Manual-de-Marca---AstrolumenMesa-de-trabajo-26.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868455/Manual-de-Marca---AstrolumenMesa-de-trabajo-27.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868457/Manual-de-Marca---AstrolumenMesa-de-trabajo-28.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868458/Manual-de-Marca---AstrolumenMesa-de-trabajo-29.png' },
                { type: 'image', src: 'https://res.cloudinary.com/s1vy9e3x/image/upload/f_auto,q_auto,w_1200/v1793868460/Manual-de-Marca---AstrolumenMesa-de-trabajo-30.png' },
            ]
        },
        //{
            //title: "PROYECTO SEIS",
            //desc: "Cierre y entrega del proyecto seis.",
            //media: [
                //{ type: 'image', src: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=600&q=80' },
                //{ type: 'image', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80' },
                //{ type: 'video', src: 'https://www.w3schools.com/html/mov_bbb.mp4' }
            //]
        //}
    ];

    projectCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const data = projectDetails[index];
            if (!data) return;

            modalTitle.textContent = data.title;
            modalDesc.textContent = data.desc;
            
            modalMediaContainer.innerHTML = '';
            modalMediaContainer.scrollLeft = 0;
            data.media.forEach(item => {
                let mediaEl;
                if (item.type === 'image') {
                    mediaEl = document.createElement('img');
                    mediaEl.src = item.src;
                    mediaEl.alt = data.title;
                } else if (item.type === 'video') {
                    mediaEl = document.createElement('video');
                    mediaEl.src = item.src;
                    mediaEl.controls = true;
                    mediaEl.muted = true;
                    mediaEl.loop = true;
                }
                
                if (mediaEl) {
                    modalMediaContainer.appendChild(mediaEl);
                    mediaEl.addEventListener('click', () => {
                        openFullscreen(item);
                    });
                }
            });

            modal.classList.add('active');
        });
    });

    const modalPrevBtn = document.getElementById('modal-prev-btn');
    const modalNextBtn = document.getElementById('modal-next-btn');

    if (modalNextBtn && modalMediaContainer) {
        modalNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const slideWidth = modalMediaContainer.clientWidth;
            modalMediaContainer.scrollBy({ left: slideWidth, behavior: 'smooth' });
        });
    }

    if (modalPrevBtn && modalMediaContainer) {
        modalPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const slideWidth = modalMediaContainer.clientWidth;
            modalMediaContainer.scrollBy({ left: -slideWidth, behavior: 'smooth' });
        });
    }

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove('active');
        const videos = modalMediaContainer.querySelectorAll('video');
        videos.forEach(v => v.pause());
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Navegación con teclado para el modal (Escape para cerrar, flechas para avanzar imágenes)
    document.addEventListener('keydown', (e) => {
        if (!modal || !modal.classList.contains('active')) return;
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight' && modalMediaContainer) {
            modalMediaContainer.scrollBy({ left: modalMediaContainer.clientWidth, behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft' && modalMediaContainer) {
            modalMediaContainer.scrollBy({ left: -modalMediaContainer.clientWidth, behavior: 'smooth' });
        }
    });

    // 3.6. Fullscreen Media Viewer Logic
    const fullscreenViewer = document.getElementById('fullscreen-viewer');
    const fullscreenClose = document.querySelector('.fullscreen-close');
    const fullscreenContent = document.getElementById('fullscreen-content');

    function openFullscreen(item) {
        if (!fullscreenViewer || !fullscreenContent) return;
        
        fullscreenContent.innerHTML = ''; // Clear previous content
        
        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            fullscreenContent.appendChild(img);
        } else if (item.type === 'video') {
            const video = document.createElement('video');
            video.src = item.src;
            video.controls = true;
            video.autoplay = true;
            fullscreenContent.appendChild(video);
        }
        
        fullscreenViewer.classList.add('active');
    }

    function closeFullscreen() {
        if (!fullscreenViewer) return;
        fullscreenViewer.classList.remove('active');
        
        const videos = fullscreenContent.querySelectorAll('video');
        videos.forEach(v => v.pause());
        
        // Remove content after transition finishes to prevent flicker
        setTimeout(() => {
            if(fullscreenContent) fullscreenContent.innerHTML = '';
        }, 300);
    }

    if (fullscreenClose) {
        fullscreenClose.addEventListener('click', closeFullscreen);
    }

    if (fullscreenViewer) {
        fullscreenViewer.addEventListener('click', (e) => {
            if (e.target === fullscreenViewer) {
                closeFullscreen();
            }
        });
    }

    // 4. Subtle Reveal Animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.glass-card, .hero-content');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 5. Auto Typing Effect
    const typedTextSpan = document.querySelector(".auto-type");
    const cursorSpan = document.querySelector(".cursor");

    const textArray = ["Ilustración Digital", "Identidad visual corporativa", "Diseño Full Stack"];
    const typingDelay = 50;
    const erasingDelay = 30;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (!typedTextSpan || !cursorSpan) return;
        if (charIndex < textArray[textArrayIndex].length) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (!typedTextSpan || !cursorSpan) return;
        if (charIndex > 0) {
            if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, typingDelay + 1100);
        }
    }

    if(textArray.length && typedTextSpan) {
        setTimeout(type, newTextDelay + 250);
    }

});
