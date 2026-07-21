(() => {
    "use strict";

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;

    const setDelay = (element, delay = 0) => {
        element.style.setProperty("--delay", `${delay}ms`);
    };

    const prepare = (selector, motionClass = "", startDelay = 0, step = 0) => {
        const elements = [...document.querySelectorAll(selector)];

        elements.forEach((element, index) => {
            element.classList.add("motion-item");
            if (motionClass) element.classList.add(motionClass);
            setDelay(element, startDelay + index * step);
        });

        return elements;
    };

    const initMotion = () => {
        root.classList.add("motion-ready");

        const targets = [
            ...prepare("#con1 > .title", "", 0),
            ...prepare("#con1 > .sub_txt", "", 90),
            ...prepare("#con1 .dotted_circle", "motion-pop", 0, 150),

            ...prepare("#con2 > .title", "", 0),
            ...prepare("#con2 .history_box > em", "", 0),
            ...prepare("#con2 .hans_history li", "motion-pop", 0, 130),
            ...prepare("#con2 > .txt1", "", 0),

            ...prepare("#con3 > .title", "", 0),
            ...prepare("#con3 .txt_left", "motion-left", 0),
            ...prepare("#con3 .txt_right", "motion-right", 110),
            ...prepare("#con3 .vision_box1", "motion-pop", 170),

            ...prepare("#con4 > .title", "", 0),
            ...prepare("#con4 > .sub_txt", "", 90),
            ...prepare("#con4 .img_box1", "motion-pop", 0, 150)
        ];

        const line = document.querySelector("#con3 .line");
        if (line) {
            line.classList.add("motion-line");
            targets.push(line);
        }

        const bannerTitle = document.querySelector("#banner h3");

        if (reducedMotion.matches || !("IntersectionObserver" in window)) {
            bannerTitle?.classList.add("is-visible");
            targets.forEach((target) => target.classList.add("is-visible"));
            return;
        }

        requestAnimationFrame(() => {
            requestAnimationFrame(() => bannerTitle?.classList.add("is-visible"));
        });

        const observer = new IntersectionObserver(
            (entries, currentObserver) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                });
            },
            {
                threshold: 0.16,
                rootMargin: "0px 0px -10% 0px"
            }
        );

        targets.forEach((target) => observer.observe(target));
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initMotion, { once: true });
    } else {
        initMotion();
    }
})();
window.addEventListener('load', () => {
    if (typeof Lenis === 'function') {
        const lenis = new Lenis({
            duration: 2.5,
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.querySelector('.mobile_menu_btn');
    const mobileSitemap = document.querySelector('.mobile_sitemap');

    if (!mobileBtn || !mobileSitemap) return;

    const menuLinks = mobileSitemap.querySelectorAll('a');

    function setMobileMenu(open) {
        mobileBtn.classList.toggle('active', open);
        mobileSitemap.classList.toggle('active', open);
        document.documentElement.classList.toggle('menu_open', open);
        document.body.classList.toggle('menu_open', open);

        mobileBtn.setAttribute('aria-expanded', String(open));
        mobileBtn.setAttribute(
            'aria-label',
            open ? '전체 메뉴 닫기' : '전체 메뉴 열기'
        );
    }

    mobileBtn.addEventListener('click', () => {
        const isOpen = mobileSitemap.classList.contains('active');
        setMobileMenu(!isOpen);
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => setMobileMenu(false));
    });

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') setMobileMenu(false);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) setMobileMenu(false);
    });
});
