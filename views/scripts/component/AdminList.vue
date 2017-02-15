<template>
  <md-layout md-align="center" md-gutter>
    <md-list class="custom-list md-triple-line">
      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/6" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>me, Scott, Jennifer</span>
          <span>Summer BBQ</span>
          <p>Wish I could come, but I'm out of town ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/5" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Sandra Adams</span>
          <span>Oui oui</span>
          <p>Do you have Paris recommendations ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>

      <md-list-item>
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/8" alt="People">
        </md-avatar>

        <div class="md-list-text-container">
          <span>Trevor Hansen</span>
          <span>Order confirmation</span>
          <p>Thank you for your recent order from ...</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>

        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
  </md-layout>
</template>

<script>
export default {
  props: [ 'articleList' ],
  data () {
    return {
      articleDetail: {}
    }
  },
  methods: {
    async preview(id){
      let res = await this.$fetch.get('/topic/getDetail', {topicId: id});
      if(res.status !== 200){
        alert('Error');
        return;
      }
      let json = await res.json();
      let converter = new this.$showdown.Converter();
      json.Content = converter.makeHtml(json.Content);
      this.articleDetail = json;
      this.$refs.dialog1.open();
    },
    closeDialog(){
      this.$refs.dialog1.close(); 
    },
  }
}
</script>

<style>
.titleImg {
  max-width:100%;
  max-height:100%;
}
.articleCard {
  max-width: 320px;
  margin: 8px 16px;
}
</style>