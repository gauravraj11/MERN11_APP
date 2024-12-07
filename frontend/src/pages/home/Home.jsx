import React, { useContext } from 'react'
import './Home.css'
import { store } from '../../context/StoreContext';


export default function Home() {

    const {count, setCount, name, setName, arr,setArr} =  useContext(store);
    console.log("home called");
    
    
    function Increment(){
       setCount(count+5)
    }
  return (
    <div id='home'>
      Home.....{count}.....{name}......{arr}
      <button onClick={Increment}>Click</button>

    </div>
  )
}
