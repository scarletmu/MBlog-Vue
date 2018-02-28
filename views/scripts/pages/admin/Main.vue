<template>
  <div class="adminMain">
    <TypeList :typeList="adminTypeList" :listClick="listClick"></TypeList>
    <AdminList :title="title" 
      :adminContentList="adminContentList" 
      :addContent="addContent" 
      :editContent="editContent" 
      :deleteContent="deleteContent"
    ></AdminList>
   <EditDialog ref="childDialog" @refresh="refresh" :title="title" :content="dialog_input"></EditDialog> 
  </div>
  
  <!--Noty-->
</template>

<script>
import TypeList from '../../component/TypeList.vue'
import AdminList from '../../component/AdminList.vue'
import EditDialog from '../../component/EditDialog.vue'

export default {
  components: { TypeList, AdminList, EditDialog }, 
  data () {
    return {
      adminTypeList: [
        {Icon: 'insert_drive_file', Name: '文章管理', nickname: 'topic'},
        {Icon: 'comment', Name: '评论管理', nickname: 'comment'},
        {Icon: 'format_line_spacing', Name: '分类管理', nickname: 'category'}
      ],
      adminContentList: [],
      title: '后台管理',
      type: null,
      dialog_input: {Name: null, Icon: null, Describe: null, defaultThumb: null}
    }
  },
  methods: {
    async listClick(type){
      this.title = type.Name;
      this.type = type.nickname;
      let json = await this.$api.getAdminList.call(this, this.type);
      this.adminContentList = json;
    },
    async refresh(){
      let json = await this.$api.getAdminList.call(this, this.type);
      this.adminContentList = json;
    },
    closeDialog() {
      this.$refs['edit_dialog'].close();
    },
    addContent(title){
      if(title === '文章管理'){
        this.$router.push('/admin/add');
      }else if(title === '分类管理'){
        //show dialog
        this.$refs.childDialog.open();
      }
    },
    editContent(title, item){
      if(title === '文章管理'){
        this.$router.push(`/admin/edit/${item._id}`)
      }else if(title === '分类管理'){
        this.dialog_input = Object.assign({}, item);
        this.$refs.childDialog.open();
      }
    },
    deleteContent(title, id){

    }
  },
  async mounted(){
    await this.$api.checkLogin.call(this);
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