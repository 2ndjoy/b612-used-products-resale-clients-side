import React from 'react';
import kitchen1 from '../../../assets/kitchen1.avif';
import Gallery from '../../Gallery/Gallery';
import BookingModal from './BookingModal';
import { MdVerified } from 'react-icons/md';


const Products = () => {
    return (
        <div className='my-24'>
            <div className='lg:flex md:flex justify-center gap-5'>
                <div className="card card-compact my-5 w-96 bg-base-100 shadow-xl">
                    <figure> <Gallery
                        img={kitchen1}
                    ></Gallery> </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes! </h2>
                        <p><b>Location</b></p>
                        <div className='flex'>
                            <p><b>Price</b></p>
                            <p><b>Original Price</b></p>
                        </div>
                        <p><b>Years of use</b></p>
                        <p><b>Years of use</b></p>
                        <div className='flex justify-start items-center gap-1'>
                            <MdVerified></MdVerified><p><b>Seller name</b></p>
                        </div>

                        <div className="card-actions justify-center">
                            <label htmlFor="booking-modal" className='btn bg-amber-900 text-white'> Buy Now</label>
                            <BookingModal></BookingModal>

                        </div>
                    </div>
                </div>
                <div className="card card-compact my-5 w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;