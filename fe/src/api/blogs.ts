import Ajax_api from "./api";

class blogsApi extends Ajax_api {
    getList() {
        let path = '/api/blog/list'
        return this.get(path)
    }

    getBlogDetail(id: number) {
        let path = `/api/blog/detail?id=${id}`
        return this.get(path)
    }
}

export default blogsApi