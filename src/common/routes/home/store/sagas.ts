import { put, takeLatest } from 'redux-saga/effects';
import { Effect } from 'redux-saga';
import CONSTANTS from '@home/store/constants';
import actions from '@home/store/actions';
import { fetchMenuService, fetchPostsService, fetchTagsService } from '@home/store/services';

export type SagaIterator = IterableIterator<
Effect | Effect[] | Promise<void>
>;

export function* fetchMenu(): SagaIterator {
    try {
     yield put(actions.setLoading(true));
     // tslint:disable-next-line:no-any
     const response: any = yield fetchMenuService();
     yield put(actions.setLoading(false));
     if (response && response.data) {
        // tslint:disable-next-line:no-commented-code
         yield put(actions.setMenuData(response.data.categories));
     }
    } catch (err) {
      yield put(actions.setLoading(false));
      console.log(err);
      throw err;
    }
 }

 export function* fetchTags(): SagaIterator {
  try {
   yield put(actions.setLoading(true));
   // tslint:disable-next-line:no-any
   const response: any = yield fetchTagsService();
   yield put(actions.setLoading(false));
   if (response && response.data) {
      // tslint:disable-next-line:no-commented-code
     yield put(actions.setTagsData(response.data.tags));
   }
  } catch (err) {
    yield put(actions.setLoading(false));
    console.log(err);
    throw err;
  }
}

export function* fetchPosts(action: {
  type: string;
  payload: {
    category: string | null;
    tag: string | null;
  };
}): SagaIterator {
  try {

   const {category, tag} = action.payload;

   console.log(category, tag);

   yield put(actions.setLoading(true));
   // tslint:disable-next-line:no-any
   const response: any = yield fetchPostsService(category, tag);
   yield put(actions.setLoading(false));
   if (response && response.data) {
      // tslint:disable-next-line:no-commented-code
     yield put(actions.setPostsData(response.data.posts));
   }
  } catch (err) {
    yield put(actions.setLoading(false));
    console.log(err);
    throw err;
  }
}

function* watcherSaga(): Generator {
    yield takeLatest(CONSTANTS.FETCH_DATA, fetchMenu);
    yield takeLatest(CONSTANTS.FETCH_TAGS, fetchTags);
    yield takeLatest(CONSTANTS.FETCH_POSTS, fetchPosts);
}
export default watcherSaga;
