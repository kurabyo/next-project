
'use client'
import React, { useState, useContext, useEffect, createContext } from "react";
import { Toast } from "react-hot-toast";

const Context = createContext()

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantities, setTotalQuantities] = useState();
    const [qty, setQty] = useState(1);

    const incQty = () => {
        setQty((prev) => prev + 1)
    }

    const decQty = () => {
        setQty((prev) => {
            if ( prev - 1 < 1) return 1

            return prev
        })
    }

    return (
        <Context.Provider value={{
            showCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext =() => useContext(Context)