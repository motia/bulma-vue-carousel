<template>
<div class="carousel-container">
    <div class="columns">
        <div class="column is-narrow has-text-right">
            <a class="carousel-arrow is-hidden-mobile" v-if="showArrows" @click="previous">
                <slot name="previous"></slot>
            </a>
        </div>
        <div class="column">
            <div class="carousel" :class="animationClasses" v-bind="configData" ref="carousel">
                <div class="carousel-container" :class="fadingClass">
                    <div class="carousel-item" v-for="p in _items" :key="p.id">
                        <slot name="item" :item="p.item"></slot>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-narrow has-text-left">
            <a class="carousel-arrow is-hidden-mobile" v-if="showArrows" @click="next">
                <slot name="next"></slot>
            </a>
        </div>
    </div>
</div>
</template>

<script>
import BulmaCarousel from 'bulma-carousel'

export default {
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
  data () {
    return {
      carousel: null,
      fadingClass: null
    }
  },
  mounted () {
    const tag = this.$refs.carousel
    this.carousel = new BulmaCarousel(tag)

    this.$on('hook:beforeDestroy', this.destroyCarousel)
  },
  computed: {
    _items () {
      return this.items.map((item, i) => ({
        id: this.keyGen && this.keyGen(item) || i,
        item
      }))
    },
    animationClasses () {
      if (!this.animation) {
        return {}
      }
      const obj = {'carousel-animated': this.animation}
      obj['carousel-animated-' + this.animation]
      return obj
    },
    configData () {
      const temp = {'data-size': this.size}
      if (this.autoplay) {
        temp['data-autoplay'] = true
        temp['data-delay'] = this.autoplayDelay
      }

      return temp
    },
  },
  watch: {
    configData: {
      deep: true,
      handler () {
        this.resetCarousel()
      }
    },
    items () {
      this.resetCarousel()
    }
  },
  methods: {
    previous () {
      this.carousel._slide('previous')
    },
    next () {
      this.carousel._slide('next')
    },
    resetCarousel () {
      this.destroyCarousel()
      this.fadingClass = this.refreshOut
      setTimeout(() => {
        const tag = this.$refs.carousel
        this.carousel = new BulmaCarousel(tag)
        this.fadingClass = this.refreshIn
      }, 0.8)
    },
    destroyCarousel () {
      if (!this.carousel) return

      this.carousel.destroy()
      this.carousel = null
    }
  }
}
</script>
