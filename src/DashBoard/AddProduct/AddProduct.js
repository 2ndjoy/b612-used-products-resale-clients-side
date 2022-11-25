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
                            className="input input-bordered w-full max-w-xs" {...register("productName", { required: 'Name is required' })} type='text'
                        />
                    </div>
                    {errors.productName && <p role='alert' className="text-warning">{errors.productName.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("sellingPrice", { required: 'Price is required' })} type='text'
                        />
                    </div>
                    {errors.sellingPrice && <p role='alert' className="text-warning">{errors.sellingPrice.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Original Price</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("originalPrice", { required: 'Original price is required' })} type='text'
                        />
                    </div>
                    {errors.originalPrice && <p role='alert' className="text-warning">{errors.originalPrice.message}</p>}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("productCondition", { required: 'Condition is required' })} type='text'
                        />
                    </div>
                    {errors.productCondition && <p role='alert' className="text-warning">{errors.productCondition.message}</p>}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Phone number</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("sellerPhoneNumber", { required: 'Phone number is required' })} type='text'
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
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select input-bordered w-full max-w-xs" {...register("productCategory", { required: 'Category is required' })}>
                            <option disabled selected>Select a Category</option>
                            <option value="kitchen">Kitchen</option>
                            <option value="dining">Dining</option>
                            <option value="living">Living</option>
                        </select>
                    </div>


                    {errors.productCategory && <p role='alert' className="text-warning">{errors.productCategory.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Year of purchase</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("purchaseYear", { required: 'Year of purchase is required' })} type='text'
                        />
                    </div>
                    {errors.purchaseYear && <p role='alert' className="text-warning">{errors.purchaseYear.message}</p>}


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("description", { required: 'Description is required' })} type='text'
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