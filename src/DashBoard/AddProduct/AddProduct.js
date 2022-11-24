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
                <h2 className='text-3xl font bold text-center mt-11'>Add product</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("name", { required: 'Name is required' })} type='text'
                        />
                    </div>
                    {errors.name && <p role='alert' className="text-warning">{errors.name.message}</p>}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            className="input input-bordered w-full max-w-xs" {...register("email", { required: 'Email is required' })} type='email'
                        />
                    </div>
                    {errors.email && <p role='alert' className="text-warning">{errors.email.message}</p>}

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
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='password' {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'password must be 6 char long' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password must be strong' }
                        })} />
                    </div>
                    {errors.password && <p role='alert' className="text-warning">{errors.password.message}</p>}


                    <input className="btn bg-amber-900 text-white w-1/2 my-4" value='Sign up' type="submit" />


                </form>

            </div>
        </div>
    );
};

export default AddProduct;