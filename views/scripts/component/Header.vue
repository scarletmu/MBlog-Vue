<template>
  <md-toolbar class="HeaderBar">
    <md-button class="md-icon-button" @click="toggle">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1" @click="home">MBlog</h2>

    <md-button class="md-icon-button">
      <md-icon @click.native="loginDialog">settings</md-icon>
    </md-button>

    <md-dialog ref="adminLogin">
      <md-dialog-title>登录后台管理</md-dialog-title>

      <md-dialog-content>
        <form>
          <md-input-container>
            <label>用户名</label>
            <md-input v-model="username"></md-input>
          </md-input-container>

          <md-input-container md-has-password>
            <label>密码</label>
            <md-input v-model="password" type="password"></md-input>
          </md-input-container>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="login">登录</md-button>
      </md-dialog-actions>
    </md-dialog>
  </md-toolbar>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  props: ['toggleSlider'],
  methods: {
    toggle(){
      this.toggleSlider();
    },
    home(){
      this.$router.push('/');
    },
    async loginDialog(){
      let res = await this.$api.checkLogin.call(this);
      if(!res) {
        this.$refs['adminLogin'].open();
      }else{
        this.$router.push('/admin');
      }
    },
    async login(){
      await this.$api.login.call(this, this.username, this.password);
      this.$refs['adminLogin'].close();
      this.$router.push({path: '/admin'});
    } 
  }
}
</script>

<style>
.HeaderBar {
  position: fixed !important;
  top: 0;
  width: 100%;
  overflow: hidden;
  z-index: 99;
}
</style>