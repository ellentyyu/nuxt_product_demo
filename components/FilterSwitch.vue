<template>
    <section class="switch">
        <ClientOnly>
            <div class="switch__category-wrapper">
                <div 
                    v-for="(category, index) in categoryData"
                    :key="category.id + index"
                    ref="categoryDoms"
                    class="switch__category"
                    :class="{'active': activeCategoryIndex === index}"
                    @click="changeCategoryHandler(index)"
                >
                    <i :class="getIconClass(category.id)"></i>
                    {{ category.name }}
                </div>

                <div
                    :style="{ left: `${highlightLeft}px`, width: `${highlightWidth}px` }"
                    class="switch__category-highlighter"
                ></div>
            </div>
        </ClientOnly>
        <ul class="filter-wrapper">
            <li 
                v-for="(status, index) in statusData"
                :key="status.name"
                :class="{'active': activeStatusIndex === index}"
                @click="changeStatusHandler(index)"
            >
                    {{ status.name }}
            </li>
        </ul>
    </section>
</template>

<script setup>
const productStore = useProductStore();
const { getListProducts } = productStore;
const router = useRouter();

// 商品類別
const categoryDoms = ref(null);
const categoryData = computed(() => productStore.categoryData);

const activeCategoryIndex = computed(() => {
    return productStore.activeCategoryIndex;
});

const changeCategoryHandler = (index) => {
    if (index === productStore.activeCategoryIndex || productStore.isProductListFetching === true) return;
    productStore.activeCategoryIndex = index;
    productStore.activeStatusIndex = 0;

    // productStore.pageNum = 1;
    getListProducts();
    updateHighlighter();
    // 用router.replace會觸發整頁生命週期
    history.replaceState({}, "", `/${categoryData.value[index].name}`);
};

const getIconClass = (id) => {
    switch (id) {
        case 'all': 
            return 'icon-star';
        case '169':
            return 'icon-food';
        case '190':
            return 'icon-life';
        case '172':
            return 'icon-book';
        case '193':
            return 'icon-movie';
        default:
            return 'icon-default';
    }
};

const highlightLeft = ref(0);
const highlightWidth = ref(0);
const updateHighlighter = () => {
    highlightLeft.value = categoryDoms.value?.[activeCategoryIndex.value].offsetLeft;
    highlightWidth.value = categoryDoms.value?.[activeCategoryIndex.value].getBoundingClientRect().width;
};

watch(() => categoryData.value, () => {
    setTimeout(() => {
        updateHighlighter();
    }, 10)
})

// 商品進行狀態
// 如果要隱藏其中幾個，可以在 li 上用 v-show="index !== {隱藏的index}"
const statusData = computed(() => productStore.statusData);

const activeStatusIndex = computed(() => {
    return productStore.activeStatusIndex;
});

const changeStatusHandler = (index) => {
    if (index === productStore.activeStatusIndex || productStore.isProductListFetching === true) return;
    productStore.activeStatusIndex = index;

    // productStore.pageNum = 1;
    getListProducts();
};


onMounted(async () => {
    if (categoryData.value.length > 0) {
        await nextTick();
        updateHighlighter();
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/switch';
</style>