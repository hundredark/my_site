import {Header} from "../components/header";
import {useMount} from "../utils";
import api from "../api/blogs";
import {useState} from "react";
import {BlogBrief} from "../components/blogBrief";
import {blogType} from "../utils/types";

export const Blogs = () => {
    const [list, setList] = useState([])

    useMount(() => {
        console.log('switch to blogs')
        api.getList().then(l => {
            setList(l)
        })
    })

    return (
        <div className={'page-wrapper'}>
            <Header />
            <div className={'content-wrapper'}>
                <div>
                    <button>All</button>
                    {
                        list.map((blog: blogType) => <button key={blog.id}>{blog.tag}</button>)
                    }
                </div>
                <div>
                    {
                        list.map((blog: blogType) => <BlogBrief blog={blog} key={blog.id} />)
                    }
                </div>
            </div>
        </div>
    )
}