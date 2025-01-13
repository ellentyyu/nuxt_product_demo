import { defineStore } from 'pinia'
import { ref, computed } from 'vue';

export const useLoginStore = defineStore('login', () => {
    const signupErrorTitle = ref('');
    const signupErrorMessage = computed(() => {
        switch (signupErrorTitle.value) {
            case '您已經報名過了':
                return '已參加過摟！看看其他熱門活動吧！';
            case '會員沒有開通部落格':
            case '會員部落格關閉中':
                return '親愛的使用者，參加活動需請您開啟部落格網址並設為公開';
            default:
                return 'Oops! 出了點小問題，請稍後再試試～';
        }
    });

    return { signupErrorTitle, signupErrorMessage }
})