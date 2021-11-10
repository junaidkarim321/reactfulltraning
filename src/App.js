
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>this is my first component</h1>
//       </div>
//     </div>
//   );
// }

// export default App;


// this how we use dynamic values in react
// import './App.css';
//  const title ='this is method that how to put dynamic value'
//  const likes=50;
// function App() {
//   return (
//     <div className="App">
//       <div className="content">
//         <h1>{title}</h1>
//         <p>liked{likes} times</p>



//         <p>{10}</p>
//         <p>{"hello, world"}</p>
//         <p>{[1,2,3,4]}</p>
//         <p>{Math.random()*10}</p>
//       </div>
//     </div> 
//   );
// }

// export default App;



//////////////////more than one components and style them through index.css
// import Navbar from './Navbar'; 
// import Home from './Home'  
// function App() {
//   return (
//     <div className="App">
//     <Navbar/>
//       <div className="content">
//       <Home/> 
//       </div>
//     </div> 
//   );
// }

// export default App;


///////////////add  click function 
// import Navbar from './Navbar'; 
// import Home from './Home'  
// function App() {
//    const handeClick =()=>{
//      document.write("hellow  world")
//    }
//   return (
//     <div className="App">
//     <Navbar/>
//       <div className="content">
//       <Home/> 
//       <button onClick={handeClick}>click me</button>
//       </div>
//     </div>  
//   );
// }

// export default App;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// state change // half work is done in  home section
import Home from './Home'  
function App() {
   
  return (
    <div className="App">
      <div className="content">
      <Home/>
      </div>
    </div>  
  );
}

export default App;




