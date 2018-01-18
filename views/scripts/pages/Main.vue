<template>
  <div class="MainPage">
    <TypeList :typeList="typeList"></TypeList>
    <ArticleList :articleList="articleList"></ArticleList>
  </div>
</template>

<script>
import TypeList from '../component/TypeList.vue'
import ArticleList from '../component/ArticleList.vue'

export default {
  components: { TypeList, ArticleList },
  data () {
    return {
    }
  },
  computed: {
    typeList: function(){
      return this.$store.state.type_lists;
    },
    articleList: function(){
      return this.$store.state.article_lists;
    }
  },
  methods: {
  },
  async mounted(){
    await this.$api.getTypeList.call(this);
    await this.$api.getArticleList.call(this);
  }
}
</script>

<style>
.MainPage {
  display: flex;
  justify-content: center;
  align-items: center
}
</style>