import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$2, b as _sfc_main$7, a as __nuxt_component_1$1 } from './GoHome-CnSjsxHq.mjs';
import { u as useProductStore } from './product-ClJcjqyv.mjs';
import { computed, withCtx, createVNode, useSSRContext, mergeProps, unref, openBlock, createBlock, Fragment, renderList, ref, toDisplayString, watch, createCommentVNode, onUnmounted } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { c as useRoute, u as useRouter, _ as _export_sfc, e as __nuxt_component_0$1$1 } from './server.mjs';
import { u as useHead, a as useSeoMeta } from './index-DIUDACRG.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$6 = {
  __name: "BannerSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Navigation, Autoplay];
    const productStore = useProductStore();
    const bannerData = computed(() => productStore.bannerData);
    const doubleBannerData = computed(() => [...bannerData.value, ...bannerData.value]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner" }, _attrs))} data-v-c970e3c4>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        loop: true,
        observer: true,
        "centered-slides": true,
        "slides-per-view": "auto",
        "slides-per-group": 1,
        breakpoints: {
          320: {
            spaceBetween: 8
          },
          1023: {
            spaceBetween: 16
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 5e3,
          disableOnInteraction: false,
          waitForTransition: false
        },
        class: "nav-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(doubleBannerData), (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: image.link + index,
                tag: "a",
                href: image.link,
                target: "_blank"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", image.image)} alt="banner image" data-v-c970e3c4${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: image.image,
                        alt: "banner image"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--><div class="control-wrapper" data-v-c970e3c4${_scopeId}><div class="swiper-button-prev" data-v-c970e3c4${_scopeId}><div class="btn-prev-white" data-v-c970e3c4${_scopeId}></div></div><div class="swiper-button-next" data-v-c970e3c4${_scopeId}><div class="btn-next-white" data-v-c970e3c4${_scopeId}></div></div></div><div class="slide-mask-left" data-v-c970e3c4${_scopeId}></div><div class="slide-mask-right" data-v-c970e3c4${_scopeId}></div>`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(doubleBannerData), (image, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: image.link + index,
                  tag: "a",
                  href: image.link,
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: image.image,
                      alt: "banner image"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128)),
              createVNode("div", { class: "control-wrapper" }, [
                createVNode("div", { class: "swiper-button-prev" }, [
                  createVNode("div", { class: "btn-prev-white" })
                ]),
                createVNode("div", { class: "swiper-button-next" }, [
                  createVNode("div", { class: "btn-next-white" })
                ])
              ]),
              createVNode("div", { class: "slide-mask-left" }),
              createVNode("div", { class: "slide-mask-right" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BannerSwiper.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c970e3c4"]]);
const _sfc_main$5 = {
  __name: "CarouselSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    ref(null);
    const modules = [Autoplay];
    const carouselData = ref([
      {
        "alert": "\u7126\u9EDE",
        "title": "\u3010\u89AA\u5B50\u5B30\u5E7C\u7528\u54C1\u5927\u79AE\u5305\u3011\u8B93\u6211\u5011\u4F86\u7576 \u65B0\u624B\u7238\u5ABD/\u591A\u5BF6\u7238\u5ABD \u7684\u795E\u968A\u53CB\uFF01 \u5269\u9918724\u5929",
        "link": "https://google.com"
      },
      {
        "alert": "\u7126\u9EDE",
        "title": "\u3010\u5BF5\u7269\u98FC\u6599\u9AD4\u9A57\u5305\u3011\u5403\u5F97\u5065\u5EB7\uFF0C\u6EFF\u8DB3\u6BDB\u5C0F\u5B69\u7684\u6BCF\u4E00\u500B\u9700\u6C42",
        "link": "https://google.com"
      },
      {
        "alert": "\u7126\u9EDE",
        "title": "\u3010\u7F8E\u98DF\u63A2\u5E97\u9A5A\u559C\u5305\u3011\u591A\u5BB6\u795E\u79D8\u77E5\u540D\u9910\u5EF3\uFF0C\u7B49\u8457\u5404\u8DEF\u5403\u8CA8\u4F86\u5690\u9BAE",
        "link": "https://google.com"
      },
      {
        "alert": "\u7126\u9EDE",
        "title": "\u3010\u89AA\u5B50\u5B30\u5E7C\u7528\u54C1\u5927\u79AE\u5305\u3011\u8B93\u6211\u5011\u4F86\u7576 \u65B0\u624B\u7238\u5ABD/\u591A\u5BF6\u7238\u5ABD \u7684\u795E\u968A\u53CB\uFF01 \u5269\u9918724\u5929",
        "link": "https://google.com"
      },
      {
        "alert": "\u7126\u9EDE",
        "title": "\u3010\u5BF5\u7269\u98FC\u6599\u9AD4\u9A57\u5305\u3011\u5403\u5F97\u5065\u5EB7\uFF0C\u6EFF\u8DB3\u6BDB\u5C0F\u5B69\u7684\u6BCF\u4E00\u500B\u9700\u6C42",
        "link": "https://google.com"
      },
      {
        "alert": "\u7126\u9EDE",
        "title": "\u3010\u7F8E\u98DF\u63A2\u5E97\u9A5A\u559C\u5305\u3011\u591A\u5BB6\u795E\u79D8\u77E5\u540D\u9910\u5EF3\uFF0C\u7B49\u8457\u5404\u8DEF\u5403\u8CA8\u4F86\u5690\u9BAE",
        "link": "https://google.com"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "carousel" }, _attrs))} data-v-d4a6dab6><div class="carousel__wrapper" data-v-d4a6dab6><!--[-->`);
      ssrRenderList(unref(carouselData), (headline, index) => {
        _push(`<a class="carousel__card"${ssrRenderAttr("href", headline.link)} target="_blank" data-v-d4a6dab6><div class="carousel__star-wrapper" data-v-d4a6dab6><i data-v-d4a6dab6></i><p data-v-d4a6dab6>${ssrInterpolate(headline.alert)}</p></div><div class="carousel__title-wrapper" data-v-d4a6dab6><p class="carousel__title" data-v-d4a6dab6>${ssrInterpolate(headline.title)}</p></div></a>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        loop: true,
        observer: true,
        autoplay: {
          delay: 4e3,
          disableOnInteraction: false,
          waitForTransition: false
        },
        "slides-per-view": 1,
        "slides-per-group": 1,
        "space-between": 12
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(carouselData), (headline, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: headline.link + index,
                tag: "a",
                href: headline.link,
                target: "_blank"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="carousel__star-wrapper" data-v-d4a6dab6${_scopeId2}><i data-v-d4a6dab6${_scopeId2}></i><p data-v-d4a6dab6${_scopeId2}>${ssrInterpolate(headline.alert)}</p></div><div class="carousel__title-wrapper" data-v-d4a6dab6${_scopeId2}><p class="carousel__title" data-v-d4a6dab6${_scopeId2}>${ssrInterpolate(headline.title)}</p></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "carousel__star-wrapper" }, [
                        createVNode("i"),
                        createVNode("p", null, toDisplayString(headline.alert), 1)
                      ]),
                      createVNode("div", { class: "carousel__title-wrapper" }, [
                        createVNode("p", { class: "carousel__title" }, toDisplayString(headline.title), 1)
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(carouselData), (headline, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: headline.link + index,
                  tag: "a",
                  href: headline.link,
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "carousel__star-wrapper" }, [
                      createVNode("i"),
                      createVNode("p", null, toDisplayString(headline.alert), 1)
                    ]),
                    createVNode("div", { class: "carousel__title-wrapper" }, [
                      createVNode("p", { class: "carousel__title" }, toDisplayString(headline.title), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["href"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CarouselSwiper.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-d4a6dab6"]]);
const _sfc_main$4 = {
  __name: "FilterSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    useRouter();
    const categoryDoms = ref(null);
    const categoryData = computed(() => productStore.categoryData);
    const activeCategoryIndex = computed(() => {
      return productStore.activeCategoryIndex;
    });
    const highlightLeft = ref(0);
    const highlightWidth = ref(0);
    const updateHighlighter = () => {
      var _a, _b;
      highlightLeft.value = (_a = categoryDoms.value) == null ? void 0 : _a[activeCategoryIndex.value].offsetLeft;
      highlightWidth.value = (_b = categoryDoms.value) == null ? void 0 : _b[activeCategoryIndex.value].getBoundingClientRect().width;
    };
    watch(() => categoryData.value, () => {
      setTimeout(() => {
        updateHighlighter();
      }, 10);
    });
    const statusData = computed(() => productStore.statusData);
    const activeStatusIndex = computed(() => {
      return productStore.activeStatusIndex;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "switch" }, _attrs))} data-v-8f28ab5c>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<ul class="filter-wrapper" data-v-8f28ab5c><!--[-->`);
      ssrRenderList(unref(statusData), (status, index) => {
        _push(`<li class="${ssrRenderClass({ "active": unref(activeStatusIndex) === index })}" data-v-8f28ab5c>${ssrInterpolate(status.name)}</li>`);
      });
      _push(`<!--]--></ul></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FilterSwitch.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8f28ab5c"]]);
const _sfc_main$3 = {
  __name: "CardImgSwiper",
  __ssrInlineRender: true,
  props: {
    imgData: Array
  },
  setup(__props) {
    const modules = [Pagination];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__card-img-swiper" }, _attrs))} data-v-10d98492>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        spaceBetween: 8,
        pagination: {
          clickable: true
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.imgData, (image, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: image.src + index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="${ssrRenderClass({ "is-video": image.link.includes("youtube") })}"${ssrRenderAttr("src", image.src)} alt="product image" data-v-10d98492${_scopeId2}>`);
                    if (image.link.includes("youtube")) {
                      _push3(`<i data-v-10d98492${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("img", {
                        class: { "is-video": image.link.includes("youtube") },
                        src: image.src,
                        alt: "product image"
                      }, null, 10, ["src"]),
                      image.link.includes("youtube") ? (openBlock(), createBlock("i", { key: 0 })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.imgData, (image, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: image.src + index
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: { "is-video": image.link.includes("youtube") },
                      src: image.src,
                      alt: "product image"
                    }, null, 10, ["src"]),
                    image.link.includes("youtube") ? (openBlock(), createBlock("i", { key: 0 })) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CardImgSwiper.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-10d98492"]]);
const _sfc_main$2 = {
  __name: "ProductCard",
  __ssrInlineRender: true,
  props: {
    product: Object
  },
  setup(__props) {
    const props = __props;
    const productStatus = computed(() => {
      var _a;
      return (_a = props.product) == null ? void 0 : _a.status;
    });
    const differenceInDays = computed(() => {
      var _a;
      if (productStatus.value !== "1")
        return "";
      const endDate = new Date((_a = props.product) == null ? void 0 : _a.hide_at.replace(/-/g, "/"));
      const nowDate = /* @__PURE__ */ new Date();
      const difference = endDate.getTime() - nowDate.getTime();
      return Math.ceil(difference / (1e3 * 3600 * 24));
    });
    const imgData = computed(() => {
      if (props.product.images.length > 0) {
        return props.product.images.filter((img) => img.in_title === "1");
      } else {
        return [{
          link: "",
          src: props.product.image
        }];
      }
    });
    const videoData = computed(() => props.product.videos[0]);
    const imgWithVideo = computed(() => {
      const copiedArray = [...imgData.value];
      if (videoData.value !== void 0)
        copiedArray.splice(1, 0, videoData.value);
      return copiedArray;
    });
    const imgStatusText = computed(() => {
      switch (true) {
        case productStatus.value === "1":
          return "\u62DB\u52DF\u4E2D";
        case productStatus.value === "0":
          return "\u5373\u5C07\u958B\u59CB";
        case (productStatus.value === "-1" && props.product.online_article_count !== "0"):
          return `${props.product.online_article_count} \u5247\u5FC3\u5F97\u51FA\u7210`;
        case (productStatus.value === "-1" && props.product.online_article_count === "0"):
          return "\u56B4\u9078\u5FC3\u5F97\u5BE9\u6838\u4E2D\uFF0C\u656C\u8ACB\u671F\u5F85\uFF01";
        default:
          return "";
      }
    });
    const bodyStatusText = computed(() => {
      switch (productStatus.value) {
        case "1":
          return `\u5269\u9918${differenceInDays.value}\u5929`;
        case "0":
          return "\u5373\u5C07\u958B\u59CB";
        case "-1":
          return "\u5DF2\u622A\u6B62";
        default:
          return "";
      }
    });
    const checkImageValid = (image) => {
      return image ? image : require("@/assets/images/img-product-default.png");
    };
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_CardImgSwiper = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "product__card" }, _attrs))} data-v-2f2a7601><div data-v-2f2a7601><div class="product__img-wrapper" data-v-2f2a7601>`);
      if (__props.product.images.length || __props.product.videos[0]) {
        _push(ssrRenderComponent(_component_CardImgSwiper, { imgData: unref(imgWithVideo) }, null, _parent));
      } else {
        _push(`<div class="product__card-img-single" data-v-2f2a7601><img${ssrRenderAttr("src", checkImageValid(__props.product.image))} alt="product image" data-v-2f2a7601></div>`);
      }
      _push(`<div class="${ssrRenderClass([{
        "up-coming": unref(productStatus) === "0",
        "is-end": unref(productStatus) === "-1" && __props.product.online_article_count !== "0",
        "is-end-no-article": unref(productStatus) === "-1" && __props.product.online_article_count === "0"
      }, "status-tag"])}" data-v-2f2a7601>`);
      if (unref(productStatus) === "-1") {
        _push(`<i data-v-2f2a7601></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-2f2a7601>${ssrInterpolate(unref(imgStatusText))}</p></div></div><div class="product__body" data-v-2f2a7601><div class="product__info" data-v-2f2a7601><div class="product__detail-wrapper" data-v-2f2a7601><div class="${ssrRenderClass([{ "not-current": unref(productStatus) !== "1" }, "product__date-wrapper"])}" data-v-2f2a7601><i data-v-2f2a7601></i><p data-v-2f2a7601>${ssrInterpolate(unref(bodyStatusText))}</p></div><span data-v-2f2a7601>${ssrInterpolate((_a = __props.product) == null ? void 0 : _a.try_join_count)}\u4EBA\u53C3\u52A0</span></div><h3 class="product__title" data-v-2f2a7601>${ssrInterpolate((_b = __props.product) == null ? void 0 : _b.name)}</h3></div><ul class="product__utils" data-v-2f2a7601>`);
      if (unref(productStatus) !== "-1") {
        _push(`<!--[--><li data-v-2f2a7601><div class="product__utils-btn" data-v-2f2a7601><i class="join" data-v-2f2a7601></i><p data-v-2f2a7601>\u7ACB\u5373\u53C3\u52A0</p></div></li><li class="content" data-v-2f2a7601><div class="product__utils-btn" data-v-2f2a7601><i class="content" data-v-2f2a7601></i><p data-v-2f2a7601>\u6D3B\u52D5\u5167\u5BB9</p></div></li><!--]-->`);
      } else {
        _push(`<li data-v-2f2a7601><div class="product__utils-btn wide" data-v-2f2a7601><i class="heart" data-v-2f2a7601></i><p data-v-2f2a7601>\u8A66\u7528\u5FC3\u5F97</p>`);
        if (__props.product.online_article_count !== "0") {
          _push(`<p class="review-count" data-v-2f2a7601>(${ssrInterpolate(__props.product.online_article_count)})</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></li>`);
      }
      _push(`<li class="buy" data-v-2f2a7601><div class="${ssrRenderClass([{ "wide": unref(productStatus) === "-1" }, "product__utils-btn buy"])}" data-v-2f2a7601><i class="buy" data-v-2f2a7601></i><p class="buy" data-v-2f2a7601>\u524D\u5F80\u8CFC\u8CB7</p></div></li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2f2a7601"]]);
const _imports_0 = "" + buildAssetsURL("img-product-list-default.QOPLNPQO.png");
const _sfc_main$1 = {
  __name: "ProductList",
  __ssrInlineRender: true,
  setup(__props) {
    const needEmptyCard = computed(() => {
      var _a;
      return ((_a = productStore.displayProductData) == null ? void 0 : _a.length) % 3 === 2;
    });
    const isProductListLoading = computed(() => productStore.isProductListLoading);
    const isMoreProductLoading = computed(() => productStore.isMoreProductLoading);
    const displayProductData = computed(() => productStore.displayProductData);
    const productStore = useProductStore();
    const { getMoreProducts } = productStore;
    let throttleTimer = void 0;
    const throttle = (callback, time) => {
      if (throttleTimer)
        return;
      throttleTimer = true;
      setTimeout(() => {
        callback();
        throttleTimer = false;
      }, time);
    };
    const scrollHandler = () => {
      throttle(() => {
        if ((void 0).innerHeight + (void 0).pageYOffset > (void 0).body.offsetHeight * 0.7 && !productStore.isMoreProductLoading) {
          getMoreProducts();
        }
      }, 500);
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", scrollHandler);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductCard = __nuxt_component_0;
      const _component_UtilsLoadingProduct = __nuxt_component_1$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "product" }, _attrs))} data-v-b9d224b0><div class="custom-container" data-v-b9d224b0>`);
      if (unref(productStore).displayProductData.length > 0 && !unref(isProductListLoading)) {
        _push(`<div class="product__wrapper" data-v-b9d224b0><!--[-->`);
        ssrRenderList(unref(displayProductData), (product, index) => {
          _push(ssrRenderComponent(_component_ProductCard, {
            key: (product == null ? void 0 : product.name) + index,
            product
          }, null, _parent));
        });
        _push(`<!--]-->`);
        if (unref(isMoreProductLoading)) {
          _push(ssrRenderComponent(_component_UtilsLoadingProduct, { isProductPage: false }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(needEmptyCard)) {
          _push(`<div class="product__card empty" data-v-b9d224b0></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else if (unref(isProductListLoading)) {
        _push(ssrRenderComponent(_component_UtilsLoadingProduct, { isProductPage: false }, null, _parent));
      } else {
        _push(`<div class="product__fallback-wrapper" data-v-b9d224b0><img${ssrRenderAttr("src", _imports_0)} alt="no item available" data-v-b9d224b0><p data-v-b9d224b0>\u76EE\u524D\u6C92\u6709\u5546\u54C1\u8A66\u7528</p></div>`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b9d224b0"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useRouter();
    const productStore = useProductStore();
    computed(() => productStore.categoryData);
    useHead({
      link: [
        { rel: "canonical", href: "https://github.com/ellentyyu/nuxt_product_demo" }
      ]
    });
    useSeoMeta({
      title: "\u5168\u7403\u8D70\u8DF3\u6642\u4EE3\u4F86\u81E8\uFF01\u5B64\u7368\u65C5\u904A\u7368\u5BB6\u514D\u8CBB\u8A66\u7528\uFF0C\u5168\u9762\u9AD4\u9A57\u6700\u65B0\u7522\u54C1\uFF0C\u5FEB\u4F86\u53C3\u52A0\u4E26\u5206\u4EAB\u5FC3\u5F97\u5427\uFF01",
      ogTitle: "\u5168\u7403\u8D70\u8DF3\u6642\u4EE3\u4F86\u81E8\uFF01\u5B64\u7368\u65C5\u904A\u7368\u5BB6\u514D\u8CBB\u8A66\u7528\uFF0C\u5168\u9762\u9AD4\u9A57\u6700\u65B0\u7522\u54C1\uFF0C\u5FEB\u4F86\u53C3\u52A0\u4E26\u5206\u4EAB\u5FC3\u5F97\u5427\uFF01",
      description: "\u5B64\u7368\u65C5\u904A\u63D0\u4F9B\u8C50\u5BCC\u7684\u514D\u8CBB\u8A66\u7528\u6D3B\u52D5\u548C\u7F8E\u98DF\u8A66\u5403\u6A5F\u6703\uFF0C\u8B93\u4F60\u80FD\u5920\u8F15\u9B06\u7372\u53D6\u6700\u65B0\u7522\u54C1\u4E26\u64B0\u5BEB\u5FC3\u5F97\u3002\u5728\u5B64\u7368\u65C5\u884C\u5F97\u5230\u7B2C\u4E00\u624B\u7684\u8A66\u7528\u8CC7\u8A0A\u9AD4\u9A57\u65B0\u5546\u54C1\uFF0C\u4E26\u8207\u5176\u4ED6\u4EBA\u5206\u4EAB\u771F\u5BE6\u7684\u8A66\u7528\u9AD4\u9A57\u3002",
      ogDescription: "\u5B64\u7368\u65C5\u904A\u63D0\u4F9B\u8C50\u5BCC\u7684\u514D\u8CBB\u8A66\u7528\u6D3B\u52D5\u548C\u7F8E\u98DF\u8A66\u5403\u6A5F\u6703\uFF0C\u8B93\u4F60\u80FD\u5920\u8F15\u9B06\u7372\u53D6\u6700\u65B0\u7522\u54C1\u4E26\u64B0\u5BEB\u5FC3\u5F97\u3002\u5728\u5B64\u7368\u65C5\u884C\u5F97\u5230\u7B2C\u4E00\u624B\u7684\u8A66\u7528\u8CC7\u8A0A\u9AD4\u9A57\u65B0\u5546\u54C1\uFF0C\u4E26\u8207\u5176\u4ED6\u4EBA\u5206\u4EAB\u771F\u5BE6\u7684\u8A66\u7528\u9AD4\u9A57\u3002",
      ogImage: "https://images.unsplash.com/photo-1470074558764-4e577e98bc85?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ogUrl: "https://github.com/ellentyyu/nuxt_product_demo",
      ogType: "website"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilsBgWrapper = __nuxt_component_0$2;
      const _component_BannerSwiper = __nuxt_component_1;
      const _component_CarouselSwiper = __nuxt_component_2;
      const _component_FilterSwitch = __nuxt_component_3;
      const _component_ProductList = __nuxt_component_4;
      const _component_UtilsGoHome = _sfc_main$7;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_UtilsBgWrapper, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BannerSwiper, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselSwiper, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_FilterSwitch, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ProductList, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UtilsGoHome, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BannerSwiper),
              createVNode(_component_CarouselSwiper),
              createVNode(_component_FilterSwitch),
              createVNode(_component_ProductList),
              createVNode(_component_UtilsGoHome)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[category]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CK2AkapS.mjs.map
