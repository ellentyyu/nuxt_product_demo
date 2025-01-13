<template>
    <div class="productimages">
        <swiper
            :modules="modules"
            :spaceBetween="8"
            :thumbs="{ swiper: thumbsSwiper }"
            class="main-swiper"
        >
            <swiper-slide 
                v-for="(media, index) in imgWithVideo"
                :key="media.src + index"
            >
                <iframe v-if="media.link.includes('youtube')" :src="youtubeEmbedUrl(media.link)" frameborder="0"></iframe>
                <img v-else :src="media.src" alt="product image"> 
            </swiper-slide>
        </swiper>
        <swiper
            :modules="modules"
            watch-slides-progress
            :spaceBetween="8"
            :slidesPerView="5.4"
            :breakpoints="{
                768: {
                    slidesPerView: 6
                }
            }"
            :freeMode="true"
            @swiper="setThumbsSwiper"
            class="thumb-swiper"
        >
            <swiper-slide
                v-for="(media, index) in imgWithVideo"
                :key="media.src + index"
            >
                <img :src="media.src" alt="product image">
                <i v-if="media.link.includes('youtube')"></i>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/thumbs';

const modules = [Thumbs];

const productStore = useProductStore();

const imgData = computed(() => {
    if (productStore.mainProductData.images.length > 0) {
        return productStore.mainProductData.images.filter(img => img.in_title === '1');
    } else {
        return [{
            link: '',
            src: productStore.mainProductData.image
        }];
    }
});
const videoData = computed(() => productStore.mainProductData.videos[0]);
const imgWithVideo = computed(() => {
    const copiedArray = [...imgData.value];
    if (videoData.value !== undefined) copiedArray.splice(1, 0, videoData.value);
    return copiedArray;
});

const youtubeEmbedUrl = (url) => url.replace(/watch\?v=|shorts\//, "embed/") + "?autoplay=1&mute=1&enablejsapi=1";

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mainproduct';
</style>