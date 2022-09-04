import { SHOP } from "../utils/actions";

export const shopReducer = (state, action)=>{
    switch (action.type) {
        case SHOP.ADD_PRODUCTS:
            return {...state, products:action.payload}
        case SHOP.ADD_TO_CART:
            return {...state, cart:[{...action.payload}, ...state.cart]}
        case SHOP.UPDATE_ITEM_QTY:
            return {...state, cart:state.cart.filter((item)=>item.id == action.payload.id ? item.qty=action.payload.qty:item.qty )}
        default:
            return state;
    }

}
 