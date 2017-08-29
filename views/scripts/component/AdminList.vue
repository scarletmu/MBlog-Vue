<template>
  <md-card class="adminList">
    <md-card-header>
      <div class="md-title">{{title}}</div>
    </md-card-header>
    <md-list>
      <md-list-item v-for="(item, index) in adminContentList" :key="index">
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span></span>
          <span>{{item.Title}}</span>
          <p>{{item.Summary}}</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </md-card>
</template>

<script>
export default {
  props: [ 'title', 'adminContentList' ],
  data () {
    return {
    }
  },
  method: {
    async itemSelect(id){
      //add edit page of item
    }
  }
}
</script>

<style scoped>
.adminList{
  width: 100%;
}
</style>