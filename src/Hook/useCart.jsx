






import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from './useAxiosSecure'

function useCart() {
  const axiosSecure = useAxiosSecure();
  /// loading , error , data 

  const {isLoading, isError , data:Products} = useQuery({
    // key use for caching
    queryKey:['products'],
    queryFn: async ()=> await axiosSecure.get('/products'),
    staleTime: 10000

    // data fetch 

  })
 


  return {isLoading,isError,Products};
}

export default useCart