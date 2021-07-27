import apiCaller from '@common/utils/apiCaller';
import { IResponse } from '@home/store/types';
import apiEndpoints from '@common/constants/apiEndpoints';

// tslint:disable-next-line:no-any
export const fetchMenuService = async (): Promise<IResponse[] | any> => {
    try {
      const url = apiEndpoints.BLOG.GET_MENU.URL;

      return await apiCaller.get(url);
    // tslint:disable-next-line:no-useless-catch
    } catch (error) {
        throw error;
    }
};

// tslint:disable-next-line:no-any
export const fetchTagsService = async (): Promise<IResponse[] | any> => {
  try {
    const url = apiEndpoints.BLOG.GET_TAGS.URL;

    return await apiCaller.get(url);
  // tslint:disable-next-line:no-useless-catch
  } catch (error) {
      throw error;
  }
};

// tslint:disable-next-line:no-any
export const fetchPostsService = async (category: string | null, tag: string | null): Promise<IResponse[] | any> => {
  try {
    const url = apiEndpoints.BLOG.GET_POSTS.URL(category === null ? undefined : category , tag === null ? undefined : tag);

    return await apiCaller.get(url);
  // tslint:disable-next-line:no-useless-catch
  } catch (error) {
      throw error;
  }
};
