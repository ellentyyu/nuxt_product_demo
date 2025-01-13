<template>
    <div 
        class="loading"
        :class="{'is-product': isProductPage}"    
    >
        <div class="custom-container">
            <div 
                v-if="isProductPage"
                class="loading__main-wrapper"
            >
                <div class="loading__main bg-effect"></div>
                <div class="loading__main-body">
                    <div class="content head bg-effect"></div>
                    <div class="content bg-effect"></div>
                    <div class="content bg-effect"></div>
                    <div class="w-60 content bg-effect"></div>
                </div>
            </div>
            <ul class="loading__card-wrapper">
                <li 
                    v-for="(_, index) in renderNum" 
                    :key="index"
                    class="loading__card"
                    :class="{'is-product': isProductPage}"
                >
                    <div
                        class="loading__card-img bg-effect"
                        :class="{'is-product': isProductPage}"
                    ></div>
                    <div class="loading__card-body">
                        <div class="content bg-effect"></div>
                        <div class="w-60 content bg-effect"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    isProductPage: Boolean
});

const renderNum = computed(() => props.isProductPage? 2 : 3);
</script>

<style lang="scss" scoped>
@import '@/assets/styles/loading';
</style>