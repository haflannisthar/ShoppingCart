import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { Atom } from "react-loading-indicators";


function ProductDetails() {

    const { id } = useParams()

    const { productDetails, setProductDetails, setLoading, loading, handleAddToCart, cartItems } = useContext(ShoppingCartContext)

    const navigate = useNavigate();





    async function fetchProductDetails() {
        try {
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const results = await response.json()

            if (results) {
                setProductDetails(results)
                setLoading(false)
                // setListOfProducts(results?.products)
            }



        } catch (error) {

            console.log(error);

        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, [id])

    if (loading) return (

        <div className="flex items-center justify-center h-screen">
            <Atom color="black" size="medium" text="Loading" textColor="" />
        </div>
    )


    return <div >
        <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
            <div className="grid items-center grid-cols-1  lg:grid-cols-5 gap-12 shadow-sm p-6">
                <div className="lg:col-span-3 w-full lg:sticky  top-0 text-center">
                    <div className="px-4 py-10 rounded-xl shadow-lg relative">
                        <img className="w-4/5 rounded object-cover" src={productDetails?.thumbnail} alt={productDetails?.title} />
                    </div>
                    <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                        {
                            productDetails?.images?.length ?
                                productDetails?.images.map(imageItem =>
                                    <div className="rounded-xl  p-4 shadow-md " key={imageItem}>
                                        <img src={imageItem} alt="product secondary image" className="w-24 cursor-pointer" />
                                    </div>
                                ) : null
                        }
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-extrabold text-[#333333]">{productDetails?.title}</h2>
                    <div className="flex flex-wrap gap-4 mt-4">
                        <p className="text-xl font-bold">{productDetails?.price}</p>
                    </div>
                    <button disabled={
                        productDetails ?
                            cartItems.findIndex(item => item.id === productDetails.id) > -1
                            : false
                    }
                        onClick={() => handleAddToCart(productDetails)}
                        className="disabled:opacity-65 mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded">Add to Cart</button>

                </div>
            </div>
        </div>
    </div>
}

export default ProductDetails;