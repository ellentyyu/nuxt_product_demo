<template>
    <section class="eventnotice">
        <div class="custom-container">
            <div class="section-wrapper">
                <h2 class="section-title observe-section" id="notice">注意事項</h2>
                <div class="eventnotice__wrapper">
                    <div class="eventnotice__body" :class="{ open: isOpen }">
                        <p v-if="props.notice" v-html="notice"></p>
                        <p v-else>
                            ＊注意事項<br />
                            1.報名時請務必填寫正確收件地址，成功錄取將直接發送商品，如因部落客填寫個人資訊錯誤、無法聯繫或是無人收件，造成商品無法順利送達，即自動喪失資格。<br />
                            2.參與本次體驗活動所產出的心得文章，意即同意授權給該品牌行銷宣傳使用，使用範圍包含官方網站、購物平台、活動網頁或其他管道通路作為產品推廣之用。<br />
                            3.條件為"體驗後廠商將收回"之商品，若部落客不願按優惠價購買商品，則必須依規定讓廠商收回，否則廠商將保留法律追訴權。<br />
                            4.報名前請務必確認活動規範，若未完成上述事項，未來將影響您參與【旅行家】活動之權益，敬請留意。<br />
                            5.孤獨旅遊保有最終修改、變更、活動解釋及取消本活動之權利，若有相關異動將會公告於網站，恕不另行通知。<br />
                            6.本活動產品之寄送地址僅限台灣地區。<br />
                        </p>
                    </div>
                    <button
                        type="button"
                        class="btn-notice"
                        @click="isOpen = !isOpen"
                    >
                            {{ btnText }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    notice: String
});
const isOpen = ref(false);
const btnText = computed(() => {
    return isOpen.value === false ? '看更多' : '收合';
});

</script>

<style lang="scss" scoped>
@import '@/assets/styles/event';
</style>