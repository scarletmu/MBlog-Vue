<template>
  <div class="adminMain">
    <TypeList :typeList="adminTypeList"></TypeList>
    <AdminList :title="title"
              :adminContentList="adminContentList"></AdminList>
  </div>
  
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
        {Icon: 'insert_drive_file', Name: '文章管理'},
        {Icon: 'comment', Name: '评论管理'},
        {Icon: 'format_line_spacing', Name: '分类管理'}
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
      this.adminContentList = json;
      console.log(json);
    }
  },
  mounted(){
    this.getContentList('文章管理');
  }
 }
</script>

<style>
.adminMain {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>