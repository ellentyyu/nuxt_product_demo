<template>
    <div class="mainproduct">
        <div class="custom-container">
            <div class="mainproduct__wrapper">
                <ProductPageProductImgSwiper
                    v-if="
                        mainProductData.images.length > 0 ||
                        mainProductData.videos[0]
                    "
                />
                <img
                    v-else
                    :src="checkImageValid(mainProductData.image)"
                    class="mainproduct__img"
                    @error="imgError($event.target)"
                    alt="product image"
                />
                <!-- 桌機版 -->
                <div class="mainproduct__body">
                    <h1>{{ mainProductData.name }}</h1>
                    <div
                        v-if="mainProductData.status === '1'"
                        class="mainproduct__highlight-wrapper"
                    >
                        <i></i>
                        <p>{{ highlightText }}</p>
                    </div>
                    <div
                        v-else-if="isEndWithArticle"
                        class="mainproduct__highlight-wrapper is-end"
                    >
                        <i></i>
                        <p>{{ highlightText }}</p>
                    </div>
                    <ul class="mainproduct__list-wrapper">
                        <template v-if="mainProductData.show_trial_exp !== '1'">
                            <li>
                                <h3>報名時間</h3>
                                <p>
                                    {{ mainProductData.show_at }}
                                </p>
                            </li>
                            <li>
                                <h3>截止時間</h3>
                                <p>
                                    {{ mainProductData.hide_at }}
                                </p>
                            </li>
                            <li>
                                <h3>規格/市價</h3>
                                <p>
                                    {{ mainProductData.note1 }} / NT${{
                                        mainProductData.price
                                    }}
                                </p>
                            </li>
                            <li>
                                <h3>報名資格</h3>
                                <p>限孤獨旅遊註冊會員</p>
                            </li>
                            <li class="try-count">
                                <h3>免費體驗</h3>
                                <p>
                                    <span>{{ mainProductData.try_count }}</span>
                                    份
                                </p>
                            </li>
                            <li>
                                <h3>參加人數</h3>
                                <p>{{ mainProductData.try_join_count }} 人</p>
                            </li>
                            <li
                                v-if="
                                    memoNum > 0 &&
                                    mainProductData.status !== '-1'
                                "
                                class="memos"
                            >
                                <h3>試用重點</h3>
                                <div class="mainproduct__memos-wrapper">
                                    <template v-for="(memo, index) in 4">
                                        <div
                                            v-if="
                                                mainProductData[
                                                    `memo${index + 1}`
                                                ]
                                            "
                                            :key="memo + index"
                                            class="mainproduct__memo"
                                        >
                                            <div class="icon-wrapper">
                                                <i
                                                    :class="`icon-${index + 1}`"
                                                ></i>
                                            </div>
                                            <p class="content">
                                                {{
                                                    mainProductData[
                                                        `memo${index + 1}`
                                                    ]
                                                }}
                                            </p>
                                        </div>
                                    </template>
                                </div>
                            </li>
                        </template>
                        <template v-else>
                            <li class="ratings">
                                <h3>評測總評</h3>
                                <ProductPageRatingChart />
                            </li>
                            <li class="ratings">
                                <h3>心得總整理</h3>
                                <div class="rating__container review">
                                    <p class="rating__review-all">
                                        {{ mainProductData.tryget }}
                                    </p>
                                </div>
                            </li>
                        </template>
                    </ul>
                    <div class="btn-wrapper">
                        <button
                            class="btn-primary-orange"
                            type="button"
                            @click.stop="signupHandler"
                            :disabled="
                                mainProductData.status !== '1' &&
                                route.query.preview !== '1'
                            "
                        >
                            {{ btnStatusText }}
                        </button>
                    </div>
                </div>
                <!-- 手機版 -->
                <div class="mainproduct__body-mobile">
                    <div
                        v-if="mainProductData.status === '1'"
                        class="mainproduct__highlight-wrapper"
                    >
                        <i></i>
                        <p>{{ highlightText }}</p>
                    </div>
                    <div
                        v-else-if="isEndWithArticle"
                        class="mainproduct__highlight-wrapper is-end"
                    >
                        <i></i>
                        <p>{{ highlightText }}</p>
                    </div>
                    <div
                        v-if="memoNum > 0 && mainProductData.status !== '-1'"
                        class="mainproduct__memos-wrapper"
                        :class="{ 'flex-between': memoNum === 4 }"
                    >
                        <template v-for="(memo, index) in 4">
                            <div
                                v-if="mainProductData[`memo${index + 1}`]"
                                :key="memo + index"
                                class="mainproduct__memo"
                            >
                                <div class="icon-wrapper">
                                    <i :class="`icon-${index + 1}`"></i>
                                </div>
                                <p class="content">
                                    {{ mainProductData[`memo${index + 1}`] }}
                                </p>
                            </div>
                        </template>
                    </div>
                    <div class="mainproduct__content-mobile">
                        <h2>{{ mainProductData.name }}</h2>
                        <div class="mainproduct__join-count-mobile">
                            <i></i>
                            <p>
                                參加人數{{ mainProductData.try_join_count }}人
                            </p>
                        </div>
                        <ul class="mainproduct__list-wrapper">
                            <!-- 這段跟桌機邏輯不一樣 -->
                            <template v-if="mainProductData.status !== '-1'">
                                <li>
                                    <h3>規格/市價</h3>
                                    <p>
                                        {{ mainProductData.note1 }} / NT${{
                                            mainProductData.price
                                        }}
                                    </p>
                                </li>
                                <li class="try-count">
                                    <h3>免費體驗</h3>
                                    <p>
                                        <span>{{
                                            mainProductData.try_count
                                        }}</span>
                                        份
                                    </p>
                                </li>
                            </template>
                            <template
                                v-if="mainProductData.show_trial_exp === '1'"
                            >
                                <li class="ratings">
                                    <h3>評測總評</h3>
                                    <div class="rating__container">
                                        <p class="rating__review-all">
                                            {{ mainProductData.tryget }}
                                        </p>
                                    </div>
                                </li>
                                <li class="ratings">
                                    <h3>心得總整理</h3>
                                    <ProductPageRatingChart />
                                </li>
                            </template>
                        </ul>
                    </div>
                    <div class="btn-wrapper">
                        <button
                            class="btn-primary-orange"
                            type="button"
                            @click="signupHandler"
                            :disabled="
                                mainProductData.status !== '1' &&
                                route.query.preview !== '1'
                            "
                        >
                            {{ btnStatusText }}
                        </button>
                        <button
                            class="btn-share"
                            type="button"
                            @click="shareHandler"
                        >
                            <i></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import defaultImg from '@/assets/images/img-product-default.png';

