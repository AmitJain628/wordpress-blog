import actions from '@home/store/actions';
import { AnyAction, Dispatch } from 'redux';
import { RootState } from '@src/common/store/reducers';
import { IMenu, IPosts, ITags } from '@src/common/types/blog';

export const mapStateToProps = (state: RootState): IMapStateToProps => {
  return {
    menu: state.home.menu,
    tags: state.home.tags,
    posts: state.home.posts
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): IMapDispatchToProps => ({
  getMenu(): void {
    dispatch(actions.fetchMenu());
  },
  getTags(): void {
    dispatch(actions.fetchTags());
  },
  getPosts(category: string | null, tag: string | null): void {
    dispatch(actions.fetchPosts({category, tag}));
  }
});

export interface IMapStateToProps{
  menu: IMenu[];
  tags: ITags[];
  posts: IPosts[];
}

export interface IMapDispatchToProps{
  getMenu(): void;
  getTags(): void;
  getPosts(category: string | null, tag: string | null): void;
}
