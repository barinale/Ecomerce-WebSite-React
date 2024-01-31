import{ useEffect, useState } from 'react'
import axios from 'axios';
export const useFetch = () => {
    const [data,setData]= useState([]);
    const [error,setError]=useState('');
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:4000/products').then((response)=>{
            setData(response.data);
            setError('')
            setLoading(false)   
             
     
        }).catch(error=>{
            setLoading(false)
            setError(error)
        })
    },[])
 return {data,error,loading}
}
