import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

export const useProductStore = defineStore('product', () => {
    // 首頁輪播
    const bannerData = ref([]);

    // 首頁篩選器
    const categoryData = ref([]);
    const statusData = ref([
        {
            name: '所有',
            param: ''
        }, 
        {
            name: '招募中',
            param: 'available'
        }, 
        {
            name: '即將開始',
            param: 'coming_soon'
        },
        {
            name: '心得分享',
            param: 'expire'
        }
            
    ]);
    const activeCategoryIndex = ref(0);
    const activeStatusIndex = ref(0);
    
    // 首頁資料
    const displayProductData = ref([]);
    const isProductListFetching = ref(false);
    const isProductListLoading = ref(true);
    const isMoreProductLoading = ref(false);
    const pageNum = ref(1);
    const pageTotal = ref(1);

    // 商品頁資料
    const mainProductData = ref('');
    const isMainProductLoading = ref(true);

    const seoData = ref({});
    
    const activeCategoryName = computed(() => activeCategoryIndex.value === -1 ? '預覽': categoryData.value[activeCategoryIndex.value].name);

    // 問卷
    const submittedSurveyId = ref('');
    const questionData = ref([]);

    // 首頁商品列表
    async function getCategories () {
        try {
            const categories = await $fetch('/categoryData');
            categoryData.value = categories;            
        } catch (error) {
            console.error(error);
        }
    }
    async function getProductData () {
        try {
            const products = await $fetch('/listProductData');
            
            if (pageNum.value === 1) {
                displayProductData.value = products;
            } else {
                displayProductData.value.push(...products);
            }

            pageNum.value++;

        } catch (error) {
            console.error(error);
        }
    }
    async function getListProducts () {
        pageNum.value = 1;
        if (isProductListFetching.value) return;

        isProductListFetching.value = true;
        isProductListLoading.value = true;
        await getProductData();
        isProductListFetching.value = false;
        isProductListLoading.value = false;
    }
    async function getMoreProducts () {
        if (isProductListLoading.value === true) return;

        isMoreProductLoading.value = true;
        await getProductData();
        isMoreProductLoading.value = false;
    }
    async function getProductDetailData (id) {
        const router = useRouter();
        try {         
            const product = await $fetch(`/listProductData?id=${id}`);
            if (!product) {
                router.push('/');
            } else {
                seoData.value = product;
            }
        } catch (error) {
            console.error(error);
        }
    }
    async function getBanner () {
        try {
            const banner = await $fetch(`/bannerData`);
            bannerData.value = banner;
        } catch (error) {
            console.error(error);
        }
    }
    async function getSurvey () {
        try {
            const survey = await $fetch(`/surveyData`);
            questionData.value = survey.question;
        } catch (error) {
            console.error('問卷', error);
        }
    }

    return { bannerData, statusData, activeCategoryIndex, activeStatusIndex, categoryData, displayProductData, isProductListFetching, isProductListLoading, isMoreProductLoading, mainProductData, seoData, isMainProductLoading, pageNum, pageTotal, activeCategoryName, questionData, submittedSurveyId, getCategories, getListProducts, getMoreProducts, getProductData, getProductDetailData, getBanner, getSurvey }
})