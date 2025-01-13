import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { _ as _export_sfc, c as useRoute, u as useRouter } from './server.mjs';
import { useSSRContext, ref, watch, mergeProps, withCtx, createVNode, unref, createTextVNode, computed } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useProductStore } from './product-ClJcjqyv.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {
  __name: "HeaderLight",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useRouter();
    const selectedPage = ref(0);
    const checkRoute = () => {
      if (!route.params.productId && route.path !== "/ranking") {
        selectedPage.value = 1;
      } else if (route.path === "/ranking") {
        selectedPage.value = 2;
      } else {
        selectedPage.value = 0;
      }
    };
    watch(
      () => route.path,
      () => {
        checkRoute();
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-3f60c2a0><div class="header__wrapper" data-v-3f60c2a0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "header__logo",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h1 data-v-3f60c2a0${_scopeId}>Lonely Travel</h1>`);
          } else {
            return [
              createVNode("h1", null, "Lonely Travel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header__pagelink-wrapper" data-v-3f60c2a0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["header__pagelink", { active: unref(selectedPage) === 1 }],
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u5C0B\u627E\u4E0B\u4E00\u500B\u76EE\u7684\u5730 `);
          } else {
            return [
              createTextVNode(" \u5C0B\u627E\u4E0B\u4E00\u500B\u76EE\u7684\u5730 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: ["header__pagelink ranking", { active: unref(selectedPage) === 2 }],
        to: "/ranking"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i data-v-3f60c2a0${_scopeId}></i> \u6392\u884C\u699C `);
          } else {
            return [
              createVNode("i"),
              createTextVNode(" \u6392\u884C\u699C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderLight.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3f60c2a0"]]);
const _sfc_main$1 = {
  __name: "FooterLight",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const hasPaddingBottom = computed(() => !!route.params.productId);
    useProductStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: ["footer", { "product-padding": unref(hasPaddingBottom) }]
      }, _attrs))} data-v-69d1124a><div class="footer__wrapper" data-v-69d1124a><p data-v-69d1124a>Copyright \xA9 2024</p><a href="/" data-v-69d1124a> Lonely Travel </a><p data-v-69d1124a> \u5B64\u7368\u65C5\u904A ( \u80A1 ) <span data-v-69d1124a>\u516C\u53F8</span></p></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterLight.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-69d1124a"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_HeaderLight = __nuxt_component_0;
  const _component_FooterLight = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_HeaderLight, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_FooterLight, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-D-tsIGfV.mjs.map
