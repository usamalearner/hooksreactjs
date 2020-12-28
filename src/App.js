import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [arr,setArr] = useState(['car'])

  // const handleClick=()=>{

  //   setArr([...arr,'bike','truck'])
  // }

  // const [obj,setObj] = useState({
  //   name:'syed usama ali',
  //   email:'syedusama@gmail.com'
  // })
  // const handleClick=()=>{
  //   setObj({
  //     ...obj,
  //     email:'syedusamaali@gmail.com',
  //     school:'gps'
  //   })
  //   console.log(obj)
  // }
  const [name,setName] = useState('usama')
  useEffect(()=>{
    console.log('i will run pn evry render')
  })

  useEffect(()=>{
    console.log('i will run only on first render')

    // for api call
  },[])

  useEffect(()=>{
    console.log('i will run everytime when name update ')
  },[name])

  useEffect(()=>{
    return()=>{
      console.log('when unmount')
    }
  })
  return (
   
    <div>
      
      {/* {arr.map((v,i)=>{return<ul key={i}>
        {v}
      </ul>})} */}
      {/* <button onClick={()=>console.log("hi")}>update</button> */}
      {/* <button onClick={()=>setArr([...arr,'bike'])}>update</button> */}
      {/* <button onClick={handleClick}>update</button> */}

      {/* {obj.name}
      {obj.email}
      <button onClick={handleClick}>update</button> */}

      <h1>{name}</h1>
      <button onClick={()=>setName('ali')}>update</button>
    </div>
  );
}

export default App;
