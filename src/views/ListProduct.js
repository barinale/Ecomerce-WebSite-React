import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { Produt } from '../component/Produit/Produt';

export const ListProduct = () => {
    
    const {data,error,loading} =useFetch();
   //  console.log(error)
   //  console.log("tesing")
 if(loading){
    return <>DAta is Loading Please Wait  AmMONE T FOR tThat To LOAD</>
 }
 if(error)
    return <>404 Server Not Working please try Again  {error.message}</>
//  console.log(data)
    return (
    <div className='flex flex-wrap gap-4'>
        {data.map((item,index)=>{
            return <Produt item={item} key={index}/>
        })}
    </div>
  )
}
