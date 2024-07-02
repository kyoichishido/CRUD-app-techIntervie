import { useState } from "react"
import React from 'react'



function CreateBook({ setUpdateFlag }) {
  const [data, setData] = useState({
    name:'',
    price:'',
  })

  //change handle function--
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setData((prev) => {
      return {...prev, [name]: value}
    });
  } 

  console.log(data);


  //Submit Logic
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(data);
    try {
      const response = await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        console.log('Successfully created');
        setUpdateFlag(true)
        
      }
      else {
        console.log('Oops! failed to create', response.statusText);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <form  className=' rounded-lg flex flex-col justify-between items-center p-4 gap-3 bg-purple-300'>
      <input className='name p-2 rounded-lg h-12 w-full' onChange={handleChange} name="name" type="text" placeholder='Name of the book'  />
      <input className='price p-2 rounded-lg h-12 w-full' onChange={handleChange}  name="price" type="text" placeholder='Price of the book' id="" />
      <input className='submit px-3 py-1 rounded-lg flex items-center justify-center cursor-pointer bg-zinc-800 text-zinc-300' onClick={handleSubmit} type="submit" name="Submit" value="submit" id="" />
    </form>
  )
}

export default CreateBook