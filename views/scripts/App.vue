<template>
  <div id="app">
    <HeadBar :toggleSlider="toggleSlider"></HeadBar>
    <Slider></Slider>
    <div id="body">
      <transition name="fade">
        <router-view class="viewArea"></router-view>
      </transition>
    </div>
    <notifications></notifications>
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
  },
  mounted(){
    document.getElementById('loader').style.display = 'none';
    document.getElementById('app').style.display = 'block';
  }
}  
</script>

<style>
#body {
  padding-top: 68px;
  display: flex;
  justify-content: center; 
  align-content: center;
}
.viewArea {
  margin-top:5px;
  min-width: 80%;
}
</style>