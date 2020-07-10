import React from 'react'

// STYLE 
import './style.css'

function Login () {

    return (
        <div className="login-container-01">
            
            <div className='login-form-container'>
                <h4>
                    Musito Police Report System
                </h4>

                <div>
                    <label>NRP</label> <br />
                    <input type="text" placeholder='NRP'/>
                </div>

                <div>
                    <label>Password</label> <br />
                    <input type="password" placeholder="Password"/>
                </div>
            </div>

        </div>
    )

}

export default Login
