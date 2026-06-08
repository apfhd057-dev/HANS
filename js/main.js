window.addEventListener("load", function(){
    const lenis = new Lenis({
        duration: 2.5,
        smoothWheel: true,
        wheelMultiplier: 0.8,
        touchMultiplier: 1.5
    });

    function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
});
const mainSlides = document.querySelectorAll("#main .main_slide");
const mainPrev = document.querySelector("#main .main_prev");
const mainNext = document.querySelector("#main .main_next");
const mainPagination = document.querySelector("#main .main_pagination");

let mainIndex = 0;
let mainTimer;

/* 슬라이드 개수만큼 span 자동 생성 */
mainSlides.forEach((slide, index) => {
    const dot = document.createElement("span");

    if(index === 0){
        dot.classList.add("on");
    }

    dot.addEventListener("click", function(){
        mainIndex = index;
        updateMainSlide();
        restartMainAuto();
    });

    mainPagination.appendChild(dot);
});

const mainDots = document.querySelectorAll("#main .main_pagination span");

function updateMainSlide(){
    mainSlides.forEach((slide, index) => {
        slide.classList.toggle("active", index === mainIndex);
    });

    mainDots.forEach((dot, index) => {
        dot.classList.toggle("on", index === mainIndex);
    });
}

function nextMainSlide(){
    mainIndex++;

    if(mainIndex >= mainSlides.length){
        mainIndex = 0;
    }

    updateMainSlide();
}

function prevMainSlide(){
    mainIndex--;

    if(mainIndex < 0){
        mainIndex = mainSlides.length - 1;
    }

    updateMainSlide();
}

function startMainAuto(){
    mainTimer = setInterval(() => {
        nextMainSlide();
    }, 4000);
}

function restartMainAuto(){
    clearInterval(mainTimer);
    startMainAuto();
}

mainNext.addEventListener("click", function(){
    nextMainSlide();
    restartMainAuto();
});

mainPrev.addEventListener("click", function(){
    prevMainSlide();
    restartMainAuto();
});

updateMainSlide();
startMainAuto();

const menuData = {
    cake: [
        {
            img: "./images/cake.png",
            tag: "부드러운 딸기 생크림",
            title: "초코 딸기 생크림",
            desc: "촉촉한 초코 시트 위에 흐르는 고소한 커스터드와 신선한 제철 딸기, 부드러운 크림이 어우러진 만족스러운 케이크"
        },
        {
            img: "./images/cake2.png",
            tag: "고소한 크림 케이크",
            title: "월넛 크림 케이크",
            desc: "부드러운 시트와 고소한 크림, 견과류의 식감이 어우러진 담백한 케이크"
        },
        {
            img: "./images/cake3.png",
            tag: "진한 초코 케이크",
            title: "초코 생크림 케이크",
            desc: "진한 초코 풍미와 부드러운 생크림이 조화롭게 어우러진 케이크"
        },
        {
            img: "./images/cake4.png",
            tag: "상큼한 과일 케이크",
            title: "딸기 생크림 케이크",
            desc: "신선한 딸기와 부드러운 생크림이 가득한 산뜻한 케이크"
        }
    ],

    drink: [
        {
            img: "./images/drink1.png",
            tag: "달콤한 시그니처 음료",
            title: "딸기 라떼",
            desc: "신선한 딸기와 부드러운 우유가 어우러진 산뜻하고 달콤한 음료"
        },
        {
            img: "./images/drink2.png",
            tag: "깊고 진한 커피",
            title: "아메리카노",
            desc: "깔끔한 산미와 고소한 풍미가 조화로운 기본 커피 메뉴"
        },
        {
            img: "./images/drink3.png",
            tag: "부드러운 디저트 음료",
            title: "바닐라 라떼",
            desc: "은은한 바닐라 향과 부드러운 우유가 어우러진 라떼"
        },
        {
            img: "./images/drink4.png",
            tag: "상큼한 과일 음료",
            title: "레몬 에이드",
            desc: "상큼한 레몬 향과 청량감이 살아있는 시원한 에이드"
        }
    ],

    order: [
        {
            img: "./images/order1.png",
            tag: "특별한 날을 위한 케이크",
            title: "생일 주문 케이크",
            desc: "원하는 분위기와 문구를 담아 특별한 날을 더 빛나게 해주는 주문 케이크"
        },
        {
            img: "./images/order2.png",
            tag: "소중한 마음을 담은 선물",
            title: "기념일 케이크",
            desc: "기념일의 감성을 담아 정성스럽게 완성하는 맞춤형 케이크"
        },
        {
            img: "./images/order3.png",
            tag: "행사용 맞춤 디저트",
            title: "단체 주문 케이크",
            desc: "행사와 모임에 어울리도록 구성하는 맞춤형 디저트 메뉴"
        },
        {
            img: "./images/order4.png",
            tag: "원하는 디자인 그대로",
            title: "커스텀 케이크",
            desc: "색감, 장식, 문구를 조합해 나만의 분위기로 완성하는 케이크"
        }
    ]
};

