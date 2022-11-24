import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSignUp = (data) => {
        console.log(data);
    }
    return (
        <div className='grid justify-center py-11'>

            <div className='w-96 p-7'>
                <h2 className='text-3xl font bold text-center mt-11 mb-9'>Add product</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("name", { required: 'Name is required' })} type='text'
                        />
                    </div>
                    {errors.name && <p role='alert' className="text-warning">{errors.name.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("price", { required: 'Email is required' })} type='text'
                        />
                    </div>
                    {errors.price && <p role='alert' className="text-warning">{errors.price.message}</p>}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("condition", { required: 'Email is required' })} type='text'
                        />
                    </div>
                    {errors.condition && <p role='alert' className="text-warning">{errors.condition.message}</p>}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("sellerPhoneNumber", { required: 'Email is required' })} type='text'
                        />
                    </div>
                    {errors.sellerPhoneNumber && <p role='alert' className="text-warning">{errors.sellerPhoneNumber.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Select your picture</span>
                        </label>
                        <input
                            className="input w-full max-w-xs" {...register("photo", { required: 'Photo is required' })} type='file'
                        />
                    </div>
                    {errors.photo && <p role='alert' className="text-warning">{errors.photo.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("description", { required: 'Email is required' })} type='text'
                        />
                    </div>
                    {errors.description && <p role='alert' className="text-warning">{errors.description.message}</p>}


                    <input className="btn bg-amber-900 text-white w-1/2 my-4" value='Sign up' type="submit" />


                </form>

            </div>
        </div>
    );
};

export default AddProduct;