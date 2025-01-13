<template>
    <section class="carousel">
        <!-- 桌機 -->
        <div class="carousel__wrapper" ref="carouselDom">
            <a 
                v-for="(headline, index) in carouselData"
                :key="headline.link + index"
                class="carousel__card"
                :href="headline.link"
                target="_blank"
            >
                <div class="carousel__star-wrapper">
                    <i></i>
                    <p>{{ headline.alert }}</p>
                </div>
                <div class="carousel__title-wrapper">
                    <p class="carousel__title">{{ headline.title }}</p>
                </div>
            </a>
        </div>
        <!-- 手機 -->
        <swiper
            :modules="modules"
            :loop="true"
            :observer="true"
            :autoplay="{
                delay: 4000,
                disableOnInteraction: false,
                waitForTransition: false
            }"
            :slides-per-view="1"
            :slides-per-group="1"
            :space-between="12"
        >
            <swiper-slide 
                v-for="(headline, index) in carouselData"
                :key="headline.link + index"
                :tag="'a'"
                :href="headline.link"
                target="_blank"
            >
                <div class="carousel__star-wrapper">
                    <i></i>
                    <p>{{ headline.alert }}</p>
                </div>
                <div class="carousel__title-wrapper">
                    <p class="carousel__title">{{ headline.title }}</p>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/autoplay';

const carouselDom = ref(null);
const modules = [ Autoplay ];

const carouselData = ref([
    {
        "alert": "焦點",
        "title": "【親子嬰幼用品大禮包】讓我們來當 新手爸媽/多寶爸媽 的神隊友！ 剩餘724天",
        "link": "https://google.com"
    },
    {
        "alert": "焦點",
        "title": "【寵物飼料體驗包】吃得健康，滿足毛小孩的每一個需求",
        "link": "https://google.com"
    },
    {
        "alert": "焦點",
        "title": "【美食探店驚喜包】多家神秘知名餐廳，等著各路吃貨來嚐鮮",
        "link": "https://google.com"
    },
    {
        "alert": "焦點",
        "title": "【親子嬰幼用品大禮包】讓我們來當 新手爸媽/多寶爸媽 的神隊友！ 剩餘724天",
        "link": "https://google.com"
    },
    {
        "alert": "焦點",
        "title": "【寵物飼料體驗包】吃得健康，滿足毛小孩的每一個需求",
        "link": "https://google.com"
    },
    {
        "alert": "焦點",
        "title": "【美食探店驚喜包】多家神秘知名餐廳，等著各路吃貨來嚐鮮",
        "link": "https://google.com"
    }
]);

const initCarouselForPc = () => {
    // #106328 有跑馬燈動畫相關記錄 
    const contentWidth = carouselDom.value.scrollWidth; // 因為卡片寬度為auto 以此抓實際寬度
    const speed = 200;
    const animationDuration = contentWidth / speed;
    carouselDom.value.style.width =`${contentWidth}px`;
    carouselDom.value.style.animationDuration = `${animationDuration}s`;
};

// await getCarousel(); // 在mounted才呼叫swiper不會自動播放
onMounted(() => {
    if (window.screen.width >= 767) initCarouselForPc();
});

</script>

<style lang="scss" scoped>
@import '@/assets/styles/carousel';
</style>