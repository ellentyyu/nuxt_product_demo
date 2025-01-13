<template>
    <div
        class="modal fade signup"
        ref="signupModalDom"
        aria-labelledby="signupModalLabel"
        aria-hidden="true" 
        tabindex="-1"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="signupModalLabel">報名試用</h5>
                <button 
                    type="button"
                    class="btn-close"
                    @click="isShowCancelToast = true"
                    aria-label="Close"
                >
                </button>
            </div>
            <div class="modal-body">
                <div class="modal-step-wrapper">
                    <div class="modal-step active">
                        <span>1</span>
                        <p>試用問卷</p>
                        <div 
                            class="modal-step-bar"
                            :class="{'w-half': signupStep === 1, 'w-full': signupStep === 2}"
                        ></div>
                    </div>
                    <div 
                        class="modal-step"
                        :class="{'active': signupStep === 2}"
                    >
                        <span>2</span>
                        <p>基本資料</p>
                    </div>
                </div>
                <div class="modal-reminder">
                    <p>請先確認「活動內容」後再進行報名，且務必填寫正確資訊，<br />活動小組將於審核通過後直接寄出產品，恕不調整收件資料！</p>
                    <div class="wrapper">
                        <i></i>
                        <p>若參加後未如期完成體驗並公開文章，將列入活動黑名單。</p>
                    </div>
                </div>
                <Transition name="fade" mode="out-in">
                    <ProductPageFormSurvey
                        v-if="signupStep === 1"
                        ref="surveyComponent"
                        @surveyResult="surveyHandler"
                    />
                    <ProductPageFormInfo
                        v-else
                        ref="infoComponent"
                        @infoResult="infoHandler"
                    />
                </Transition>
            </div>
            <div class="modal-footer">
                <div
                    v-if="signupStep === 1 && requiredNum"
                    class="modal-footer__progress"
                >
                    <p class="modal-footer__progress-title">
                        <span>*</span> 必填項目
                    </p>
                    <div class="modal-footer__progress-wrapper">
                        <div class="bar-container">
                            <div
                                class="indicator-bar"
                                :style="{ width: `${surveyProgress}%` }"
                            ></div>
                        </div>
                        <p class="progress-num">{{ filledRequiredNum }} / {{ requiredNum }}</p>
                    </div>
                </div>
                <button
                    type="submit"
                    :form="signupStep === 1 ? 'survey' : 'signupinfo'"
                    class="btn-primary-orange"
                    @click="formClickHandler"
                >
                    {{ signupStep === 1 ? '下一步' : '送出' }}
                </button>
            </div>
            </div>
        </div>
    </div>
    <!-- 送出表單後通知 -->
    <ProductPageToastResult
        :isToastOpen="isShowConfirmToast"
        :isSuccess="isSignupSuccess"
        :toastMessage="signupResult"
        @close-toast="closeToastHandler"
    />
    <!-- 中途離開通知 -->
    <div class="signup-cancel-wrapper" :class="{'active': isShowCancelToast}">
        <div class="signup-cancel">
            <h5>資料尚未填寫完成</h5>
            <p>你正在填寫的資料將會全部清除，你確定要離開嗎？ </p>
            <div class="btn-wrapper">
                <button
                    type="button"
                    class="btn-primary-white-sm"
                    @click="isShowCancelToast = false"
                >
                    繼續填寫
                </button>
                <button
                    type="button"
                    class="btn-primary-orange-sm"
                    @click="cancelHandler"
                >
                    離開
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    productName: String // 只用在pa
})

const emit = defineEmits(['refreshProductData']);

// 彈窗
const signupModal = ref('');
const signupModalDom = ref(null);
const showSignupModal = () => {
    signupModal.value.show();
    // if (infoComponent.value) infoComponent.value.fillMemberData();
};

// 表單切換及送出
const productStore = useProductStore();
const signupStep = ref(1);

const formClickHandler = () => {
    if (signupStep.value === 1) {
        surveyComponent.value.submitSurvey();
    } else {
        infoComponent.value.submitInfoHandler()
    }
};

// 問卷表單
const surveyComponent = ref(null);
const surveyHandler = (isSuccess, message) => {
    if (isSuccess) {
        console.log('問卷成功');
        signupStep.value = 2;
    } else {
        signupResult.value.title = message;
        signupResult.value.message = '出了點小問題，請稍後再試試～';
        isShowConfirmToast.value = true;
    }
};

const requiredNum = computed(() => surveyComponent.value?.requiredQuestions.length);
const filledRequiredNum = computed(() => surveyComponent.value?.filledRequiredNum);
const surveyProgress =  computed(() => requiredNum.value ? Math.round((filledRequiredNum.value / requiredNum.value) * 100) : 0);

// 資料表單
const infoComponent = ref(null);
const infoHandler = (isSuccess, message) => {
    if (isSuccess) {
        isSignupSuccess.value = true;
        signupResult.value.title = '送出成功';
        signupResult.value.message = '感謝您的參與！請留意您的電子郵件，我們將透過郵件向您發送相關通知。';
    } else {
        console.error('info', message);
        signupResult.value.title = '發生錯誤';
        signupResult.value.message = 'Oops! 出了點小問題，請稍後再試試～';
    }
    isShowConfirmToast.value = true;
    signupModal.value.hide();
    signupStep.value = 1;
};

// 送出或取消後通知
const isShowConfirmToast = ref(false);
const isShowCancelToast = ref(false);

const isSignupSuccess = ref(false);
const signupResult = ref({});

const closeToastHandler = () => {
    isShowConfirmToast.value = false;
};

const cancelHandler = () => {
    isShowCancelToast.value = false;
    signupModal.value.hide();
    // 清空表單
    if (surveyComponent.value) surveyComponent.value.initAnswers();
    else if (infoComponent.value) infoComponent.value.clearSignupForm();

    signupStep.value = 1;
};


onMounted(() => {
    const { $bootstrap } = useNuxtApp()
    const { Modal } = $bootstrap;
    signupModal.value = new Modal(signupModalDom.value, {backdrop: 'static'});

    signupModalDom.value.addEventListener('hidePrevented.bs.modal', () => {
        isShowCancelToast.value = true;
    });
});

onBeforeUnmount(() => {
    signupModal.value.hide();
});

defineExpose({
    showSignupModal
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/modal';

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>