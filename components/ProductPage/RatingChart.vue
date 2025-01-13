<template>
    <div class="rating">
        <div class="rating__badge-wrapper">
            <div v-if="badgeImg" class="rating__badge">
                <img :src="badgeImg" alt="good product badge">
            </div>
            <div class="rating__container" :class="{'padding-left': badgeImg}">
                <div
                    v-for="(rate, index) in rateData"
                    :key="rate.name + index"
                    class="rating__category-wrapper"
                >
                    <ProductPageRatingHeartContainer :rating="mapScoreToRating(rate.avg)" />
                    <p class="rating__label">{{ rate.name }}</p>
                </div>          
            </div>
        </div>
    </div>
</template>

<script setup>
const productStore = useProductStore();
const rateData = computed(() => Object.values(productStore.mainProductData.rate));
const badgeImg = computed(() => productStore.mainProductData.label_image_url);

const mapScoreToRating = (score) => {
    // Ensure the score is within the range [1, 10]
    score = Math.min(Math.max(score, 1), 10);
    const intervalSize = 10 / 9;
    const index = Math.floor((score - 1) / intervalSize);
    return index * 0.5 + 1;
};

</script>

<style lang="scss" scoped>
@import '@/assets/styles/rating';
</style>