let currentCategory = "cake";
let currentIndex = 0;
let autoTimer;

const slideItems = document.querySelectorAll("#menu .slide_item");
const prevBtn = document.querySelector("#menu .prev");
const nextBtn = document.querySelector("#menu .next");
const dots = document.querySelectorAll("#menu .pagination span");
const categoryBtns = document.querySelectorAll("#menu .menu_category li");
const activeSlide = document.querySelector("#menu .slide_item.active");

function getCurrentItems(){
    return menuData[currentCategory];
}

function getIndex(index){
    const items = getCurrentItems();
    return (index + items.length) % items.length;
}

function updateSlide(){
    const items = getCurrentItems();

    const left2Index = getIndex(currentIndex - 2);
    const left1Index = getIndex(currentIndex - 1);
    const activeIndex = getIndex(currentIndex);
    const right1Index = getIndex(currentIndex + 1);
    const right2Index = getIndex(currentIndex + 2);

    const left2 = items[left2Index];
    const left1 = items[left1Index];
    const active = items[activeIndex];
    const right1 = items[right1Index];
    const right2 = items[right2Index];

    slideItems[0].querySelector("img").src = left2.img;
    slideItems[1].querySelector("img").src = left1.img;

    slideItems[2].querySelector(".cake_img img").src = active.img;
    slideItems[2].querySelector(".cake_text span").textContent = active.tag;
    slideItems[2].querySelector(".cake_text h4").textContent = active.title;
    slideItems[2].querySelector(".cake_text p").textContent = active.desc;

    slideItems[3].querySelector("img").src = right1.img;
    slideItems[4].querySelector("img").src = right2.img;

    slideItems[0].dataset.index = left2Index;
    slideItems[1].dataset.index = left1Index;
    slideItems[3].dataset.index = right1Index;
    slideItems[4].dataset.index = right2Index;

    dots.forEach((dot, index) => {
        dot.classList.toggle("on", index === currentIndex);
    });
}

function changeSlide(){
    activeSlide.classList.add("is-changing");

    setTimeout(() => {
        updateSlide();
        activeSlide.classList.remove("is-changing");
    }, 250);
}

function nextSlide(){
    const items = getCurrentItems();

    currentIndex++;

    if(currentIndex >= items.length){
        currentIndex = 0;
    }

    changeSlide();
}

function prevSlide(){
    const items = getCurrentItems();

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = items.length - 1;
    }

    changeSlide();
}

function startAutoPlay(){
    stopAutoPlay();

    autoTimer = setInterval(() => {
        nextSlide();
    }, 4000);
}

function stopAutoPlay(){
    clearInterval(autoTimer);
}

function restartAutoPlay(){
    stopAutoPlay();
    startAutoPlay();
}

prevBtn.addEventListener("click", function(){
    prevSlide();
    restartAutoPlay();
});

nextBtn.addEventListener("click", function(){
    nextSlide();
    restartAutoPlay();
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", function(){
        currentIndex = index;
        changeSlide();
        restartAutoPlay();
    });
});

