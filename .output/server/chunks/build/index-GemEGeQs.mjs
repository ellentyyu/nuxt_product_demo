import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$4, a as __nuxt_component_1$2, b as _sfc_main$h } from './GoHome-CnSjsxHq.mjs';
import { u as useProductStore } from './product-ClJcjqyv.mjs';
import { ref, computed, withAsyncContext, withCtx, unref, openBlock, createBlock, Fragment, createVNode, useSSRContext, mergeProps, renderList, createCommentVNode, watch, onUnmounted, resolveComponent, createTextVNode, toDisplayString, mergeModels, useModel, isRef } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderStyle, ssrLooseContain, ssrRenderDynamicModel } from 'vue/server-renderer';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { c as useRoute, u as useRouter, _ as _export_sfc } from './server.mjs';
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

const _sfc_main$g = {
  __name: "ProductImgSwiper",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Thumbs];
    const productStore = useProductStore();
    const imgData = computed(() => {
      if (productStore.mainProductData.images.length > 0) {
        return productStore.mainProductData.images.filter((img) => img.in_title === "1");
      } else {
        return [{
          link: "",
          src: productStore.mainProductData.image
        }];
      }
    });
    const videoData = computed(() => productStore.mainProductData.videos[0]);
    const imgWithVideo = computed(() => {
      const copiedArray = [...imgData.value];
      if (videoData.value !== void 0)
        copiedArray.splice(1, 0, videoData.value);
      return copiedArray;
    });
    const youtubeEmbedUrl = (url) => url.replace(/watch\?v=|shorts\//, "embed/") + "?autoplay=1&mute=1&enablejsapi=1";
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "productimages" }, _attrs))} data-v-094ed6c1>`);
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        spaceBetween: 8,
        thumbs: { swiper: unref(thumbsSwiper) },
        class: "main-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imgWithVideo), (media, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: media.src + index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (media.link.includes("youtube")) {
                      _push3(`<iframe${ssrRenderAttr("src", youtubeEmbedUrl(media.link))} frameborder="0" data-v-094ed6c1${_scopeId2}></iframe>`);
                    } else {
                      _push3(`<img${ssrRenderAttr("src", media.src)} alt="product image" data-v-094ed6c1${_scopeId2}>`);
                    }
                  } else {
                    return [
                      media.link.includes("youtube") ? (openBlock(), createBlock("iframe", {
                        key: 0,
                        src: youtubeEmbedUrl(media.link),
                        frameborder: "0"
                      }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                        key: 1,
                        src: media.src,
                        alt: "product image"
                      }, null, 8, ["src"]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imgWithVideo), (media, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: media.src + index
                }, {
                  default: withCtx(() => [
                    media.link.includes("youtube") ? (openBlock(), createBlock("iframe", {
                      key: 0,
                      src: youtubeEmbedUrl(media.link),
                      frameborder: "0"
                    }, null, 8, ["src"])) : (openBlock(), createBlock("img", {
                      key: 1,
                      src: media.src,
                      alt: "product image"
                    }, null, 8, ["src"]))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Swiper), {
        modules,
        "watch-slides-progress": "",
        spaceBetween: 8,
        slidesPerView: 5.4,
        breakpoints: {
          768: {
            slidesPerView: 6
          }
        },
        freeMode: true,
        onSwiper: setThumbsSwiper,
        class: "thumb-swiper"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(imgWithVideo), (media, index) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: media.src + index
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", media.src)} alt="product image" data-v-094ed6c1${_scopeId2}>`);
                    if (media.link.includes("youtube")) {
                      _push3(`<i data-v-094ed6c1${_scopeId2}></i>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("img", {
                        src: media.src,
                        alt: "product image"
                      }, null, 8, ["src"]),
                      media.link.includes("youtube") ? (openBlock(), createBlock("i", { key: 0 })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(imgWithVideo), (media, index) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: media.src + index
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: media.src,
                      alt: "product image"
                    }, null, 8, ["src"]),
                    media.link.includes("youtube") ? (openBlock(), createBlock("i", { key: 0 })) : createCommentVNode("", true)
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
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/ProductImgSwiper.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const __nuxt_component_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-094ed6c1"]]);
const _sfc_main$f = {
  __name: "RatingHeartContainer",
  __ssrInlineRender: true,
  props: {
    rating: Number
  },
  setup(__props) {
    const props = __props;
    const isInt = computed(() => Number.isInteger(props.rating));
    const heartCount = computed(() => Math.floor(props.rating));
    const emptyHeartCount = computed(() => isInt.value ? 5 - heartCount.value : 4 - heartCount.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rating__heart-wrapper" }, _attrs))} data-v-aa16ef2d><!--[-->`);
      ssrRenderList(unref(heartCount), (heart) => {
        _push(`<i class="full" data-v-aa16ef2d></i>`);
      });
      _push(`<!--]-->`);
      if (!unref(isInt)) {
        _push(`<i class="half" data-v-aa16ef2d></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(emptyHeartCount), (empty) => {
        _push(`<i class="empty" data-v-aa16ef2d></i>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/RatingHeartContainer.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-aa16ef2d"]]);
const _sfc_main$e = {
  __name: "RatingChart",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const rateData = computed(() => Object.values(productStore.mainProductData.rate));
    const badgeImg = computed(() => productStore.mainProductData.label_image_url);
    const mapScoreToRating = (score) => {
      score = Math.min(Math.max(score, 1), 10);
      const intervalSize = 10 / 9;
      const index = Math.floor((score - 1) / intervalSize);
      return index * 0.5 + 1;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductPageRatingHeartContainer = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rating" }, _attrs))} data-v-2cb0a876><div class="rating__badge-wrapper" data-v-2cb0a876>`);
      if (unref(badgeImg)) {
        _push(`<div class="rating__badge" data-v-2cb0a876><img${ssrRenderAttr("src", unref(badgeImg))} alt="good product badge" data-v-2cb0a876></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "padding-left": unref(badgeImg) }, "rating__container"])}" data-v-2cb0a876><!--[-->`);
      ssrRenderList(unref(rateData), (rate, index) => {
        _push(`<div class="rating__category-wrapper" data-v-2cb0a876>`);
        _push(ssrRenderComponent(_component_ProductPageRatingHeartContainer, {
          rating: mapScoreToRating(rate.avg)
        }, null, _parent));
        _push(`<p class="rating__label" data-v-2cb0a876>${ssrInterpolate(rate.name)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/RatingChart.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-2cb0a876"]]);
const defaultImg = "" + buildAssetsURL("img-product-default.B6gTI86l.png");
const _sfc_main$d = {
  __name: "MainProduct",
  __ssrInlineRender: true,
  emits: ["signup"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const productStore = useProductStore();
    const mainProductData = computed(() => productStore.mainProductData);
    const btnStatusText = computed(() => {
      switch (mainProductData.value.status) {
        case "1":
          return "\u7ACB\u5373\u53C3\u52A0";
        case "0":
          return "\u5373\u5C07\u958B\u59CB";
        case "-1":
          return "\u5DF2\u7D50\u675F";
        default:
          return "";
      }
    });
    const checkImageValid = (image) => {
      return image ? image : defaultImg;
    };
    const differenceInDays = computed(() => {
      var _a;
      if (mainProductData.value.status !== "1")
        return "";
      const endDate = new Date((_a = mainProductData.value) == null ? void 0 : _a.hide_at.replace(/-/g, "/"));
      const nowDate = /* @__PURE__ */ new Date();
      const difference = endDate.getTime() - nowDate.getTime();
      return Math.ceil(difference / (1e3 * 3600 * 24));
    });
    const memoNum = computed(
      () => [
        mainProductData.value.memo1,
        mainProductData.value.memo2,
        mainProductData.value.memo3,
        mainProductData.value.memo4
      ].filter((memo) => memo !== "").length
    );
    const isEndWithArticle = computed(
      () => mainProductData.value.status === "-1" && mainProductData.value.online_article_count > 0
    );
    const highlightText = computed(
      () => isEndWithArticle.value ? `${mainProductData.value.online_article_count}\u5247\u5FC3\u5F97\u5206\u4EAB` : `\u5269\u9918${differenceInDays.value}\u5929`
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductPageProductImgSwiper = __nuxt_component_0$3;
      const _component_ProductPageRatingChart = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mainproduct" }, _attrs))} data-v-e840d621><div class="custom-container" data-v-e840d621><div class="mainproduct__wrapper" data-v-e840d621>`);
      if (unref(mainProductData).images.length > 0 || unref(mainProductData).videos[0]) {
        _push(ssrRenderComponent(_component_ProductPageProductImgSwiper, null, null, _parent));
      } else {
        _push(`<img${ssrRenderAttr("src", checkImageValid(unref(mainProductData).image))} class="mainproduct__img" alt="product image" data-v-e840d621>`);
      }
      _push(`<div class="mainproduct__body" data-v-e840d621><h1 data-v-e840d621>${ssrInterpolate(unref(mainProductData).name)}</h1>`);
      if (unref(mainProductData).status === "1") {
        _push(`<div class="mainproduct__highlight-wrapper" data-v-e840d621><i data-v-e840d621></i><p data-v-e840d621>${ssrInterpolate(unref(highlightText))}</p></div>`);
      } else if (unref(isEndWithArticle)) {
        _push(`<div class="mainproduct__highlight-wrapper is-end" data-v-e840d621><i data-v-e840d621></i><p data-v-e840d621>${ssrInterpolate(unref(highlightText))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="mainproduct__list-wrapper" data-v-e840d621>`);
      if (unref(mainProductData).show_trial_exp !== "1") {
        _push(`<!--[--><li data-v-e840d621><h3 data-v-e840d621>\u5831\u540D\u6642\u9593</h3><p data-v-e840d621>${ssrInterpolate(unref(mainProductData).show_at)}</p></li><li data-v-e840d621><h3 data-v-e840d621>\u622A\u6B62\u6642\u9593</h3><p data-v-e840d621>${ssrInterpolate(unref(mainProductData).hide_at)}</p></li><li data-v-e840d621><h3 data-v-e840d621>\u898F\u683C/\u5E02\u50F9</h3><p data-v-e840d621>${ssrInterpolate(unref(mainProductData).note1)} / NT$${ssrInterpolate(unref(mainProductData).price)}</p></li><li data-v-e840d621><h3 data-v-e840d621>\u5831\u540D\u8CC7\u683C</h3><p data-v-e840d621>\u9650\u5B64\u7368\u65C5\u904A\u8A3B\u518A\u6703\u54E1</p></li><li class="try-count" data-v-e840d621><h3 data-v-e840d621>\u514D\u8CBB\u9AD4\u9A57</h3><p data-v-e840d621><span data-v-e840d621>${ssrInterpolate(unref(mainProductData).try_count)}</span> \u4EFD </p></li><li data-v-e840d621><h3 data-v-e840d621>\u53C3\u52A0\u4EBA\u6578</h3><p data-v-e840d621>${ssrInterpolate(unref(mainProductData).try_join_count)} \u4EBA</p></li>`);
        if (unref(memoNum) > 0 && unref(mainProductData).status !== "-1") {
          _push(`<li class="memos" data-v-e840d621><h3 data-v-e840d621>\u8A66\u7528\u91CD\u9EDE</h3><div class="mainproduct__memos-wrapper" data-v-e840d621><!--[-->`);
          ssrRenderList(4, (memo, index) => {
            _push(`<!--[-->`);
            if (unref(mainProductData)[`memo${index + 1}`]) {
              _push(`<div class="mainproduct__memo" data-v-e840d621><div class="icon-wrapper" data-v-e840d621><i class="${ssrRenderClass(`icon-${index + 1}`)}" data-v-e840d621></i></div><p class="content" data-v-e840d621>${ssrInterpolate(unref(mainProductData)[`memo${index + 1}`])}</p></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></div></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><li class="ratings" data-v-e840d621><h3 data-v-e840d621>\u8A55\u6E2C\u7E3D\u8A55</h3>`);
        _push(ssrRenderComponent(_component_ProductPageRatingChart, null, null, _parent));
        _push(`</li><li class="ratings" data-v-e840d621><h3 data-v-e840d621>\u5FC3\u5F97\u7E3D\u6574\u7406</h3><div class="rating__container review" data-v-e840d621><p class="rating__review-all" data-v-e840d621>${ssrInterpolate(unref(mainProductData).tryget)}</p></div></li><!--]-->`);
      }
      _push(`</ul><div class="btn-wrapper" data-v-e840d621><button class="btn-primary-orange" type="button"${ssrIncludeBooleanAttr(
        unref(mainProductData).status !== "1" && unref(route).query.preview !== "1"
      ) ? " disabled" : ""} data-v-e840d621>${ssrInterpolate(unref(btnStatusText))}</button></div></div><div class="mainproduct__body-mobile" data-v-e840d621>`);
      if (unref(mainProductData).status === "1") {
        _push(`<div class="mainproduct__highlight-wrapper" data-v-e840d621><i data-v-e840d621></i><p data-v-e840d621>${ssrInterpolate(unref(highlightText))}</p></div>`);
      } else if (unref(isEndWithArticle)) {
        _push(`<div class="mainproduct__highlight-wrapper is-end" data-v-e840d621><i data-v-e840d621></i><p data-v-e840d621>${ssrInterpolate(unref(highlightText))}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(memoNum) > 0 && unref(mainProductData).status !== "-1") {
        _push(`<div class="${ssrRenderClass([{ "flex-between": unref(memoNum) === 4 }, "mainproduct__memos-wrapper"])}" data-v-e840d621><!--[-->`);
        ssrRenderList(4, (memo, index) => {
          _push(`<!--[-->`);
          if (unref(mainProductData)[`memo${index + 1}`]) {
            _push(`<div class="mainproduct__memo" data-v-e840d621><div class="icon-wrapper" data-v-e840d621><i class="${ssrRenderClass(`icon-${index + 1}`)}" data-v-e840d621></i></div><p class="content" data-v-e840d621>${ssrInterpolate(unref(mainProductData)[`memo${index + 1}`])}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mainproduct__content-mobile" data-v-e840d621><h2 data-v-e840d621>${ssrInterpolate(unref(mainProductData).name)}</h2><div class="mainproduct__join-count-mobile" data-v-e840d621><i data-v-e840d621></i><p data-v-e840d621> \u53C3\u52A0\u4EBA\u6578${ssrInterpolate(unref(mainProductData).try_join_count)}\u4EBA </p></div><ul class="mainproduct__list-wrapper" data-v-e840d621>`);
      if (unref(mainProductData).status !== "-1") {
        _push(`<!--[--><li data-v-e840d621><h3 data-v-e840d621>\u898F\u683C/\u5E02\u50F9</h3><p data-v-e840d621>${ssrInterpolate(unref(mainProductData).note1)} / NT$${ssrInterpolate(unref(mainProductData).price)}</p></li><li class="try-count" data-v-e840d621><h3 data-v-e840d621>\u514D\u8CBB\u9AD4\u9A57</h3><p data-v-e840d621><span data-v-e840d621>${ssrInterpolate(unref(mainProductData).try_count)}</span> \u4EFD </p></li><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mainProductData).show_trial_exp === "1") {
        _push(`<!--[--><li class="ratings" data-v-e840d621><h3 data-v-e840d621>\u8A55\u6E2C\u7E3D\u8A55</h3><div class="rating__container" data-v-e840d621><p class="rating__review-all" data-v-e840d621>${ssrInterpolate(unref(mainProductData).tryget)}</p></div></li><li class="ratings" data-v-e840d621><h3 data-v-e840d621>\u5FC3\u5F97\u7E3D\u6574\u7406</h3>`);
        _push(ssrRenderComponent(_component_ProductPageRatingChart, null, null, _parent));
        _push(`</li><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div><div class="btn-wrapper" data-v-e840d621><button class="btn-primary-orange" type="button"${ssrIncludeBooleanAttr(
        unref(mainProductData).status !== "1" && unref(route).query.preview !== "1"
      ) ? " disabled" : ""} data-v-e840d621>${ssrInterpolate(unref(btnStatusText))}</button><button class="btn-share" type="button" data-v-e840d621><i data-v-e840d621></i></button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/MainProduct.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-e840d621"]]);
const _sfc_main$c = {
  __name: "SectionTab",
  __ssrInlineRender: true,
  props: {
    activeSection: String
  },
  setup(__props) {
    const props = __props;
    const route = useRoute();
    const tabData = ref([
      {
        tabName: "\u8A66\u7528\u5206\u4EAB",
        section: "review"
      },
      {
        tabName: "\u6D3B\u52D5\u6D41\u7A0B",
        section: "step"
      },
      {
        tabName: "\u6D3B\u52D5\u5167\u5BB9",
        section: "content"
      },
      {
        tabName: "\u53C3\u52A0\u898F\u5247",
        section: "rule"
      },
      {
        tabName: "\u6CE8\u610F\u4E8B\u9805",
        section: "notice"
      }
    ]);
    const sectionName = ref(null);
    const activeIndex = ref(0);
    const tabLeft = ref(0);
    const tabWidth = ref(0);
    const isTabShow = ref(false);
    watch(() => props.activeSection, (value) => {
      let index = tabData.value.findIndex((tab) => tab.section === value);
      activeIndex.value = index;
      updateHighlighter();
    });
    const resizeHandler = () => {
      setTimeout(() => {
        updateHighlighter();
      }, 10);
    };
    const updateHighlighter = () => {
      tabLeft.value = sectionName.value[activeIndex.value].getBoundingClientRect().left;
      tabWidth.value = sectionName.value[activeIndex.value].getBoundingClientRect().width;
    };
    const tabComponent = ref(null);
    ref(null);
    onUnmounted(() => {
      (void 0).removeEventListener("resize", resizeHandler);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "tab",
        ref_key: "tabComponent",
        ref: tabComponent
      }, _attrs))} data-v-1c78e417><ul class="tab__wrapper" data-v-1c78e417><!--[-->`);
      ssrRenderList(unref(tabData), (tab, index) => {
        _push(`<li class="tab__link" data-v-1c78e417>`);
        _push(ssrRenderComponent(_component_router_link, {
          to: `/${unref(route).params.category}/${unref(route).params.productId}#${tab.section}`,
          replace: "",
          class: { active: unref(activeIndex) === index }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(tab.tabName)}`);
            } else {
              return [
                createTextVNode(toDisplayString(tab.tabName), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="tab__highlighter" style="${ssrRenderStyle([
        { left: `${unref(tabLeft)}px`, width: `${unref(tabWidth)}px` },
        unref(isTabShow) ? null : { display: "none" }
      ])}" data-v-1c78e417></div></div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/SectionTab.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-1c78e417"]]);
const imgSteps = "" + buildAssetsURL("img-steps-white.Db56ov_3.webp");
const imgStepsMb = "" + buildAssetsURL("img-steps-white-mb.DqRx9eRv.webp");
const _sfc_main$b = {
  __name: "EventSteps",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "eventsteps" }, _attrs))} data-v-23bd6588><div class="custom-container" data-v-23bd6588><div class="section-wrapper" data-v-23bd6588><h2 class="section-title observe-section" id="step" data-v-23bd6588>\u6D3B\u52D5\u6D41\u7A0B</h2><img class="eventsteps__img"${ssrRenderAttr("src", unref(imgSteps))} alt="event steps" data-v-23bd6588><img class="eventsteps__img-mb"${ssrRenderAttr("src", unref(imgStepsMb))} alt="event steps" data-v-23bd6588></div></div></div>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/EventSteps.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-23bd6588"]]);
const _sfc_main$a = {
  __name: "EventContent",
  __ssrInlineRender: true,
  setup(__props) {
    const youtubeEmbedUrl = (url) => url.replace(/watch\?v=|shorts\//, "embed/") + "?autoplay=1&mute=1&enablejsapi=1";
    const productStore = useProductStore();
    const mainProductData = computed(() => productStore.mainProductData);
    const filteredImages = computed(() => {
      var _a;
      return (_a = mainProductData.value) == null ? void 0 : _a.images.filter((image) => image.in_content === "1");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "eventcontent" }, _attrs))} data-v-d942c853><div class="custom-container" data-v-d942c853><div class="section-wrapper" data-v-d942c853><h2 class="section-title observe-section" id="content" data-v-d942c853>\u6D3B\u52D5\u5167\u5BB9</h2><div class="eventcontent__wrapper" data-v-d942c853>`);
      if (unref(mainProductData).videos[0]) {
        _push(`<iframe width="auto" height="auto"${ssrRenderAttr("src", youtubeEmbedUrl(unref(mainProductData).videos[0].link))} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="eventcontent__video" data-test="videodata" data-v-d942c853></iframe>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p data-v-d942c853>${(_a = unref(mainProductData).try_content) != null ? _a : ""}</p>`);
      if (unref(mainProductData).images.length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(filteredImages), (image, index) => {
          _push(`<img${ssrRenderAttr("src", image.src)} alt="product image" data-v-d942c853>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<img${ssrRenderAttr("src", unref(mainProductData).image)} alt="event product image" data-v-d942c853>`);
      }
      _push(`</div></div></div></section>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/EventContent.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-d942c853"]]);
const _sfc_main$9 = {
  __name: "EventRule",
  __ssrInlineRender: true,
  setup(__props) {
    const productStore = useProductStore();
    const mainProductData = computed(() => productStore.mainProductData);
    const keywordsToString = computed(() => {
      var _a;
      return (_a = mainProductData.value) == null ? void 0 : _a.keywords.toString().replaceAll(",", "\u3001");
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "eventrule" }, _attrs))} data-v-aee24cca><div class="custom-container" data-v-aee24cca><div class="section-wrapper" data-v-aee24cca><h2 class="section-title observe-section" id="rule" data-v-aee24cca>\u53C3\u52A0\u898F\u5247</h2><ul class="eventrule__wrapper" data-v-aee24cca><li data-v-aee24cca><h3 data-v-aee24cca>\u5831\u540D\u6642\u9593</h3><p data-v-aee24cca>${ssrInterpolate(unref(mainProductData).show_at)}</p></li><li data-v-aee24cca><h3 data-v-aee24cca>\u622A\u6B62\u6642\u9593</h3><p data-v-aee24cca>${ssrInterpolate(unref(mainProductData).hide_at)}</p></li><li data-v-aee24cca><h3 data-v-aee24cca>\u5831\u540D\u8CC7\u683C</h3><p data-v-aee24cca>\u9650\u5B64\u7368\u65C5\u904A\u8A3B\u518A\u6703\u54E1</p></li>`);
      if (unref(mainProductData).memo2) {
        _push(`<li data-v-aee24cca><h3 data-v-aee24cca>\u6587\u7AE0\u5B57\u6578</h3><p data-v-aee24cca>${ssrInterpolate(unref(mainProductData).memo2)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mainProductData).memo3) {
        _push(`<li data-v-aee24cca><h3 data-v-aee24cca>\u5716\u7247\u6578\u91CF</h3><p data-v-aee24cca>${ssrInterpolate(unref(mainProductData).memo3)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mainProductData).sendway) {
        _push(`<li data-v-aee24cca><h3 data-v-aee24cca>\u5BC4\u9001\u65B9\u5F0F</h3><p data-v-aee24cca>${ssrInterpolate(unref(mainProductData).sendway)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mainProductData).contentrule) {
        _push(`<li data-v-aee24cca><h3 data-v-aee24cca>\u5167\u6587\u898F\u5247</h3><p data-v-aee24cca>${ssrInterpolate(unref(mainProductData).contentrule)}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mainProductData).keywords[0]) {
        _push(`<li data-v-aee24cca><h3 data-v-aee24cca>\u5FC5\u9808\u52A0\u5165<br data-v-aee24cca>\u95DC\u9375\u5B57</h3><p data-v-aee24cca>${ssrInterpolate(unref(keywordsToString))}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(mainProductData).baseline) {
        _push(`<li data-v-aee24cca><h3 data-v-aee24cca>\u8A55\u9078\u6A19\u6E96</h3><p class="html" data-v-aee24cca>${(_a = unref(mainProductData).baseline) != null ? _a : ""}</p></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</ul></div></div></section>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/EventRule.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-aee24cca"]]);
const _sfc_main$8 = {
  __name: "EventNotice",
  __ssrInlineRender: true,
  props: {
    notice: String
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const btnText = computed(() => {
      return isOpen.value === false ? "\u770B\u66F4\u591A" : "\u6536\u5408";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "eventnotice" }, _attrs))} data-v-4c489fb4><div class="custom-container" data-v-4c489fb4><div class="section-wrapper" data-v-4c489fb4><h2 class="section-title observe-section" id="notice" data-v-4c489fb4>\u6CE8\u610F\u4E8B\u9805</h2><div class="eventnotice__wrapper" data-v-4c489fb4><div class="${ssrRenderClass([{ open: unref(isOpen) }, "eventnotice__body"])}" data-v-4c489fb4>`);
      if (props.notice) {
        _push(`<p data-v-4c489fb4>${(_a = __props.notice) != null ? _a : ""}</p>`);
      } else {
        _push(`<p data-v-4c489fb4> \uFF0A\u6CE8\u610F\u4E8B\u9805<br data-v-4c489fb4> 1.\u5831\u540D\u6642\u8ACB\u52D9\u5FC5\u586B\u5BEB\u6B63\u78BA\u6536\u4EF6\u5730\u5740\uFF0C\u6210\u529F\u9304\u53D6\u5C07\u76F4\u63A5\u767C\u9001\u5546\u54C1\uFF0C\u5982\u56E0\u90E8\u843D\u5BA2\u586B\u5BEB\u500B\u4EBA\u8CC7\u8A0A\u932F\u8AA4\u3001\u7121\u6CD5\u806F\u7E6B\u6216\u662F\u7121\u4EBA\u6536\u4EF6\uFF0C\u9020\u6210\u5546\u54C1\u7121\u6CD5\u9806\u5229\u9001\u9054\uFF0C\u5373\u81EA\u52D5\u55AA\u5931\u8CC7\u683C\u3002<br data-v-4c489fb4> 2.\u53C3\u8207\u672C\u6B21\u9AD4\u9A57\u6D3B\u52D5\u6240\u7522\u51FA\u7684\u5FC3\u5F97\u6587\u7AE0\uFF0C\u610F\u5373\u540C\u610F\u6388\u6B0A\u7D66\u8A72\u54C1\u724C\u884C\u92B7\u5BA3\u50B3\u4F7F\u7528\uFF0C\u4F7F\u7528\u7BC4\u570D\u5305\u542B\u5B98\u65B9\u7DB2\u7AD9\u3001\u8CFC\u7269\u5E73\u53F0\u3001\u6D3B\u52D5\u7DB2\u9801\u6216\u5176\u4ED6\u7BA1\u9053\u901A\u8DEF\u4F5C\u70BA\u7522\u54C1\u63A8\u5EE3\u4E4B\u7528\u3002<br data-v-4c489fb4> 3.\u689D\u4EF6\u70BA&quot;\u9AD4\u9A57\u5F8C\u5EE0\u5546\u5C07\u6536\u56DE&quot;\u4E4B\u5546\u54C1\uFF0C\u82E5\u90E8\u843D\u5BA2\u4E0D\u9858\u6309\u512A\u60E0\u50F9\u8CFC\u8CB7\u5546\u54C1\uFF0C\u5247\u5FC5\u9808\u4F9D\u898F\u5B9A\u8B93\u5EE0\u5546\u6536\u56DE\uFF0C\u5426\u5247\u5EE0\u5546\u5C07\u4FDD\u7559\u6CD5\u5F8B\u8FFD\u8A34\u6B0A\u3002<br data-v-4c489fb4> 4.\u5831\u540D\u524D\u8ACB\u52D9\u5FC5\u78BA\u8A8D\u6D3B\u52D5\u898F\u7BC4\uFF0C\u82E5\u672A\u5B8C\u6210\u4E0A\u8FF0\u4E8B\u9805\uFF0C\u672A\u4F86\u5C07\u5F71\u97FF\u60A8\u53C3\u8207\u3010\u65C5\u884C\u5BB6\u3011\u6D3B\u52D5\u4E4B\u6B0A\u76CA\uFF0C\u656C\u8ACB\u7559\u610F\u3002<br data-v-4c489fb4> 5.\u5B64\u7368\u65C5\u904A\u4FDD\u6709\u6700\u7D42\u4FEE\u6539\u3001\u8B8A\u66F4\u3001\u6D3B\u52D5\u89E3\u91CB\u53CA\u53D6\u6D88\u672C\u6D3B\u52D5\u4E4B\u6B0A\u5229\uFF0C\u82E5\u6709\u76F8\u95DC\u7570\u52D5\u5C07\u6703\u516C\u544A\u65BC\u7DB2\u7AD9\uFF0C\u6055\u4E0D\u53E6\u884C\u901A\u77E5\u3002<br data-v-4c489fb4> 6.\u672C\u6D3B\u52D5\u7522\u54C1\u4E4B\u5BC4\u9001\u5730\u5740\u50C5\u9650\u53F0\u7063\u5730\u5340\u3002<br data-v-4c489fb4></p>`);
      }
      _push(`</div><button type="button" class="btn-notice" data-v-4c489fb4>${ssrInterpolate(unref(btnText))}</button></div></div></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/EventNotice.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-4c489fb4"]]);
const _imports_0 = "" + buildAssetsURL("icon-arrow-gray.D8NtaUX_.svg");
const _sfc_main$7 = {
  __name: "GoTop",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "gotop" }, _attrs))}><div class="gotop__wrapper"><div class="gotop__body"><img${ssrRenderAttr("src", _imports_0)} alt="scroll top icon"></div></div></div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/GoTop.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "TermsModal",
  __ssrInlineRender: true,
  emits: ["agreeTerms"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const termsModal = ref("");
    const termsModalDom = ref(null);
    const isAgree = ref(false);
    const showTermsModal = () => {
      termsModal.value.show();
    };
    __expose({
      showTermsModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade terms",
        ref_key: "termsModalDom",
        ref: termsModalDom,
        id: "exampleModal",
        tabindex: "-1",
        "aria-labelledby": "termsModalLabel",
        "aria-hidden": "true"
      }, _attrs))} data-v-5c6b1095><div class="modal-dialog modal-lg" data-v-5c6b1095><div class="modal-content" data-v-5c6b1095><div class="modal-header" data-v-5c6b1095><h5 class="modal-title" id="termsModalLabel" data-v-5c6b1095>\u540C\u610F\u66F8</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-5c6b1095></button></div><div class="modal-body" data-v-5c6b1095><p data-v-5c6b1095> \u3010\u500B\u8CC7\u6CD5\u689D\u6B3E\u5167\u5BB9\u3011<br data-v-5c6b1095> 1. \u70BA\u63D0\u4F9B\u8A02\u8CFC\u3001\u884C\u92B7\u3001\u5BA2\u6236\u7BA1\u7406\u6216\u5176\u4ED6\u5408\u65BC\u71DF\u696D\u767B\u8A18\u9805\u76EE\u6216\u7AE0\u7A0B\u6240\u5B9A\u696D\u52D9\u9700\u8981\u4E4B\u76EE\u7684\uFF0C\u512A\u50CF\u6578\u4F4D\u5A92\u9AD4\u79D1\u6280\u80A1\u4EFD\u6709\u9650\u516C\u53F8(\u5B64\u7368\u65C5\u904A)\uFF0C\u65BC\u672C\u516C\u53F8\u4E4B\u71DF\u904B\u671F\u9593\u53CA\u5730\u5340\u5167\uFF0C\u5C07\u4EE5mail\u3001\u50B3\u771F\u3001\u96FB\u8A71\u3001\u7C21\u8A0A\u3001\u90F5\u5BC4\u6216\u5176\u4ED6\u516C\u544A\u65B9\u5F0F\u5229\u7528\u60A8\u63D0\u4F9B\u4E4B\u8CC7\u6599\uFF0C\u4E26\u5C07\u524D\u8FF0\u8CC7\u6599\u63D0\u4F9B\u4E88\u5408\u4F5C\u6A5F\u69CB\u70BA\u524D\u8FF0\u5229\u7528\u3002\u5982\u60A8\u6709\u4F9D\u500B\u8CC7\u6CD5\u7B2C\u4E09\u689D\u6216\u5176\u4ED6\u9700\u670D\u52D9\u4E4B\u8655\uFF0C\u5F97\u767C\u4FE1\u81F3\u672C\u516C\u53F8\u5BA2\u670D\u4FE1\u7BB1\uFF1Alonelytravellll@travel.tw \u8ACB\u6C42\u5354\u52A9\u3002\u76F8\u95DC\u8CC7\u6599\u5982\u70BA\u975E\u5FC5\u586B\u9805\u76EE\uFF0C\u4E0D\u63D0\u4F9B\u4EA6\u4E0D\u5F71\u97FF\u60A8\u7684\u6B0A\u76CA\u3002<br data-v-5c6b1095> 2.\u5B64\u7368\u65C5\u904A\u64C1\u6709\u8A72\u6D3B\u52D5\u554F\u5377\u586B\u5BEB\u7D50\u679C\u4E4B\u4F7F\u7528\u6B0A\uFF0C\u5F97\u904B\u7528\u65BC\u5B64\u7368\u65C5\u904A\u5B98\u65B9\u7DB2\u7AD9\u3001Facebook\u7C89\u7D72\u5C08\u9801\uFF0C\u6216\u96FB\u5F71\u76F8\u95DC\u6D3B\u52D5\u5BA3\u50B3\u4E4B\u7528\u3002<br data-v-5c6b1095> 3. \u5018\u82E5\u60A8\u56E0\u672A\u5C65\u884C\u4EE5\u4E0A\u76F8\u95DC\u914D\u5408\u4E8B\u9805\uFF0C\u6050\u5C07\u7121\u6CD5\u7E7C\u7E8C\u53C3\u8207\u672A\u4F86\u5B64\u7368\u65C5\u904A\u6240\u8209\u8FA6\u4E4B\u4EFB\u4F55\u5C08\u6848\u3002<br data-v-5c6b1095> 4. \u672C\u6D3B\u52D5\u6CE8\u610F\u4E8B\u9805\u8F09\u660E\u65BC\u6D3B\u52D5\u7DB2\u9801\u4E2D\uFF0C\u53C3\u52A0\u8005\u65BC\u53C3\u52A0\u672C\u6D3B\u52D5\u4E4B\u540C\u6642\uFF0C\u5373\u540C\u610F\u63A5\u53D7\u672C\u6D3B\u52D5\u6CE8\u610F\u4E8B\u9805\u4E4B\u898F\u7BC4\u3002\u5982\u6709\u9055\u53CD\u672C\u6D3B\u52D5\u6CE8\u610F\u4E8B\u9805\u4E4B\u884C\u70BA, \u4E3B\u8FA6\u55AE\u4F4D\u5F97\u53D6\u6D88\u5176\u53C3\u52A0\u6216\u5F97\u734E\u8CC7\u683C\uFF0C\u4E26\u5C0D\u65BC\u4EFB\u4F55\u7834\u58DE\u672C\u6D3B\u52D5\u4E4B\u884C\u70BA\u4FDD\u7559\u76F8\u95DC\u6B0A\u5229\u3002<br data-v-5c6b1095> 5. \u53C3\u52A0\u8005\u4FDD\u8B49\u6240\u6709\u586B\u5BEB\u6216\u63D0\u51FA\u4E4B\u8CC7\u6599\u5747\u70BA\u771F\u5BE6\u4E14\u6B63\u78BA\uFF0C\u4E14\u672A\u5192\u7528\u6216\u76DC\u7528\u4EFB\u4F55\u7B2C\u4E09\u4EBA\u4E4B\u8CC7\u6599\u6216\u667A\u6167\u8CA1\u7522\u6B0A\u3002\u5982\u6709\u4E0D\u5BE6\u6216\u4E0D\u6B63\u78BA\u4E4B\u60C5\u4E8B\uFF0C\u5C07\u88AB\u53D6\u6D88\u53C3\u52A0\u8CC7\u683C\uFF1B\u5982\u70BA\u5F97\u734E\u8005\uFF0C\u5247\u53D6\u6D88\u5F97\u734E\u8CC7\u683C\u3002\u5982\u56E0\u6B64\u81F4\u4E3B\u8FA6\u55AE\u4F4D\u7121\u6CD5\u901A\u77E5\u5176\u5F97\u734E\u8A0A\u606F\u6642\uFF0C\u4E3B\u8FA6\u55AE\u4F4D\u4E0D\u8CA0\u4EFB\u4F55\u8CAC\u4EFB\uFF0C\u4E14\u5982\u6709\u81F4\u640D\u5BB3\u65BC\u4E3B\u8FA6\u55AE\u4F4D\u6216\u5176\u4ED6\u4EFB\u4F55\u7B2C\u4E09\u4EBA\uFF0C\u53C3\u52A0\u8005\u61C9\u8CA0\u4E00\u5207\u6C11\u5211\u4E8B\u8CAC\u4EFB\u3002<br data-v-5c6b1095></p></div><div class="modal-footer" data-v-5c6b1095><div class="btn-wrapper" data-v-5c6b1095><div class="form-check" data-v-5c6b1095><input class="form-check-input" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(isAgree)) ? ssrLooseContain(unref(isAgree), null) : unref(isAgree)) ? " checked" : ""} id="flexCheckDefault" data-v-5c6b1095><label class="form-check-label" for="flexCheckDefault" data-v-5c6b1095> \u6211\u540C\u610F\u500B\u8CC7\u6CD5\u689D\u6B3E\uFF0C\u4E26\u78BA\u8A8D\u5831\u540D\u6B64\u6D3B\u52D5 </label></div><button type="button" class="btn-primary-orange"${ssrIncludeBooleanAttr(!unref(isAgree)) ? " disabled" : ""} data-v-5c6b1095> \u4E0B\u4E00\u6B65 </button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/TermsModal.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-5c6b1095"]]);
const _sfc_main$5 = {
  __name: "FormQuestion",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    question: Object
  }, {
    "answers": {},
    "answersModifiers": {},
    "otherAnswers": {},
    "otherAnswersModifiers": {}
  }),
  emits: ["update:answers", "update:otherAnswers"],
  setup(__props) {
    const props = __props;
    const answers = useModel(__props, "answers");
    const otherAnswers = useModel(__props, "otherAnswers");
    watch(() => answers.value[props.question.key], (answer) => {
      if (!props.question.other_option)
        return;
      if (props.question.type === "1" && answer !== props.question.other_option) {
        otherAnswers.value[props.question.key] = "";
      } else if (props.question.type === "2" && !answer.includes(props.question.other_option)) {
        otherAnswers.value[props.question.key] = "";
      }
    });
    watch(() => otherAnswers.value[props.question.key], (answer, oldAnswer) => {
      if (!oldAnswer && answer) {
        if (props.question.type === "1" && answers.value[props.question.key] !== props.question.other_option) {
          answers.value[props.question.key] = props.question.other_option;
        } else if (props.question.type === "2" && !answers.value[props.question.key].includes(props.question.other_option)) {
          answers.value[props.question.key].push(props.question.other_option);
        }
      }
    });
    const isInputType = computed(() => props.question.type === "5");
    const isRequired = computed(() => {
      if (props.question.type === "2")
        return hasCheckboxAnswer.value;
      return props.question.q_required === "checked";
    });
    const hasCheckboxAnswer = computed(() => {
      var _a;
      return props.question.q_required === "checked" && ((_a = answers.value[props.question.key]) == null ? void 0 : _a.length) === 0;
    });
    const typeInText = computed(() => {
      var _a;
      switch ((_a = props.question) == null ? void 0 : _a.type) {
        case "1":
          return "radio";
        case "2":
          return "checkbox";
        default:
          return "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["form-question", { "not-group": __props.question.type !== "7" }]
      }, _attrs))} data-v-22dd0d7c>`);
      if (!unref(isInputType)) {
        _push(`<h4 class="${ssrRenderClass({ "group-title": __props.question.type === "7" })}" data-v-22dd0d7c>`);
        if (__props.question.q_required === "checked") {
          _push(`<span data-v-22dd0d7c>*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(__props.question.title)}</h4>`);
      } else {
        _push(`<label${ssrRenderAttr("for", __props.question.key)} class="input-type-label" data-v-22dd0d7c>`);
        if (__props.question.q_required === "checked") {
          _push(`<span data-v-22dd0d7c>*</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(` ${ssrInterpolate(__props.question.title)}</label>`);
      }
      if (!unref(isInputType)) {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(__props.question["q_option[]"], (option, index) => {
          _push(`<div class="${ssrRenderClass([unref(typeInText), "form-item"])}" data-v-22dd0d7c><label${ssrRenderAttr("for", __props.question.key + index)} data-v-22dd0d7c><input${ssrRenderAttr("type", unref(typeInText))}${ssrRenderAttr("id", __props.question.key + index)}${ssrRenderAttr("name", __props.question.key)}${ssrRenderAttr("value", option)}${ssrRenderDynamicModel(unref(typeInText), answers.value[__props.question.key], option)}${ssrIncludeBooleanAttr(unref(isRequired)) ? " required" : ""} data-v-22dd0d7c><span class="marker" data-v-22dd0d7c><span class="point" data-v-22dd0d7c></span></span> ${ssrInterpolate(option)}</label></div>`);
        });
        _push(`<!--]-->`);
        if (__props.question.other_option) {
          _push(`<div class="${ssrRenderClass([unref(typeInText), "form-item"])}" data-v-22dd0d7c><label${ssrRenderAttr("for", `${__props.question.key}-other`)} data-v-22dd0d7c><input${ssrRenderAttr("type", unref(typeInText))}${ssrRenderAttr("id", `${__props.question.key}-other`)}${ssrRenderAttr("name", __props.question.key)}${ssrRenderAttr("value", __props.question.other_option)}${ssrIncludeBooleanAttr(unref(isRequired)) ? " required" : ""}${ssrRenderDynamicModel(unref(typeInText), answers.value[__props.question.key], __props.question.other_option)} data-v-22dd0d7c><span class="marker" data-v-22dd0d7c><span class="point" data-v-22dd0d7c></span></span> ${ssrInterpolate(__props.question.other_option)}</label><input type="text" class="form-control" placeholder="\u8ACB\u8F38\u5165"${ssrRenderAttr("id", `${__props.question.key}-other-text`)}${ssrRenderAttr("name", `${__props.question.key}-other-text`)}${ssrRenderAttr("value", otherAnswers.value[__props.question.key])} data-v-22dd0d7c></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<div class="form-item" data-v-22dd0d7c><input type="text" class="form-control" placeholder="\u8ACB\u8F38\u5165"${ssrRenderAttr("value", answers.value[__props.question.key])}${ssrRenderAttr("id", __props.question.key)}${ssrIncludeBooleanAttr(__props.question.q_required === "checked") ? " required" : ""} data-v-22dd0d7c></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/FormQuestion.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-22dd0d7c"]]);
const _sfc_main$4 = {
  __name: "FormSurvey",
  __ssrInlineRender: true,
  emits: ["surveyResult"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const productStore = useProductStore();
    computed(() => productStore.mainProductData.try_questionnaire_id);
    const answers = ref({});
    const otherAnswers = ref({});
    const accectQuestionType = ["1", "2", "5", "7"];
    const questionData = computed(() => productStore.questionData);
    watch(questionData, (val) => {
      initAnswers();
    });
    const filteredQuestionData = computed(() => {
      return questionData.value.filter((q) => accectQuestionType.includes(q.type));
    });
    const groupedQuestions = computed(() => {
      const groups = {};
      filteredQuestionData.value.forEach((question) => {
        if (!groups[question.groupid]) {
          groups[question.groupid] = [];
        }
        groups[question.groupid].push(question);
      });
      return groups;
    });
    const requiredQuestions = computed(() => filteredQuestionData.value.filter((question) => question.q_required === "checked"));
    const filledRequiredNum = computed(() => requiredQuestions.value.reduce((count, question) => {
      const answer = answers.value[question.key];
      return count + (Array.isArray(answer) && answer.length > 0 || typeof answer === "string" && answer !== "" ? 1 : 0);
    }, 0));
    const checkHasEmptyField = () => {
      const emptyFields = filteredQuestionData.value.filter((question) => {
        const answer = answers.value[question.key];
        if (question.q_required === "checked")
          return Array.isArray(answer) && answer.length === 0 || answer === "";
        return false;
      });
      if (emptyFields.length > 0)
        return false;
      return true;
    };
    const submitSurvey = async () => {
      if (!checkHasEmptyField())
        return;
      questionData.value.filter((question) => question.type !== "7").map((question) => {
        let answer = answers.value[question.key];
        if (question.other_option) {
          const otherText = otherAnswers.value[question.key] || "";
          if (typeof answer === "string") {
            if (answer === question.other_option) {
              answer = `${answer}-${otherText}`;
            }
          } else if (Array.isArray(answer)) {
            answer = answer.map((item) => {
              if (item === question.other_option) {
                return `${item}-${otherText}`;
              }
              return item;
            });
          }
        }
        return {
          title: question.title,
          key: question.key,
          type: mapInputType(question.type),
          answer
        };
      });
      emit("surveyResult", true);
    };
    const mapInputType = (type) => {
      switch (type) {
        case "1":
          return "radio";
        case "2":
          return "checkbox";
        case "5":
          return "text";
        case "6":
          return "6";
      }
    };
    const initAnswers = () => {
      questionData.value.forEach((question) => {
        if (question.type === "2") {
          answers.value[question.key] = [];
        } else if (!accectQuestionType.includes(question.type) && question.q_required === "checked") {
          answers.value[question.key] = 1;
        } else {
          answers.value[question.key] = "";
        }
      });
    };
    __expose({
      requiredQuestions,
      filledRequiredNum,
      submitSurvey,
      initAnswers
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductPageFormQuestion = __nuxt_component_0$1;
      _push(`<form${ssrRenderAttrs(mergeProps({ id: "survey" }, _attrs))} data-v-b55d9a3c><!--[-->`);
      ssrRenderList(unref(groupedQuestions), (group, groupId) => {
        _push(`<div class="${ssrRenderClass({ "form-question-group": group.length > 1 })}" data-v-b55d9a3c><!--[-->`);
        ssrRenderList(group, (question) => {
          _push(ssrRenderComponent(_component_ProductPageFormQuestion, {
            key: question.key,
            question,
            answers: unref(answers),
            "onUpdate:answers": ($event) => isRef(answers) ? answers.value = $event : null,
            otherAnswers: unref(otherAnswers),
            "onUpdate:otherAnswers": ($event) => isRef(otherAnswers) ? otherAnswers.value = $event : null
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]--></form>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/FormSurvey.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b55d9a3c"]]);
const data = {
  "\u57FA\u9686\u5E02": {
    "\u4EC1\u611B\u5340": "200",
    "\u4FE1\u7FA9\u5340": "201",
    "\u4E2D\u6B63\u5340": "202",
    "\u4E2D\u5C71\u5340": "203",
    "\u5B89\u6A02\u5340": "204",
    "\u6696\u6696\u5340": "205",
    "\u4E03\u5835\u5340": "206"
  },
  "\u53F0\u5317\u5E02": {
    "\u4E2D\u6B63\u5340": "100",
    "\u5927\u540C\u5340": "103",
    "\u4E2D\u5C71\u5340": "104",
    "\u677E\u5C71\u5340": "105",
    "\u5927\u5B89\u5340": "106",
    "\u842C\u83EF\u5340": "108",
    "\u4FE1\u7FA9\u5340": "110",
    "\u58EB\u6797\u5340": "111",
    "\u5317\u6295\u5340": "112",
    "\u5167\u6E56\u5340": "114",
    "\u5357\u6E2F\u5340": "115",
    "\u6587\u5C71\u5340": "116"
  },
  "\u65B0\u5317\u5E02": {
    "\u842C\u91CC\u5340": "207",
    "\u91D1\u5C71\u5340": "208",
    "\u677F\u6A4B\u5340": "220",
    "\u6C50\u6B62\u5340": "221",
    "\u6DF1\u5751\u5340": "222",
    "\u77F3\u7887\u5340": "223",
    "\u745E\u82B3\u5340": "224",
    "\u5E73\u6EAA\u5340": "226",
    "\u96D9\u6EAA\u5340": "227",
    "\u8CA2\u5BEE\u5340": "228",
    "\u65B0\u5E97\u5340": "231",
    "\u576A\u6797\u5340": "232",
    "\u70CF\u4F86\u5340": "233",
    "\u6C38\u548C\u5340": "234",
    "\u4E2D\u548C\u5340": "235",
    "\u571F\u57CE\u5340": "236",
    "\u4E09\u5CFD\u5340": "237",
    "\u6A39\u6797\u5340": "238",
    "\u9DAF\u6B4C\u5340": "239",
    "\u4E09\u91CD\u5340": "241",
    "\u65B0\u838A\u5340": "242",
    "\u6CF0\u5C71\u5340": "243",
    "\u6797\u53E3\u5340": "244",
    "\u8606\u6D32\u5340": "247",
    "\u4E94\u80A1\u5340": "248",
    "\u516B\u91CC\u5340": "249",
    "\u6DE1\u6C34\u5340": "251",
    "\u4E09\u829D\u5340": "252",
    "\u77F3\u9580\u5340": "253"
  },
  "\u5B9C\u862D\u7E23": {
    "\u5B9C\u862D\u5E02": "260",
    "\u982D\u57CE\u93AE": "261",
    "\u7901\u6EAA\u9109": "262",
    "\u58EF\u570D\u9109": "263",
    "\u54E1\u5C71\u9109": "264",
    "\u7F85\u6771\u93AE": "265",
    "\u4E09\u661F\u9109": "266",
    "\u5927\u540C\u9109": "267",
    "\u4E94\u7D50\u9109": "268",
    "\u51AC\u5C71\u9109": "269",
    "\u8607\u6FB3\u93AE": "270",
    "\u5357\u6FB3\u9109": "272",
    "\u91E3\u9B5A\u53F0\u5217\u5DBC": "290"
  },
  "\u65B0\u7AF9\u5E02": {
    "\u6771\u5340": "300",
    "\u5317\u5340": "300",
    "\u9999\u5C71\u5340": "300"
  },
  "\u65B0\u7AF9\u7E23": {
    "\u7AF9\u5317\u5E02": "302",
    "\u6E56\u53E3\u9109": "303",
    "\u65B0\u8C50\u9109": "304",
    "\u65B0\u57D4\u93AE": "305",
    "\u95DC\u897F\u93AE": "306",
    "\u828E\u6797\u9109": "307",
    "\u5BF6\u5C71\u9109": "308",
    "\u7AF9\u6771\u93AE": "310",
    "\u4E94\u5CF0\u9109": "311",
    "\u6A6B\u5C71\u9109": "312",
    "\u5C16\u77F3\u9109": "313",
    "\u5317\u57D4\u9109": "314",
    "\u5CE8\u5D4B\u9109": "315"
  },
  "\u6843\u5712\u5E02": {
    "\u4E2D\u58E2\u5340": "320",
    "\u5E73\u93AE\u5340": "324",
    "\u9F8D\u6F6D\u5340": "325",
    "\u694A\u6885\u5340": "326",
    "\u65B0\u5C4B\u5340": "327",
    "\u89C0\u97F3\u5340": "328",
    "\u6843\u5712\u5340": "330",
    "\u9F9C\u5C71\u5340": "333",
    "\u516B\u5FB7\u5340": "334",
    "\u5927\u6EAA\u5340": "335",
    "\u5FA9\u8208\u5340": "336",
    "\u5927\u5712\u5340": "337",
    "\u8606\u7AF9\u5340": "338"
  },
  "\u82D7\u6817\u7E23": {
    "\u7AF9\u5357\u93AE": "350",
    "\u982D\u4EFD\u93AE": "351",
    "\u4E09\u7063\u9109": "352",
    "\u5357\u5E84\u9109": "353",
    "\u7345\u6F6D\u9109": "354",
    "\u5F8C\u9F8D\u93AE": "356",
    "\u901A\u9704\u93AE": "357",
    "\u82D1\u88E1\u93AE": "358",
    "\u82D7\u6817\u5E02": "360",
    "\u9020\u6A4B\u9109": "361",
    "\u982D\u5C4B\u9109": "362",
    "\u516C\u9928\u9109": "363",
    "\u5927\u6E56\u9109": "364",
    "\u6CF0\u5B89\u9109": "365",
    "\u9285\u947C\u9109": "366",
    "\u4E09\u7FA9\u9109": "367",
    "\u897F\u6E56\u9109": "368",
    "\u5353\u862D\u93AE": "369"
  },
  "\u53F0\u4E2D\u5E02": {
    "\u4E2D\u5340": "400",
    "\u6771\u5340": "401",
    "\u5357\u5340": "402",
    "\u897F\u5340": "403",
    "\u5317\u5340": "404",
    "\u5317\u5C6F\u5340": "406",
    "\u897F\u5C6F\u5340": "407",
    "\u5357\u5C6F\u5340": "408",
    "\u592A\u5E73\u5340": "411",
    "\u5927\u91CC\u5340": "412",
    "\u9727\u5CF0\u5340": "413",
    "\u70CF\u65E5\u5340": "414",
    "\u8C50\u539F\u5340": "420",
    "\u540E\u91CC\u5340": "421",
    "\u77F3\u5CA1\u5340": "422",
    "\u6771\u52E2\u5340": "423",
    "\u548C\u5E73\u5340": "424",
    "\u65B0\u793E\u5340": "426",
    "\u6F6D\u5B50\u5340": "427",
    "\u5927\u96C5\u5340": "428",
    "\u795E\u5CA1\u5340": "429",
    "\u5927\u809A\u5340": "432",
    "\u6C99\u9E7F\u5340": "433",
    "\u9F8D\u4E95\u5340": "434",
    "\u68A7\u68F2\u5340": "435",
    "\u6E05\u6C34\u5340": "436",
    "\u5927\u7532\u5340": "437",
    "\u5916\u57D4\u5340": "438",
    "\u5927\u5B89\u5340": "439"
  },
  "\u5F70\u5316\u7E23": {
    "\u5F70\u5316\u5E02": "500",
    "\u82AC\u5712\u9109": "502",
    "\u82B1\u58C7\u9109": "503",
    "\u79C0\u6C34\u9109": "504",
    "\u9E7F\u6E2F\u93AE": "505",
    "\u798F\u8208\u9109": "506",
    "\u7DDA\u897F\u9109": "507",
    "\u548C\u7F8E\u93AE": "508",
    "\u4F38\u6E2F\u9109": "509",
    "\u54E1\u6797\u93AE": "510",
    "\u793E\u982D\u9109": "511",
    "\u6C38\u9756\u9109": "512",
    "\u57D4\u5FC3\u9109": "513",
    "\u6EAA\u6E56\u93AE": "514",
    "\u5927\u6751\u9109": "515",
    "\u57D4\u9E7D\u9109": "516",
    "\u7530\u4E2D\u93AE": "520",
    "\u5317\u6597\u93AE": "521",
    "\u7530\u5C3E\u9109": "522",
    "\u57E4\u982D\u9109": "523",
    "\u6EAA\u5DDE\u9109": "524",
    "\u7AF9\u5858\u9109": "525",
    "\u4E8C\u6797\u93AE": "526",
    "\u5927\u57CE\u9109": "527",
    "\u82B3\u82D1\u9109": "528",
    "\u4E8C\u6C34\u9109": "530"
  },
  "\u5357\u6295\u7E23": {
    "\u5357\u6295\u5E02": "540",
    "\u4E2D\u5BEE\u9109": "541",
    "\u8349\u5C6F\u93AE": "542",
    "\u570B\u59D3\u9109": "544",
    "\u57D4\u91CC\u93AE": "545",
    "\u4EC1\u611B\u9109": "546",
    "\u540D\u9593\u9109": "551",
    "\u96C6\u96C6\u93AE": "552",
    "\u6C34\u91CC\u9109": "553",
    "\u9B5A\u6C60\u9109": "555",
    "\u4FE1\u7FA9\u9109": "556",
    "\u7AF9\u5C71\u93AE": "557",
    "\u9E7F\u8C37\u9109": "558"
  },
  "\u5609\u7FA9\u5E02": {
    "\u6771\u5340": "600",
    "\u897F\u5340": "600"
  },
  "\u5609\u7FA9\u7E23": {
    "\u756A\u8DEF\u9109": "602",
    "\u6885\u5C71\u9109": "603",
    "\u7AF9\u5D0E\u9109": "604",
    "\u963F\u91CC\u5C71": "605",
    "\u4E2D\u57D4\u9109": "606",
    "\u5927\u57D4\u9109": "607",
    "\u6C34\u4E0A\u9109": "608",
    "\u9E7F\u8349\u9109": "611",
    "\u592A\u4FDD\u5E02": "612",
    "\u6734\u5B50\u5E02": "613",
    "\u6771\u77F3\u9109": "614",
    "\u516D\u8173\u9109": "615",
    "\u65B0\u6E2F\u9109": "616",
    "\u6C11\u96C4\u9109": "621",
    "\u5927\u6797\u93AE": "622",
    "\u6EAA\u53E3\u9109": "623",
    "\u7FA9\u7AF9\u9109": "624",
    "\u5E03\u888B\u93AE": "625"
  },
  "\u96F2\u6797\u7E23": {
    "\u6597\u5357\u93AE": "630",
    "\u5927\u57E4\u9109": "631",
    "\u864E\u5C3E\u93AE": "632",
    "\u571F\u5EAB\u93AE": "633",
    "\u8912\u5FE0\u9109": "634",
    "\u6771\u52E2\u9109": "635",
    "\u81FA\u897F\u9109": "636",
    "\u5D19\u80CC\u9109": "637",
    "\u9EA5\u5BEE\u9109": "638",
    "\u6597\u516D\u5E02": "640",
    "\u6797\u5167\u9109": "643",
    "\u53E4\u5751\u9109": "646",
    "\u83BF\u6850\u9109": "647",
    "\u897F\u87BA\u93AE": "648",
    "\u4E8C\u5D19\u9109": "649",
    "\u5317\u6E2F\u93AE": "651",
    "\u6C34\u6797\u9109": "652",
    "\u53E3\u6E56\u9109": "653",
    "\u56DB\u6E56\u9109": "654",
    "\u5143\u9577\u9109": "655"
  },
  "\u53F0\u5357\u5E02": {
    "\u4E2D\u897F\u5340": "700",
    "\u6771\u5340": "701",
    "\u5357\u5340": "702",
    "\u5317\u5340": "704",
    "\u5B89\u5E73\u5340": "708",
    "\u5B89\u5357\u5340": "709",
    "\u6C38\u5EB7\u5340": "710",
    "\u6B78\u4EC1\u5340": "711",
    "\u65B0\u5316\u5340": "712",
    "\u5DE6\u93AE\u5340": "713",
    "\u7389\u4E95\u5340": "714",
    "\u6960\u897F\u5340": "715",
    "\u5357\u5316\u5340": "716",
    "\u4EC1\u5FB7\u5340": "717",
    "\u95DC\u5EDF\u5340": "718",
    "\u9F8D\u5D0E\u5340": "719",
    "\u5B98\u7530\u5340": "720",
    "\u9EBB\u8C46\u5340": "721",
    "\u4F73\u91CC\u5340": "722",
    "\u897F\u6E2F\u5340": "723",
    "\u4E03\u80A1\u5340": "724",
    "\u5C07\u8ECD\u5340": "725",
    "\u5B78\u7532\u5340": "726",
    "\u5317\u9580\u5340": "727",
    "\u65B0\u71DF\u5340": "730",
    "\u5F8C\u58C1\u5340": "731",
    "\u767D\u6CB3\u5340": "732",
    "\u6771\u5C71\u5340": "733",
    "\u516D\u7532\u5340": "734",
    "\u4E0B\u71DF\u5340": "735",
    "\u67F3\u71DF\u5340": "736",
    "\u9E7D\u6C34\u5340": "737",
    "\u5584\u5316\u5340": "741",
    "\u5927\u5167\u5340": "742",
    "\u5C71\u4E0A\u5340": "743",
    "\u65B0\u5E02\u5340": "744",
    "\u5B89\u5B9A\u5340": "745"
  },
  "\u9AD8\u96C4\u5E02": {
    "\u65B0\u8208\u5340": "800",
    "\u524D\u91D1\u5340": "801",
    "\u82D3\u96C5\u5340": "802",
    "\u9E7D\u57D5\u5340": "803",
    "\u9F13\u5C71\u5340": "804",
    "\u65D7\u6D25\u5340": "805",
    "\u524D\u93AE\u5340": "806",
    "\u4E09\u6C11\u5340": "807",
    "\u6960\u6893\u5340": "811",
    "\u5C0F\u6E2F\u5340": "812",
    "\u5DE6\u71DF\u5340": "813",
    "\u4EC1\u6B66\u5340": "814",
    "\u5927\u793E\u5340": "815",
    "\u5CA1\u5C71\u5340": "820",
    "\u8DEF\u7AF9\u5340": "821",
    "\u963F\u84EE\u5340": "822",
    "\u7530\u5BEE\u5340": "823",
    "\u71D5\u5DE2\u5340": "824",
    "\u6A4B\u982D\u5340": "825",
    "\u6893\u5B98\u5340": "826",
    "\u5F4C\u9640\u5340": "827",
    "\u6C38\u5B89\u5340": "828",
    "\u6E56\u5167\u5340": "829",
    "\u9CF3\u5C71\u5340": "830",
    "\u5927\u5BEE\u5340": "831",
    "\u6797\u5712\u5340": "832",
    "\u9CE5\u677E\u5340": "833",
    "\u5927\u6A39\u5340": "840",
    "\u65D7\u5C71\u5340": "842",
    "\u7F8E\u6FC3\u5340": "843",
    "\u516D\u9F9C\u5340": "844",
    "\u5167\u9580\u5340": "845",
    "\u6749\u6797\u5340": "846",
    "\u7532\u4ED9\u5340": "847",
    "\u6843\u6E90\u5340": "848",
    "\u90A3\u746A\u590F\u5340": "849",
    "\u8302\u6797\u5340": "851",
    "\u8304\u8423\u5340": "852"
  },
  "\u5C4F\u6771\u7E23": {
    "\u5C4F\u6771\u5E02": "900",
    "\u4E09\u5730\u9580": "901",
    "\u9727\u81FA\u9109": "902",
    "\u746A\u5BB6\u9109": "903",
    "\u4E5D\u5982\u9109": "904",
    "\u91CC\u6E2F\u9109": "905",
    "\u9AD8\u6A39\u9109": "906",
    "\u9E7D\u57D4\u9109": "907",
    "\u9577\u6CBB\u9109": "908",
    "\u9E9F\u6D1B\u9109": "909",
    "\u7AF9\u7530\u9109": "911",
    "\u5167\u57D4\u9109": "912",
    "\u842C\u4E39\u9109": "913",
    "\u6F6E\u5DDE\u93AE": "920",
    "\u6CF0\u6B66\u9109": "921",
    "\u4F86\u7FA9\u9109": "922",
    "\u842C\u5DD2\u9109": "923",
    "\u5D01\u9802\u9109": "924",
    "\u65B0\u57E4\u9109": "925",
    "\u5357\u5DDE\u9109": "926",
    "\u6797\u908A\u9109": "927",
    "\u6771\u6E2F\u93AE": "928",
    "\u7409\u7403\u9109": "929",
    "\u4F73\u51AC\u9109": "931",
    "\u65B0\u5712\u9109": "932",
    "\u678B\u5BEE\u9109": "940",
    "\u678B\u5C71\u9109": "941",
    "\u6625\u65E5\u9109": "942",
    "\u7345\u5B50\u9109": "943",
    "\u8ECA\u57CE\u9109": "944",
    "\u7261\u4E39\u9109": "945",
    "\u6046\u6625\u93AE": "946",
    "\u6EFF\u5DDE\u9109": "947"
  },
  "\u53F0\u6771\u7E23": {
    "\u81FA\u6771\u5E02": "950",
    "\u7DA0\u5CF6\u9109": "951",
    "\u862D\u5DBC\u9109": "952",
    "\u5EF6\u5E73\u9109": "953",
    "\u5351\u5357\u9109": "954",
    "\u9E7F\u91CE\u9109": "955",
    "\u95DC\u5C71\u93AE": "956",
    "\u6D77\u7AEF\u9109": "957",
    "\u6C60\u4E0A\u9109": "958",
    "\u6771\u6CB3\u9109": "959",
    "\u6210\u529F\u93AE": "961",
    "\u9577\u6FF1\u9109": "962",
    "\u592A\u9EBB\u91CC\u9109": "963",
    "\u91D1\u5CF0\u9109": "964",
    "\u5927\u6B66\u9109": "965",
    "\u9054\u4EC1\u9109": "966"
  },
  "\u82B1\u84EE\u7E23": {
    "\u82B1\u84EE\u5E02": "970",
    "\u65B0\u57CE\u9109": "971",
    "\u79C0\u6797\u9109": "972",
    "\u5409\u5B89\u9109": "973",
    "\u58FD\u8C50\u9109": "974",
    "\u9CF3\u6797\u93AE": "975",
    "\u5149\u5FA9\u9109": "976",
    "\u8C50\u6FF1\u9109": "977",
    "\u745E\u7A57\u9109": "978",
    "\u842C\u69AE\u9109": "979",
    "\u7389\u91CC\u93AE": "981",
    "\u5353\u6EAA\u9109": "982",
    "\u5BCC\u91CC\u9109": "983"
  },
  "\u91D1\u9580\u7E23": {
    "\u91D1\u6C99\u93AE": "890",
    "\u91D1\u6E56\u93AE": "891",
    "\u91D1\u5BE7\u9109": "892",
    "\u91D1\u57CE\u93AE": "893",
    "\u70C8\u5DBC\u9109": "894",
    "\u70CF\u5775\u9109": "896"
  },
  "\u9023\u6C5F\u7E23": {
    "\u5357\u7AFF\u9109": "209",
    "\u5317\u7AFF\u9109": "210",
    "\u8392\u5149\u9109": "211",
    "\u6771\u5F15\u9109": "212"
  },
  "\u6F8E\u6E56\u7E23": {
    "\u99AC\u516C\u5E02": "880",
    "\u897F\u5DBC\u9109": "881",
    "\u671B\u5B89\u9109": "882",
    "\u4E03\u7F8E\u9109": "883",
    "\u767D\u6C99\u9109": "884",
    "\u6E56\u897F\u9109": "885"
  },
  "\u5357\u6D77\u8AF8\u5CF6": {
    "\u6771\u6C99": "817",
    "\u5357\u6C99": "819"
  }
};
const _sfc_main$3 = {
  __name: "FormInfo",
  __ssrInlineRender: true,
  emits: ["infoResult"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const productStore = useProductStore();
    const route = useRoute();
    const emit = __emit;
    const emailInputDom = ref(null);
    const infoFormData = ref({
      userName: "http://ichibanchef.blog",
      userId: "ichibanchef",
      displayName: "\u4E2D\u83EF\u4E00\u756A\u5C0F\u7576\u5BB6",
      realname: "",
      mobile: "",
      city: "",
      county: "",
      address: "",
      email: ""
    });
    const cityList = computed(() => {
      return Object.keys(data);
    });
    const countyList = computed(() => {
      return infoFormData.value.city ? Object.keys(data[infoFormData.value.city]) : "";
    });
    const zipCode = computed(() => {
      return infoFormData.value.county ? data[infoFormData.value.city][infoFormData.value.county] : "\u90F5\u905E\u5340\u865F";
    });
    const checkHasEmptyField = () => {
      const emptyFields = Object.values(infoFormData.value).filter((field) => !field.trim());
      if (emptyFields.length > 0) {
        return true;
      }
      return false;
    };
    const checkValidEmail = (email) => {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(email)) {
        return "\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684 email";
      }
      if (email.includes("+")) {
        return "Email \u4E2D\u8ACB\u52FF\u4F7F\u7528\u7279\u6B8A\u7B26\u865F";
      }
      return true;
    };
    const clearSignupForm = () => {
      infoFormData.value = {
        userName: "",
        userId: "",
        displayName: "",
        realname: "",
        mobile: "",
        city: "",
        county: "",
        address: "",
        email: ""
      };
    };
    const submitInfoHandler = async () => {
      if (checkHasEmptyField())
        return;
      const emailCheckResult = checkValidEmail(infoFormData.value.email);
      if (emailCheckResult !== true) {
        emailInputDom.value.setCustomValidity(emailCheckResult);
        return;
      }
      const formData = new FormData();
      const addressFull = `${zipCode.value} ${infoFormData.value.city}${infoFormData.value.county}${infoFormData.value.address}`;
      formData.append("product_id", route.params.productId);
      formData.append("name", infoFormData.value.realname);
      formData.append("mobile", infoFormData.value.mobile);
      formData.append("address", addressFull);
      formData.append("email", infoFormData.value.email);
      if (productStore.mainProductData.try_questionnaire_id) {
        formData.append("q_result_id", productStore.submittedSurveyId);
      }
      emit("infoResult", true);
    };
    watch(() => infoFormData.value.city, () => {
      infoFormData.value.county = "";
    });
    __expose({
      clearSignupForm,
      submitInfoHandler
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ id: "signupinfo" }, _attrs))} data-v-67ab6919><div class="form-item" data-v-67ab6919><label for="username" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> \u5B64\u7368\u65C5\u904A\u90E8\u843D\u683C\u7DB2\u5740 </label><input type="text" class="form-control" placeholder="\u8F38\u5165\u5E33\u865F" id="username" aria-label="username" aria-describedby="username"${ssrRenderAttr("value", unref(infoFormData).userName)} required disabled data-v-67ab6919></div><div class="form-item" data-v-67ab6919><label for="userid" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> \u5B64\u7368\u65C5\u904A\u4F5C\u8005ID </label><input type="text" class="form-control" placeholder="\u8F38\u5165\u5E33\u865F" id="userid" aria-describedby="userid"${ssrRenderAttr("value", unref(infoFormData).userId)} required disabled data-v-67ab6919></div><div class="form-item" data-v-67ab6919><label for="displayname" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> \u5B64\u7368\u65C5\u904A\u4F5C\u8005\u66B1\u7A31 </label><input type="text" class="form-control" placeholder="\u8F38\u5165\u66B1\u7A31" id="displayname"${ssrRenderAttr("value", unref(infoFormData).displayName)} required disabled data-v-67ab6919></div><div class="form-item" data-v-67ab6919><label for="realname" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> \u771F\u5BE6\u59D3\u540D </label><input type="text" class="form-control" placeholder="\u8F38\u5165\u59D3\u540D" id="realname"${ssrRenderAttr("value", unref(infoFormData).realname)} required data-v-67ab6919></div><div class="form-item" data-v-67ab6919><label for="cellphone" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> \u624B\u6A5F\u96FB\u8A71 </label><input type="tel" class="form-control" placeholder="\u8F38\u5165\u96FB\u8A71\u865F\u78BC" id="cellphone"${ssrRenderAttr("value", unref(infoFormData).mobile)} required data-v-67ab6919></div><div class="form-item" data-v-67ab6919><label for="address" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> \u5730\u5740(\u6536\u53D6\u8A66\u7528\u7684\u5730\u5740) </label><div class="address-input-wrapper" data-v-67ab6919><input type="text" class="form-control"${ssrRenderAttr("value", unref(zipCode))} disabled data-v-67ab6919><select id="city" class="form-select" required data-v-67ab6919><option value="" selected disabled data-v-67ab6919> \u7E23(\u5E02) </option><!--[-->`);
      ssrRenderList(unref(cityList), (city) => {
        _push(`<option data-v-67ab6919>${ssrInterpolate(city)}</option>`);
      });
      _push(`<!--]--></select><select id="county" class="form-select" required data-v-67ab6919><option value="" selected disabled data-v-67ab6919>\u9109\u93AE(\u5340)</option>`);
      if (unref(infoFormData).city) {
        _push(`<!--[-->`);
        ssrRenderList(unref(countyList), (county) => {
          _push(`<option data-v-67ab6919>${ssrInterpolate(county)}</option>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</select></div><input type="text" class="form-control" placeholder="\u8F38\u5165\u5730\u5740" id="address"${ssrRenderAttr("value", unref(infoFormData).address)} required data-v-67ab6919></div><div class="form-item" data-v-67ab6919><label for="email" class="form-label" data-v-67ab6919><span data-v-67ab6919>*</span> Email </label><input type="email" class="form-control" placeholder="\u8F38\u5165Email" id="email"${ssrRenderAttr("value", unref(infoFormData).email)} required data-v-67ab6919></div></form>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/FormInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-67ab6919"]]);
const _sfc_main$2 = {
  __name: "ToastResult",
  __ssrInlineRender: true,
  props: {
    isToastOpen: Boolean,
    isSuccess: Boolean,
    toastMessage: Object
  },
  emits: ["closeToast"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["toast-result-wrapper", { "active": __props.isToastOpen }]
      }, _attrs))} data-v-da18a92c><div class="toast-result" data-v-da18a92c>`);
      if (__props.isSuccess) {
        _push(`<i class="success" data-v-da18a92c></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h5 data-v-da18a92c>${ssrInterpolate(__props.toastMessage.title)}</h5><p data-v-da18a92c>${ssrInterpolate(__props.toastMessage.message)}</p><button type="button" class="btn-primary-orange-sm" data-v-da18a92c> \u78BA\u5B9A </button></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/ToastResult.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-da18a92c"]]);
const _sfc_main$1 = {
  __name: "SignupModal",
  __ssrInlineRender: true,
  props: {
    productName: String
    // 只用在pa
  },
  emits: ["refreshProductData"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const signupModal = ref("");
    ref(null);
    const showSignupModal = () => {
      signupModal.value.show();
    };
    useProductStore();
    const signupStep = ref(1);
    const surveyComponent = ref(null);
    const surveyHandler = (isSuccess, message) => {
      if (isSuccess) {
        console.log("\u554F\u5377\u6210\u529F");
        signupStep.value = 2;
      } else {
        signupResult.value.title = message;
        signupResult.value.message = "\u51FA\u4E86\u9EDE\u5C0F\u554F\u984C\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u8A66\uFF5E";
        isShowConfirmToast.value = true;
      }
    };
    const requiredNum = computed(() => {
      var _a;
      return (_a = surveyComponent.value) == null ? void 0 : _a.requiredQuestions.length;
    });
    const filledRequiredNum = computed(() => {
      var _a;
      return (_a = surveyComponent.value) == null ? void 0 : _a.filledRequiredNum;
    });
    const surveyProgress = computed(() => requiredNum.value ? Math.round(filledRequiredNum.value / requiredNum.value * 100) : 0);
    const infoComponent = ref(null);
    const infoHandler = (isSuccess, message) => {
      if (isSuccess) {
        isSignupSuccess.value = true;
        signupResult.value.title = "\u9001\u51FA\u6210\u529F";
        signupResult.value.message = "\u611F\u8B1D\u60A8\u7684\u53C3\u8207\uFF01\u8ACB\u7559\u610F\u60A8\u7684\u96FB\u5B50\u90F5\u4EF6\uFF0C\u6211\u5011\u5C07\u900F\u904E\u90F5\u4EF6\u5411\u60A8\u767C\u9001\u76F8\u95DC\u901A\u77E5\u3002";
      } else {
        console.error("info", message);
        signupResult.value.title = "\u767C\u751F\u932F\u8AA4";
        signupResult.value.message = "Oops! \u51FA\u4E86\u9EDE\u5C0F\u554F\u984C\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66\u8A66\uFF5E";
      }
      isShowConfirmToast.value = true;
      signupModal.value.hide();
      signupStep.value = 1;
    };
    const isShowConfirmToast = ref(false);
    const isShowCancelToast = ref(false);
    const isSignupSuccess = ref(false);
    const signupResult = ref({});
    const closeToastHandler = () => {
      isShowConfirmToast.value = false;
    };
    __expose({
      showSignupModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProductPageFormSurvey = __nuxt_component_0;
      const _component_ProductPageFormInfo = __nuxt_component_1;
      const _component_ProductPageToastResult = __nuxt_component_2;
      _push(`<!--[--><div class="modal fade signup" aria-labelledby="signupModalLabel" aria-hidden="true" tabindex="-1" data-v-9a37d9dc><div class="modal-dialog modal-lg" data-v-9a37d9dc><div class="modal-content" data-v-9a37d9dc><div class="modal-header" data-v-9a37d9dc><h5 class="modal-title" id="signupModalLabel" data-v-9a37d9dc>\u5831\u540D\u8A66\u7528</h5><button type="button" class="btn-close" aria-label="Close" data-v-9a37d9dc></button></div><div class="modal-body" data-v-9a37d9dc><div class="modal-step-wrapper" data-v-9a37d9dc><div class="modal-step active" data-v-9a37d9dc><span data-v-9a37d9dc>1</span><p data-v-9a37d9dc>\u8A66\u7528\u554F\u5377</p><div class="${ssrRenderClass([{ "w-half": unref(signupStep) === 1, "w-full": unref(signupStep) === 2 }, "modal-step-bar"])}" data-v-9a37d9dc></div></div><div class="${ssrRenderClass([{ "active": unref(signupStep) === 2 }, "modal-step"])}" data-v-9a37d9dc><span data-v-9a37d9dc>2</span><p data-v-9a37d9dc>\u57FA\u672C\u8CC7\u6599</p></div></div><div class="modal-reminder" data-v-9a37d9dc><p data-v-9a37d9dc>\u8ACB\u5148\u78BA\u8A8D\u300C\u6D3B\u52D5\u5167\u5BB9\u300D\u5F8C\u518D\u9032\u884C\u5831\u540D\uFF0C\u4E14\u52D9\u5FC5\u586B\u5BEB\u6B63\u78BA\u8CC7\u8A0A\uFF0C<br data-v-9a37d9dc>\u6D3B\u52D5\u5C0F\u7D44\u5C07\u65BC\u5BE9\u6838\u901A\u904E\u5F8C\u76F4\u63A5\u5BC4\u51FA\u7522\u54C1\uFF0C\u6055\u4E0D\u8ABF\u6574\u6536\u4EF6\u8CC7\u6599\uFF01</p><div class="wrapper" data-v-9a37d9dc><i data-v-9a37d9dc></i><p data-v-9a37d9dc>\u82E5\u53C3\u52A0\u5F8C\u672A\u5982\u671F\u5B8C\u6210\u9AD4\u9A57\u4E26\u516C\u958B\u6587\u7AE0\uFF0C\u5C07\u5217\u5165\u6D3B\u52D5\u9ED1\u540D\u55AE\u3002</p></div></div>`);
      if (unref(signupStep) === 1) {
        _push(ssrRenderComponent(_component_ProductPageFormSurvey, {
          ref_key: "surveyComponent",
          ref: surveyComponent,
          onSurveyResult: surveyHandler
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_ProductPageFormInfo, {
          ref_key: "infoComponent",
          ref: infoComponent,
          onInfoResult: infoHandler
        }, null, _parent));
      }
      _push(`</div><div class="modal-footer" data-v-9a37d9dc>`);
      if (unref(signupStep) === 1 && unref(requiredNum)) {
        _push(`<div class="modal-footer__progress" data-v-9a37d9dc><p class="modal-footer__progress-title" data-v-9a37d9dc><span data-v-9a37d9dc>*</span> \u5FC5\u586B\u9805\u76EE </p><div class="modal-footer__progress-wrapper" data-v-9a37d9dc><div class="bar-container" data-v-9a37d9dc><div class="indicator-bar" style="${ssrRenderStyle({ width: `${unref(surveyProgress)}%` })}" data-v-9a37d9dc></div></div><p class="progress-num" data-v-9a37d9dc>${ssrInterpolate(unref(filledRequiredNum))} / ${ssrInterpolate(unref(requiredNum))}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button type="submit"${ssrRenderAttr("form", unref(signupStep) === 1 ? "survey" : "signupinfo")} class="btn-primary-orange" data-v-9a37d9dc>${ssrInterpolate(unref(signupStep) === 1 ? "\u4E0B\u4E00\u6B65" : "\u9001\u51FA")}</button></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ProductPageToastResult, {
        isToastOpen: unref(isShowConfirmToast),
        isSuccess: unref(isSignupSuccess),
        toastMessage: unref(signupResult),
        onCloseToast: closeToastHandler
      }, null, _parent));
      _push(`<div class="${ssrRenderClass([{ "active": unref(isShowCancelToast) }, "signup-cancel-wrapper"])}" data-v-9a37d9dc><div class="signup-cancel" data-v-9a37d9dc><h5 data-v-9a37d9dc>\u8CC7\u6599\u5C1A\u672A\u586B\u5BEB\u5B8C\u6210</h5><p data-v-9a37d9dc>\u4F60\u6B63\u5728\u586B\u5BEB\u7684\u8CC7\u6599\u5C07\u6703\u5168\u90E8\u6E05\u9664\uFF0C\u4F60\u78BA\u5B9A\u8981\u96E2\u958B\u55CE\uFF1F </p><div class="btn-wrapper" data-v-9a37d9dc><button type="button" class="btn-primary-white-sm" data-v-9a37d9dc> \u7E7C\u7E8C\u586B\u5BEB </button><button type="button" class="btn-primary-orange-sm" data-v-9a37d9dc> \u96E2\u958B </button></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductPage/SignupModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9a37d9dc"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    useRouter();
    const termsModalComponent = ref(null);
    const signupModalComponent = ref(null);
    const agreeTermsHandler = () => {
      signupModalComponent.value.showSignupModal();
    };
    const signupHandler = () => {
      termsModalComponent.value.showTermsModal();
    };
    const productStore = useProductStore();
    const { getProductDetailData, getSurvey } = productStore;
    const mainProductData = computed(() => productStore.mainProductData);
    const seoData = computed(() => productStore.seoData);
    const isMainProductLoading = computed(() => productStore.isMainProductLoading);
    const slicedProductDesc = computed(() => {
      var _a;
      return (_a = seoData.value.try_content) == null ? void 0 : _a.replace(/<br \/>|\n/g, "").slice(0, 100);
    });
    const activeSection = ref("step");
    ref(null);
    [__temp, __restore] = withAsyncContext(() => getProductDetailData(route.params.productId)), await __temp, __restore();
    useHead({
      link: [
        { rel: "canonical", href: () => `https://mocktravelllll/${seoData.value.id}` }
      ],
      meta: [
        { property: "og:updated_time", content: () => `${seoData.value.show_at}` }
      ]
    });
    useSeoMeta({
      title: () => `${seoData.value.name} | \u4E00\u500B\u4EBA\u7684\u5B64\u7368\u65C5\u904A`,
      ogTitle: () => `${seoData.value.name} | \u4E00\u500B\u4EBA\u7684\u5B64\u7368\u65C5\u904A`,
      description: () => `${slicedProductDesc.value}`,
      ogDescription: () => `${slicedProductDesc.value}`,
      ogImage: () => `${seoData.value.image}`,
      ogUrl: () => `https://mocktravelllll/${seoData.value.id}`,
      ogType: "website"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UtilsBgWrapper = __nuxt_component_0$4;
      const _component_UtilsLoadingProduct = __nuxt_component_1$2;
      const _component_ProductPageMainProduct = __nuxt_component_2$1;
      const _component_ProductPageSectionTab = __nuxt_component_3;
      const _component_ProductPageEventSteps = __nuxt_component_4;
      const _component_ProductPageEventContent = __nuxt_component_5;
      const _component_ProductPageEventRule = __nuxt_component_6;
      const _component_ProductPageEventNotice = __nuxt_component_7;
      const _component_UtilsGoHome = _sfc_main$h;
      const _component_UtilsGoTop = _sfc_main$7;
      const _component_ProductPageTermsModal = __nuxt_component_10;
      const _component_ProductPageSignupModal = __nuxt_component_11;
      _push(ssrRenderComponent(_component_UtilsBgWrapper, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(isMainProductLoading)) {
              _push2(ssrRenderComponent(_component_UtilsLoadingProduct, { isProductPage: true }, null, _parent2, _scopeId));
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_ProductPageMainProduct, { onSignup: signupHandler }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ProductPageSectionTab, { activeSection: unref(activeSection) }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ProductPageEventSteps, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ProductPageEventContent, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ProductPageEventRule, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_ProductPageEventNotice, {
                notice: unref(mainProductData).try_notice
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UtilsGoHome, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_UtilsGoTop, null, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            }
            _push2(ssrRenderComponent(_component_ProductPageTermsModal, {
              onAgreeTerms: agreeTermsHandler,
              ref_key: "termsModalComponent",
              ref: termsModalComponent
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_ProductPageSignupModal, {
              productName: unref(mainProductData).name,
              ref_key: "signupModalComponent",
              ref: signupModalComponent
            }, null, _parent2, _scopeId));
          } else {
            return [
              unref(isMainProductLoading) ? (openBlock(), createBlock(_component_UtilsLoadingProduct, {
                key: 0,
                isProductPage: true
              })) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_component_ProductPageMainProduct, { onSignup: signupHandler }),
                createVNode(_component_ProductPageSectionTab, { activeSection: unref(activeSection) }, null, 8, ["activeSection"]),
                createVNode(_component_ProductPageEventSteps),
                createVNode(_component_ProductPageEventContent),
                createVNode(_component_ProductPageEventRule),
                createVNode(_component_ProductPageEventNotice, {
                  notice: unref(mainProductData).try_notice
                }, null, 8, ["notice"]),
                createVNode(_component_UtilsGoHome),
                createVNode(_component_UtilsGoTop)
              ], 64)),
              createVNode(_component_ProductPageTermsModal, {
                onAgreeTerms: agreeTermsHandler,
                ref_key: "termsModalComponent",
                ref: termsModalComponent
              }, null, 512),
              createVNode(_component_ProductPageSignupModal, {
                productName: unref(mainProductData).name,
                ref_key: "signupModalComponent",
                ref: signupModalComponent
              }, null, 8, ["productName"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[category]/[productId]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-GemEGeQs.mjs.map
