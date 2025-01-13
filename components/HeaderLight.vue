<template>
    <header class="header">
        <div class="header__wrapper">
            <NuxtLink
                class="header__logo"
                to="/"
            >
                <h1>Lonely Travel</h1>
            </NuxtLink>
            <div class="header__pagelink-wrapper">
                <NuxtLink
                    class="header__pagelink"
                    :class="{ active: selectedPage === 1 }"
                    to="/"
                >
                    尋找下一個目的地
                </NuxtLink>
                <NuxtLink
                    class="header__pagelink ranking"
                    :class="{ active: selectedPage === 2 }"
                    to="/ranking"
                >
                    <i></i>
                    排行榜
                </NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const selectedPage = ref(0);
const checkRoute = () => {
    if (!route.params.productId && route.path !== '/ranking') {
        selectedPage.value = 1;
    } else if (route.path === '/ranking') {
        selectedPage.value = 2;
    } else {
        selectedPage.value = 0;
    }
};

const toNewPath = (pageNum, path) => {
    selectedPage.value = pageNum;
    router.push(path);
};
watch(
    () => route.path,
    () => {
        checkRoute();
    }
);

onMounted(() => {
    checkRoute();
});
</script>

<style lang="scss" scoped>
.header {
    padding: 8px;
    background-color: #fff;

    @media (max-width: 767px) {
        padding: 6px 8px;
    }

    &__wrapper {
        display: flex;
        align-items: center;
    }

    &__logo {
        margin-right: 8px;
        padding: 10px 8px;

        h1 {
            font-weight: 500;
            @include fs-18;
            color: #6321e6;
        }

        img {
            width: 62px;
            height: 28px;
        }
    }

    &__pagelink-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 16px;

        &::before {
            content: '';
            position: absolute;
            top: 1px;
            left: 0;
            width: 1px;
            height: 36px;
            background-color: #f5f5f5;
        }
    }

    &__pagelink {
        padding: 8px 16px;
        border: #ededed 1px solid;
        border-radius: 20px;
        font-weight: 500;
        @include fs-14;
        color: #424242;
        transition: background-color 0.3s;

        &:hover {
            background-color: #f5f5f5;

            @media (max-width: 767px) {
                background-color: #fff;
            }
        }

        &.active {
            // background-image: linear-gradient(315deg, #ff7a00, #fcb561);
            background-image: linear-gradient(315deg, #5500ff, #a961fc);
            color: #fff;
        }

        &.ranking {
            display: flex;
            align-items: center;
            margin-left: 12px;

            i {
                width: 16px;
                height: 16px;
                margin-right: 4px;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url('@/assets/images/icon-ranking-pagelink.svg');
            }

            &.active {
                i {
                    background-image: url('@/assets/images/icon-ranking-pagelink-active.svg');
                }
            }
        }
    }
}
</style>
