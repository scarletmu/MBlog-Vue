<template>
  <div class="adminMain">
    <TypeList :typeList="adminTypeList" :listClick="listClick"></TypeList>
    <AdminList :title="title" 
      :adminContentList="adminContentList" 
      :addContent="addContent" 
      :editContent="editContent" 
      :deleteContent="deleteContent"
    ></AdminList>
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
        {Icon: 'insert_drive_file', Name: '文章管理', nickname: 'topic'},
        {Icon: 'comment', Name: '评论管理', nickname: 'comment'},
        {Icon: 'format_line_spacing', Name: '分类管理', nickname: 'category'}
      ],
      adminContentList: [],
      title: '后台管理'
    }
  },
  methods: {
    async listClick(type){
      this.title = type.Name;
      let json = await this.$api.getAdminList.call(this, type.nickname);
      this.adminContentList = json;
    },
    addContent(title){
      if(title === '文章管理'){
        this.$router.push('/admin/add');
      }else{
        //show dialog
      }
    },
    editContent(title, id){
      if(title === '文章管理'){
        this.$router.push(`/admin/edit/${id}`)
      }else{

      }
    },
    deleteContent(title, id){

    }
  },
  mounted(){
    this.listClick(this.adminTypeList[0]);
  }
 }
</script>

<style scoped>
.adminMain {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 80%;
  padding-left: 60px;
}
</style>