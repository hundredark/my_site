import HTTP from 'utils/http';
import { API } from '../config/config';
import {IResult, ISongDetail} from "../utils/types";

const BLOG = API.BLOG;

export default class BlogService extends HTTP {
  getBlogList () {
    return new Promise<IResult>((resolve, reject) => {
      this.axiosGet({
        url: BLOG.GET_BLOG_DATA,
        success (data) {
          resolve(data as IResult);
        },
        error (error) {
          alert('网络请求失败');
        }
      });
    });
  }

  getBlogById (id: number) {
    return new Promise<IResult>((resolve, reject) => {
      this.axiosGet({
        url: BLOG.GET_BLOG_INFO + `?id=${ id }`,
        success (data) {
          resolve(data as IResult);
        },
        error (error) {
          alert('网络请求失败');
        }
      });
    });
  }
}
