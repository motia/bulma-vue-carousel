import BulmaCarousel from 'bulma-carousel';

//

var script = {
  props: {
    keyGen: {
      type: Function,
      required: false
    },
    refreshIn: {
      type: String,
      required: false,
      default: ''
    },
    refreshOut: {
      type: String,
      required: false,
      default: ''
    },
    showArrows: {
      type: Boolean,
      required: false,
      default: true
    },
    animation: {
      type: String,
      required: false,
      default: 'slide'
    },
    items: Array,
    size: {
      type: Number,
      required: false,
      default: 6
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: false
    },
    autoplayDelay: {
      type: Number,
      required: false,
      default: 5000
    }
  },
  data: function data () {
    return {
      carousel: null,
      fadingClass: null
    }
  },
  mounted: function mounted () {
    var tag = this.$refs.carousel;
    this.carousel = new BulmaCarousel(tag);

    this.$on('hook:beforeDestroy', this.destroyCarousel);
  },
  computed: {
    _items: function _items () {
      var this$1 = this;

      return this.items.map(function (item, i) { return ({
        id: this$1.keyGen && this$1.keyGen(item) || i,
        item: item
      }); })
    },
    animationClasses: function animationClasses () {
      if (!this.animation) {
        return {}
      }
      var obj = {'carousel-animated': this.animation};
      obj['carousel-animated-' + this.animation];
      return obj
    },
    configData: function configData () {
      var temp = {'data-size': this.size};
      if (this.autoplay) {
        temp['data-autoplay'] = true;
        temp['data-delay'] = this.autoplayDelay;
      }

      return temp
    },
  },
  watch: {
    configData: {
      deep: true,
      handler: function handler () {
        this.resetCarousel();
      }
    },
    items: function items () {
      this.resetCarousel();
    }
  },
  methods: {
    previous: function previous () {
      this.carousel._slide('previous');
    },
    next: function next () {
      this.carousel._slide('next');
    },
    resetCarousel: function resetCarousel () {
      var this$1 = this;

      this.destroyCarousel();
      this.fadingClass = this.refreshOut;
      setTimeout(function () {
        var tag = this$1.$refs.carousel;
        this$1.carousel = new BulmaCarousel(tag);
        this$1.fadingClass = this$1.refreshIn;
      }, 0.8);
    },
    destroyCarousel: function destroyCarousel () {
      if (!this.carousel) { return }

      this.carousel.destroy();
      this.carousel = null;
    }
  }
};

/* script */
            var __vue_script__ = script;
            
/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "carousel-container" }, [
    _c("div", { staticClass: "columns" }, [
      _c("div", { staticClass: "column is-narrow has-text-right" }, [
        _vm.showArrows
          ? _c(
              "a",
              {
                staticClass: "carousel-arrow is-hidden-mobile",
                on: { click: _vm.previous }
              },
              [_vm._t("previous")],
              2
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-11" }, [
        _c(
          "div",
          _vm._b(
            {
              ref: "carousel",
              staticClass: "carousel",
              class: _vm.animationClasses
            },
            "div",
            _vm.configData,
            false
          ),
          [
            _c(
              "div",
              { staticClass: "carousel-container", class: _vm.fadingClass },
              _vm._l(_vm._items, function(p) {
                return _c(
                  "div",
                  { key: p.id, staticClass: "carousel-item" },
                  [_vm._t("item", null, { item: p.item })],
                  2
                )
              })
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "column is-narrow has-text-left" }, [
        _vm.showArrows
          ? _c(
              "a",
              {
                staticClass: "carousel-arrow is-hidden-mobile",
                on: { click: _vm.next }
              },
              [_vm._t("next")],
              2
            )
          : _vm._e()
      ])
    ])
  ])
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "E:\\workspace\\github\\bulma-vue-carousel\\bulma-vue-carousel\\src\\bulma-vue-carousel.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var component = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
  if (install.installed) { return; }
  install.installed = true;
  Vue.component('BulmaVueCarousel', component);
}

// Create module definition for Vue.use()
var plugin = {
  install: install,
};

// To auto-install when vue is found
/* global window global */
var GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
