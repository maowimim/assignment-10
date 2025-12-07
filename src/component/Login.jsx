import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const navigate = useNavigate();
  const { userLogin, handleGoogleSignin, setUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogin(email, password)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const googleSignin = () => {
    handleGoogleSignin()
      .then(result => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input name="email" type="email" className="input" placeholder="Email" />

                <label className="label">Password</label>
                <input name="password" type="password" className="input" placeholder="Password" />

                <div><a className="link link-hover">Forgot password?</a></div>

      
                <button 
                  type="button" 
                  onClick={googleSignin} 
                  className="btn flex items-center gap-2 mt-2">
                  <FcGoogle /> Sign in with Google
                </button>

                <div className="mt-2">
                  <span>Don't have an account?</span>
                  <Link to="/signup" className="link link-primary"> Register Now</Link>
                </div>

                <button className="btn btn-neutral mt-4" type="submit">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
