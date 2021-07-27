import { IHomeState } from '@home/store/types';

export default (): IHomeState => ({
  isLoading: true,
  menu: [],
  tags: [],
  posts: []
});
