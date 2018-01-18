<template>
  <div id="addPage">
    <div class="infoArea">
      <md-input-container>
        <label>标题</label>
        <md-input v-model="initialValue"></md-input>
      </md-input-container>
    </div>
    <textarea v-model="Content" id="editArea"></textarea>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      editor: null,
      Content: null,
      inputInfo: {
        Title: undefined,
        Summary: undefined,
        Category: undefined,
        Thumnail: undefined
      },
      initialValue: null
    }
  },
  methods:{

  },
  mounted(){
    let simplemde = new SimpleMDE({ 
      element: document.getElementById("editArea"),
      spellChecker: false 
    });
    this.editor = simplemde;
  }
}
</script>

<style scoped>
#addPage{
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
</style>


