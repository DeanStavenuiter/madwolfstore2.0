import { formatPrice } from "@/app/library/functions/formatPrice";
import { ShoppingCartButtonProps } from "./ShoppingCartButton";
import Image from "next/image";
import { BorderBeam } from "@/components/magicui/border-beam";
import { deleteCartItem } from "@/app/crud/cart";

interface CartProps extends ShoppingCartButtonProps {
  showCart: boolean | null;
  setShowCart: (showCart: boolean) => void;
  updateCart: () => Promise<void>;
}

const Cart: React.FC<CartProps> = ({
  cart,
  showCart,
  setShowCart,
  updateCart,
}) => {
  const handleDelete = async (itemId: string) => {
    try {
      await deleteCartItem(itemId);
      await updateCart();
    } catch (error) {
      console.error("Error deleting item", error);
    }
  };

  return (
    <>
      <div
        className={`bg-[#171717] absolute z-30 top-[-35px] bottom-0 right-0 flex flex-col justify-between h-screen w-full max-w-[400px] p-[25px] ${
          showCart === null ? "hidden" : showCart ? "slide-in-right" : "slide-out-right"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex flex-row w-full items-center justify-between">
            <h2 className="text-[23px]">Your cart</h2>
            <button onClick={() => setShowCart(false)} className="">
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <span className="text-xl font-bold">{cart?.size || 0} Items</span>
          {cart?.items.map((item, index) => {
            return (
              <div key={index}>
                <div className="flex h-[95px] my-1 w-full border-b-[0.5px] py-2">
                  <div className="flex flex-row gap-2 w-full">
                    <Image src={""} alt={""} width={65} height={80} />
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-col w-full">
                        <span>Madwolf</span>
                        <span>{item.product.name}</span>
                        <span>Size: {item.size}</span>
                      </div>
                      <div className="flex flex-col w-full items-end gap-2">
                        <span>{formatPrice(item.product.price)}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#e8eaed"
                          className="hover:cursor-pointer hover:rounded-[5px] btn"
                          onClick={() => handleDelete(item.id)}
                        >
                          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2"></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-info">
            Subtotal: {formatPrice(cart?.subtotal || 0)}
          </span>
          <span className="text-[13px]">
            Shipping costs and discount codes are calculated at checkout.
          </span>
          <button className="w-[350px] btn bg-black flex h-[42px] justify-center items-center relative p-2 rounded-[5px]">
            <BorderBeam
              size={100}
              className="after:[offset-anchor:calc(var(--anchor)*1%)_80%]"
            />
            <span className="uppercase">checkout</span>
          </button>
        </div>
      </div>
      <div
        className={`${
          showCart ? "fixed" : "hidden"
        } inset-0 z-20 bg-black bg-opacity-60`}
        onClick={() => setShowCart(false)}
      ></div>
    </>
  );
};

export default Cart;
