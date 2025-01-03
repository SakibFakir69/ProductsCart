


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

function useProducts() {

    const [ Products , serProducts ] = useState([]);

    const axiosSecure = useAxiosSecure(); // this is base url 

    const [ loading , setloading ] = useState(true); // loading test
    const [ Error , setError ] = useState(null);


    useEffect(()=>{

        const data =async ()=>{

        
       
            

            const response = await axiosSecure.get('/products')
            if(response.status===200)
            {

                serProducts(response.data.products
                );
            
            }
       
            
            
        }
        data() ; /// call data 

    },[])

    // now return products 


    return Products /// get get arrat not object


  


  
}

export default useProducts