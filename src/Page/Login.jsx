import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
    const {login,signInGoogle}=useContext(AuthContext);
  
    const location=useLocation();
    const navigate=useNavigate()
    let from = location.state?.from?.pathname || "/";
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        login(email,password)
        .then(()=>{
            navigate(from,{replace:true})
        })
        .catch((error)=>{
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
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email"name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password"name="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-secondary"><input type="submit"  value="SingIn" /></button>
                                </div>
                            </form>
                            <button onClick={handelGoogleLogin} className="center flex items-center justify-center btn"><FaGoogle className="text-3xl mr-2"></FaGoogle>SingUp With Google</button>
                            <p>Are you new user?please  <Link className="text-orange-500 underline" to={'/signUp'}>SingUp</Link></p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;