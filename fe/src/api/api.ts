import axios from "axios";

class Ajax_api {
    baseUrl: string

    constructor(baseUrl: string | undefined) {
        this.baseUrl = baseUrl || 'http://localhost:8000/api/'
    }

    get(path: string) {
        let url: string = this.baseUrl + path
        console.log('get', url)
        return axios.get(url).then(r => r.data)
    }

    post(path: string, data: object) {
        let url: string = this.baseUrl + path
        return axios.post(url, data).then(r => r.data)
    }
}

export default Ajax_api