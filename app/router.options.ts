import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig> {
    scrollBehavior (to, from, savedPosition) {
        // 從商品頁回首頁時，回到之前瀏覽的位置
        // 不用setTimeout有時會出現直接滾到底，導致連續取列表資料的問題
        if (to.params.category && !to.params.productId && savedPosition) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({
                        ...savedPosition, 
                        behavior: 'instant'
                    })
                }, 100)
            })
        }
        if (to.hash) {            
            return new Promise((resolve) => {
                setTimeout(() => {   
                    resolve({
                        el: document.getElementById(to.hash.replace('#', '')),
                        top: 80,
                        behavior: 'smooth'
                    })
                }, 200)
            })
        }
        // scroll to top
        return { top: 0 }
    }
}