import {useState} from "react";

import {BlogItem} from "../../components/BlogItem";
import {useMount} from "../../utils/hooks";
import {IBlog, IBlogList, IResult} from "../../utils/types";

import './index.css'
import BlogService from "../../services/Blog";

const blogService = new BlogService()

export const BlogList = () => {

    const [list, setList] = useState<IBlogList>([])

    useMount(() => {
        console.log('to blogs')

        blogService.getBlogList().then((data) => {
            if (data.error_code === 0) {
                setList(data.data as IBlogList)
            }
        })
    })

    return (
      <div className={'blogs-container'}>
        <h1 className={'title'}>Posts</h1>
        <div className={"blog-list-container"}>
          <ul className={'blog-list'}>
            <li className={'blog-item'}>
              {
                list.map((blog: IBlog) => <BlogItem blog={blog} key={blog.id} />)
              }
            </li>
          </ul>
        </div>

      </div>
    )
}
