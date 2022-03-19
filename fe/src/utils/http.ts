import axios from 'axios';
import qs from 'qs';

import {IAxiosOptions} from "./types";

export default class HTTP {
  axiosPost (options: IAxiosOptions) {
    axios({
      url: options.url,
      method: 'post',
      withCredentials: true,
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
    axios({
      url: options.url,
      method: 'get',
      withCredentials: true
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
  }
}
