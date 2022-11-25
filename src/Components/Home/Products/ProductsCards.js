import React from 'react';
import BookingModal from './BookingModal';
import { MdVerified } from 'react-icons/md';
import Gallery from '../../Gallery/Gallery';



const ProductsCards = ({ product }) => {
    const { productImage, sellerName, productName, purchaseYear, productCondition, description, originalPrice, sellingPrice } = product;
    console.log(product);

    return (

        <div className="card card-compact my-5 w-96 bg-base-100 shadow-xl">
            <figure>
                <Gallery
                    img={productImage}

                ></Gallery> </figure>
            <div className="card-body gap-0">
                <h2 className="card-title">{productName} </h2>
                <p><b>Location: { }</b></p>
                <p><b>Selling Price: ${sellingPrice}</b></p>
                <p><b>Original Price: ${originalPrice}</b></p>
                <p><b>Purchase Year: {purchaseYear}</b></p>
                <div className='flex justify-start items-center gap-1'>
                    <MdVerified></MdVerified><p><b>{sellerName}</b></p>
                </div>

                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal" className='btn bg-amber-900 text-white'> Buy Now</label>
                    <BookingModal></BookingModal>

                </div>
            </div>
        </div>
    );
};

export default ProductsCards;