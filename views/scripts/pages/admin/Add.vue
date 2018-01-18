<template>
  <div id="addPage">
    <div class="infoArea">
      <md-input-container>
        <label>标题</label>
        <md-input v-model="title"></md-input>
      </md-input-container>
    </div>
    <textarea v-model="content" id="editArea"></textarea>
    <div class="uploadArea">
      <md-input-container>
        <label>上传图片</label>
        <md-file v-model="uploadImage" accept="image/*" @selected="uploadFile"></md-file>
      </md-input-container>
    </div>
    <div class="images">
      <md-card v-for="(image, index) of images" :key="index">
        <md-card-media-cover md-text-scrim>
          <md-card-media md-ratio="16:9">
            <img :src="image">
          </md-card-media>
          <md-card-area>
            <md-card-actions>
              <md-button>删除</md-button>
              <md-button>复制地址</md-button>
              <md-button>设置为缩略图</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
    <md-button class="md-primary">保存</md-button>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      title: null,
      content: null,
      images: [],
      uploadImage: null
    }
  },
  methods:{
    async uploadFile(files){
      let _this = this;
      for(let file of files){
        let res = await _this.$api.uploadFile.call(_this, file);
        this.images.push(`http://scarletmu.b0.upaiyun.com/${res.url}`);
      }
    }
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


