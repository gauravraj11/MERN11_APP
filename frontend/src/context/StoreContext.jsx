import React, { createContext, useState } from 'react'


export const store = createContext();

export default function StoreContext({children}) {

    const[count, setCount]= useState(11);
    const[name, setName]= useState("GFG");
    const[arr, setArr]= useState([2,7,9]);

    console.log("StoreContext");
    

    const obj ={
        count,
        setCount,
        name,
        setName,
        arr,
        setArr
    }

  return (

    <store.Provider value={obj}>
      {children}
    </store.Provider>

  )
}


