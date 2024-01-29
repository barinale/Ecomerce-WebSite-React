import React from 'react'

export const Produt = ({product}) => {
    const {name,price,imgUrl} = product;
  return (
    <div>
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
