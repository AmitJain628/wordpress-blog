import { actionCreator } from '@src/common/utils/actionCreator';
import CONSTANTS from '@home/store/constants';

export default {
  setLoading: actionCreator<boolean>(CONSTANTS.SET_LOADING),
  fetchMenu: actionCreator<void>(CONSTANTS.FETCH_DATA),
  setMenuData: actionCreator<void>(CONSTANTS.SET_MENU_DATA),
  fetchTags: actionCreator<void>(CONSTANTS.FETCH_TAGS),
  setTagsData: actionCreator<void>(CONSTANTS.SET_TAGS_DATA),
  fetchPosts: actionCreator<{category: string | null, tag: string | null}>(CONSTANTS.FETCH_POSTS),
  setPostsData: actionCreator<void>(CONSTANTS.SET_POSTS_DATA),
  setPaginationData: actionCreator<void>(CONSTANTS.SET_PAGINATION_DATA),
  searchGiphyData: actionCreator<string>(CONSTANTS.SEARCH_GIPHY_DATA),
  setSearchGiphyData: actionCreator<void>(CONSTANTS.SET_SEARCH_GIPHY_DATA)
};
