async function request(method, url, param){
  let res = null;
  try {
    if(!method || method === 'GET'){
      res = await this.$http.get(url);
    }else if(method === 'POST'){
      res = await this.$http.post(url, param);
    }else{
      return Promise.reject({err: '无效的方法'});
    } 
    return Promise.resolve(res.data);
  } catch (error) {
    if(error.stack.indexOf('403') > -1){
      this.$notify({
        message: '请先登录',
        type: 'warning'
      });
      this.$router.replace('/');
      return Promise.reject({err: res.data});
    }
    this.$notify({
      message: '请求服务器发生错误',
      type: 'danger'
    })
    return Promise.reject({err: res.data});
  } 
};

export default {
  async login(username, password){
    let url = '/user/login',
    res = await request.call(this, 'POST', url, {
      data: { username, password }
    });
    return Promise.resolve();
  },
  async checkLogin(){
    let url = '/user/checkLogin';
    try {
      let res = await request.call(this, 'GET', url);
      return Promise.resolve(true);
    } catch (error) {
      return Promise.resolve(false); 
    }
  },
  async getTypeList(){
    let url = '/category/getList',
    lists = await request.call(this, 'GET', url);
    await this.$store.dispatch('UpdateTypes', lists);
    return Promise.resolve();
  },  
  async getArticleList(page = 1){
    let url = `/topic/getList?page=${page}`,
    lists = await request.call(this, 'GET', url);
    await this.$store.dispatch('UpdateArticles', lists);
    return Promise.resolve();
  },
  async getArticleDetail(id){
    let url = `/topic/getDetail?topicId=${id}`,
    res = await request.call(this, 'GET', url);
    let converter = new this.$showdown.Converter();
    res.Content = converter.makeHtml(res.Content);
    await this.$store.dispatch('UpdateArticleContent', res);
    return Promise.resolve();
  },
  async getRawArticle(id){
    let url = `/topic/getDetail?topicId=${id}`,
    res = await request.call(this, 'GET', url);
    return Promise.resolve(res);
  },
  async getAdminList(type){
    let url = {
      'topic': '/topic/getList',
      'comment': '/comment/getList',
      'category': '/category/getList'
    };
    if(!url[type]){ return Promise.reject({err: '无效的类型'}) };
    let res = await request.call(this, 'GET', url[type]);
    return Promise.resolve(res);
  },
  async uploadFile(file){
    let token_url = '/admin/getToken';
    let token_obj = await request.call(this, 'POST', token_url);
    const data = new FormData();
    data.append('policy', token_obj.policy);
    data.append('authorization', token_obj.signature);
    data.append('file', file);
    let res = await this.$http.request({
        url: '/scarletmu',
        method: 'POST',
        baseURL: 'http://v0.api.upyun.com/',
        data: data
    });
    return Promise.resolve(res.data);
  },
  async editArticle(id, article){
    let url = '/admin/editTopic';
    let res = await request.call(this, 'POST', url, {id, args: article});
    return Promise.resolve(res.data);
  },
  async saveArticle(article){
    let url = '/admin/addTopic';
    let res = await request.call(this, 'POST', url, article);
    if(res.status > 400){
      return Promise.reject({err:res.data});
    }
    return Promise.resolve(res.data);
  },
  async deleteArticle(article){
    let url = '/admin/deleteTopic';
  },
  async addCategory(category){
    let url = '/admin/addCategory';
    let res = await request.call(this, 'POST', url, category);
    return Promise.resolve();
  },
  async editCategory(id, category){
    let url = '/admin/editCategory';
    let res = await request.call(this, 'POST', url, {id, args: category});
    return Promise.resolve();
  }
}