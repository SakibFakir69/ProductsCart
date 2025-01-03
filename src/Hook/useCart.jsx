


import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function useCart() {


    const axiosSecure = useAxiosSecure();

    const {data:cart= [],refetch} = useQuery({

        queryKey:['data'],
        queryFn: async ()=> await axiosSecure.get('/products')

    })



  return [cart , refetch]
}

export default useCart