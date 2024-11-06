// create context
// provide the context
// wrap the context in root
// consume it using useContext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ShoppingCartContext = createContext(null)

function ShoppingCartProvider({ children }) {


    const [loading, setLoading] = useState(false);
    const [CartLoading, setCartLoading] = useState(false);

    const [listOfProducts, setListOfProducts] = useState([])
    const [productDetails, setProductDetails] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();


    function handleSetOrders(getOrder) {
        console.log(getOrder);

        let cpyExistigOrders = [...orders]

        cpyExistigOrders.push(
            getOrder
        )

        localStorage.setItem('orders', JSON.stringify(cpyExistigOrders))
        setOrders(cpyExistigOrders);



    }

    useEffect(() => {
        console.log('Updated orders:', orders);
    }, [orders]);


    function handleAddToCart(getProductDetails) {

        let cpyExistingCartItem = [...cartItems]

        const findIndexOfCurrentItem = cpyExistingCartItem.findIndex(cartItem => cartItem.id === getProductDetails.id);


        if (findIndexOfCurrentItem === -1) {
            cpyExistingCartItem.push({
                ...getProductDetails,
                quantity: 1,
                totalPrice: getProductDetails?.price
            })
        } else {
            cpyExistingCartItem[findIndexOfCurrentItem] = {
                ...cpyExistingCartItem[findIndexOfCurrentItem],
                quantity: cpyExistingCartItem[findIndexOfCurrentItem].quantity + 1,
                totalPrice: (cpyExistingCartItem[findIndexOfCurrentItem].quantity + 1) * (cpyExistingCartItem[findIndexOfCurrentItem].price)
            }
        }

        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItem))
        setCartItems(cpyExistingCartItem)

        navigate('/cart')
        setCartLoading(false)
        console.log(cartItems, "cart items");


    }

    function handleRemoveFromCart(getProductDetails, isCompleteRemoval) {
        let cpyExistingCartItem = [...cartItems]
        const findIndexOfCurrentItem = cpyExistingCartItem.findIndex(cartItem => cartItem.id === getProductDetails.id);

        if (isCompleteRemoval) {
            cpyExistingCartItem.splice(findIndexOfCurrentItem, 1)
        } else {
            cpyExistingCartItem[findIndexOfCurrentItem] = {
                ...cpyExistingCartItem[findIndexOfCurrentItem],
                quantity: (cpyExistingCartItem[findIndexOfCurrentItem].quantity - 1),
                totalPrice: (cpyExistingCartItem[findIndexOfCurrentItem].quantity - 1) * (cpyExistingCartItem[findIndexOfCurrentItem].price)
            }
        }
        localStorage.setItem('cartItems', JSON.stringify(cpyExistingCartItem))
        setCartItems(cpyExistingCartItem)

    }


    async function fetchListOfProducts() {

        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/products');
            const results = await response.json()

            if (results && results?.products) {
                setLoading(false)
                setListOfProducts(results?.products)
            }



        } catch (error) {

            console.log(error);

        }

    }


    useEffect(() => {
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem('cartItems')) || [])
    }, [])



    return (
        <ShoppingCartContext.Provider value={{ listOfProducts, loading, setLoading, CartLoading, productDetails, setProductDetails, handleAddToCart, cartItems, handleRemoveFromCart, setCartItems, handleSetOrders }}>{children}</ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;