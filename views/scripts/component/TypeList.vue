<template>
  <div class="TypeList">
    <md-list>
      <md-list-item v-for="(type,index) in typeList" :key="index" @click.native="clickItem(type.Name)">
        <md-icon>{{type.Icon}}</md-icon> <span>{{type.Name}}</span>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
export default {
  props: [ 'typeList', 'adminContentList', 'getContentList' ],
  data () {
    return {
    }
  },
  methods: {
    clickItem(Name){
      this.getContentList(Name);
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