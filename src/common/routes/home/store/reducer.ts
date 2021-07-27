import CONSTANTS from '@home/store/constants';
import initialState from '@home/store/state';
import withProduce from '@utils/withProduce';
import { AnyAction, Reducer } from 'redux';
import { IHomeState } from '@home/store/types';
import { IMenu, IPosts, ITags } from '@src/common/types/blog';

const reducers = {
  [CONSTANTS.SET_LOADING]: (state: IHomeState, payload: boolean) => {
    state.isLoading = payload;
  },
  [CONSTANTS.SET_MENU_DATA]: (state: IHomeState, payload: IMenu[]) => {
    state.menu = payload;
  },
  [CONSTANTS.SET_TAGS_DATA]: (state: IHomeState, payload: ITags[]) => {
    state.tags = payload;
  },
  // tslint:disable-next-line:no-any
  [CONSTANTS.SET_POSTS_DATA]: (state: IHomeState, payload: any) => {
    state.posts = getPostsData(payload);
  }
};

// tslint:disable-next-line:no-any
function getPostsData(response: any): IPosts[] {
     let posts: IPosts[] = [];

    // tslint:disable-next-line:no-any
     posts = response.map((ele: any) => {
          return {
            name: ele.title,
            id: ele.ID,
            url: ele.URL,
            categoryName: Object.keys(ele.categories).length ? Object.keys(ele.categories)[0] : '',
            time: timeSince(new Date(ele.date)),
            thumbnail: Object.values(ele.attachments).length ? ele.attachments[Object.keys(ele.attachments)[0]].URL as string : '',
          };
     });

     return posts;
}

const intervals = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 1 }
];

function timeSince(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const interval = intervals.find(i => i.seconds < seconds);
  if (interval) {
  const count = Math.floor(seconds / interval.seconds);

  return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
  }

  return '';
}

export default withProduce(initialState, reducers) as Reducer<
  IHomeState,
  AnyAction
>;
