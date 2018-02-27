<template>
  <md-card class="adminList">
    <md-card-header>
      <div class="md-title">
        <md-button v-if="title !== '评论管理'" class="md-icon-button md-raised md-dense" @click="addContent(title)">
          <md-icon>add</md-icon>
        </md-button>
        {{title}}
      </div>
    </md-card-header>
    <transition name="fade">
    <md-list>
      <md-list-item v-for="(item, index) in adminContentList" :key="index">
        <div v-if="title === '文章管理'" class="md-list-text-container" v-cloak>
          <span></span>
          <span>{{item.Title}}</span>
          <p>{{item.Summary}}</p>
        </div>
        <div v-if="title === '评论管理'" class="md-list-text-container" v-cloak>
          <span></span>
          <p>{{item.Content}}</p>
        </div>
        <div v-if="title === '分类管理'" class="md-list-text-container" v-cloak>
          <span>{{item.Name}}</span>
          <p>{{item.Describe}}</p>
        </div>
        <md-button class="md-icon-button md-list-action" @click="editContent(title, item)">
          <md-icon>edit</md-icon>
        </md-button>
        <md-button class="md-icon-button md-list-action" @click="deleteContent(title, item)">
          <md-icon class="md-primary">delete</md-icon>
        </md-button>
      </md-list-item>
    </md-list>
    </transition>
  </md-card>
</template>

<script>
export default {
  props: [ 'title', 'adminContentList', 'addContent', 'editContent', 'deleteContent' ],
  data () {
    return {
    }
  },
  method: {
  }
}
</script>

<style scoped>
.adminList{
  width: 100%;
}
</style>