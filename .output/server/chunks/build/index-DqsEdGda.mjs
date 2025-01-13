import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "banner-ranking" }, _attrs))} data-v-9e400836><div class="custom-container" data-v-9e400836><div class="banner-ranking__title" data-v-9e400836><h1 data-v-9e400836>\u65C5\u884C\u5BB6\u6392\u884C\u699C</h1><p data-v-9e400836>\u5C08\u70BA\u71B1\u611B\u5BEB\u4F5C\u3001\u5206\u4EAB\u751F\u6D3B\u9EDE\u6EF4\u7684\u60A8\u6253\u9020\u7684\u734E\u52F5\u8A08\u756B\uFF0C\u8B93\u6BCF\u4E00\u6B21\u7684\u771F\u5BE6\u9AD4\u9A57\u548C\u5275\u610F\u5206\u4EAB\u90FD\u80FD\u8B8A\u6210\u5BE6\u969B\u7684\u9F13\u821E\u3002</p></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RankingPage/BannerRanking.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-9e400836"]]);
const _sfc_main$2 = {
  __name: "RankInfoModal",
  __ssrInlineRender: true,
  props: {
    modalContentType: Number
  },
  setup(__props, { expose: __expose }) {
    const rankInfoModal = ref("");
    const rankInfoModalDom = ref(null);
    const showRankInfoModal = () => {
      rankInfoModal.value.show();
    };
    const modalData = ref([
      {
        title: "\u5982\u4F55\u7372\u5F97\u7A4D\u5206",
        content: `<p>
                    <span>1.\u53C3\u52A0\u65C5\u884C\u5BB6\u6D3B\u52D5\uFF1A</span> 
                    \u5831\u540D\u5165\u9078\u4E26\u767C\u8868\u8A66\u7528\u6587\u7AE0\uFF0C\u6BCF\u7BC7\u6587\u7AE0\u53EF\u7372\u5F97<em>800</em>\u7A4D\u5206\u3002\u771F\u5BE6\u9AD4\u9A57\uFF0C\u4E00\u5E74\u5167\u4E0D\u522A\u9664\uFF0C\u5373\u53EF\u7A4D\u5206\u5165\u888B\u3002<br />
                    <br />
                    <span>2.\u6587\u7AE0PV\u9054\u6A19\uFF1A</span>
                    \u5728\u6587\u7AE0\u767C\u8868\u5F8C<em>3\u500B\u6708\u5167</em>\uFF0C\u9054\u5230200\u6B21\u700F\u89BD\u5373\u7372\u5F97<em>200</em>\u7A4D\u5206\u3002\u6211\u5011\u73CD\u8996\u60A8\u7684\u6BCF\u4E00\u4F4D\u8B80\u8005\uFF0C\u62D2\u7D55\u704C\u6C34\uFF0C\u7A4D\u5206\u66F4\u6709\u50F9\u503C\u3002<br />
                    <br />
                    <span>3.\u6307\u5B9A\u4E3B\u984C\u6295\u7A3F\uFF1A</span>
                    \u6839\u64DA\u6307\u5B9A\u4E3B\u984C\u64B0\u5BEB\u4E26\u63D0\u4EA4\u6587\u7AE0\uFF0C\u901A\u904E\u5BE9\u6838\u5F8C\u7ACB\u5373\u7372\u5F97\u7A4D\u5206\uFF0C\u8B93\u60A8\u7684\u5275\u610F\u7121\u9650\u5EF6\u4F38\u3002<br />
                    <br />
                    <span>4.\u7DE8\u8F2F\u4E3B\u52D5\u5FB5\u9078\uFF1A</span>
                    \u7CBE\u5F69\u6587\u7AE0\u7D93\u7DE8\u8F2F\u5FB5\u9078\u520A\u767B\uFF0C\u5373\u53EF\u518D\u7372<em>200</em>\u7A4D\u5206\u3002<br />
                    <br />
                </p>`
      },
      {
        title: "\u65C5\u884C\u5BB6\u4ECB\u7D39",
        content: `<p>
                    \u60A8\u8F9B\u52E4\u5BEB\u4F5C\u7A4D\u7D2F\u7684\u7A4D\u5206\uFF0C\u5C07\u81EA\u52D5\u8F49\u63DB\u70BA\u65C5\u884C\u8CFC\u7269\u91D1\uFF08Pixgo Coin\uFF09\uFF0C\u5728\u5B64\u7368\u65C5\u904A\u5546\u57CE\u4E0A\u4F7F\u7528\u3002<em>200\u7A4D\u5206=1 Pixgo Coin</em>\uFF0C\u512A\u60E0\u63DB\u8CFC\u7CBE\u9078\u597D\u5546\u54C1\uFF0C\u8B93\u60A8\u7684\u52AA\u529B\u5316\u70BA\u5BE6\u969B\u56DE\u994B\u3002<br />
                    <br />
                    <span>\u6D3B\u52D5\u4EAE\u9EDE\uFF1A</span>
                    1.\u8F15\u9B06\u7A4D\u5206\uFF0C\u5BE6\u969B\u56DE\u994B\uFF1A \u6BCF\u4E00\u7BC7\u771F\u5BE6\u7684\u9AD4\u9A57\uFF0C\u6BCF\u4E00\u6B21\u7CBE\u5FC3\u7684\u5206\u4EAB\uFF0C\u90FD\u662F\u7A4D\u5206\u7372\u53D6\u7684\u6A5F\u6703\u3002<br />
                    2.\u900F\u660E\u5236\u5EA6\uFF0C\u516C\u5E73\u516C\u6B63\uFF1A \u62D2\u7D55\u704C\u6C34\uFF0C\u7A4D\u5206\u7121\u6182\uFF0C\u4FDD\u969C\u60A8\u7684\u5275\u4F5C\u50F9\u503C\u3002<br />
                    3.\u514C\u63DB\u9748\u6D3B\uFF0C\u6709\u6548\u671F\u9577\uFF1A \u7A4D\u5206\u6709\u6548\u671F\u4E00\u5E74\uFF0C\u9748\u6D3B\u4F7F\u7528\uFF0C\u76E1\u60C5\u514C\u63DB\u3002<br />
                    <br />
                    <span>\u9055\u898F\u8655\u7406\uFF1A</span>
                    1.\u932F\u8AA4\u6216\u60E1\u610F\u6587\u7AE0\uFF1A \u4E0D\u4E88\u7A4D\u5206\uFF0C\u60C5\u7BC0\u56B4\u91CD\u8005\u5C07\u5217\u5165\u9ED1\u540D\u55AE\u6216\u505C\u6B0A\u3002<br />
                    2.\u704C\u6C34\u884C\u70BA\uFF1A \u4E00\u7D93\u6838\u5BE6\uFF0C\u7ACB\u5373\u53D6\u6D88\u8A72\u6587\u7AE0\u7684\u7A4D\u5206\uFF0C\u4E26\u8996\u60C5\u7BC0\u5217\u5165\u9ED1\u540D\u55AE\u6216\u505C\u6B0A\u3002<br />
                    3.\u7ACB\u5373\u52A0\u5165\u65C5\u884C\u5BB6\u9435\u4EBA\u8CFD\uFF0C\u8B93\u6BCF\u4E00\u7BC7\u6587\u7AE0\u90FD\u6210\u70BA\u60A8\u7684\u50F9\u503C\u6240\u5728\uFF0C\u7A4D\u5206\u8B8A\u73FE\uFF0C\u8CFC\u7269\u7121\u6182\uFF01<br />
                </p>`
      }
    ]);
    __expose({
      showRankInfoModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "modal fade rank-info",
        ref_key: "rankInfoModalDom",
        ref: rankInfoModalDom,
        tabindex: "-1",
        "aria-labelledby": "rankInfoModalLabel",
        "aria-hidden": "true"
      }, _attrs))} data-v-bc6bae4e><div class="modal-dialog modal-lg" data-v-bc6bae4e><div class="modal-content" data-v-bc6bae4e><div class="modal-header" data-v-bc6bae4e><h5 class="modal-title" id="rankInfoModalLabel" data-v-bc6bae4e>${ssrInterpolate(unref(modalData)[__props.modalContentType - 1].title)}</h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" data-v-bc6bae4e></button></div><div class="modal-body" data-v-bc6bae4e>${(_a = unref(modalData)[__props.modalContentType - 1].content) != null ? _a : ""}</div>`);
      if (__props.modalContentType === 2) {
        _push(`<div class="modal-footer" data-v-bc6bae4e><button type="button" class="btn-primary-orange" data-v-bc6bae4e><i data-v-bc6bae4e></i> \u524D\u5F80\u65C5\u884C\u5BB6 </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RankingPage/RankInfoModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bc6bae4e"]]);
const goldIcon = "" + buildAssetsURL("icon-medal-gold.Cmi7RFwE.svg");
const silverIcon = "" + buildAssetsURL("icon-medal-silver.BbO5d3WW.svg");
const bronzeIcon = "" + buildAssetsURL("icon-medal-bronze.mvT-Q9hN.svg");
const badgeIcon1 = "" + buildAssetsURL("icon-ranking-badge-1.ymTP2CfV.svg");
const badgeIcon2 = "" + buildAssetsURL("icon-ranking-badge-2.CMafHoCb.svg");
const badgeIcon3 = "" + buildAssetsURL("icon-ranking-badge-3.PwZ_ZeZU.svg");
const badgeIcon4 = "" + buildAssetsURL("icon-ranking-badge-4.DgufYvfm.svg");
const levelIcon1 = "" + buildAssetsURL("icon-level-1.DnKkSFXE.svg");
const levelIcon2 = "" + buildAssetsURL("icon-level-2.DPQbXdtD.svg");
const levelIcon3 = "" + buildAssetsURL("icon-level-3.ktyZQ44R.svg");
const levelIcon4 = "" + buildAssetsURL("icon-level-4.Da0p4p-w.svg");
const defaultImg00 = "" + buildAssetsURL("img-default-00.yMfyaMdZ.png");
const defaultImg01 = "" + buildAssetsURL("img-default-01.4wJgUQ1F.png");
const defaultImg02 = "" + buildAssetsURL("img-default-02.6AMX3ktK.png");
const _sfc_main$1 = {
  __name: "RankingContainer",
  __ssrInlineRender: true,
  setup(__props) {
    const levelData = [
      {
        point: "10,000",
        icon: levelIcon1
      },
      {
        point: "20,000",
        icon: levelIcon2
      },
      {
        point: "50,000",
        icon: levelIcon3
      },
      {
        point: "100,000",
        icon: levelIcon4
      }
    ];
    const rankingData = ref([]);
    const isRankLoading = ref(false);
    const defaultImages = [defaultImg00, defaultImg01, defaultImg02];
    const randomDefaultImage = () => defaultImages[Math.floor(Math.random() * 3)];
    const checkImageValid = (image) => {
      return image ? image : randomDefaultImage();
    };
    const rankInfoModalComponent = ref(null);
    const modalContentType = ref(1);
    const getMedalIcon = (index2) => {
      switch (index2) {
        case 0:
          return goldIcon;
        case 1:
          return silverIcon;
        case 2:
          return bronzeIcon;
      }
    };
    const getBadgeIcon = (title) => {
      if (title.includes("Lv.1")) {
        return badgeIcon1;
      } else if (title.includes("Lv.2")) {
        return badgeIcon2;
      } else if (title.includes("Lv.3")) {
        return badgeIcon3;
      } else if (title.includes("Lv.4")) {
        return badgeIcon4;
      } else {
        return badgeIcon1;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RankingPageRankInfoModal = __nuxt_component_0;
      _push(`<!--[--><section class="ranking" data-v-7c88ce83><div class="custom-container" data-v-7c88ce83><div class="ranking__wrapper" data-v-7c88ce83><div class="ranking__about-wrapper" data-v-7c88ce83><div class="ranking__rule-btn-wrapper" data-v-7c88ce83><button type="button" class="btn-rule-white" data-v-7c88ce83><i data-v-7c88ce83></i> \u5982\u4F55\u7372\u5F97\u7A4D\u5206\u52F3\u7AE0 </button><button type="button" class="btn-rule-orange" data-v-7c88ce83><i data-v-7c88ce83></i> \u65C5\u884C\u5BB6\u4ECB\u7D39 </button></div><div class="ranking__about" data-v-7c88ce83><h2 data-v-7c88ce83>\u91CC\u7A0B\u7A4D\u5206\u52F3\u7AE0</h2><p data-v-7c88ce83>\u6301\u7E8C\u8A66\u7528\u5BEB\u6587\u7D2F\u7A4D\u7A4D\u5206\uFF0C\u5C07\u81EA\u52D5\u8F49\u63DB\u6210\u65C5\u884C\u5BB6\u8CFC\u7269\u91D1(Pixgo Coin)\uFF0C\u5728\u5546\u57CE\u4F7F\u7528</p></div><div class="ranking__level-wrapper" data-v-7c88ce83><!--[-->`);
      ssrRenderList(levelData, (level, index2) => {
        _push(`<!--[--><div class="ranking__level" data-v-7c88ce83><img${ssrRenderAttr("src", level.icon)} alt="" data-v-7c88ce83><p data-v-7c88ce83>\u7E3D\u7A4D\u5206\u9054 ${ssrInterpolate(level.point)}</p></div>`);
        if (index2 !== 3) {
          _push(`<i class="icon-double-arrow" data-v-7c88ce83></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div><div class="ranking__card-wrapper" data-v-7c88ce83><!--[-->`);
      ssrRenderList(unref(rankingData), (rank, index2) => {
        var _a2;
        var _a, _b, _c, _d, _e, _f, _g, _h;
        _push(`<div class="ranking__card" data-v-7c88ce83><a class="${ssrRenderClass([{ "champion": index2 === 0 }, "ranking__blogger"])}"${ssrRenderAttr("href", (_b = (_a = rank.article) == null ? void 0 : _a.author) == null ? void 0 : _b.link)} target="_blank" data-v-7c88ce83>`);
        if (index2 < 3) {
          _push(`<i class="icon-medal" style="${ssrRenderStyle(`background-image: url(${getMedalIcon(index2)})`)}" data-v-7c88ce83></i>`);
        } else {
          _push(`<p class="no-medal-text" data-v-7c88ce83>${ssrInterpolate(index2 + 1)}</p>`);
        }
        _push(`<img${ssrRenderAttr("src", (_d = (_c = rank.article) == null ? void 0 : _c.author) == null ? void 0 : _d.avatar)} alt="author image" data-v-7c88ce83><div class="ranking__blogger-body" data-v-7c88ce83><i class="icon-badge" style="${ssrRenderStyle(`background-image: url(${getBadgeIcon(rank.title)})`)}" data-v-7c88ce83></i><div class="ranking__blogger-name" data-v-7c88ce83><h3 data-v-7c88ce83>${ssrInterpolate(rank.display_name)}</h3><i data-v-7c88ce83></i></div><p class="try-count" data-v-7c88ce83>\u5DF2\u8A66\u7528 ${ssrInterpolate(rank.article_count)} \u500B\u5546\u54C1</p></div></a><a class="ranking__article"${ssrRenderAttr("href", (_e = rank.article) == null ? void 0 : _e.link)} target="_blank" data-v-7c88ce83><div class="ranking__article-body" data-v-7c88ce83><img${ssrRenderAttr("src", checkImageValid((_f = rank.article) == null ? void 0 : _f.image))} alt="article image" data-v-7c88ce83><div class="ranking__article-content" data-v-7c88ce83><h3 data-v-7c88ce83>${(_a2 = (_g = rank.article) == null ? void 0 : _g.title) != null ? _a2 : ""}</h3><p data-v-7c88ce83>${ssrInterpolate((_h = rank.article) == null ? void 0 : _h.content)}</p></div></div><p class="try-count" data-v-7c88ce83>\u5DF2\u8A66\u7528 ${ssrInterpolate(rank.article_count)} \u500B\u5546\u54C1</p></a></div>`);
      });
      _push(`<!--]--><div class="read-more-wrapper" data-v-7c88ce83>`);
      if (unref(isRankLoading)) {
        _push(`<div class="${ssrRenderClass([{ "initial-loading": unref(rankingData).length === 0 }, "loading-wrapper"])}" data-v-7c88ce83><div class="icon-container" data-v-7c88ce83><div class="loading-icon perpetuum-mobile" data-v-7c88ce83></div></div><p data-v-7c88ce83>\u8F09\u5165\u4E2D...</p></div>`);
      } else if (!unref(isRankLoading) && unref(rankingData).length > 0) {
        _push(`<div class="btn-wrapper" data-v-7c88ce83><button type="button" class="btn-load-more" data-v-7c88ce83> \u770B\u66F4\u591A </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_RankingPageRankInfoModal, {
        ref_key: "rankInfoModalComponent",
        ref: rankInfoModalComponent,
        modalContentType: unref(modalContentType)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/RankingPage/RankingContainer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7c88ce83"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_RankingPageBannerRanking = __nuxt_component_0$1;
  const _component_RankingPageRankingContainer = __nuxt_component_1;
  _push(`<main${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_RankingPageBannerRanking, null, null, _parent));
  _push(ssrRenderComponent(_component_RankingPageRankingContainer, null, null, _parent));
  _push(`</main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/ranking/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DqsEdGda.mjs.map