const emit = defineEmits(['signup']);

const route = useRoute();
const productStore = useProductStore();
const mainProductData = computed(() => productStore.mainProductData);

// 報名
const signupHandler = () => {
    emit('signup');
};

const btnStatusText = computed(() => {
    switch (mainProductData.value.status) {
        case '1':
            return '立即參加';
        case '0':
            return '即將開始';
        case '-1':
            return '已結束';
        default:
            return '';
    }
});

// ui
const checkImageValid = (image) => {
    return image ? image : defaultImg;
};

const imgError = (imgTag) => {
    imgTag.src = defaultImg;
};

const differenceInDays = computed(() => {
    if (mainProductData.value.status !== '1') return '';

    const endDate = new Date(mainProductData.value?.hide_at.replace(/-/g, '/'));
    const nowDate = new Date();
    const difference = endDate.getTime() - nowDate.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
});

const memoNum = computed(
    () =>
        [
            mainProductData.value.memo1,
            mainProductData.value.memo2,
            mainProductData.value.memo3,
            mainProductData.value.memo4,
        ].filter((memo) => memo !== '').length
);

const isEndWithArticle = computed(
    () =>
        mainProductData.value.status === '-1' &&
        mainProductData.value.online_article_count > 0
);

const highlightText = computed(() =>
    isEndWithArticle.value
        ? `${mainProductData.value.online_article_count}則心得分享`
        : `剩餘${differenceInDays.value}天`
);

// 分享
const shareHandler = () => {
    if (navigator.share) {
        navigator
            .share({
                title: `${mainProductData.value.name} | 一個人的孤獨旅遊`,
                text: `${mainProductData.value.name} | 一個人的孤獨旅遊`,
                url: `https://faketravelllllll${route.path}`,
            })
            .then(() => {
                console.log('Successful share');
            })
            .catch((error) => {
                console.log('Error sharing:', error);
            });
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mainproduct';
@import '@/assets/styles/rating';
</style>
