'use client ';

import {
  CloseIcon,
  DeleteIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
} from '@/lib/icons/Icons';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import { useEffect } from 'react';

const playFairDisplay = Playfair_Display({
  weight: ['400', '600', '800', '900'],
  subsets: ['latin'],
});

interface CartModalProps {
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
}

const cartItems = true;
const CartModal: React.FC<CartModalProps> = ({ setCartOpen, isCartOpen }) => {
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-35 z-40"
          onClick={() => setCartOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-yellow-200 px-10 py-6 w-full md:w-1/2 h-full z-50 flex flex-col gap-6 `}
      >
        <div className="flex justify-between items-center">
          <h2
            className={`${playFairDisplay.className} lowercase font-bold text-3xl`}
          >
            My Cart
          </h2>
          <div
            className="w-6 h-6 cursor-pointer"
            onClick={() => setCartOpen(false)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className="h-screen flex flex-col justify-between text-base lg:text-xl">
          {!cartItems ? (
            <div className="flex flex-col items-center gap-6 justify-center h-full">
              <p className="font-semibold text-xl lg:text-2xl uppercase">
                Your cart is empty
              </p>
              <div className="mt-10  text-center font-light">
                Start exploring our products and fill up your basket with
                mouthwatering delights
              </div>
              <div className="w-10 h-10">
                <ShoppingCartIcon />
              </div>
            </div>
          ) : (
            <div className="max-h-96 flex flex-col gap-6 overflow-y-scroll p-6 md:p-3 lg:p-6 ">
              <div className="flex justify-between items-center gap-x-6">
                <div className="border-[0.5px] border-slate-800 p-2">
                  <Image
                    src="/m-2.jpeg"
                    alt=""
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="text-xl font-bold">
                    <p>Poached Pears</p>
                    <p className="text-sm font-light">September 2019</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 cursor-pointer">
                      <PlusIcon />
                    </div>
                    <p>1</p>
                    <div className="w-6 h-6 cursor-pointer">
                      <MinusIcon />
                    </div>
                  </div>
                  <p className="font-bold">$99.00</p>
                </div>
                <div className="w-6 h-6 cursor-pointer">
                  <DeleteIcon />
                </div>
              </div>
            </div>
          )}
          <div className="border-t border-slate-800 p-3 flex flex-col justify-around gap-1">
            <div className="flex justify-between">
              <p className="font-bold uppercase">Subtotal</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold uppercase">Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between mt-6 border-dotted border-t-[1px] border-slate-800">
              <p className="font-bold uppercase">Total</p>
              <p>$0.00</p>
            </div>
          </div>
        </div>
        <button className="uppercase border border-slate-800 py-2 font-bold rounded-full cursor-pointer hover:bg-yellow-50 hover:border-yellow-300">
          checkout
        </button>
      </div>
    </>
  );
};

export default CartModal;
