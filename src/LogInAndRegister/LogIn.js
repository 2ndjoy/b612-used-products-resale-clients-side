import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';


const LogIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginError, setLoginError] = useState('');

    const handleLogin = data => {
        console.log(data);
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn bg-amber-900 text-white w-full my-4' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                {/* <label className="label"> <button className="label-text" onClick={handleSubmit(handleforgetPassword)}>Forget Password?</button></label> */}
                <p className='text-amber-900'>New to Kather Ghor? <Link className='text-amber-700' to="/register">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn text-amber-900 btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
}

export default LogIn;