<template>
  <md-layout class="TypeList" md-hide-xsmall md-hide-small md-flex="15">
    <md-list>
      <md-list-item v-for="type in typeList">
        <md-icon>{{type.Icon}}</md-icon> <span>{{type.Name}}</span>
      </md-list-item>
    </md-list>
  </md-layout>
</template>

<script>
export default {
  props: [ 'typeList' ],
  data () {
    return {
    }
  }
}
</script>

<style>
.TypeList {
  height:auto;
}
</style>