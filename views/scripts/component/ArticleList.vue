<template>
  <md-layout md-align="center" md-gutter="24" md-flex-xsmall md-flex-small md-flex>
    <md-layout md-flex-medium="33">
      <md-card md-with-hover class="articleCard">
        <md-card-media class="titleImg">
          <img src="https://vuematerial.github.io/assets/card-image-1.jpg"  class="titleImg">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card>
      
    </md-layout>
    <md-layout md-flex-medium="33">
      <md-card md-with-hover class="articleCard">
        <md-card-media class="titleImg">
          <img src="https://vuematerial.github.io/assets/card-image-1.jpg"  class="titleImg">
        </md-card-media>

        <md-card-header>
          <div class="md-title">Title goes here</div>
          <div class="md-subhead">Subtitle here</div>
        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
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