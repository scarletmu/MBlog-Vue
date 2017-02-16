<template>
  <md-layout md-gutter="16" md-column class="adminMain">
    <md-tabs md-centered>
      <md-tab md-label="Movies" md-icon="ondemand_video">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab md-label="Music" md-icon="music_note">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab md-label="Books" md-icon="books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab md-label="Pictures" md-icon="photo">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
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
      alert(name);
      // let url = '';
      // switch(name){
      //   case '文章管理': url = '/topic/getList';break;
      //   case '评论管理': url = '/comment/getList';break;
      //   case '分类管理': url = '/category/getList';break;
      // }
      // let res = await this.$fetch.get(url);
      // if(res.status !== 200){
      //   console.error('getContentList Failed');
      // }
      // let json = await res.json();
      // this.adminContentList = json;
    }
  },
 }
</script>

<style>
</style>