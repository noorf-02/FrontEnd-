import React, { useEffect, useState } from "react";

const url = "http://localhost:5000/getProducts";
function Products() {
  const [ api, setApi ] = useState([]);
  const [ products, setProducts ] = useState([])
  const [ category, setCategory ] = useState('all');
  async function fetchApi() {
    const data = await fetch(url);
    const res = await data.json();
    console.log(res);
    setApi(res);
    setProducts(res);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  function filterCategory(category){
    setCategory(category)
        if(category==="all"){
            setApi(products)
        }else{
            setApi(products.filter((p)=>p.category===category));
        }
  }

  return (
    <>
      <div className="wrapper text-center text-4xl font-bold my-4">
        Fetch API
      </div>
      <div className="wrapper filter-btns flex justify-center gap-3">
        <button
          onClick={()=>filterCategory("all")}
          className="bg-green-600 text-white font-medium py-1 px-3 rounded-2xl hover:bg-green-700"
        >
          All
        </button>
        <button
          onClick={()=>filterCategory("electronic")}
          className="bg-green-600 text-white font-medium py-1 px-3 rounded-2xl hover:bg-green-700"
        >
          Electronics
        </button>
        <button
          onClick={()=>filterCategory("stationary")}
          className="bg-green-600 text-white font-medium py-1 px-3 rounded-2xl hover:bg-green-700"
        >
          Stationary
        </button>
      </div>
      <div className="fetching wrapper flex flex-wrap justify-center p-5 gap-10">
        {api.map((myProduct) => {
          console.log(myProduct);
          return (
            <div
              className="card flex flex-col w-[340px] p-4 border-1 rounded-3xl border-gray-200 shadow-2xl gap-2"
              key={myProduct.id}
            >
              <img
                className="w-[120px] h-[120px] object-cover block m-auto"
                src={myProduct.image}
                alt={myProduct.title}
              />
              <h1 className="text-2xl font-bold">{myProduct.title}</h1>
              <p className="text-[16px] ">{myProduct.description}</p>
              <div className="price flex justify-between">
                <p className="bg-green-700 text-white font-medium text-[14x] px-3 py-1 rounded-2xl">
                  {myProduct.price}$
                </p>
                <p className="text-[13px] italic text-gray-800">
                  {myProduct.category}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
