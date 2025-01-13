<template>
    <div class="eventsteps">
        <div class="custom-container">
            <div class="section-wrapper">
                <h2
                    class="section-title observe-section"
                    id="step"
                >活動流程</h2>
                <img
                    class="eventsteps__img"
                    :src="imgSteps"
                    alt="event steps"
                >
                <img
                    class="eventsteps__img-mb"
                    :src="imgStepsMb"
                    alt="event steps"
                >
            </div>
        </div>
    </div>
</template>

<script setup>
import imgSteps from '@/assets/images/img-steps-white.webp';
import imgStepsMb from '@/assets/images/img-steps-white-mb.webp';
</script>


<style lang="scss" scoped>
@import '@/assets/styles/event';
</style>