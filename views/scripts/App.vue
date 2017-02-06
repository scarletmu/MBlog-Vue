<template>
  <div id="app">
    <HeadBar :toggleSlider="toggleSlider"></HeadBar>
    <md-sidenav class="md-left" ref="slider">
      <md-toolbar class="md-large">
        <Slider></Slider>        
      </md-toolbar>
    </md-sidenav>
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
      this.$refs.slider.toggle();
    }
  }
}  
</script>

<style>
</style>