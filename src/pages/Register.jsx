import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';


const Register = () => {
   const navigate =useNavigate()
  const { registerWithEmailPassword , setUser , user , handleGoogleSignin } = useContext(AuthContext);

const handleSubmit = (e)=> {
  e.preventDefault()
   const  email = e.target.email.value;
  const pass = e.target.password.value;
  const name = e.target.name.value;
  const photoUrl = e.target.photoUrl.value;

  console.log(name, photoUrl);
  
   registerWithEmailPassword(email,pass)
   .then((userCredentail)=>{
    
    updateProfile(auth.currentUser, {
       displayName: name, photoURL: photoUrl
}).then(() => {

    setUser(userCredentail.user)
    navigate("/")
}).catch((error) => {
    console.log(error);
});

      
   })
     .catch(err=>{
      console.log(err);
     })
  } 

  console.log(user);
 const googleSignup = () => {
    handleGoogleSignin()
      .then(result => {
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-2">
                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                 <label className="label">Name</label>
                <input  name='name'  type="text" className="input" placeholder="Your Full Name" />
                   <label className="label">PhotoUrl</label>
                <input  name='photoUrl'  type="text" className="input" placeholder="Enter Your PhotoUrl" />
                <label className="label">Password</label>
                <input  name='password'  type="password" className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <div>
                  <span>Already have an account? </span>
                  <Link to='/login' className="text-blue-600">Login</Link>
                </div>

                <button className="btn btn-neutral mt-4">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
