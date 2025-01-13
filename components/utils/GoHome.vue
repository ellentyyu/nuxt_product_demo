<template>
    <section class="gohome">
        <a href="/" class="gohome__link">
            <span>回孤獨旅遊首頁</span>
        </a>
        <a v-if="route.params.productId" href="https://www.google.com/" class="gohome__link">
            <span>回 Google 首頁</span>
        </a>
    </section>
</template>
<script setup>
const route = useRoute();

</script>