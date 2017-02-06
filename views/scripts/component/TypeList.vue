<template>
  <md-layout md-hidden-xsmall md-hidden-small md-flex="10">
    <md-list class="TypeList">
      <md-list-item>
        <md-icon>move_to_inbox</md-icon> <span>Inbox</span>
      </md-list-item>
      <md-list-item>
        <md-icon>send</md-icon> <span>Sent Mail</span>
      </md-list-item>
      <md-list-item>
        <md-icon>delete</md-icon> <span>Trash</span>
      </md-list-item>
      <md-list-item>
        <md-icon>error</md-icon> <span>Spam</span>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
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
.TypeList {
  margin: 5 0;
}
</style>