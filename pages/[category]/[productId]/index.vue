<!-- 這是商品頁 -->
<template>
    <UtilsBgWrapper>
        <UtilsLoadingProduct
            v-if="isMainProductLoading"
            :isProductPage="true"
        />
        <template v-else>
            <ProductPageMainProduct @signup="signupHandler" />
            <ProductPageSectionTab :activeSection="activeSection" />
            <ProductPageEventSteps />
            <ProductPageEventContent />
            <ProductPageEventRule />
            <ProductPageEventNotice :notice="mainProductData.try_notice" />
            <UtilsGoHome />
            <UtilsGoTop />
        </template>
        <ProductPageTermsModal
            @agreeTerms="agreeTermsHandler"
            ref="termsModalComponent"
        />
        <ProductPageSignupModal
            :productName="mainProductData.name"
            ref="signupModalComponent"
        />
    </UtilsBgWrapper>
</template>

<script setup>
const route = useRoute();
const router = useRouter();

// 彈窗
const termsModalComponent = ref(null);
const signupModalComponent = ref(null);

const agreeTermsHandler = () => {
    signupModalComponent.value.showSignupModal();
};

// 點擊立即參加
const signupHandler = () => {
    termsModalComponent.value.showTermsModal();
};

// 資料
const productStore = useProductStore();
const { getProductDetailData, getSurvey } = productStore;

const mainProductData = computed (() => productStore.mainProductData);
const seoData = computed (() => productStore.seoData);
const isMainProductLoading = computed (() => productStore.isMainProductLoading);

// meta 用
const slicedProductDesc = computed (() => seoData.value.try_content?.replace(/<br \/>|\n/g, '').slice(0, 100));

// 各區塊observer
const activeSection = ref('step');
const observer = ref(null);
const observerCallback = (entries) => {
    if (entries[0].isIntersecting) {
        activeSection.value = entries[0].target.getAttribute('id');
    }
};

const initObserver = () => {
    observer.value =  new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px 0px -600px 0px',
        threshold: 1
    });
    const observeSections = document.querySelectorAll('.observe-section');
    observeSections.forEach(section => {
        observer.value.observe(section);
    });
};

// 網址錨點
const checkRouteHash = async () => {
    if (route.hash) {
        await nextTick();
        const element = document.querySelector(route.hash);

        if (element) {
            activeSection.value = route.hash.replace('#', '');
            const offset = element.getBoundingClientRect().top + window.pageYOffset - 80; 
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    }
};

await getProductDetailData(route.params.productId);

onMounted(async() => {
    // 商品主要資訊
    if (seoData.value.id) { 
        productStore.mainProductData = seoData.value;
        productStore.isMainProductLoading = false;
    } else {
        await getProductDetailData(route.params.productId);
        productStore.mainProductData = seoData.value;
    }

    await getSurvey();
    initObserver();
    checkRouteHash();
});

// meta
useHead({
    link: [
        { rel: 'canonical', href: () => `https://mocktravelllll/${seoData.value.id}` }
    ],
    meta: [
        { property: 'og:updated_time', content: () => `${seoData.value.show_at}` }
    ]
})

useSeoMeta({
    title: () => `${seoData.value.name} | 一個人的孤獨旅遊`,
    ogTitle: () => `${seoData.value.name} | 一個人的孤獨旅遊`,
    description: () => `${slicedProductDesc.value}`,
    ogDescription: () => `${slicedProductDesc.value}`,
    ogImage: () => `${seoData.value.image}`,
    ogUrl: () => `https://mocktravelllll/${seoData.value.id}`,
    ogType: 'website'
})

</script>
