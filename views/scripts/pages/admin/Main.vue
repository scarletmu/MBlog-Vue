<template>
  <md-layout md-gutter="24">
    <TypeList :typeList="adminTypeList" :getContentList="getContentList">></TypeList>
    <AdminList :title="title"
               :adminList="adminContentList"
               </AdminList>
    <!--Noty-->
  </md-layout>
</template>

<script>
import TypeList from '../../component/TypeList.vue'
import AdminList from '../../component/ArticleList.vue'

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
      alert(name);
      // let res = await this.$fetch.get();
      // if(res.statusCode !== 200){
        // console.error('getContentList Failed');
      // }
      // let json = await res.json();
      // this.adminContentList = json;
    }
  },
 }
</script>

<style>
</style>