import React from 'react';
import BookingModal from './BookingModal';
import { MdVerified } from 'react-icons/md';
import Gallery from '../../Gallery/Gallery';
import toast from 'react-hot-toast';



const ProductsCards = ({ product, setProductt, refetch }) => {
    const { _id, productImage, sellerName, productName, purchaseYear, productCondition, description, originalPrice, sellingPrice, report } = product;
    console.log(product);


    const handleReport = (id) => {
        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',

        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Reported successfully')
                    refetch();
                }
            })
    }

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

                <div className="card-actions items-center justify-center">
                    <label onClick={setProductt(product)} htmlFor="booking-modal" className='btn bg-amber-900 text-white'> Buy Now</label>
                    {report ? <p>Reported </p> : <button onClick={() => handleReport(_id)} className='btn bg-red-500 btn-xs text-white border-none'>Report</button>}
                </div>
            </div>
        </div>
    );
};

export default ProductsCards;