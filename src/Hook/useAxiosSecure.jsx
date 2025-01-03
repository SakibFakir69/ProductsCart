


import React from 'react'
import axios from 'axios';
export const axiosSecure = axios.create({
    baseURL: 'https://dummyjson.com'
})
function useAxiosSecure() {

    return axiosSecure;
  
}

export default useAxiosSecure