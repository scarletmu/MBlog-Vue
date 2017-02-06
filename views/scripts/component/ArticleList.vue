<template>
  <md-layout md-align="center" md-gutter="40" md-flex-xsmall md-flex-small md-flex>
    <md-card md-with-hover class="articleCard" v-for="article in articleList">
      <md-card-media class="titleImg">
        <img :src="article.Thumbnail" class="titleImg">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{article.Title}}</div>
      </md-card-header>

      <md-card-content>
        {{article.Summary}}
      </md-card-content>

    </md-card>
  </md-layout>
</template>

<script>
export default {
  props: [ 'articleList' ],
  data () {
    return {
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
  /*max-width: 320px;*/
}
</style>