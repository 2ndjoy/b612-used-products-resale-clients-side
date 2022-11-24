import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setsignUpError] = useState('');


    const imageHostKEy = process.env.REACT_APP_IMGB_APIKEY;
    console.log(imageHostKEy);
    const handleSignUp = (data) => {
        console.log(imageHostKEy)
        const photo = data.photo[0];
        const formData = new FormData();
        formData.append('image', photo);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKEy}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className="text-2xl text-center">Sign up</h2>
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


                    <input className="btn btn-accent mt-4" value='Sign up' type="submit" />


                    {signUpError && <p className='text-red-500'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link to='/login'>Log in</Link></p>

            </div>
        </div>
    );
};


export default Register;