import React, { useState } from 'react'
import { Add,Remove } from '../../Redux/storeManager';
import { useDispatch, useSelector } from 'react-redux';
export const Produt = ({item}) => {
    const {id,name,price,imgUrl} = item;
    const value = useSelector(state=>state.storeReducer.List)
    const dipstach = useDispatch();
    const [productInCart,setProductInCart] = useState(false)
    const handAdding = ()=>{
        dipstach(Add(item))
        setProductInCart(true)
    }
    const handRemove = (item)=>{
        dipstach(Remove(item))
        setProductInCart(false)
    }

    const CheckProductInList = ()=>{

        for(let i =0;i<value.length && !productInCart;i++){
            if(value[i].id === id ){
                setProductInCart(true)
                break;
            }
        }        
    }
    CheckProductInList()
  return (
    <div className='border bg-slate-400'>
        <div>
            <img src={imgUrl} alt={name} />
        </div>
        <div>
            <h1>{name}</h1>
            <div >
                <h6>{price}</h6>
                {!productInCart ?<button className="bg-red-500" onClick={()=>handAdding({item})}>Add Me To cart</button>:<button onClick={()=>handRemove({item})}>Remove</button>}



            </div>
        </div>
    </div>
  )
}
