<template>
  <md-card class="adminList">
    <md-list>
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
    </md-list>
  </md-card>
</template>

<script>
export default {
  props: [ 'adminContentList' ],
  data () {
    return {
      articleDetail: {}
    }
  },
  methods: {
   
  }
}
</script>

<style>
.adminList{
  width: 100%
}
</style>