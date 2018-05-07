import * as types from './mutation-types'

export const UpdateArticles = ({ commit }, lists) => {
  commit(types.UPDATE_ARTICLE_LIST, { lists });
};

export const UpdateAdmins = ({ commit }, lists) => {
  commit(types.UPDATE_ADMIN_LIST, { lists });
};

export const UpdateTypes = ({ commit }, lists) => {
  commit(types.UPDATE_TYPE_LIST, { lists });
};

export const UpdateArticleContent = ({ commit }, article) => {
  commit(types.UPDATE_ARTICLE_CONTENT, { article });
}

export const UpdateSlider = ({ commit }, slider) => {
  commit(types.UPDATE_SLIDER, { slider });
}