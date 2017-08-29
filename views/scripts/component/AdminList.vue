<template>
  <md-card class="adminList">
    <md-card-header>
      <div class="md-title">
        <md-button class="md-icon-button md-raised md-dense">
          <md-icon>add</md-icon>
        </md-button>
        {{title}}
      </div>
    </md-card-header>
    <md-list>
      <md-list-item v-for="(item, index) in adminContentList" :key="index">
        <div class="md-list-text-container">
          <span></span>
          <span>{{item.Title}}</span>
          <p>{{item.Summary}}</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">delete</md-icon>
        </md-button>

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