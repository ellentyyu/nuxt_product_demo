<template>
    <form @submit.prevent id="signupinfo">
        <div class="form-item">
            <label for="username" class="form-label">
                <span>*</span>
                孤獨旅遊部落格網址
            </label>
            <input
                type="text"
                class="form-control"
                placeholder="輸入帳號"
                id="username"
                aria-label="username"
                aria-describedby="username"
                v-model="infoFormData.userName"
                required
                disabled
            >
        </div>
        <div class="form-item">
            <label for="userid" class="form-label">
                <span>*</span>
                孤獨旅遊作者ID
            </label>
            <input
                type="text"
                class="form-control"
                placeholder="輸入帳號"
                id="userid"
                aria-describedby="userid"
                v-model="infoFormData.userId"
                required
                disabled
            >
        </div>
        <div class="form-item">
            <label for="displayname" class="form-label">
                <span>*</span>
                孤獨旅遊作者暱稱
            </label>
            <input
                type="text"
                class="form-control"
                placeholder="輸入暱稱"
                id="displayname"
                v-model="infoFormData.displayName"
                required
                disabled
            >
        </div>
        <div class="form-item">
            <label for="realname" class="form-label">
                <span>*</span>
                真實姓名
            </label>
            <input 
                type="text"
                class="form-control"
                placeholder="輸入姓名"
                id="realname"
                v-model="infoFormData.realname"
                required
            >
        </div>
        <div class="form-item">
            <label for="cellphone" class="form-label">
                <span>*</span>
                手機電話
            </label>
            <input
                type="tel"
                class="form-control"
                placeholder="輸入電話號碼"
                id="cellphone"
                v-model="infoFormData.mobile"
                required
            >
        </div>
        <div class="form-item">
            <label for="address" class="form-label">
                <span>*</span>
                地址(收取試用的地址)
            </label>
            <div class="address-input-wrapper">
                <input
                    type="text"
                    class="form-control"
                    :value="zipCode"
                    disabled
                >
                <select
                    id="city"
                    class="form-select"
                    v-model="infoFormData.city"
                    required
                >
                    <option value="" selected disabled>
                        縣(市)
                    </option>
                    <option v-for="city in cityList" :key="city">{{ city }}</option>
                </select>
                <select
                    id="county"
                    class="form-select"
                    v-model="infoFormData.county"
                    required
                >
                    <option value="" selected disabled>鄉鎮(區)</option>
                    <template v-if="infoFormData.city">
                        <option v-for="county in countyList" :key="county">{{ county }}</option>
                    </template>
                </select>
            </div>
            <input
                type="text"
                class="form-control"
                placeholder="輸入地址"
                id="address"
                v-model="infoFormData.address"
                required
            >
        </div>
        <div class="form-item">
            <label for="email" class="form-label">
                <span>*</span>
                Email
            </label>
            <input 
                type="email"
                ref="emailInputDom"
                class="form-control"
                placeholder="輸入Email"
                id="email"
                v-model="infoFormData.email"
                required
            >
        </div>
    </form>
</template>

<script setup>
import { data as zipData } from '@/assets/data/zip.json';

const productStore = useProductStore();

const route = useRoute();
const emit = defineEmits(['infoResult']);
const emailInputDom = ref(null);

const infoFormData = ref({
    userName: 'http://ichibanchef.blog',
    userId: 'ichibanchef',
    displayName: '中華一番小當家',
    realname: '',
    mobile: '',
    city: '',
    county: '',
    address: '',
    email: ''
});

const cityList = computed(() => {
    return Object.keys(zipData);
});

const countyList = computed(() => {
    return infoFormData.value.city ? Object.keys(zipData[infoFormData.value.city]) : '';
});

const zipCode = computed(() => {
    return infoFormData.value.county ? zipData[infoFormData.value.city][infoFormData.value.county] : '郵遞區號';
});

const checkHasEmptyField = () => {    
    const emptyFields = Object.values(infoFormData.value).filter(field => !field.trim());
    if (emptyFields.length > 0) {
        return true;
    }
    return false;
};

const checkValidEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!regex.test(email)) {
        return '請填寫正確的 email';
    }

    if (email.includes('+')) {
        return 'Email 中請勿使用特殊符號';
    }

    return true;
};

const clearSignupForm = () => {
    infoFormData.value = {
        userName: '',
        userId: '',
        displayName: '',
        realname: '',
        mobile: '',
        city: '',
        county: '',
        address: '',
        email: ''
    }
};

const submitInfoHandler = async () => {   
    if (checkHasEmptyField()) return;
    
    const emailCheckResult = checkValidEmail(infoFormData.value.email);
    if (emailCheckResult !== true) {
        emailInputDom.value.setCustomValidity(emailCheckResult);
        return;
    }

    const formData = new FormData();
    const addressFull = `${zipCode.value} ${infoFormData.value.city}${infoFormData.value.county}${infoFormData.value.address}`;
    formData.append('product_id', route.params.productId);
    formData.append('name', infoFormData.value.realname);
    formData.append('mobile', infoFormData.value.mobile);
    formData.append('address', addressFull);
    formData.append('email', infoFormData.value.email);
    if (productStore.mainProductData.try_questionnaire_id) {
        formData.append('q_result_id', productStore.submittedSurveyId);
    }

    emit('infoResult', true);
}

watch(() => infoFormData.value.city, () => {
    infoFormData.value.county = '';
});

onBeforeUnmount(() => {
    clearSignupForm();
});

defineExpose({
    clearSignupForm,
    submitInfoHandler
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/modal';
</style>