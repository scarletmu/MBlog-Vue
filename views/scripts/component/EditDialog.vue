<template>
  <md-dialog ref="edit_dialog">
      <md-dialog-title>{{title}}</md-dialog-title>
      <md-dialog-content>
        <md-input-container>
          <label>名称</label>
          <md-input v-model="content.Name"></md-input>
        </md-input-container>
        <md-input-container>
          <label>图标</label>
          <md-input v-model="content.Icon"></md-input>
        </md-input-container>
        <md-input-container>
          <label>描述</label>
          <md-input v-model="content.Describe"></md-input>
        </md-input-container>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="close()">取消</md-button>
        <md-button class="md-primary" @click="submit()">保存</md-button>
      </md-dialog-actions>
    </md-dialog>
</template>

<script>
export default {
  props: [ 'title', 'content'],
  data(){
    return {
    }
  },
  methods: {
    open(){
      this.$refs['edit_dialog'].open();
    },
    close(){
      this.$refs['edit_dialog'].close();
    },
    async submit(){
      this.$api.
    }
  }  
}
</script>

<style scoped>

</style>


