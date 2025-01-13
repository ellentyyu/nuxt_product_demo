<template>
    <section class="ranking">
        <div class="custom-container">
            <div class="ranking__wrapper">
                <div class="ranking__about-wrapper">
                    <div class="ranking__rule-btn-wrapper">
                        <button type="button" class="btn-rule-white" @click="openModal(1)">
                            <i></i>
                            如何獲得積分勳章
                        </button>
                        <button type="button" class="btn-rule-orange" @click="openModal(2)">
                            <i></i>
                            旅行家介紹
                        </button>
                    </div>
                    <div class="ranking__about">
                        <h2>里程積分勳章</h2>
                        <p>持續試用寫文累積積分，將自動轉換成旅行家購物金(Pixgo Coin)，在商城使用</p>
                    </div>
                    <div class="ranking__level-wrapper">
                        <template  
                            v-for="(level, index) in levelData"
                            :key="level.icon"
                        >
                            <div class="ranking__level">
                                <img :src="level.icon" alt="">
                                <p>總積分達 {{ level.point }}</p>
                            </div>
                            <i 
                                v-if="index !== 3"
                                class="icon-double-arrow"
                            ></i>
                        </template>
                    </div>
                </div>
                <div class="ranking__card-wrapper">
                    <div
                        v-for="(rank, index) in rankingData"
                        :key="rank.blog_name + index"
                        class="ranking__card"
                    >
                        <a
                            class="ranking__blogger"
                            :class="{'champion': index === 0}"
                            :href="rank.article?.author?.link"
                            target="_blank"
                        >
                            <i
                                v-if="index < 3"
                                class="icon-medal"
                                :style="`background-image: url(${getMedalIcon(index)})`"
                            >
                            </i>
                            <p
                                v-else
                                class="no-medal-text"
                            >{{ index + 1 }}</p>
                            <img
                                :src="rank.article?.author?.avatar"
                                alt="author image"
                            />
                            <div class="ranking__blogger-body">
                                <i
                                    class="icon-badge"
                                    :style="`background-image: url(${getBadgeIcon(rank.title)})`"
                                ></i>
                                <div class="ranking__blogger-name">
                                    <h3>{{ rank.display_name }}</h3>
                                    <i></i>
                                </div>
                                <p class="try-count">已試用 {{ rank.article_count }} 個商品</p>
                            </div>
                        </a>
                        <a
                            class="ranking__article"
                            :href="rank.article?.link"
                            target="_blank"
                        >
                            <div class="ranking__article-body">
                                <img
                                    :src="checkImageValid(rank.article?.image)"
                                    alt="article image"
                                    @error="imgError($event.target)"
                                />
                                <div class="ranking__article-content">
                                    <h3 v-html="rank.article?.title"></h3>
                                    <p>{{ rank.article?.content }}</p>
                                </div>
                            </div>
                            <p class="try-count">已試用 {{ rank.article_count }} 個商品</p>
                        </a>
                    </div>
                    <div
                        class="read-more-wrapper"
                       
                    >
                        <div
                            v-if="isRankLoading"
                            class="loading-wrapper"
                            :class="{'initial-loading': rankingData.length === 0}"
                        >
                            <div class="icon-container">
                                <div class="loading-icon perpetuum-mobile"></div>
                            </div>
                            <p>載入中...</p>
                        </div>

                        <div
                            v-else-if="!isRankLoading && rankingData.length > 0"
                            class="btn-wrapper"
                        >
                            <button
                                type="button"
                                class="btn-load-more"
                                @click="loadMoreHandler"
                            >
                                看更多
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <RankingPageRankInfoModal ref="rankInfoModalComponent" :modalContentType="modalContentType" />
</template>
<script setup>
// 部落客頭上的小金銀銅牌
import goldIcon from '@/assets/images/icon-medal-gold.svg';
import silverIcon from '@/assets/images/icon-medal-silver.svg';
import bronzeIcon from '@/assets/images/icon-medal-bronze.svg';
// 部落客的頭銜
import badgeIcon1 from '@/assets/images/icon-ranking-badge-1.svg';
import badgeIcon2 from '@/assets/images/icon-ranking-badge-2.svg';
import badgeIcon3 from '@/assets/images/icon-ranking-badge-3.svg';
import badgeIcon4 from '@/assets/images/icon-ranking-badge-4.svg';
// 積分等級獎章
import levelIcon1 from '@/assets/images/icon-level-1.svg';
import levelIcon2 from '@/assets/images/icon-level-2.svg';
import levelIcon3 from '@/assets/images/icon-level-3.svg';
import levelIcon4 from '@/assets/images/icon-level-4.svg';
// 預設圖
import defaultImg00 from '@/assets/images/img-default-00.png';
import defaultImg01 from '@/assets/images/img-default-01.png';
import defaultImg02 from '@/assets/images/img-default-02.png';

const levelData = [
    {
        point: '10,000',
        icon: levelIcon1
    }, 
    {
        point: '20,000',
        icon: levelIcon2
    }, 
    {
        point: '50,000',
        icon: levelIcon3
    }, 
    {
        point: '100,000',
        icon: levelIcon4
    }
];

const rankingData = ref([]);
// 過濾掉無文章、鎖文、外部連結

const isRankLoading = ref(false);

// 圖片錯誤處理
const imgError = (imgTag) => {
    imgTag.src = randomDefaultImage();
};
const defaultImages = [defaultImg00, defaultImg01, defaultImg02];
const randomDefaultImage = () => defaultImages[Math.floor(Math.random() * 3)];
const checkImageValid = (image) => {
    return image? image: randomDefaultImage();
};

// 彈窗
const rankInfoModalComponent = ref(null);
const modalContentType = ref(1);
const openModal = (type) => {
    modalContentType.value = type;
    rankInfoModalComponent.value.showRankInfoModal();
};

const getMedalIcon = (index) => {    
    switch (index) {
        case 0: 
            return goldIcon;
        case 1:
            return silverIcon;
        case 2:
            return bronzeIcon;
    }
};

const getBadgeIcon = (title) => {
    if (title.includes('Lv.1')) {
        return badgeIcon1;
    } else if (title.includes('Lv.2')) {
        return badgeIcon2;
    } else if (title.includes('Lv.3')) {
        return badgeIcon3;
    } else if (title.includes('Lv.4')) {
        return badgeIcon4;
    } else {
        return badgeIcon1;
    }
};

const getRankingData = async () => {
   try {
        isRankLoading.value = true;
        const rank = await $fetch('/rankingData');
        rankingData.value.push(...rank);
    } catch (error) {
        console.error(error);
    } finally {
        isRankLoading.value = false;
    }
};

const loadMoreHandler = () => {
    getRankingData();
};

onMounted(() => {
    getRankingData();
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/ranking';

</style>