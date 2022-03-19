import HTTP from 'utils/http';
import { API } from '../config/config';
import {IResult} from "../utils/types";

const Gallery = API.Gallery;

export default class GalleryService extends HTTP {
  getGalleryList (page: number, batchLength: number) {
    return new Promise<IResult>((resolve, reject) => {
      this.axiosGet({
        url: Gallery.GET_IMG_DATA + `?page=${page}&pageSize=${batchLength}`,
        success (data) {
          resolve(data);
        },
        error (error) {
          alert('网络请求失败');
        }
      });
    });
  }
}
