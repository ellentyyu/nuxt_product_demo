<template>
    <div class="product__card-img-swiper">
        <swiper
            :modules="modules"
            :spaceBetween="8"
            :pagination="{ 
                clickable: true,
            }"
        >
            <swiper-slide 
                v-for="(image, index) in imgData"
                :key="image.src + index"
            >
                <img 
                    :class="{'is-video': image.link.includes('youtube')}"
                    :src="image.src"
                    alt="product image"
                >
                <i v-if="image.link.includes('youtube')"></i>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const props = defineProps({
    imgData: Array
});

const modules = [Pagination];
</script>
<style lang="scss" scoped>
@import '@/assets/styles/product';
</style>