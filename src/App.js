import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   const products =[
     {name:'Photoshop', 
     price: '$34',
     para: 'Edit, composite, and create beautiful images, graphics, and art on desktop and iPad.',
     trial:'start free trial', 
     button: 'Buy now'
     },
     {name:'Illustrator', 
     price: '$34',
     para: 'Vector graphics and illustration.',
     trial:'start free trial', 
     button: 'Buy now'
     },
     {name:'Premiere Pro', 
     price: '$34',
     para: 'Edit and craft polished films and video.',
     trial:'start free trial', 
     button: 'Buy now'
     },
     {name:'Lightroom', 
     price: '$34',
     para: 'Edit and craft polished films and video.',
     trial:'start free trial', 
     button: 'Buy now'
     },

     ]
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          A am a React Person
        </p>
        <Counter></Counter>      
        
        <div>
        {products.map(pd => <Product product= {pd}></Product>)}
        
        {/* <Product product={products[0]} ></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        </div>
       
      
      </header>
    </div>
  );
}
function Counter(){

  const [count, setCount]=useState(0);
  const handleIncrease= ()=> {
    const newCount = count+1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>

    </div>
  )
}
function Product(props){
  const productStyle ={
    border: '2px solid gray',
    orderRadius: '5px',
    backgroundColor: 'lightgray',
    color: 'black',
    margin: '10px',
    height: '300px',
    width: '300px',
    float: 'left'
  }
  const {name, price,trial}=props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
       <h1>{price}</h1>
       <p>{trial}</p>
       
        <button>Buy now</button>
    </div>
    
  )
}

function Users(){
  const [users, setUsers]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setUsers(data));
  },[])

  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
        }
      </ul>
    </div>

  )
}

export default App;
