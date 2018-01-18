async function request(method, url, param){
  let res = null;
  if(!method || method === 'GET'){
    res = await this.$http.get(url);
  }else if(method === 'POST'){
    res = await this.$http.post(url, param);
  }else{
    return Promise.reject({err: '无效的方法'});
  }
  if(res.status >= 400){
    return Promise.reject({err: res.data});
  }
  return Promise.resolve(res.data);
};

export default {
  async getTypeList(){
    let url = '/category/getList',
    lists = await request.call(this, 'GET', url);
    await this.$store.dispatch('UpdateTypes', lists);
    return Promise.resolve();
  },  
  async getArticleList(page){
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
  }
}