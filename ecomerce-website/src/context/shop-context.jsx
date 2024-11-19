import React, {createContext,useState} from 'react' 
import {PRODUCTS} from '../products'

export const ShopContext= createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for (let i=1;i<PRODUCTS.letngth+1;i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [cartItem,setCartItem]=useState(getDefaultCart);

    const addToCart=(ietmId)=>{
        setCartItem((prev)=>({...prev, [ietmId]:prev[ietmId]+1}));
    };

    const removeFromCart=(ietmId)=>{
        setCartItem((prev)=>({...prev, [ietmId]:prev[ietmId]-1}));
    };
    const contextValue= {cartItem,addToCart,removeFromCart}

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} 
        </ShopContext.Provider>
    )
}

export default ShopContextProvider