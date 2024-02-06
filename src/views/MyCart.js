import React from 'react'
import { useSelector } from 'react-redux'
import { Produt } from '../component/Produit/Produt'
export const MyCart = () => {
  const {List,Total} = useSelector(state=>state.storeReducer)
  return (
    <div className='bg-slate-500'>
        {List.map((item)=>{
          return <Produt item={item} key={item.id}/>
        })}
        <div className='bg-red-400'>
          <h1>Total : {Total}</h1>
        </div>
    </div>
  )
}
