import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import img from "../google.png"
import { ToastContainer, toast } from 'react-toastify';



const schema = yup.object({
    displayName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required("Password Must Be Required ... !"),
}).required()

const Signup = () => {

    const [passShow, setPassShow] = useState(false);


    const navigate = useNavigate();

    const changedata = async (data) => {

        try {
            await axios.post('https://user-management-api-ok62.onrender.com/signup', data)

                .then(response => {
                    console.log(response);
                    if (response.status === 200) {
                    toast("You are successfully Sign Up!");
                    navigate("/")
                }
                })
                .catch(error => {
                    if (error.response && error.response.status === 404) {
                    toast.error("This Email is Alredy Exists ! ", {
                        position: "top-center"
                    });
                } 
                    console.log(error);
                });
        } catch (error) {
            console.log(error)
        }


    };

    const loginWithGoogle = () => {
        window.open("https://user-management-api-ok62.onrender.com/auth/google/callback", "_self")
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
    });


    return (
        <div>
            <div>

                <section className='w-100 d-flex justify-content-center flex-column align-items-center mt-5'>

                    <form class="row g-3 w-25 border loginform" onSubmit={handleSubmit(changedata)}>

                        <h2 className='text-red ps-5 pt-3'>SignUp Page</h2>

                        <div className="ps-5 pe-5 pb-5 pt-3 ">
                            <div class="col-md-12">
                                <label for="inputName4" class="form-label">Name</label>
                                <input type="text" {...register("displayName", { required: true })} class="form-control" id="inputName4" placeholder="Enter Your Name" />
                                <span style={{ color: "red" }}>{errors.displayName?.message}</span>
                            </div>
                            <br />
                            <div class="col-md-12">
                                <label for="inputEmail4" class="form-label">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" {...register("email", { required: true })} placeholder="Enter Your Email" />
                                <span style={{ color: "red" }}>{errors.email?.message}</span>
                            </div>
                            <br />
                            <div class="col-md-12">
                                <div className="form_input">
                                    <label for="inputPassword4" class="form-label">Password</label>
                                    <div className="two">
                                        <input type={!passShow ? "password" : "text"} class="form-control" id="inputPassword4" {...register("password", { required: true })} placeholder="Enter Your Password" />
                                        <div className="showpass" onClick={() => setPassShow(!passShow)}>
                                        {!passShow ? "Show" : "Hide"}
                                    </div>
                                    </div>
                                    <span style={{ color: "red" }}>{errors.password?.message}</span>
                                </div>
                            </div>
                            <br />
                            <div class="col-12 d-flex justify-content-between">
                                <button type="submit" class="btn btn-primary me-5">Sign Up</button>
                                <div className='mt-3'>You can <a href=""><Link to="/">Login</Link></a></div>
                            </div>
                        </div>
                    </form>
                    <button onClick={loginWithGoogle} className='w-25 mt-3'><img src={img} alt="" className='g-img' /> &nbsp; SignUp With Google </button>

                </section>


            </div>
        </div>
    )
}

export default Signup
