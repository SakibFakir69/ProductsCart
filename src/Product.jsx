


import React from 'react'
import useProducts from './Hook/useProducts'
import ProductsPage from './Pages/ProductsPage';

function Product() {

    const data = useProducts();
    console.log(data,"data");
    



  return (
    <div>
        <div>
            <h1>Here you can buy anyhing</h1>
        </div>
        
        <div>
        {
            data.map((item, key)=> <ProductsPage item={item} key={item.id}/>)

        }

        </div>




    </div>
  )
}

export default Product