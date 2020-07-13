// MODULE
import React from 'react'

function RightContent (props) {
    const {
        nrp, setNrp, password, setPassword, confirmPassword, setConfirmPassword, inputPersonil
    } = props
    return (
        <div className='input-b-left-container'>

            <div className="input-b-input-box">
                <label>NRP</label> <br />
                <input
                    type="text" 
                    placeholder="NRP"
                    onChange={(e) => setNrp(e.target.value)}
                />
            </div>

            <div className="input-b-input-box">
                <label>Password</label> <br />
                <input 
                    type="text" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-b-input-box">
                <label>Ulangi Password</label> <br />
                <input 
                    type="text" 
                    placeholder="Ulangi Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}    
                />
            </div>

            <center>
                <button onClick={inputPersonil} className='input-a-submit-btn'>Submit</button>
            </center>

        </div>
    )

}

export default RightContent