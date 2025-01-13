<template>
    <div
        class="modal fade terms"
        ref="termsModalDom"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="termsModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="termsModalLabel">同意書</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <p>
                        【個資法條款內容】<br />
                        1. 為提供訂購、行銷、客戶管理或其他合於營業登記項目或章程所定業務需要之目的，優像數位媒體科技股份有限公司(孤獨旅遊)，於本公司之營運期間及地區內，將以mail、傳真、電話、簡訊、郵寄或其他公告方式利用您提供之資料，並將前述資料提供予合作機構為前述利用。如您有依個資法第三條或其他需服務之處，得發信至本公司客服信箱：lonelytravellll@travel.tw 請求協助。相關資料如為非必填項目，不提供亦不影響您的權益。<br />
                        2.孤獨旅遊擁有該活動問卷填寫結果之使用權，得運用於孤獨旅遊官方網站、Facebook粉絲專頁，或電影相關活動宣傳之用。<br />
                        3. 倘若您因未履行以上相關配合事項，恐將無法繼續參與未來孤獨旅遊所舉辦之任何專案。<br />
                        4. 本活動注意事項載明於活動網頁中，參加者於參加本活動之同時，即同意接受本活動注意事項之規範。如有違反本活動注意事項之行為, 主辦單位得取消其參加或得獎資格，並對於任何破壞本活動之行為保留相關權利。<br />
                        5. 參加者保證所有填寫或提出之資料均為真實且正確，且未冒用或盜用任何第三人之資料或智慧財產權。如有不實或不正確之情事，將被取消參加資格；如為得獎者，則取消得獎資格。如因此致主辦單位無法通知其得獎訊息時，主辦單位不負任何責任，且如有致損害於主辦單位或其他任何第三人，參加者應負一切民刑事責任。<br />
                    </p>
                </div>
                <div class="modal-footer">
                    <div class="btn-wrapper">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                v-model="isAgree"
                                id="flexCheckDefault"
                            >
                            <label class="form-check-label" for="flexCheckDefault">
                                我同意個資法條款，並確認報名此活動
                            </label>
                        </div>
                        <button
                            type="button"
                            class="btn-primary-orange" 
                            @click="agreeTermsHandler"
                            :disabled="!isAgree"
                        >
                            下一步
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['agreeTerms']);

const termsModal = ref('');
const termsModalDom = ref(null);

const isAgree = ref(false);

const showTermsModal = () => {
    termsModal.value.show();
};

const agreeTermsHandler = () => {
    termsModal.value.hide();
    emit('agreeTerms');
};

onMounted(() => {
    const { $bootstrap } = useNuxtApp()
    const { Modal } = $bootstrap;
    termsModal.value = new Modal(termsModalDom.value);
    termsModalDom.value.addEventListener('hide.bs.modal', () => {
        isAgree.value = false;
    })
});

onBeforeUnmount(() => {
    termsModal.value.hide();
});

defineExpose({
    showTermsModal
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/modal';
</style>