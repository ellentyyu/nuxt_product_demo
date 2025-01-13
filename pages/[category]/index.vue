<!-- 首頁 -->
<template>
    <main>
        <UtilsBgWrapper>
            <BannerSwiper />
            <CarouselSwiper />
            <FilterSwitch />
            <ProductList />
            <UtilsGoHome />
        </UtilsBgWrapper>
    </main>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

const productStore = useProductStore();
const { getCategories, getListProducts } = productStore;
const categoryData = computed(() => productStore.categoryData);

const checkRouteCategory = () => {
    const categoryNames =  categoryData.value.map(category => category.name);
    const index = categoryNames.indexOf(route.params.category);

    if (index !== -1) {
        productStore.activeCategoryIndex = index;
    } else {
        router.push(`/${categoryData.value[0].name}`);
    }
    
    getListProducts();
};

onMounted(async() => {
    // 沒資料的時候
    if (productStore.displayProductData.length === 0) {
        await getCategories();
        checkRouteCategory();
    }
})

// meta
useHead({
    link: [
        { rel: 'canonical', href: 'https://github.com/ellentyyu/nuxt_product_demo' }
    ]
})

useSeoMeta({
    title: '全球走跳時代來臨！孤獨旅遊獨家免費試用，全面體驗最新產品，快來參加並分享心得吧！',
    ogTitle: '全球走跳時代來臨！孤獨旅遊獨家免費試用，全面體驗最新產品，快來參加並分享心得吧！',
    description: '孤獨旅遊提供豐富的免費試用活動和美食試吃機會，讓你能夠輕鬆獲取最新產品並撰寫心得。在孤獨旅行得到第一手的試用資訊體驗新商品，並與其他人分享真實的試用體驗。',
    ogDescription: '孤獨旅遊提供豐富的免費試用活動和美食試吃機會，讓你能夠輕鬆獲取最新產品並撰寫心得。在孤獨旅行得到第一手的試用資訊體驗新商品，並與其他人分享真實的試用體驗。',
    ogImage: 'https://images.unsplash.com/photo-1470074558764-4e577e98bc85?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ogUrl: 'https://github.com/ellentyyu/nuxt_product_demo',
    ogType: 'website'
})
</script>