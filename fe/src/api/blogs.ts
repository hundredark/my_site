import Ajax_api from "./api";
import {baseUrl} from "../utils";

class blogApi extends Ajax_api {
    getList() {
        let path = '/api/blog/list'
        return this.get(path).then(res => res.data)
    }

    getBlogDetail(id: number) {
        let path = `/api/blog/detail?id=${id}`
        return this.get(path).then(res => res.data)
    }
}

const api = new blogApi(baseUrl)
export default api