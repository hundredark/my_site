import {Header} from "../components/header";
import {baseUrl, useMount} from "../utils";
import blogsApi from "../api/blogs";
import {useState} from "react";
import {BlogBrief} from "../components/blogBrief";
import {blogType} from "../utils/types";

export const Blogs = () => {
    const [list, setList] = useState([])

    let api = new blogsApi(baseUrl)
    useMount(() => {
        console.log('switch to blogs')
        api.getList().then(l => {
            console.log(l)
            setList(l)
        })
    })

    return (
        <div className={'page-wrapper'}>
            <Header />
            <div className={'content-wrapper'}>
                {
                    list.map((blog: blogType) => <BlogBrief blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    )
}