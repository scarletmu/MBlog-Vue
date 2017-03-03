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
      typeList: [],
      articleList: []
    }
  },
  methods: {
    async getTypeList(){
      let res = await this.$fetch.get('/category/getList', {})
      if(res.status !== 200){
        console.error('Get type list failed');
        return;
      }
      let json = await res.json(); 
      this.typeList = json;
    },
    async getArticleList(){
      let res = await this.$fetch.get('/topic/getList', { page: 1 });
      if(res.status !== 200){
        console.error('Get article list failed'); 
        return;
      }
      let json = await res.json();
      this.articleList = json;
    }
  },
  mounted(){
    this.getTypeList();
    this.getArticleList();
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