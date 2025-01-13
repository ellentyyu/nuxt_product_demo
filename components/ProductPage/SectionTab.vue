<template>
    <div
        class="tab"
        ref="tabComponent"
    >
        <ul class="tab__wrapper" @scroll="scrollHandler">
            <template v-for="(tab, index) in tabData" :key="tab + index">
                <li
                    class="tab__link"
                    ref="sectionName"
                    @click="clickTabHandler(index, tab.section)"
                >
                    <router-link
                        :to="`/${route.params.category}/${route.params.productId}#${tab.section}`"
                        replace
                        :class="{ active: activeIndex === index }"
                    >
                        {{ tab.tabName }}
                    </router-link>
                </li>
            </template>
        </ul>
        <div
            class="tab__highlighter"
            :style="{ left: `${tabLeft}px`, width: `${tabWidth}px` }"
            v-show="isTabShow"
        ></div>
    </div>
</template>

<script setup>
const props = defineProps({
    activeSection: String
});

const route = useRoute();

const tabData = ref([
    {
        tabName: '試用分享',
        section: 'review'
    },
    {
        tabName: '活動流程',
        section: 'step'
    },
    {
        tabName: '活動內容',
        section: 'content'
    },
    {
        tabName: '參加規則',
        section: 'rule'
    },
    {
        tabName: '注意事項',
        section: 'notice'
    }
]);

const sectionName = ref(null);
const activeIndex = ref(0);
const tabLeft = ref(0);
const tabWidth = ref(0);
const isTabShow = ref(false);

watch(() => props.activeSection, (value) => {
    let index = tabData.value.findIndex(tab => tab.section === value);
    activeIndex.value = index;
    updateHighlighter();
})


const resizeHandler = () => {
    setTimeout(() => {
        updateHighlighter();
    }, 10);
};

const clickTabHandler = (index) => {
    if (index === activeIndex.value) return;
    activeIndex.value = index;
    updateHighlighter();
};

const updateHighlighter = () => {
    tabLeft.value = sectionName.value[activeIndex.value].getBoundingClientRect().left;
    tabWidth.value = sectionName.value[activeIndex.value].getBoundingClientRect().width;
};

const scrollHandler = () => {
    updateHighlighter();
}

const tabComponent = ref(null);
const observerCallback = (entries) => {
    entries[0].target.classList.toggle('is-sticky', entries[0].intersectionRatio < 1);
};
const observer = ref(null);

onMounted(() => {
    observer.value = new IntersectionObserver(observerCallback, { 
        threshold: 1
    });
    observer.value.observe(tabComponent.value);
    window.addEventListener('resize', resizeHandler);
    updateHighlighter();
    isTabShow.value = true;
});

onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler);
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/tab';
</style>