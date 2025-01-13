import { d as defineStore } from './server.mjs';
import { ref, computed } from 'vue';

const useProductStore = defineStore("product", () => {
  const bannerData = ref([]);
  const categoryData = ref([]);
  const statusData = ref([
    {
      name: "\u6240\u6709",
      param: ""
    },
    {
      name: "\u62DB\u52DF\u4E2D",
      param: "available"
    },
    {
      name: "\u5373\u5C07\u958B\u59CB",
      param: "coming_soon"
    },
    {
      name: "\u5FC3\u5F97\u5206\u4EAB",
      param: "expire"
    }
  ]);
  const activeCategoryIndex = ref(0);
  const activeStatusIndex = ref(0);
  const displayProductData = ref([]);
  const isProductListFetching = ref(false);
  const isProductListLoading = ref(true);
  const isMoreProductLoading = ref(false);
  const pageNum = ref(1);
  const pageTotal = ref(1);
  const mainProductData = ref("");
  const isMainProductLoading = ref(true);
  const seoData = ref({});
  const activeCategoryName = computed(() => activeCategoryIndex.value === -1 ? "\u9810\u89BD" : categoryData.value[activeCategoryIndex.value].name);
  const submittedSurveyId = ref("");
  const questionData = ref([]);
  async function getCategories() {
    try {
      const categories = await $fetch("/categoryData");
      categoryData.value = categories;
    } catch (error) {
      console.error(error);
    }
  }
  async function getProductData() {
    try {
      const products = await $fetch("/listProductData");
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
  async function getListProducts() {
    pageNum.value = 1;
    if (isProductListFetching.value)
      return;
    isProductListFetching.value = true;
    isProductListLoading.value = true;
    await getProductData();
    isProductListFetching.value = false;
    isProductListLoading.value = false;
  }
  async function getMoreProducts() {
    if (isProductListLoading.value === true)
      return;
    isMoreProductLoading.value = true;
    await getProductData();
    isMoreProductLoading.value = false;
  }
  async function getProductDetailData(id) {
    try {
      const product = await $fetch(`/listProductData?id=${id}`);
      seoData.value = product;
    } catch (error) {
      console.error(error);
    }
  }
  async function getBanner() {
    try {
      const banner = await $fetch(`/bannerData`);
      bannerData.value = banner;
    } catch (error) {
      console.error(error);
    }
  }
  async function getSurvey() {
    try {
      const survey = await $fetch(`/surveyData`);
      questionData.value = survey.question;
    } catch (error) {
      console.error("\u554F\u5377", error);
    }
  }
  return { bannerData, statusData, activeCategoryIndex, activeStatusIndex, categoryData, displayProductData, isProductListFetching, isProductListLoading, isMoreProductLoading, mainProductData, seoData, isMainProductLoading, pageNum, pageTotal, activeCategoryName, questionData, submittedSurveyId, getCategories, getListProducts, getMoreProducts, getProductData, getProductDetailData, getBanner, getSurvey };
});

export { useProductStore as u };
//# sourceMappingURL=product-ClJcjqyv.mjs.map
