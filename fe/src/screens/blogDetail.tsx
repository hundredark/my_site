import {Header} from "../components/header";
import {useMount} from "../utils";
import api from "../api/blogs";
import {useParams} from 'react-router-dom';
import {useState} from "react";

export const BlogDetail = () => {
    let [blog, setBlog] = useState({
        title: '',
        content: '',
    })

    let {blogId} = useParams<'blogId'>()
    const id: number = parseInt(blogId!)

    useMount(() => {
        api.getBlogDetail(id).then(blogData => {
            setBlog(blogData)
        })
    })

    return (
        <div className={'page-wrapper'}>
            <Header />
            <div className={'content-wrapper'}>
                <h1>{blog.title}</h1>
                <div>{blog.content}</div>
            </div>
        </div>
    )
}