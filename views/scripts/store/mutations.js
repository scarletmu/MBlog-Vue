import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.UPDATE_ADMIN_LIST] (state, { lists }){
    Vue.set(state, 'admin_lists', lists);
  },
  [types.UPDATE_ARTICLE_LIST] (state, { lists }){
    Vue.set(state, 'article_lists', lists);
  },
  [types.UPDATE_TYPE_LIST] (state, { lists }){
    Vue.set(state, 'type_lists', lists);
  },
  [types.UPDATE_ARTICLE_CONTENT] (state, { article }){
    Vue.set(state, 'article_content', article);
  }
}