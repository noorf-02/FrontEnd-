import React, { useEffect, useState } from 'react'

const url="http://localhost:5000/getProducts"
function Products() {
    const [ api, setApi ] = useState([]);
     async function fetchApi(){
        const data = await fetch(url);
        const res = await data.json();
        console.log(res);
        setApi(res);
    }

    useEffect(()=>{
        fetchApi();
    },[])

  return (
    <>
    <div className='wrapper text-center text-4xl font-bold my-4'>
      Fetch API
    </div>
    <div className="fetching wrapper">

    </div>
    </>
  )
}

export default Products
