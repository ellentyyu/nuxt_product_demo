<template>
    <div
        class="modal fade rank-info"
        ref="rankInfoModalDom"
        tabindex="-1"
        aria-labelledby="rankInfoModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="rankInfoModalLabel">{{ modalData[modalContentType - 1].title }}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body" v-html="modalData[modalContentType - 1 ].content">
                </div>
                <div class="modal-footer" v-if="modalContentType === 2">
                    <button
                        type="button"
                        class="btn-primary-orange" 
                        @click="pixgoHandler"
                    >
                        <i></i>
                        前往旅行家
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    modalContentType:  Number
});

const rankInfoModal = ref('');
const rankInfoModalDom = ref(null);

const showRankInfoModal = () => {
    rankInfoModal.value.show();
};

const modalData = ref([
    {
        title: '如何獲得積分',
        content: `<p>
                    <span>1.參加旅行家活動：</span> 
                    報名入選並發表試用文章，每篇文章可獲得<em>800</em>積分。真實體驗，一年內不刪除，即可積分入袋。<br />
                    <br />
                    <span>2.文章PV達標：</span>
                    在文章發表後<em>3個月內</em>，達到200次瀏覽即獲得<em>200</em>積分。我們珍視您的每一位讀者，拒絕灌水，積分更有價值。<br />
                    <br />
                    <span>3.指定主題投稿：</span>
                    根據指定主題撰寫並提交文章，通過審核後立即獲得積分，讓您的創意無限延伸。<br />
                    <br />
                    <span>4.編輯主動徵選：</span>
                    精彩文章經編輯徵選刊登，即可再獲<em>200</em>積分。<br />
                    <br />
                </p>`
    },
    {
        title: '旅行家介紹',
        content: `<p>
                    您辛勤寫作積累的積分，將自動轉換為旅行購物金（Pixgo Coin），在孤獨旅遊商城上使用。<em>200積分=1 Pixgo Coin</em>，優惠換購精選好商品，讓您的努力化為實際回饋。<br />
                    <br />
                    <span>活動亮點：</span>
                    1.輕鬆積分，實際回饋： 每一篇真實的體驗，每一次精心的分享，都是積分獲取的機會。<br />
                    2.透明制度，公平公正： 拒絕灌水，積分無憂，保障您的創作價值。<br />
                    3.兌換靈活，有效期長： 積分有效期一年，靈活使用，盡情兌換。<br />
                    <br />
                    <span>違規處理：</span>
                    1.錯誤或惡意文章： 不予積分，情節嚴重者將列入黑名單或停權。<br />
                    2.灌水行為： 一經核實，立即取消該文章的積分，並視情節列入黑名單或停權。<br />
                    3.立即加入旅行家鐵人賽，讓每一篇文章都成為您的價值所在，積分變現，購物無憂！<br />
                </p>`
    }
]);

const pixgoHandler = () => {
    window.open('https://google.com');
};

onMounted(() => {
    const { $bootstrap } = useNuxtApp()
    const { Modal } = $bootstrap;
    rankInfoModal.value = new Modal(rankInfoModalDom.value);
});

onBeforeUnmount(() => {
    rankInfoModal.value.hide();
});

defineExpose({
    showRankInfoModal
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/modal';
</style>