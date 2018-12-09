# bulma-vue-carousel


Crousel built for Vue.js and Bulma, created as a wrapper for [bulma-carousel](https://wikiki.github.io/components/carousel/)

## Example
```
    <carousel 
      refresh-in="animated fadeIn"
      refresh-out="animated fadeOut"
      :items="items"
      :size="3"
    >
      <div slot="item" slot-scope="{item}" >
        <img src="http://placehold.it/320x320">
        <p>{{ item }}</p>
      </div>

      <span slot="previous" style="background: red; height: 100%;">
      </span>
      <span slot="next" style="background: red; height: 100%;">
        >
      </span>
    </carousel>
```

## API
### Named Slots
* **item**: used to draw carousel item provided as `item` in in the slot-scope. (see example above)
* **previous**: slot to draw the previous icon
* **next**: slot to draw the next icon

### Props
```
  keyGen: { // a function that generates keys for carousel items
    type: Function,
    required: false
  },
  refreshIn: { // class to be applied to carousel animation after update, for example 'animated fadeIn' for animate-css users
    type: String,
    required: false,
    default: ''
  },
  refreshOut: { // class to animate carousel change
    type: String,
    required: false,
    default: ''
  },
  showArrows: { // sliders buttons
    type: Boolean,
    required: false,
    default: true
  },
  animation: { // slide animation, supports 'fade', 'slide'
    type: String,
    required: false,
    default: 'slide'
  },
  items: Array, // items
  size: { // number of displayed items
    type: Number,
    required: false,
    default: 6
  },
  autoplay: {
    type: Boolean,
    required: false,
    default: false
  },
  autoplayDelay: { // delay for autoplay in ms
    type: Number,
    required: false,
    default: 5000
  }
```
