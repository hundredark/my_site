// https://netease-cloud-music-api-ecru-rho.vercel.app/song/detail??ids=1883633155

import HTTP from 'utils/http';
import { API } from '../config/config';
import {ISongDetail, ISongResult} from "../utils/types";

const AUDIO = API.Audio;

export default class AudioService extends HTTP {

  getSongsInfo (ids: number[] | number) {
    const str = typeof(ids) === 'number' ? ids : ids.join(",")

    return new Promise<ISongDetail[]>((resolve, reject) => {
      this.axiosGet({
        url: AUDIO.GET_SONGS_INFO + `?ids=${str}`,
        crossOrigin: false,
        success (data) {
          let result = data as ISongResult
          if (result.code === 200) {
            resolve(result.songs)
          }
        },
        error (error) {
          alert('网络请求失败: ' + error)
        }
      });
    });
  }

  // getSongsUrl (ids: number[] | number) {
  //   const str = typeof(ids) === 'number' ? ids : ids.join(",")
  //
  //   return new Promise((resolve, reject) => {
  //     this.axiosGet({
  //       url: AUDIO.GET_SONGS_SRC + `?id=${str}`,
  //       crossOrigin: false,
  //       success (data) {
  //         let result = data as ISongResult
  //         if (result.code === 200) {
  //           resolve(result)
  //         }
  //       },
  //       error (error) {
  //         alert('网络请求失败: ' + error)
  //       }
  //     });
  //   });
  // }
}
