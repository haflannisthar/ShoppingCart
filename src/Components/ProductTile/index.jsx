import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

function ProductTile({ productItem }) {

  const navigate = useNavigate()

  const { handleAddToCart, cartItems, loading } = useContext(ShoppingCartContext);



  function handleNavigateToSingleProduct(getId) {
    navigate(`/product-details/${getId}`)

  }

  if (loading) return (

    <div className="flex items-center justify-center h-screen">
      <Atom color="#3147cc" size="medium" text="Loading" textColor="" />
    </div>
  )


  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img src={productItem?.thumbnail} alt={productItem?.title} className="object-cover w-full h-full transition-all
    duration-300 group-hover:scale-125"/>
      </div>
      <div className="flex items-start  justify-between mt-4 space-x-4">
        <div className="font-bold text-gray-900  sm:text-sm text-xs md:text-base">
          <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{productItem.title}</p>
        </div>
        <div >
          <p className="text-xs text-right font-bold text-gray-900  sm:text-sm md:text[14px] "> ${productItem.price}</p>
        </div>
      </div>
      <button onClick={() => handleNavigateToSingleProduct(productItem?.id)} className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">View Details</button>
      <button onClick={() => handleAddToCart(productItem)}
        disabled={cartItems.findIndex(item => item.id === productItem.id) > -1}
        className="disabled:opacity-65 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg">Add to Cart</button>
    </div>
  )
}

export default ProductTile;