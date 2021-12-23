import {blogBrief} from "../utils/types";
import {formatTime} from "../utils";
import {Link} from "react-router-dom";

export const BlogBrief = ({ blog }: blogBrief) => {
    return (
        <div>
            <div>
                <Link to={`/blogs?tag=${blog.tag}`}>
                    <span>{`[${blog.tag}]`}</span>
                </Link>
                <Link to={`/blogs/${blog.id}`}>
                    {blog.title}
                </Link>
            </div>
        </div>
    )
}