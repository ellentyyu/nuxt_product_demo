import { mergeProps, unref, useSSRContext, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc, c as useRoute } from './server.mjs';

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-primary-gray" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/BgWrapper.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "LoadingProduct",
  __ssrInlineRender: true,
  props: {
    isProductPage: Boolean
  },
  setup(__props) {
    const props = __props;
    const renderNum = computed(() => props.isProductPage ? 2 : 3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["loading", { "is-product": __props.isProductPage }]
      }, _attrs))} data-v-2aaf9126><div class="custom-container" data-v-2aaf9126>`);
      if (__props.isProductPage) {
        _push(`<div class="loading__main-wrapper" data-v-2aaf9126><div class="loading__main bg-effect" data-v-2aaf9126></div><div class="loading__main-body" data-v-2aaf9126><div class="content head bg-effect" data-v-2aaf9126></div><div class="content bg-effect" data-v-2aaf9126></div><div class="content bg-effect" data-v-2aaf9126></div><div class="w-60 content bg-effect" data-v-2aaf9126></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<ul class="loading__card-wrapper" data-v-2aaf9126><!--[-->`);
      ssrRenderList(unref(renderNum), (_, index) => {
        _push(`<li class="${ssrRenderClass([{ "is-product": __props.isProductPage }, "loading__card"])}" data-v-2aaf9126><div class="${ssrRenderClass([{ "is-product": __props.isProductPage }, "loading__card-img bg-effect"])}" data-v-2aaf9126></div><div class="loading__card-body" data-v-2aaf9126><div class="content bg-effect" data-v-2aaf9126></div><div class="w-60 content bg-effect" data-v-2aaf9126></div></div></li>`);
      });
      _push(`<!--]--></ul></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/LoadingProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2aaf9126"]]);
const _sfc_main = {
  __name: "GoHome",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gohome" }, _attrs))}><a href="/" class="gohome__link"><span>\u56DE\u5B64\u7368\u65C5\u904A\u9996\u9801</span></a>`);
      if (unref(route).params.productId) {
        _push(`<a href="https://www.google.com/" class="gohome__link"><span>\u56DE Google \u9996\u9801</span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/utils/GoHome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { __nuxt_component_0 as _, __nuxt_component_1 as a, _sfc_main as b };
//# sourceMappingURL=GoHome-CnSjsxHq.mjs.map
