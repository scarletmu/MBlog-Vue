<template>
  <div class="TypeList">
    <md-list>
      <md-list-item v-for="(type,index) in typeList" :key="index" @click.native="clickItem(type)">
        <md-icon>{{type.Icon}}</md-icon> <span>{{type.Name}}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  props: [ 'typeList', 'listClick' ],
  data () {
    return {
    }
  },
  methods: {
    async clickItem(type){
      if(this.listClick){
        await this.listClick(type);
      }
    }
  }
}
</script>

<style scoped>
@media (max-width: 600px){
  .TypeList {
    display:none;
  }
}
@media (max-width: 960px){
  .TypeList {
    display:none;
  }
}
.TypeList{
  position:fixed;
  left: 5px;
  top: 68px;
}
</style>