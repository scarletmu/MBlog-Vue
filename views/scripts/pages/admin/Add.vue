<template>
  <div id="addPage">
    <div class="infoArea">
      <div class="info">
        <md-input-container class="info_title">
          <label>标题</label>
          <md-input v-model="title"></md-input>
        </md-input-container>
        <md-input-container class="info_category">
          <label for="category">类型</label>
          <md-select name="category" id="category" v-model="category">
            <md-option v-for="(type, index) in typeList" 
              :key="index" 
              :value="type._id">
            {{type.Name}}
            </md-option>
          </md-select>
        </md-input-container>
      </div>
      
      <md-input-container>
        <label>简介</label>
        <md-input v-model="summary"></md-input>
      </md-input-container>
       <md-input-container>
        <label>缩略图地址</label>
        <md-input v-model="thumbnail"></md-input>
      </md-input-container>
    </div>
    <textarea id="editArea"></textarea>
    <div class="uploadArea">
      <md-input-container>
        <label>上传图片</label>
        <md-file v-model="uploadImage" accept="image/*" @selected="uploadFile"></md-file>
      </md-input-container>
    </div>
    <div class="images">
      <md-card class="imageItem" v-for="(image, index) of images" :key="index">
        <md-card-media-cover md-text-scrim>
          <md-card-media>
            <img :src="image">
          </md-card-media>
          <md-card-area>
            <md-card-actions>
              <md-button @click="openDialog(image)">获取地址</md-button>
              <md-button @click="setThumbnail(image)">设置缩略图</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
    <md-button @click="submit" class="md-primary" :disabled="isSubmit">保存</md-button>
    <md-dialog ref="dialog1">
      <md-dialog-title>图片地址</md-dialog-title>
      <md-dialog-content>
        <span>{{preview}}</span>
      </md-dialog-content>
    </md-dialog>
  </div>  
</template>

<script>
export default {
  data(){
    return {
      editor: null,
      title: null,
      images: [],
      uploadImage: null,
      thumbnail: null,
      preview: null,
      category: null,
      summary: null,
      simplemde: null,
      isSubmit: false,
      typeList: [],
      isEdit: false
    }
  },
  methods:{
    async uploadFile(files){
      let _this = this;
      for(let file of files){
        let res = await _this.$api.uploadFile.call(_this, file);
        this.images.push(`http://scarletmu.b0.upaiyun.com/${res.url}`);
      }
    },
    setThumbnail(image){
      this.thumbnail = image;
    },
    openDialog(image) {
      this.preview = image;
      this.$refs['dialog1'].open();
    },
    async getCategory(){
      let res = await this.$api.getAdminList.call(this,'category');
      this.typeList = res;
    },
    submit(){
      this.isSubmit = true;
      let article = {
        Title: this.title,
        Summary: this.summary,
        Content: this.editor.value(),
        Thumbnail: this.thumbnail,
        Category: this.category 
      }; 
      if(this.isEdit){
        this.edit(article);
      }else{
        this.add(article);
      }
    },
    async add(article){
      try {
        let res = await this.$api.saveArticle.call(this, article), _this = this;
        this.$notify({
          message: '添加文章成功',
          type: 'success'
        })
        setTimeout(function(){
          _this.$router.replace('/admin');
        }, 1000);
      } catch (error) {
        this.$notify({
          message: '添加文章出错',
          type: 'error'
        })
        this.isSubmit = false;
      }
    },
    async edit(article){
      try {
        let res = await this.$api.editArticle.call(this, this.$route.params.id, article), _this = this;
        this.$notify({
          message: '编辑文章成功',
          type: 'success'
        })
        setTimeout(function(){
          _this.$router.replace('/admin');
        }, 1000); 
      } catch (error) {
       this.$notify({
          message: '编辑文章出错',
          type: 'error'
        })
        this.isSubmit = false; 
      }
    }
  },
  async mounted(){
    let simplemde = new SimpleMDE({ 
      element: document.getElementById("editArea"),
      spellChecker: false
    });
    this.editor = simplemde;
    this.getCategory();
    if(this.$route.params.id){
      let article = await this.$api.getRawArticle.call(this, this.$route.params.id);
      this.title = article.Title;
      this.summary = article.Summary;
      this.thumbnail = article.Thumbnail;
      this.category = article.Category;
      this.editor.value(article.Content);
      this.isEdit = true;
    }
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
.images{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.imageItem{
  width:200px;
  max-height: 200px;
  overflow: hidden;
}

.imageItem > .md-card-media-cover{
  max-height: 200px;
}

.info{
  display: flex;
  flex-wrap: wrap;
}

.info_title{
  flex-basis: 70%;
}
.info_category{
  flex-basis: 30%;
}

</style>


