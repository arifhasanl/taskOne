import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";
const SignUp = () => {
        
    const {createUser,upDateUser,signInGoogle}=useContext(AuthContext);
    const navigate=useNavigate();
    let from = location.state?.from?.pathname || "/";
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const email=form.email.value;
        const photo=form.email.value;
        const password=form.password.value;
        
        createUser(email,password)
        .then(()=>{
            upDateUser(name,photo)
            .then(()=>{
                Swal.fire({
                    position: 'top-end',
                    icon: 'success login',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(from,{replace:true})
            })
        })
        .catch(error=>{
            console.log(error);
        })

    }
    const handelGoogleLogin=()=>{
        signInGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
        .then(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                    <div className="card lg:w-3/4 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name:</span>
                                    </label>
                                    <input type="text" placeholder="name"name="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email:</span>
                                    </label>
                                    <input type="text" placeholder="email"name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password:</span>
                                    </label>
                                    <input type="password" placeholder="password"name="password" className="input input-bordered" />
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url:</span>
                                    </label>
                                    <input type="text" placeholder="photo url"name="photo" className="input input-bordered" />
                                    
                                </div>
                                <div className="form-control mt-6">
                                  <button className="btn btn-secondary"><input type="submit" value="SingUp" /></button>
                                </div>
                            </form>
                            <button onClick={handelGoogleLogin} className="center flex items-center justify-center btn"><FaGoogle className="text-3xl mr-2"></FaGoogle>SingUp With Google</button>
                            <p>You have a already acount please <Link className="text-orange-500 underline" to={'/login'}>Login</Link></p>
                           
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;