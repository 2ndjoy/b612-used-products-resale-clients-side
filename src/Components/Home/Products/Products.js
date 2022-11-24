import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';
import kitchen1 from '../../../assets/kitchen1.avif';
import Gallery from '../../Gallery/Gallery';

const Products = () => {
    return (
        <div className='my-24'>
            <div className='lg:flex md:flex justify-center gap-5'>
                <div className="card card-compact my-5 w-96 bg-base-100 shadow-xl">
                    <figure> <Gallery
                        img={kitchen1}
                    ></Gallery> </figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <PrimaryButton
                                classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                            >Buy now</PrimaryButton>
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