<template>
    <section class="eventcontent">
        <div class="custom-container">
            <div class="section-wrapper">
                <h2 class="section-title observe-section" id="content">活動內容</h2>
                <div class="eventcontent__wrapper">
                    <template v-if="mainProductData.videos[0]">
                        <iframe 
                            width="auto"
                            height="auto"
                            :src="youtubeEmbedUrl(mainProductData.videos[0].link)"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                            class="eventcontent__video"
                            data-test="videodata"
                        >
                        </iframe>
                    </template>
                    <p v-html="mainProductData.try_content"></p>                    
                    <template v-if="mainProductData.images.length">
                        <img
                            v-for="(image, index) in filteredImages"
                            :key="image.src + index"
                            :src="image.src"
                            alt="product image"
                        >
                    </template>
                    <img v-else :src="mainProductData.image" alt="event product image">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const youtubeEmbedUrl = (url) => url.replace(/watch\?v=|shorts\//, "embed/") + "?autoplay=1&mute=1&enablejsapi=1";

const productStore = useProductStore();
const mainProductData = computed (() => productStore.mainProductData);
const filteredImages = computed(() => mainProductData.value?.images.filter(image => image.in_content === '1'));
</script>

<style lang="scss" scoped>
@import '@/assets/styles/event';
</style>