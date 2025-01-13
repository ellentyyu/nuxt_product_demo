<template>
    <section class="eventrule">
        <div class="custom-container">
            <div class="section-wrapper">
                <h2 class="section-title observe-section" id="rule">參加規則</h2>
                <ul class="eventrule__wrapper">
                    <li>
                        <h3>報名時間</h3>
                        <p>{{ mainProductData.show_at }}</p>
                    </li>
                    <li>
                        <h3>截止時間</h3>
                        <p>{{ mainProductData.hide_at }}</p>
                    </li>
                    <li>
                        <h3>報名資格</h3>
                        <p>限孤獨旅遊註冊會員</p>
                    </li>
                    <li v-if="mainProductData.memo2">
                        <h3>文章字數</h3>
                        <p>{{ mainProductData.memo2 }}</p>
                    </li>
                    <li v-if="mainProductData.memo3">
                        <h3>圖片數量</h3>
                        <p>{{ mainProductData.memo3 }}</p>
                    </li>
                    <li v-if="mainProductData.sendway">
                        <h3>寄送方式</h3>
                        <p>{{ mainProductData.sendway }}</p>
                    </li>
                    <li v-if="mainProductData.contentrule">
                        <h3>內文規則</h3>
                        <p>{{ mainProductData.contentrule }}</p>
                    </li>
                    <li v-if="mainProductData.keywords[0]">
                        <h3>必須加入<br />關鍵字</h3>
                        <p>{{ keywordsToString }}</p>
                    </li>
                    <li v-if="mainProductData.baseline">
                        <h3>評選標準</h3>
                        <p 
                            v-html="mainProductData.baseline"
                            class="html"
                        ></p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
const productStore = useProductStore();
const mainProductData = computed (() => productStore.mainProductData);
const keywordsToString = computed(() => mainProductData.value?.keywords.toString().replaceAll(',', '、'));

</script>

<style lang="scss" scoped>
@import '@/assets/styles/event';
</style>