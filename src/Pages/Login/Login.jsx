import React from 'react';
import Navbar from '../../Components/Navbar';
import { FcGoogle } from 'react-icons/fc';
import { PiGithubLogoBold } from 'react-icons/pi';

const Login = () => {
    return (
        <div className='login-bg'>
            <Navbar></Navbar>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className=" text-right">
                        <h1 className="text-5xl font-bold ">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-[#490e0e] w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered bg-[#490e0e]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered bg-[#490e0e]" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className='form-control flex-row  gap-2'>
                                <button className='btn btn-warning  bg-white border-none '><FcGoogle /> </button>
                                <button className='btn btn-warning  bg-black border-none text-white '><PiGithubLogoBold /> </button>

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-pink-700 border-none">Login</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;