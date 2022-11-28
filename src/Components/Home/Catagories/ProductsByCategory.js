import React from 'react';
import { MdVerified } from 'react-icons/md';
import { useLoaderData } from 'react-router-dom';
import Gallery from '../../Gallery/Gallery';
import BookingModaltwo from './BookingModaltwo';

const ProductsByCategory = () => {
    const products = useLoaderData();
    return (
        <div className='lg:grid md:grid justify-center gap-5 lg:grid-cols-3 md:grid-cols-2 px-3'>
            {
                products.map(product => <div className="card card-compact my-5 w-80 bg-base-100 shadow-xl">
                    <figure className='h-44'>
                        <Gallery
                            img={product.productImage}

                        ></Gallery> </figure>
                    <div className="card-body gap-0">
                        <h2 className="card-title">{product.productName} </h2>
                        <p><b>Location: { }</b></p>
                        <p><b>Selling Price: ${product.sellingPrice}</b></p>
                        <p><b>Original Price: ${product.originalPrice}</b></p>
                        <p><b>Purchase Year: {product.purchaseYear}</b></p>
                        <div className='flex justify-start items-center gap-1'>
                            <MdVerified></MdVerified><p><b>{product.sellerName}</b></p>
                        </div>

                        <div className="card-actions items-center justify-center">
                            <label htmlFor="booking-modal2" className='btn bg-amber-900 text-white'> Buy Now</label>
                            <button className='btn bg-red-500 btn-xs text-white border-none'>Report</button>
                            <BookingModaltwo
                                product={product}
                            ></BookingModaltwo>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ProductsByCategory;