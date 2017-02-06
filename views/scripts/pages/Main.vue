<template>
  <md-layout md-gutter="8">
    <TypeList></TypeList>
    <ArticleList></ArticleList>
  </md-layout>
</template>

<script>
import TypeList from '../component/TypeList.vue'
import ArticleList from '../component/ArticleList.vue'

export default {
  components: { TypeList, ArticleList },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>