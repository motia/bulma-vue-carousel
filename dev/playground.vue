<template>
  <div>    
    <link rel="stylesheet">
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
  </div>

</template>

<script>
  import carousel from '../src/bulma-vue-carousel'

  export default {
    components: {
      carousel
    },
    data () {
      return {
        items: [
          1,
          2,
          3,
          4,
        ]
      }
    },
    mounted () {
      setTimeout(() => this.items.push('hello!'), 2500)
    }
  }
</script>

<style>
  @import "../node_modules/bulma/css/bulma.min.css";
  @import "../node_modules/bulma-carousel/dist/css/bulma-carousel.min.css";
</style>
