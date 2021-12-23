import Ajax_api from "./api";
import {baseUrl} from "../utils";

class UserApi extends Ajax_api {
    login(data: object) {
        let path = '/api/user/login'
        return this.post(path, data)
    }
}

const api = new UserApi(baseUrl)
export default api