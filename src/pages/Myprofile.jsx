import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Myprofile = () => {
    const { user } = use(AuthContext)
    // console.log(user)
    return (
        <div className='flex justify-center items-center my-10'>
            <div>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={user?.photoURL} />
                    </div>
                </div>
                <h1>{user?.displayName}</h1>
                <p>{user?.email}</p>
            </div>
        </div>
    );
};

export default Myprofile;