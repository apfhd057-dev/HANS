/* MAIN RESPONSIVE IMAGE FALLBACK
   태블릿·모바일 이미지가 아직 준비되지 않았거나 경로가 틀린 경우,
   해당 슬라이드의 기존 데스크톱 이미지로 자동 복구합니다. */
document.querySelectorAll("#main .main_slide picture img").forEach(function(image) {
    image.addEventListener("error", function handleMainImageError() {
        const fallback = image.dataset.fallback;
        const picture = image.closest("picture");

        if (!fallback || image.src.endsWith(fallback.replace("./", ""))) {
            return;
        }

        if (picture) {
            picture.querySelectorAll("source").forEach(function(source) {
                source.remove();
            });
        }

        image.src = fallback;
    });
});

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
            tag: "초코와 딸기의 달콤한 조화",
            title: "초코 딸기 생크림",
            desc: "촉촉한 초코 시트에 고소한 커스터드와 신선한 제철 딸기, 부드러운 생크림을 더한 케이크"
        },
        {
            img: "./images/cake2.png",
            tag: "당근과 크림치즈의 고소함",
            title: "당근 케이크",
            desc: "촉촉한 당근 시트에 부드러운 크림치즈와 은은한 계피 향이 어우러진 케이크"
        },
        {
            img: "./images/cake3.png",
            tag: "진한 다크초콜릿 풍미",
            title: "가나슈 초콜릿",
            desc: "촉촉한 초코 시트와 스위스산 다크초콜릿 가나슈, 부드러운 생크림이 조화를 이루는 케이크"
        },
        {
            img: "./images/cake4.png",
            tag: "산딸기와 가나슈의 조화",
            title: "사각산딸기가나슈",
            desc: "상큼한 산딸기와 진한 초콜릿 가나슈, 부드러운 생크림을 층층이 담은 케이크"
        },
        {
            img: "./images/cake5.png",
            tag: "상큼한 산딸기 치즈케이크",
            title: "산딸기치즈",
            desc: "풍미 깊은 치즈와 상큼한 산딸기, 바삭한 초코 쿠키가 어우러진 치즈케이크"
        },
        {
            img: "./images/cake6.png",
            tag: "깊고 진한 쇼콜라 케이크",
            title: "로얄쇼콜라",
            desc: "스위스산 다크초콜릿의 깊은 풍미와 부드러운 초코 크림을 진하게 즐길 수 있는 케이크"
        },
        {
            img: "./images/cake7.png",
            tag: "산뜻한 그릭 요거트 무스",
            title: "소문의 가든 그릭 요거트",
            desc: "부드러운 요거트 무스에 상큼한 산딸기 콩포트와 생과일을 풍성하게 올린 산뜻한 케이크"
        },
        {
            img: "./images/cake8.png",
            tag: "말차와 딸기의 깊은 조화",
            title: "말차 스트로베리 프레지에",
            desc: "깊고 진한 말차 크림과 상큼한 딸기를 말차 시트 사이에 층층이 쌓아 올린 케이크"
        }
    ],

    sweet: [
        {
            img: "./images/sweet1.png",
            tag: "폭신한 시트와 부드러운 크림",
            title: "롤케이크",
            desc: "폭신하게 구운 시트에 부드러운 크림을 가득 말아 촉촉하고 가볍게 즐기는 롤케이크"
        },
        {
            img: "./images/sweet2.png",
            tag: "버터 풍미가 깊은 구움과자",
            title: "파운드",
            desc: "고소한 버터의 풍미와 촉촉하고 묵직한 식감을 즐길 수 있는 클래식 파운드케이크"
        },
        {
            img: "./images/sweet3.png",
            tag: "초콜릿을 품은 구움과자",
            title: "티그레",
            desc: "고소한 아몬드 반죽에 초콜릿 칩을 더하고 진한 가나슈로 마무리한 프랑스식 구움과자"
        },
        {
            img: "./images/sweet4.png",
            tag: "진하고 꾸덕한 초콜릿 디저트",
            title: "브라우니 세트",
            desc: "깊은 초콜릿 풍미와 꾸덕한 식감을 담아 커피와 함께 즐기기 좋은 브라우니 세트"
        },
        {
            img: "./images/sweet5.png",
            tag: "다채롭게 즐기는 쿠키 세트",
            title: "딜라이트 쿠키 3종 세트",
            desc: "서로 다른 맛과 식감을 담은 쿠키 세 가지를 한 번에 즐길 수 있는 디저트 세트"
        },
        {
            img: "./images/sweet6.png",
            tag: "마음을 담은 디저트 선물",
            title: "선물세트",
            desc: "한스의 인기 구움과자와 디저트를 정성스럽게 구성해 소중한 마음을 전하기 좋은 선물세트"
        }
    ],

    drink: [
        {
            img: "./images/drink1.png",
            tag: "달콤한 카라멜 커피",
            title: "카라멜 마키아또",
            desc: "바닐라 시럽과 부드러운 우유 위에 에스프레소 샷을 더하고 달콤한 카라멜 드리즐로 마무리한 음료"
        },
        {
            img: "./images/drink2.png",
            tag: "깔끔하고 깊은 블랙커피",
            title: "카페 아메리카노",
            desc: "진한 에스프레소에 물을 더해 원두의 깊은 향과 깔끔한 여운을 즐길 수 있는 커피"
        },
        {
            img: "./images/drink3.png",
            tag: "진한 에스프레소와 부드러운 거품",
            title: "에스프레소 마끼아또",
            desc: "강렬한 에스프레소 위에 소량의 부드러운 우유 거품을 얹어 진한 풍미를 살린 음료"
        },
        {
            img: "./images/drink4.png",
            tag: "고소하고 부드러운 라떼",
            title: "카페라떼",
            desc: "진한 에스프레소와 따뜻한 우유가 부드럽게 어우러지고 고운 우유 거품으로 마무리된 음료"
        }
    ]
};

let currentCategory = "cake";
let currentIndex = 0;
let autoTimer;

const slideItems = document.querySelectorAll("#menu .slide_item");
const prevBtn = document.querySelector("#menu .prev");
const nextBtn = document.querySelector("#menu .next");
const pagination = document.querySelector("#menu .pagination");
let dots = [];
const categoryBtns = document.querySelectorAll("#menu .menu_category li");
const activeSlide = document.querySelector("#menu .slide_item.active");

function getCurrentItems(){
    return menuData[currentCategory];
}

function renderDots(){
    if(!pagination) return;

    pagination.innerHTML = "";

    getCurrentItems().forEach((item, index) => {
        const dot = document.createElement("span");

        dot.addEventListener("click", function(){
            currentIndex = index;
            changeSlide();
            restartAutoPlay();
        });

        pagination.appendChild(dot);
    });

    dots = pagination.querySelectorAll("span");
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
            currentCategory = "sweet";
        } else if(index === 2){
            currentCategory = "drink";
        }

        currentIndex = 0;
        renderDots();
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

renderDots();
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

const mobileBtn = document.querySelector(".mobile_menu_btn");
const mobileSitemap = document.querySelector(".mobile_sitemap");

if (mobileBtn && mobileSitemap) {
    mobileBtn.addEventListener("click", function () {
        const isOpen = mobileSitemap.classList.toggle("active");

        mobileBtn.classList.toggle("active", isOpen);
        document.documentElement.classList.toggle("menu_open", isOpen);
        document.body.classList.toggle("menu_open", isOpen);
    });
}