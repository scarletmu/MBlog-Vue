<template>
 <md-sidenav class="md-left" ref="slider">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">MBlog</h3>
      </div> 
    </md-toolbar>
    <div>
      <md-list>
        <md-list-item v-for="(item, index) of slider_data" :key="index">
          <md-icon>{{item.icon}}</md-icon> <span>{{item.text}}</span>
        </md-list-item>
      </md-list>
    </div>       
  </md-sidenav>
</template>

<script>
export default {
  computed:{
    slider_data: function(){
      return this.$store.state.slider || [];
    }
  },
  async mounted(){
    if(!this.$store.state.slider){
      await this.$api.initSlider.call(this);
    };
  }
}
</script>

<style>
.md-sidenav-content {
  position: fixed !important;
}
.md-sidenav-backdrop {
  position: fixed !important;
}
</style>