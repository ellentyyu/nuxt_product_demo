<template>
    <div class="rating__heart-wrapper">
        <i v-for="heart in heartCount" :key="heart" class="full"></i>
        <i v-if="!isInt" class="half"></i>
        <i v-for="empty in emptyHeartCount" :key="empty" class="empty"></i>
    </div>
</template>

<script setup>
const props = defineProps({
    rating: Number
});


const isInt = computed (() => Number.isInteger(props.rating));
const heartCount = computed(() => Math.floor(props.rating));
const emptyHeartCount = computed(() => isInt.value ? 5 - heartCount.value : 4 - heartCount.value);

</script>

<style lang="scss" scoped>
@import '@/assets/styles/rating';
</style>