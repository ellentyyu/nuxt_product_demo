<template>
    <section class="banner">
        <swiper
            :modules="modules"
            :loop="true"
            :observer="true"
            :centered-slides="true"
            :slides-per-view="'auto'"
            :slides-per-group="1"
            :breakpoints="{
                320: {
                    spaceBetween: 8
                },
                1023: {
                    spaceBetween: 16
                }
            }"
            :navigation="{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
                waitForTransition: false
            }"
            class="nav-white"
        >
            <swiper-slide 
                v-for="(image, index) in doubleBannerData"
                :key="image.link + index"
                :tag="'a'"
                :href="image.link"
                target="_blank"
            >
                <img 
                    :src="image.image"
                    alt="banner image"
                >
            </swiper-slide>
            <div class="control-wrapper">
                <div class="swiper-button-prev">
                    <div class="btn-prev-white"></div>
                </div>
                <div class="swiper-button-next">
                    <div class="btn-next-white"></div>
                </div>
            </div>
            <div class="slide-mask-left"></div>
            <div class="slide-mask-right"></div>
        </swiper>
    </section>
</template>

<script setup>
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const modules = [ Navigation, Autoplay ];

const productStore = useProductStore();
const { getBanner } = productStore;

const bannerData = computed(() => productStore.bannerData);

const doubleBannerData = computed(() => [...bannerData.value, ...bannerData.value]);

onMounted(async() => {
    await getBanner();
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/banner';
</style>