


import React from 'react'
import useProducts from './Hook/useProducts'
import ProductsPage from './Pages/ProductsPage';
import useCart from './Hook/useCart';

function Product() {

    const {isLoading,isError,Products} = useCart();
    console.log(Products);


    const data =useProducts();
    console.log(data,"dff")

    if(isLoading)
    {
        return <p>Loading...</p>
    }
    if(isError)
    {
        return <p>{isError}</p>
    }

  



  return (
    <div>
        <div>
            <h1>Here you can buy anyhing</h1>
        </div>


        <div className='grid md:grid-cols-3 gap-4 px-4'>
        {
            data.map((item, key)=> <ProductsPage item={item} key={item.id}/>)

        }

        </div>




    </div>
  )
}

export default Product