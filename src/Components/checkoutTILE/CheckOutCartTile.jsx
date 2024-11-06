import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Includes Popper.js

export default function CheckOutCartTile({ singleCartItem }) {

  return (
    <Fragment>
      <div className='container bg-white rounded p-1'>
        <div className="row mt-2 mb-1">

          {/* Image column */}
          <div className="col-12 col-md-4 mb-3">
            <img
              src={singleCartItem?.thumbnail}
              className="img-thumbnail rounded w-100 h-auto" // Ensures the image scales properly
              alt={singleCartItem?.title}
              style={{ objectFit: 'contain' }} // Ensures the image scales without stretching
            />
          </div>

          {/* Text column */}
          <div className="col-12 col-md-8">
            <p className='text-left fw-bold'>
              {singleCartItem?.title}
            </p>

            <div className="col-12 fw-bold">
              <span>x{singleCartItem?.quantity}</span>
            </div>

            <div className="col-12 fw-bold mt-3">
              <span>${singleCartItem?.totalPrice}</span>
            </div>
          </div>

        </div>
      </div>
    </Fragment>





  )
}
