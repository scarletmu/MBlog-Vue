<template>
  <md-layout md-gutter="16" md-column class="adminMain">
    <AdminList :title="title"
              :adminList="adminContentList"></AdminList>
  </md-layout>
  
  <!--Noty-->
</template>

<script>
import TypeList from '../../component/TypeList.vue'
import AdminList from '../../component/AdminList.vue'

export default {
  components: { TypeList, AdminList }, 
  data () {
    return {
      adminTypeList: [
        {Icon: 'article', Name: '文章管理'},
        {Icon: 'comment', Name: '评论管理'},
        {Icon: 'type', Name: '分类管理'}
      ],
      adminContentList: [],
      title: '后台管理'
    }
  },
  methods: {
    async getContentList(name){
      let url = '';
      switch(name){
        case '文章管理': url = '/topic/getList';break;
        case '评论管理': url = '/comment/getList';break;
        case '分类管理': url = '/category/getList';break;
      }
      let res = await this.$fetch.get(url);
      if(res.status !== 200){
        console.error('getContentList Failed');
      }
      let json = await res.json();
      console.log(json.length);
      this.adminContentList = json;
    }
  },
  mounted(){
    this.getContentList('文章管理');
  }
 }
</script>

<style>
</style>