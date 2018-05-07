<template>
  <div id="app">
    <HeadBar :toggleSlider="toggleSlider"></HeadBar>
    <Slider></Slider>
    <div id="body">
      <transition name="fade">
        <router-view class="viewArea"></router-view>
      </transition>
    </div>
    <div class="foot">
      本Blog基于<a target="_blank" href="https://github.com/scarletmu/MBlog-Vue">@scarletmu/MBlog</a>
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
.foot{
  position:fixed;
  bottom: 0px;
  margin:0 auto;  
  left:0;  
  right:0;  
  text-align: center;
}
</style>