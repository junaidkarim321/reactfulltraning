// state change

// import {useState} from 'react'

// const Home = () => {

//    const [name ,setName ] = useState('mario'); 
//    const [age ,setAge] =useState(25);
//      const handleClick = () =>  {
//       setName('ali '); 
//       setAge('34')
//      }
//     return ( 
//         <div className="home">
//         <h2>this homepage </h2>
//         <p>{name} is {age} year old</p>
//         <button onClick={handleClick}>clicke me</button>
//         </div>
//      );
// }

// export default Home;


// ?????????????????????????????????????????????prop and usestate
// import {useState} from 'react'
// import  BlogList  from './BlogList';
// const Home = () => { 
// const [blogs,setBlogs ] = useState([
//   { title:'my new website',  body:'lore sdjnajsd', author:'ali',id:1},
//   { title:'my new website',  body:'lore sdjnajsd', author:'ali',id:2},
//   { title:'my new website',  body:'lore sdjnajsd', author:'ali',id:3}
// ]);

//     return ( 
//         <div className="home">
//         <BlogList blogs={blogs} title="all blogs "
//         />
//         </div>
//      );
// }

// export default Home;


//reusing components
// import {useState} from 'react'
// import  BlogList  from './BlogList';
// const Home = () => { 
// const [blogs,setBlogs ] = useState([
//   { title:'my new website',  body:'lore sdjnajsd', author:'ali',id:1},
//   { title:'my new website',  body:'lore sddssjnajsd', author:'alisds',id:2},
//   { title:'my new website',  body:'lore sdjnajsdsd', author:'alidsda',id:3}
// ]);

//     return ( 
//         <div className="home">
//         {/* <BlogList blogs={blogs} title="all blogs "/> */}
//         <BlogList blogs={blogs.filter((blog) => blog.author==="ali")} title="all blogs "/>
//         </div>
//      );
// }

// export default Home;



////////////////////////////////////////useeffect secound hook
// import {useState,useEffect} from 'react'
// import  BlogList  from './BlogList';
// const Home = () => { 
// const [blogs,setBlogs ] = useState([
//   { title:'my new website',  body:'lore sdjnajsd', author:'ali',id:1},
//   { title:'my new website',  body:'lore sddssjnajsd', author:'alisds',id:2},
//   { title:'my new website',  body:'lore sdjnajsdsd', author:'alidsda',id:3}
// ]);

// const  handleDelete=(id)=>{
//  const newBlogs= blogs.filter(blog=>blog.id !==id);
//  setBlogs (newBlogs); 
// }

// useEffect(()=>{     //useffect run every time at every render
//   console.log(' this is useeffect ');
//   console.log(blogs  );
// })

//     return ( 
//         <div className="home">
//         {/* <BlogList blogs={blogs} title="all blogs "/> */}
//         <BlogList blogs={blogs.filter((blog) => blog.author==="ali")} title="all blogs " handleDelete={handleDelete}/>

//         </div>
//      );
// }

// export default Home; 



// /////////////////////////////dependencies of useeffect 
// import {useState,useEffect} from 'react'
// import  BlogList  from './BlogList';
// const Home = () => { 
// const [blogs,setBlogs ] = useState([
//   { title:'my new website',  body:'lore sdjnajsd', author:'ali',id:1},
//   { title:'my new website',  body:'lore sddssjnajsd', author:'alisds',id:2},
//   { title:'my new website',  body:'lore sdjnajsdsd', author:'alidsda',id:3}
// ]);

// // const Home =()=>{
// //   const [blogs ,setBlogs]=useState(null);
// // }  

// const [name,setName]=useState("ali")
// const  handleDelete=(id)=>{
//  const newBlogs= blogs.filter(blog=>blog.id !==id);
//  setBlogs (newBlogs); 
// }

// useEffect(()=>{     //useffect run every time at every render
//   console.log(' this is useeffect ');
//   console.log(name );
// },[name])
// //on click the down button it will chage in console
//     return ( 
//         <div className="home">
//         {/* <BlogList blogs={blogs} title="all blogs "/> */}
//         <BlogList blogs={blogs.filter((blog) => blog.author==="ali")} title="all blogs " handleDelete={handleDelete}/>
//        <button onClick={()=>setName("the new name is ali khan")}>change name </button>
//        <p>{name }</p>
//         </div>
//      );
// }

// export default Home;







// /////////////////////////////fetching data with useffect 
// import { useState, useEffect } from 'react'
// import BlogList from './BlogList';
// const Home = () => {
//   const [blogs, setBlogs] = useState(null)
//   const [isPending, setIsPending] = useState(true);
//   const [error ,setError]=useState(null);

//   useEffect(() => {     //useffect run every time at every render
//     setTimeout(() => {
//       fetch('  http://localhost:8000/blogs')
//         .then(res => {
//           console.log(res);
//           if(!res.ok){
//           throw res.json('could not fetch the data for resource')
//           }
//           return res.json()
//         })
//         .then((data) => {
//           setBlogs(data)
//           setIsPending(false);
//           setError(null);
//         })
//         .catch(err=>{ 
//           setIsPending(false);
//           console.log(err.message); //it will display faild to fetch
//         } )
//     }, 1000);
 
//   }, [])

//   return (
//     <div className="home">
//     {error&& <div>{error  }</div>}
//       {isPending && <div>loading...</div>}
//       {blogs && <BlogList blogs={blogs} title="all blogs " />}
//     </div>
//   );
// }

// export default Home;





/////////////////////////////fetching data with useffect 

/////////////////////////////fetching data with useffect 
import { useState, useEffect } from 'react'
import BlogList from './BlogList';
const Home = () => {
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);
  const [error ,setError]=useState(null);

  useEffect(() => {     //useffect run every time at every render
    setTimeout(() => {
      fetch('  http://localhost:8000/blogs')
        .then(res => {
          console.log(res);
          if(!res.ok){
          throw res.json('could not fetch the data for resource')
          }
          return res.json()
        })
        .then((data) => {
          setBlogs(data)
          setIsPending(false);
          setError(null);
        })
        .catch(err=>{ 
          setIsPending(false);
          console.log(err.message); //it will display faild to fetch
        } )
    }, 1000);
 
  }, [])

  return (
    <div className="home">
    {error&& <div>{error  }</div>}
      {isPending && <div>loading...</div>}
      {blogs && <BlogList blogs={blogs} title="all blogs " />}
    </div>
  );
}

export default Home;