<template>
  <md-layout class="TypeList" md-hide-xsmall md-hide-small md-flex="15">
    <md-list>
      <md-list-item v-for="type in typeList" @click.native="clickItem(type.Name)">
        <md-icon>{{type.Icon}}</md-icon> <span>{{type.Name}}</span>
      </md-list-item>
    </md-list>
  </md-layout>
</template>

<script>
export default {
  props: [ 'typeList', 'adminContentList', 'getContentList' ],
  data () {
    return {
    }
  },
  methods: {
    clickItem(Name){
      this.getContentList(Name);
    }
  }
}
</script>

<style>
</style>