import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const history = useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id, {
            method: 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    const {id} = useParams();
    const {data: blog, error, isPending} =useFetch('http://localhost:8000/blogs/'+ id);
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>blog.title</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;