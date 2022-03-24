import axios from 'axios';
import qs from 'qs';

import {IAxiosOptions} from "./types";

export default class HTTP {
  axiosPost (options: IAxiosOptions) {
    const flag = options.crossOrigin ?? true

    axios({
      url: options.url,
      method: 'post',
      withCredentials: flag,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
  }

  axiosGet (options: IAxiosOptions) {
    const flag = options.crossOrigin ?? true

    axios({
      url: options.url,
      method: 'get',
      withCredentials: flag
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
  }
}
