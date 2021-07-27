import { IMenu, IPosts, ITags } from '@src/common/types/blog';

export interface IHomeState {
  menu: IMenu[];
  tags: ITags[];
  posts: IPosts[];
  isLoading: boolean;
}

export interface IResponse {
  categories: IMenu[];
  found: number;
}

export interface ITagsResponse {
  categories: ITags[];
  found: number;
}

export interface IPostsResponse {
  posts: IPosts[];
  found: number;
}
