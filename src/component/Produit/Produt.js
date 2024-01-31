import React from 'react'

export const Produt = ({item}) => {
    const {name,price,imgUrl} = item;
  return (
    <div className='border bg-slate-400'>
        <div>
            <img src={imgUrl} alt={name} />
        </div>
        <div>
            <h1>{name}</h1>
            <div >
                <h6>{price}</h6>
                <button>Add Me To cart</button>
            </div>
        </div>
    </div>
  )
}
