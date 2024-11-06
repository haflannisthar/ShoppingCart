
import React from 'react'
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmptyCartAnimation from '../../assets/EmptyCartAnimation.json';
import { ShoppingCartContext } from "../../Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaShippingFast, FaBoxOpen } from "react-icons/fa";
import CheckOutCartTile from "../../Components/checkoutTILE/CheckOutCartTile";
import { PiNumberCircleThreeThin } from "react-icons/pi";
import OrderShippedAnimation from '../../assets/order_confirm.json';
import Lottie from 'lottie-react';
import TopNavBar from '../topNavBar';






export default function Checkout() {

    const { cartItems, setCartItems, handleSetOrders } = useContext(ShoppingCartContext)

    const [isPaying, setIsPaying] = useState(false)




    const navigate = useNavigate()


    function startShopping(){
navigate('/products')
    }


    const handlePayment = () => {

        handleSetOrders(cartItems)

        setIsPaying(true); // Trigger the animation

        // Scroll to the top of the page
        window.scrollTo(0, 0);

      

        // Disable backdrop scrolling by adding a class that prevents scrolling
        document.body.style.overflow = 'hidden'; // Disables body scrolling

        setTimeout(() => {
            localStorage.removeItem('cartItems')
            setCartItems([]);
            navigate('/products');

            // Redirect after animation finishes (5 seconds example)
        }, 5000); // Adjust this time to match the animation duration

        setTimeout(() => {
            document.body.style.overflow = ''; // Re-enable body scrolling
        }, 5000);
    };


    return (
        <div className="container-fluid">
            <TopNavBar/>
             <div className="container-fluid py-4">
            <div className="container bg-light">
                <div className="row d-flex justify-content-between align-items-center position-relative">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <button className="fw-bold text-dark text-nowrap border-0" onClick={() => navigate('/products')}>E-COMMERCE</button>
                    </div>

                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-wrap mt-1 mt-md-1 mb-1 mb-sm-1">
                        <div className="d-flex align-items-center">
                            <span className="ms-2 pe-2 fw-bold">Cart</span>
                            <IoCheckmarkCircleOutline color="blue" />
                        </div>
                        <hr className="w-10 mx-3 ps-1 my-0" style={{ border: 'none', borderTop: '2px solid gray' }} />

                        <div className="d-flex align-items-center">
                            <span className="ms-2 ps-2 pe-2 fw-bold">Review</span>
                            <IoCheckmarkCircleOutline color="blue" />
                            <div className="border-end mx-2"></div>
                        </div>
                        <hr className="w-10 mx-2 my-0" style={{ border: 'none', borderTop: '2px solid gray' }} />

                        <div className="d-flex align-items-center">
                            <span className=" ps-4 pe-2 fw-bold">Checkout</span>
                            <PiNumberCircleThreeThin color="blue" />
                        </div>
                    </div>
                </div>
                <hr />



                <div className="row m-2 position-relative">
                    <div className="col-12 col-md-6 text-center text-md-start">
                        <h2 className="text-dark text-nowrap">Checkout</h2>
                        <div className="row">
                            <div className="col-12 text-start mt-2">
                                <h6 className='fw-bold'>Shipping info</h6>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-12 col-md-8 mt-2">
                                    <ul className="nav nav-pills nav-fill" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link active d-flex align-items-center"
                                                id="shipping-tab"
                                                data-bs-toggle="pill"
                                                href="#shippingContactDetails"
                                                role="tab"
                                                aria-controls="shippingContactDetails"
                                                aria-selected="true"
                                            >
                                                <FaShippingFast className="me-2" />
                                                <span>Shipping</span>
                                            </a>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <a
                                                className="nav-link d-flex align-items-center"
                                                id="pickup-tab"
                                                data-bs-toggle="pill"
                                                href="#PickUpContactDetails"
                                                role="tab"
                                                aria-controls="PickUpContactDetails"
                                                aria-selected="false"
                                            >
                                                <FaBoxOpen className="me-2" />
                                                <span>Pickup</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tab-content mt-3" id="myTabContent">
                                {/* Shipping Form */}
                                <div
                                    className="tab-pane fade show active"
                                    id="shippingContactDetails"
                                    role="tabpanel"
                                    aria-labelledby="shipping-tab"
                                >
                                    <div className="row">
                                        <div className="col-12 col-md-8">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="FullName" className="form-label fw-bold">
                                                    Full Name <span className="text-danger"> *</span>
                                                </label>
                                                <input type="text" className="form-control" id="FullName" placeholder="Enter full name" />
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-12 col-md-8">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="emailAddress" className="form-label fw-bold">
                                                    Email <span className="text-danger"> *</span>
                                                </label>
                                                <input type="email" className="form-control" id="emailAddress" placeholder="Enter e-mail address" />
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-12 col-md-8">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="contactNumber" className="form-label fw-bold">
                                                    Contact Number <span className="text-danger"> *</span>
                                                </label>
                                                <input type="number" className="form-control" id="contactNumber" placeholder="Enter contact number" />
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-12 col-md-8 text-start">
                                            <label htmlFor="inputAddress2" className="form-label fw-bold">
                                                Address <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Enter address" />
                                        </div>
                                        <div className="col-12 col-md-8 mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    I have read and agree to the terms and conditions
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pickup Form */}
                                <div
                                    className="tab-pane fade"
                                    id="PickUpContactDetails"
                                    role="tabpanel"
                                    aria-labelledby="pickup-tab"
                                >
                                    <div className="row mt-3">
                                        <div className="col-12 col-md-8">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="PPFullName" className="form-label fw-bold">
                                                    Pickup Person Full Name <span className="text-danger"> *</span>
                                                </label>
                                                <input type="text" className="form-control" id="PPFullName" placeholder="Enter full name" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="PPContactNumber" className="form-label fw-bold">
                                                    Contact Number <span className="text-danger"> *</span>
                                                </label>
                                                <input type="text" className="form-control" id="PPContactNumber" placeholder="Enter contact number" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <div className="mb-3 text-start">
                                                <label htmlFor="PPDate" className="form-label fw-bold">
                                                    Pickup Date <span className="text-danger"> *</span>
                                                </label>
                                                <input type="date" className="form-control" id="PPDate" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-8 mt-3">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label" htmlFor="gridCheck">
                                                    I have read and agree to the terms and conditions
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column for Cart Items */}
                    <div className="col-12 col-md-6 mt-5">
                        <h2 className="text-dark text-nowrap"></h2>
                        <div className="d-flex flex-column justify-content-start align-items-start">
                            <div className="col-12 text-start">
                                {cartItems?.length!=0?<h6 className='fw-bold'>Order Items</h6>:null}
                            </div>
                            <div className="mt-3">
                                {/* Render cart items */}
                                {cartItems?.length ? cartItems.map(cartItem => (
                                    <CheckOutCartTile key={cartItem.id} singleCartItem={cartItem} />
                                )) : (
                                        <div className="flex justify-center items-center">
                                            {/* Wrapper with responsive width and height */}
                                            <div className="w-40 h-40 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                                <Lottie animationData={EmptyCartAnimation} loop={true} />
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                       
                      

                        <div className="row">
                         {
                            cartItems?.length===0 ?(
                                <div className="row">
                                    <div className="col-2"></div>
                                <div className="col-8 d-flex mt-3 justify-content-center">
                                    <button type="button" onClick={startShopping} className="btn btn-outline-secondary w-100">Let's Shop</button>
                                </div>
                                <div className="col-2"></div>
                                </div>
                                
                            ) :(

                                <div className="row">
                                      <div className="col-12 col-md-6 mt-5">
                                        
                                      </div>
                                <div className="row mt-4">
                              <div className="col-12 d-flex justify-content-between ">
                                  <p className="text-start mb-0">Subtotal</p>
                                  <p className="text-end mb-0">
                                      ${cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}
                                  </p>
                              </div>
                              <div className="col-12 d-flex justify-content-between ">
                                  <p className="text-start mb-0">Shipping</p>
                                  <p className="text-end mb-0">
                                      $0.00
                                  </p>
                              </div>
                              <div className="col-12 d-flex justify-content-between ">
                                  <p className="text-start mb-0">Discount</p>
                                  <p className="text-end mb-0">
                                      $0.00
                                  </p>
                              </div>
                              <div className="col-12 d-flex justify-content-between fw-bold">
                                  <p className="text-start mb-0">Total</p>
                                  <p className="text-end mb-0">
                                      ${cartItems.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2)}
                                  </p>
                              </div>
                          </div>
  
                          <div className="row">
                              <div className="col-2"></div>
                              <div className="col-8 d-flex mt-3 justify-content-center">
                                  <button type="button" onClick={handlePayment} className="btn btn-outline-secondary w-100">PAY</button>
                              </div>
                              <div className="col-2"></div>
                          </div>
                          </div>
                            )
                         }
                  

                           
                        </div>




                    </div>

                </div>


            </div>
            <div>
                {isPaying && (
                    <div className="lottie-overlay">
                        <div className="lottie-container"
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dim background
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 9999,
                            }}
                        >
                            <Lottie animationData={OrderShippedAnimation} loop={true} />
                        </div>
                    </div>
                )}
            </div>
        </div>
        </div>
       



    )
}
