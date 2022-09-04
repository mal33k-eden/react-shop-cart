import { useEffect,useReducer,useState } from "react";
import CartItem from "./components/CartItem";
import ProductCard from "./components/ProductCard";
import {shopReducer} from "./reducers/shopReducer";
import { SHOP } from "./utils/actions";

function App() {
  const [state, dispatch] = useReducer(shopReducer,{
    products:[],cart:[]
  })
  const [total, setTotal] = useState(0)
 
  const fetchProducts = ()=>{
    fetch('https://dummyjson.com/products').then((response)=>response.json()).then((data)=>{
       
      dispatch({
        type:SHOP.ADD_PRODUCTS,
        payload:data.products
      })
    })
  }
  useEffect(()=>{
    fetchProducts()
    var t = state.cart.reduce((total,i)=> total + Number(i.price) * i.qty,0)
    setTotal(t)
  },[state.cart])
  return (
    <div className="m-10">
      <div className="text-center py-3">
        <h3 className=" font-black text-xl">ZION SHOPPING CENTER</h3>
      </div>
      <div className="grid grid-cols-5 gap-2 ">
        <div className="col-span-4 ">
          <h3 className="font-black text-xl text-center">Products</h3>
          <div className="flex gap-6 flex-wrap">
            { 
              state.products.map((product, index)=>(
                <ProductCard key={product.id} product={product} dispatch={dispatch} cart={state.cart} /> 
              ))
            }
          </div> 
        </div>
        <div className="col-span-1">
          <h3 className="font-black text-xl text-center my-3">Cart</h3>
          <h3 className="font-black text-lg my-3">Sub-Total: ${total}</h3>
          <div className="flex flex-col gap-3  bg-lime-100 rounded-xl p-3">
            {
              state.cart.map((item, index)=>(
                <CartItem key={item.id} item={item} dispatch={dispatch}/> 
              ))
            } 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
