import {useParams} from 'react-router-dom';
import React, {useState} from "react";
import {Remarkable} from 'remarkable'

import BlogService from "../../services/Blog";
import {formatTime} from "../../utils";
import {useMount} from '../../utils/hooks'
import {IBlog} from "../../utils/types";

import 'pages/BlogPage/index.css'

const blogService = new BlogService()

export const BlogPage = () => {

  const [blog, setBlog] = useState<IBlog>({
    id: -1,
    title: '',
    content: '',
    createTime: 0,
    tag: ''
  })

  const md = new Remarkable()
  md.set({
    html: true,
    breaks: true,
  })

  let {blogId} = useParams<'blogId'>()
  const id: number = parseInt(blogId as string)

  useMount(() => {
    console.log('to blogPage, id: ' + id)

    blogService.getBlogById(id).then((data) => {
      if (data.error_code === 0) {
          // setBlog((data.data as IResultData).)
          setBlog(data.data as IBlog)
      }
    })
  })

  return (
    <div className={'blog-page-container'}>
      <div className={ 'blog-tag' }><span>{  blog.tag }</span></div>
        <h1 className={ "blog-title" }>{ blog.title }</h1>
        <div className={ "blog-post" }>
          <span>
            { blog.createTime === 0 ? '' : formatTime(blog.createTime) }
          </span>
        </div>
        <div className={ "blog-hr" }></div>
        <div
          className={"blog-content"}
          dangerouslySetInnerHTML={{__html: md.render(blog.content!)}}
        />
    </div>
  )
}
