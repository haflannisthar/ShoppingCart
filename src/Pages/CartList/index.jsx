import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../Components/CartTile";
import Lottie from 'lottie-react';
import EmptyCartAnimation from '../../assets/EmptyCartAnimation.json';
import { Atom } from "react-loading-indicators";


function CartList() {


  const { cartItems, CartLoading } = useContext(ShoppingCartContext)


  if (CartLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Atom color="#333" size="medium" text="Loading" textColor="" />
      </div>
    );
  }

  const navigate = useNavigate();

  if (!CartLoading) {
    <div className="flex items-center justify-center h-screen">
      <Atom color="#3147cc" size="medium" text="Loading" textColor="" />
    </div>
  }

  return (
    <div className="max-w-5xl mx-auto max-md:max-w-xl py-4">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        My Cart Page
      </h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="md:col-span-2 space-y-4">
          {cartItems?.length ? cartItems.map(cartItem => <CartTile singleCartItem={cartItem} />)
            :
            (
              <div className="flex justify-center items-center">
                {/* Wrapper with responsive width and height */}
                <div className="w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <Lottie animationData={EmptyCartAnimation} loop={true} />
                </div>
              </div>
            )
          }
        </div>
        <div className="bg-gray-100 rounded-sm p-4 h-max">
          <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
            Order Summary
          </h3>
          <ul className="text-gray-700 mt-4 space-y-2">
            <p className="flex flex-wrap justify-between text-end gap-4 text-sm font-bold">
              Subtotal{" "}
              <span className="ml-auto">
                ${cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}

              </span>
            </p>
            <p className="flex flex-wrap justify-between text-end gap-4 text-sm font-bold">
              Shipping{" "}
              <span className="ml-auto">
                $0.00
              </span>
            </p>

            <p className="flex flex-wrap justify-between text-end gap-4 text-sm font-bold">
              Discount{" "}
              <span className="ml-auto">
                $0.00
              </span>
            </p>

            <p className="flex flex-wrap justify-between text-end gap-4 text-sm font-bold">
              Total{" "}
              <span className="ml-auto">
                ${cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}

              </span>
            </p>

          </ul>
          <div className="mt-5 flex gap-2">
            <button onClick={() => navigate("/checkout")}
              disabled={cartItems.length === 0}
              className="disabled:opacity-60 text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate('/products')}
              className="text-sm px-4 py-3 bg-black text-white font-extrabold"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;