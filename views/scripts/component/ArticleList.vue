<template>
  <div class="ArticleList">
    <md-card md-layout md-with-hover class="articleCard" 
     @click.native="preview(article._id)" 
     v-for="(article, index) in articleList"
     :key="index"> 
      <md-card-media class="titleImg">
        <img :src="article.Thumbnail" class="titleImg">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{article.Title}}</div>
      </md-card-header>

      <md-card-content>
        {{article.Summary}}
      </md-card-content>

      <md-card-actions>
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>bookmark</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>share</md-icon>
        </md-button>
      </md-card-actions>
    </md-card>

    <!--Preview Dialog-->
    <md-dialog ref="dialog1"> 
      <md-dialog-title>{{articleDetail.Title}}</md-dialog-title>
      <md-dialog-content v-html="articleDetail.Content"></md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary md-raised" @click="detail(articleDetail._id)">查看详情</md-button>
        <md-button class="md-raised" @click="closeDialog()">关闭</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
export default {
  props: [ 'articleList' ],
  data () {
    return {
    }
  },
  computed: {
    articleDetail: function(){
      return this.$store.state.article_content;
    }
  },
  methods: {
    async preview(id){
      await this.$api.getArticleDetail.call(this,id);
      this.$refs.dialog1.open();
    },
    closeDialog(){
      this.$refs.dialog1.close(); 
    },
    detail(id){
      this.$router.push(`/detail/${id}`)
    }
  },
  created(){
    if(!this.$store.state.article_content){
      this.$store.dispatch('UpdateArticleContent', {});
    }
  }
}
</script>

<style>
.titleImg {
  max-width:100%;
  max-height:100%;
}
.articleCard {
  max-width: 480px;
  margin: 8px 16px;
}

.ArticleList {
  display: flex;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  max-width: 80%;
}
@media (min-width: 480px) and (max-width: 960px){
  .articleCard {
    max-width: 240px; 
  }
}
@media (max-width: 480px) {
  .articleCard {
    max-width: 320px;
  }
}
</style>