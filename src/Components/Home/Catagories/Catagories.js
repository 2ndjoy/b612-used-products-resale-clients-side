import React from 'react';
import PrimaryButton from '../../PrimaryButton/PrimaryButton';

const Catagories = () => {
    return (
        <div className='my-9'>

            <div className='lg:flex justify-center gap-4'>
                <div className="card w-96 my-5 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Kitchen</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <PrimaryButton
                                classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                            >Buy now</PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="card w-96 my-5 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Living</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Bedroom</h2>
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

export default Catagories;