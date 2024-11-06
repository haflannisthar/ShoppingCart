import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../Context";
import ProductTile from "../../Components/ProductTile";
import { Atom } from "react-loading-indicators";
import TopNavBar from "../topNavBar";



function ProductList() {


    const { listOfProducts, loading } = useContext(ShoppingCartContext)



    if (loading) return (

        <div className="flex items-center justify-center h-screen">
            <Atom color="#3147cc" size="medium" text="Loading" textColor="" />
        </div>
    )




    return (
        <div className="container-fluid">
      <TopNavBar/>
    <section className="py-8 bg-white sm:py-10 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">Our Featured Products</h2>
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10  lg:mt-16 lg:gap-8 lg:grid-cols-4">
                {
                    listOfProducts && listOfProducts?.length > 0 ?
                        listOfProducts.map(productItem => <ProductTile productItem={productItem} />) :
                        <div className="py-12 bg-white sm:py-16 lg:py-20">
                            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                                <div className="max-w-md mx-auto text-center">
                                    <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">No Products Found</h2>
                                </div>
                            </div>
                        </div>

                }
            </div>

        </div>

    </section>
        </div>
        
    )
}

export default ProductList;