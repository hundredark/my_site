import HTTP from 'utils/http';
import { API } from '../config/config';
import {IResult, ISongDetail, IUserInfo} from "../utils/types";

const LOGIN = API.LOGIN;

export default class LoginService extends HTTP {
  loginAction (userInfo: IUserInfo) {
    return new Promise<IResult>((resolve, reject) => {
      this.axiosPost({
        url: LOGIN.LOGIN_ACTION,
        data: userInfo,
        success (data) {
          resolve(data as IResult);
        },
        error (error) {
          alert('网络请求失败');
        }
      });
    });
  }

  loginCheck () {
    return new Promise<IResult>((resolve, reject) => {
      this.axiosGet({
        url: LOGIN.LOGIN_CHECK,
        success (data) {
          resolve(data as IResult);
        },
        error (error) {
          alert('网络请求失败');
          window.location.reload();
        }
      });
    });
  }

  logoutAction () {
    return new Promise<IResult>((resolve, reject) => {
      this.axiosGet({
        url: LOGIN.LOGOUT_ACTION,
        success (data) {
          resolve(data as IResult);
        },
        error (error) {
          alert('网络请求失败');
          window.location.reload();
        }
      })
    });
  }
}











