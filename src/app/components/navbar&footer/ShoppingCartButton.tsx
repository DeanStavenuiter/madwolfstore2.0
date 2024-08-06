"use client";

import { getCart, ShoppingCart } from "@/app/crud/cart";
import { useEffect, useState } from "react";
import Cart from "./Cart";

export interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

const ShoppingCartButton = ({ cart }: ShoppingCartButtonProps) => {
  const [showCart, setShowCart] = useState<boolean | null>(null);

  const [cartState, setCartState] = useState<ShoppingCart | null>(null);

  const updateCart = async () => {
    const updatedCart = await getCart();
    setCartState(updatedCart);
  };

  useEffect(() => {
    setCartState(cart);
  }, [cart]);

  useEffect(() => {
    if (showCart) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showCart]);

  const openCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  return (
    <>
      <div className="relative cursor-pointer" onClick={openCart}>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="absolute flex bottom-2 w-[18px] h-[18px] left-3 right-0">
            <span className="text-white rounded-[100%] w-full h-full indicator-item bg-[#3fa24f] flex justify-center items-center">
              {cartState?.size || 0}
            </span>
          </div>
        </div>
      </div>
      <Cart
        showCart={showCart}
        cart={cartState}
        setShowCart={setShowCart}
        updateCart={updateCart}
      />
    </>
  );
};

export default ShoppingCartButton;
