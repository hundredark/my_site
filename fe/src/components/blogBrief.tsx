import {blogBrief} from "../utils/types";
import {formatTime} from "../utils";
import {Link} from "react-router-dom";

export const BlogBrief = ({ blog }: blogBrief) => {
    let timeString = formatTime(blog.createtime)

    return (
        <div>
            <div><Link to={'/blogs/details'}>blog.title</Link></div>
            <div>{timeString}</div>
        </div>
    )
}