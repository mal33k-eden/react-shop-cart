import React, { useEffect, useState } from 'react'
import {AiFillMinusCircle} from "react-icons/ai"
import {MdAddCircle} from "react-icons/md"
import { SHOP } from '../utils/actions'
function CartItem({item, dispatch}) {
  
  const updateQTY = (id, newQty)=>{
    dispatch({
      type:SHOP.UPDATE_ITEM_QTY,
      payload:{
        id:id,
        qty:newQty
      }
    })
  }
  return (
    <div className="flex p-3 border border-lime-500 rounded-lg ">
        <div className="flex w-3/4">
            <img src={item.image} alt="iphone" className="rounded-lg w-1/2"/>
            <div className="flex flex-col ml-2 text-sm">
            <h2>{item.title}</h2>
            <h2>${item.price}</h2>
            </div>
        </div>
        <div className="flex w-1/2 text-xl justify-center self-center gap-4">
            <MdAddCircle className="cursor-pointer" onClick={()=>updateQTY(item.id, item.qty + 1)}/>
             <span className=" align-center text-lime-500">{item.qty}</span>
            <AiFillMinusCircle className="cursor-pointer" onClick={()=>updateQTY(item.id, item.qty - 1)}/>
        </div>
    </div>
  )
}

export default CartItem