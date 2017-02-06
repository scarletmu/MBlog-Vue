<template>
  <div id="app">
    <HeadBar :toggleSlider="toggleSlider"></HeadBar>
    <Slider></Slider>
    <div id="body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadBar from './component/Header.vue';
import Slider from './component/Slider.vue';

export default {
  components:{ HeadBar, Slider },
  data () {
    return {
      isOpen: false
    }
  }, 
  methods: {
    toggleSlider(){
      this.$children[1].$refs.slider.toggle();
    }
  }
}  
</script>

<style>
#body {
  margin: 10px 10px;
}
</style>