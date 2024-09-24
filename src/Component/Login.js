import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import img from "../google.png"

const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required("Password Must Be Required ... !"),
})
    .required()

function Login() {

    const [passShow, setPassShow] = useState(false);

    // Google Login

    const loginWithGoogle = () => {
<<<<<<< HEAD
        window.open("https://user-management-api-zszn.onrender.com/auth/google/callback", "_self")
=======
        window.open("https://user-management-api-dhx7.onrender.com/auth/google/callback", "_self")
>>>>>>> cd145c007d6598f30f787c175889c56d92770c22
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });

    const navigate = useNavigate();
    const change = () => {
        navigate("/Signup");
    }


    // Email Login

    const changedata = async (data) => {
        try {
<<<<<<< HEAD
            await axios.post('https://user-management-api-zszn.onrender.com/login', data)
=======
            await axios.post('https://user-management-api-dhx7.onrender.com/login', data)
>>>>>>> cd145c007d6598f30f787c175889c56d92770c22
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("token", response.data.token);
                        toast("You are successfully logged in!", {
                            position: "bottom-right"
                        });
                        navigate("/Home");
                    }
                })
                .catch(error => {
                    if (error.response && error.response.status === 401) {  
                        toast.error("Incorrect Password ! ", {
                            position: "top-center"
                        });
                    }
                    if (error.response && error.response.status === 404) {
                        toast.error("Account does not exist ! ", {
                            position: "top-center"
                        });
                    }
                    console.log(error);
                });
        } catch (error) {
            toast.error("An error occurred. Please try again.", {
                position: "top-center"
            });
            console.log(error);
        }
    };


    return (

        <div>

            <section className='w-100 d-flex justify-content-center flex-column align-items-center mt-5'>

                <form class="row g-3 w-25 border loginform" onSubmit={handleSubmit(changedata)}>

                    <h2 className='text-red ps-5 pt-3'>Login Page</h2>

                    <div className="ps-5 pe-5 pb-5 pt-3 ">
                        <div class="col-md-12">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4"   {...register("email", { required: true })} placeholder="Enter Your Email" />
                            <span style={{ color: "red" }}>{errors.email?.message}</span>
                        </div>
                        <br />
                        <div class="col-md-12">
                            <div className="form_input">
                                <label for="inputPassword4" class="form-label">Password</label>
                                <div className="two">
                                    <input type={!passShow ? "password" : "text"} class="form-control" id="inputPassword4"  {...register("password", { required: true })} placeholder="Enter Your Password" />
                                    <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                        {!passShow ? "Show" : "Hide"}
                                    </div>
                                </div>
                                <span style={{ color: "red" }}>{errors.password?.message}</span>
                            </div>
                        </div>
                        <br />
                        <div class="col-12 d-flex justify-content-between">
                            <button type="submit" class="btn btn-primary me-5">Sign in</button>
                            <div className='mt-3'>You can <a href=""><Link to="/Signup"> SignUp</Link></a></div>
                        </div>
                    </div>
                </form>
                <button onClick={loginWithGoogle} className='w-25 mt-3'><img src={img} alt="" className='g-img' /> &nbsp; Sign in With Google </button>
            </section>

        </div>
    )
}

export default Login
