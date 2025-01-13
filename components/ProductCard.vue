<template>
    <div class="product__card">
        <div @click="toNewPath(product.id)">
            <div class="product__img-wrapper">   
                <CardImgSwiper 
                    v-if="product.images.length || product.videos[0]"
                    :imgData="imgWithVideo"
                />
                <div
                    v-else
                    class="product__card-img-single"
                >
                    <img
                        :src="checkImageValid(product.image)"
                        @error="imgError($event.target)"
                        alt="product image"
                    >
                </div>
                <div
                    class="status-tag"
                    :class="{
                        'up-coming': productStatus === '0',
                        'is-end': productStatus === '-1' && product.online_article_count !== '0',
                        'is-end-no-article': productStatus === '-1' && product.online_article_count === '0'
                    }"
                >
                    <i v-if="productStatus === '-1'"></i>
                    <p>{{ imgStatusText }}</p>
                </div>
            </div>
            <div class="product__body">
                <div class="product__info">
                    <div class="product__detail-wrapper">
                        <div
                            class="product__date-wrapper"
                            :class="{'not-current': productStatus !== '1'}"
                        >
                            <i></i>
                            <p>{{ bodyStatusText }}</p>
                        </div>
                        <span>{{ product?.try_join_count }}人參加</span>
                    </div>
                    <h3 class="product__title">{{ product?.name }}</h3>
                </div>
                <ul class="product__utils">
                    <template v-if="productStatus !== '-1'">
                        <li>
                            <div
                                @click.stop="toNewPath(product.id)"
                                class="product__utils-btn"
                            >
                                <i class="join"></i>
                                <p>立即參加</p>
                            </div>
                        </li>
                        <li class="content">
                            <div
                                @click.stop="toNewPath(`${product.id}#content`)"
                                class="product__utils-btn"
                            >
                                <i class="content"></i>
                                <p>活動內容</p>
                            </div>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <div
                                @click.stop="toNewPath(`${product.id}#review`)"
                                class="product__utils-btn wide"
                            >
                                <i class="heart"></i>
                                <p>試用心得</p>
                                <p v-if="product.online_article_count !== '0'" class="review-count">({{ product.online_article_count }})</p>
                            </div>
                        </li>
                    </template>
                    <li class="buy">
                        <div
                            @click.stop="toNewPath(`${product.id}#shop`)"
                            class="product__utils-btn buy"
                            :class="{'wide' : productStatus === '-1'}"
                        >
                            <i class="buy"></i>
                            <p class="buy">前往購買</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    product: Object
});

const productStatus = computed(() => props.product?.status);

const differenceInDays = computed(() => {
    if (productStatus.value !== '1') return '';

    const endDate = new Date(props.product?.hide_at.replace(/-/g, '/'));
    const nowDate = new Date();
    const difference = endDate.getTime() - nowDate.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
});

const imgData = computed(() => {
    if (props.product.images.length > 0) {
        return props.product.images.filter(img => img.in_title === '1');
    } else {
        return [{
            link: '',
            src: props.product.image
        }];
    }
});
const videoData = computed(() => props.product.videos[0]);
const imgWithVideo = computed(() => {
    const copiedArray = [...imgData.value];
    if (videoData.value !== undefined) copiedArray.splice(1, 0, videoData.value);
    return copiedArray;
});

const imgStatusText = computed(() => {
    switch (true) {
        case (productStatus.value === '1'):
            return '招募中';
        case (productStatus.value === '0'):
            return '即將開始';
        case (productStatus.value === '-1' && props.product.online_article_count !== '0'):
            return `${props.product.online_article_count} 則心得出爐`;
        case (productStatus.value === '-1' && props.product.online_article_count === '0'):
            return '嚴選心得審核中，敬請期待！';
        default:
          return '';
    }
});

const bodyStatusText = computed(() => {
    switch (productStatus.value) {
        case '1':
          return `剩餘${differenceInDays.value}天`;
        case '0':
          return '即將開始';
        case '-1':
          return '已截止';
        default:
          return '';
    }
});

const checkImageValid = (image) => {
    return image? image: require(`@/assets/images/img-product-default.png`);
};

const imgError = (imgTag) => {
    imgTag.src = require(`@/assets/images/img-product-default.png`);
};

// app
const router = useRouter();

const toNewPath = (id) => {
    router.push(`product/${id}`);
}

</script>

<style lang="scss" scoped>
@import '@/assets/styles/product';
</style>