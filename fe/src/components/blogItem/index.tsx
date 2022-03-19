import {IBlog} from "../../utils/types";
import {formatTime} from "../../utils";
import {Link} from "react-router-dom";

import './index.css'

export const BlogItem = ({ blog }: { blog: IBlog}) => {

  const {id, tag, title, createTime} = blog

  return (
    <div className={'blog-item-container clearfix'}>
      <div className={'blog-tag'}>
        <span >{ `[${ tag }]` }</span>
      </div>

      <div className={'blog-title'}>
        <Link
          className={'hover-item'}
          to={ `/blogs/${ id }` }
        >
          { title }
        </Link>
      </div>

      <div className={'blog-time'}>
        <span>{ formatTime(createTime) }</span>
      </div>

    </div>
  )
}
