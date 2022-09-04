import React from 'react'
import styles from "../utils/styles";
import {BsFillCartPlusFill,BsFillCartCheckFill} from 'react-icons/bs'
import { SHOP } from '../utils/actions';
function ProductCard({product,cart,dispatch}) {
  console.log(cart)

  const addToCart = (prod)=>{
    console.log(prod)
  }
  return (
    
    <div className="flex flex-col  w-1/5 p-8 rounded-xl border-lime-300 border-2 mt-6">
        <img src={product.thumbnail} alt="iphone" className="rounded-xl h-[100px]"/>
        <div className="flex flex-col py-3">
            <h3 className="font-bold">{product.title}</h3>
            <p className="font-thin text-sm">An apple mobile which is nothing like apple</p>
            <div className="flex gap-3 py-4">
            <p className={`${styles.pills}`}>{product.brand}</p>
            <p className={`${styles.pills}`}>{product.category}</p>
            </div>
            <div className="flex justify-between">
            <p>${product.price} - <span className="text-sm">{product.discountPercentage}% OFF</span></p>
            <p className="font-medium">Stock: {product.stock}</p>
            </div>
            <div className="flex justify-center mt-6">
              {
                cart.some((item)=>(item.id === product.id))? 
                <div className=" bg-lime-300 p-3 rounded-full h-[50px] w-[50px] cursor-pointer">
                  <BsFillCartCheckFill className="text-2xl mx-auto text-lime-900"/>
                {/* <BsFillCartDashFill/>
                </> */}
              </div>:
                <div className=" bg-lime-300 p-3 rounded-full h-[50px] w-[50px] cursor-pointer" 
                onClick={()=>dispatch({ type:SHOP.ADD_TO_CART,
                  payload:{
                    id:product.id,
                    title:product.title,
                    image:product.thumbnail,
                    qty:1,
                    price:product.price
                  } 
                })}>
                  <BsFillCartPlusFill className="text-2xl mx-auto text-lime-900"/>
                {/* <BsFillCartDashFill/>
                <BsFillCartCheckFill/> */}
              </div>
                
              }
            </div>
        </div>
    </div> 
  )
}

export default ProductCard