<template>
 <md-sidenav class="md-left" ref="slider">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div> 
    </md-toolbar>
    <div>
      <md-list>
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
    </div>       
  </md-sidenav>
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
.md-sidenav-content {
  position: fixed !important;
}
.md-sidenav-backdrop {
  position: fixed !important;
}
</style>