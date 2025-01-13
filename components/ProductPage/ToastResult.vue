<template>
    <div 
        class="toast-result-wrapper"
        :class="{'active': isToastOpen}"
    >
        <div class="toast-result">
            <i
                v-if="isSuccess"
                class="success"
            ></i>
            <h5>{{ toastMessage.title }}</h5>
            <p>{{ toastMessage.message }}</p>
            <!-- <div v-if="isBlogType" class="btn-wrapper">
                <template v-if="!isBlogActivated">
                    <button
                        type="button"
                        class="btn-primary-white-sm"
                        @click="closeHandler"
                    >
                        關閉
                    </button>
                    <button
                        type="button"
                        class="btn-primary-orange-sm"
                        @click="activateBlogHandler"
                    >
                        <i class="activate"></i>
                        立即開通部落格
                    </button>
                </template>
                <button
                    v-else
                    type="button"
                    class="btn-primary-orange-sm"
                    @click="reloadHandler"
                >
                    <i class="reload"></i>
                    已開通，重新整理
                </button>
            </div> -->
            <button
                type="button"
                class="btn-primary-orange-sm"
                @click="closeHandler"
            >
                確定
            </button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    isToastOpen: Boolean,
    isSuccess: Boolean,
    toastMessage: Object
});

const emit = defineEmits(['closeToast']);

const closeHandler = () => {
    emit('closeToast');
};

const reloadHandler = () => {
    window.location.reload();
};
</script>
<style lang="scss" scoped>
@import '@/assets/styles/modal';
</style>