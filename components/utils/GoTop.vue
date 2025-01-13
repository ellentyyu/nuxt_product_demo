<template>
    <div class="gotop">
        <div class="gotop__wrapper">
            <div class="gotop__body" @click.prevent="scrollTop">
                <img
                    src="@/assets/images/icon-arrow-gray.svg"
                    alt="scroll top icon"
                />
            </div>
        </div>
    </div>
</template>
<script setup>
const scrollTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });
};
</script>