<template>
    <section class="product" >
        <div class="custom-container">
            <div
                v-if="productStore.displayProductData.length > 0 && !isProductListLoading"
                class="product__wrapper"
            >
                <ProductCard 
                    v-for="(product, index) in displayProductData"
                    :key="product?.name + index"
                    :product="product"
                />
                <UtilsLoadingProduct
                    v-if="isMoreProductLoading"
                    :isProductPage="false"
                />
                <div
                    v-if="needEmptyCard"
                    class="product__card empty"
                ></div>
            </div>
            <UtilsLoadingProduct
                v-else-if="isProductListLoading"
                :isProductPage="false"
            />
            <div
                v-else 
                class="product__fallback-wrapper"
            >
                <img src="@/assets/images/img-product-list-default.png" alt="no item available">
                <p>目前沒有商品試用</p>
            </div>
        </div>
    </section>
</template>

<script setup>
const needEmptyCard = computed(() => productStore.displayProductData?.length % 3 === 2);

const isProductListLoading = computed (() => productStore.isProductListLoading);
const isMoreProductLoading = computed (() => productStore.isMoreProductLoading);
const displayProductData = computed(() => productStore.displayProductData);

const productStore = useProductStore();
const { getMoreProducts } = productStore;

let throttleTimer = undefined;
const throttle = (callback, time) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};

const scrollHandler = () => {
    throttle(() => {
        if (window.innerHeight + window.pageYOffset > document.body.offsetHeight * 0.7 && !productStore.isMoreProductLoading) {
            getMoreProducts();
        }
    }, 500);
};

onMounted(async () => {
    window.addEventListener("scroll", scrollHandler);
})

onUnmounted(() => {
    window.removeEventListener("scroll", scrollHandler);
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/product';
</style>