<template>
  <div class="detailPage">
    <md-card class="contentArea">
      <md-card-header>
        <div class="md-title">{{article.Title}}</div>
        <div class="md-subhead">{{article.Summary}}</div>
      </md-card-header>
      <md-card-content v-html="article.Content"> </md-card-content>
    </md-card>
    <div class="commentArea">
      <div id="uyan_frame"></div>
    </div>
  </div> 
</template>

<script>
export default {
  computed:{
    article: function(){
      return this.$store.state.article_content || {};
    }
  },
  data(){
    return{
    }
  },
  async mounted(){
    if(!this.$route.params.id){
      this.$notify({
        message: '请返回列表查看',
        type: 'warning'
      })
    }else{
      await this.$api.getArticleDetail.call(this, this.$route.params.id);
    }
  }
}
</script>

<style scoped>
.detailPage{
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  overflow: hidden;
}
.contentArea{
  margin: 10px 15px;
}
</style>