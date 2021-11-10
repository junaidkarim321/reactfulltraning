// const BlogList  = (props) => {

//     const blogs =props.blogs;
//     // console.log(props,blogs);
//     const title =props.title;
//     return ( 
//         <div className="blog-list">
//         <h2>{title}</h2>
//              {blogs.map((blog) =>( 
//              <div className="blog-preview" key={blog.id}>
//                <h2>{blog.title}</h2>
//                <p> written by{blog.author}</p>
//              </div>
//          ))}
//         </div>
//     );
// }
 
// export default BlogList;

///////////////////////////////////////////////////////function as prop
const BlogList  = ({blogs,title,handleDelete}) => {

    return ( 
        <div className="blog-list">
        <h2>{title}</h2>
             {blogs.map((blog) =>( 
             <div className="blog-preview" key={blog.id}>
               <h2>{blog.title}</h2>
               <p> written by{blog.author}</p>
               <button onClick={()=>handleDelete(blog.id)}>click me to delete this the element</button>
             </div>
         ))}
        </div>
    );
}
 
export default BlogList;