categoryBtns.forEach((btn, index) => {
    btn.addEventListener("click", function(e){
        e.preventDefault();

        categoryBtns.forEach((item) => {
            item.classList.remove("active");
        });

        this.classList.add("active");

        if(index === 0){
            currentCategory = "cake";
        } else if(index === 1){
            currentCategory = "drink";
        } else if(index === 2){
            currentCategory = "order";
        }

        currentIndex = 0;
        changeSlide();
        restartAutoPlay();
    });
});


/* 작은 좌우 이미지 클릭하면 가운데로 이동 */
slideItems.forEach((item) => {
    item.addEventListener("click", function(){
        if(!this.classList.contains("side")){
            return;
        }

        currentIndex = Number(this.dataset.index);
        changeSlide();
        restartAutoPlay();
    });
});

updateSlide();
startAutoPlay();

// 메뉴효과 js
window.addEventListener("load", function(){

    const menuMotionItems = document.querySelectorAll("#menu .menu_motion");

    function menuMotion(){
        const menu = document.querySelector("#menu");
        if(!menu) return;

        const menuTop = menu.getBoundingClientRect().top;
        const windowH = window.innerHeight;

        if(menuTop < windowH - 180){
            menuMotionItems.forEach(function(item){
                item.classList.add("act");
            });
        }
    }

    window.addEventListener("scroll", menuMotion, { passive: true });
    menuMotion();

});
// 브랜드 효과 js
window.addEventListener("load", function(){

    const brandStory = document.querySelector("#brand_story");

    function brandStoryMotion(){
        if(!brandStory) return;

        const sectionTop = brandStory.getBoundingClientRect().top;
        const windowH = window.innerHeight;

        if(sectionTop < windowH - 200){
            brandStory.classList.add("act");
        }
    }

    window.addEventListener("scroll", brandStoryMotion, { passive: true });
    brandStoryMotion();

});
// order 효과 js
window.addEventListener("load", function(){

    const order = document.querySelector("#order");

    function orderMotion(){
        if(!order) return;

        const orderTop = order.getBoundingClientRect().top;
        const windowH = window.innerHeight;

        if(orderTop < windowH - 180){
            order.classList.add("order_active");
        }
    }

    window.addEventListener("scroll", orderMotion, { passive: true });
    orderMotion();

});

// search 효과 js

window.addEventListener("load", function(){

    const searchStore = document.querySelector("#search_store");

    function searchStoreMotion(){
        if(!searchStore) return;

        const top = searchStore.getBoundingClientRect().top;
        const windowH = window.innerHeight;

        if(top < windowH - 180){
            searchStore.classList.add("act");
        }
    }

    window.addEventListener("scroll", searchStoreMotion, { passive: true });
    searchStoreMotion();

});
window.addEventListener("load", function(){

    const searchStore = document.querySelector("#search_store");

    function searchStoreMotion(){
        if(!searchStore) return;

        const sectionTop = searchStore.getBoundingClientRect().top;
        const windowH = window.innerHeight;

        if(sectionTop < windowH - 180){
            searchStore.classList.add("act");
        }
    }

    window.addEventListener("scroll", searchStoreMotion, { passive: true });
    searchStoreMotion();

});

// 보더메뉴 효과 js
window.addEventListener("load", function(){

    const boardMenu = document.querySelector("#board_menu");

    function boardMotion(){
        if(!boardMenu) return;

        const top = boardMenu.getBoundingClientRect().top;
        const windowH = window.innerHeight;

        if(top < windowH - 180){
            boardMenu.classList.add("act");
        }
    }

    window.addEventListener("scroll", boardMotion, { passive: true });
    boardMotion();

});

const mobileBtn = document.querySelector('.mobile_menu_btn');
const mobileSitemap = document.querySelector('.mobile_sitemap');

mobileBtn.addEventListener('click', function(){
    mobileBtn.classList.toggle('active');
    mobileSitemap.classList.toggle('active');
});