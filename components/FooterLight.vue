<template>
    <footer class="footer" :class="{ 'product-padding': hasPaddingBottom }">
        <div class="footer__wrapper">
            <p>Copyright © 2024</p>
            <a href="/">
                Lonely Travel
            </a>
            <p>
                孤獨旅遊 ( 股 ) <span @click="clickHandler">公司</span>
            </p>
        </div>
    </footer>
</template>
<script setup>
const route = useRoute();

const hasPaddingBottom = computed(() => !!route.params.productId);

const productStore = useProductStore();
const { getListProducts } = productStore;

const clickHandler = async () => {
    if (route.params.productId) {
        return;
    }

    productStore.activeCategoryIndex = -1;
    await getListProducts();
};
</script>
<style lang="scss" scoped>
.footer {
    color: #9e9e9e;
    background-color: #ededed;

    &.product-padding {
        @media (max-width: 767px) {
            padding-bottom: 98px;
        }
    }

    &__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 29px;
        padding-bottom: 29px;

        @media (max-width: 767px) {
            padding-top: 14px;
            padding-bottom: 14px;
        }
    }

    a {
        margin-right: 10px;
        margin-left: 10px;
        font-weight: 800;
        @include fs-18;
        color: rgb(81, 18, 137);
    }

    img {
        width: 60px;
        height: 15px;
        object-fit: cover;
        margin-right: 10px;
        margin-left: 10px;

        @media (max-width: 767px) {
            width: 47px;
            height: 12px;
            margin-right: 5px;
            margin-left: 5px;
        }
    }

    p {
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;

        @media (max-width: 767px) {
            font-size: 10px;
            line-height: 14px;
        }
    }

    span {
        display: inline-block;
    }
}
</style>
