// MODULE
import React from 'react'

function RightContent () {

    return (
        <div className='input-b-left-container'>

            <div className="input-b-input-box">
                <label>NRP</label> <br />
                <input type="text" placeholder="NRP"/>
            </div>

            <div className="input-b-input-box">
                <label>Password</label> <br />
                <input type="text" placeholder="Password"/>
            </div>

            <div className="input-b-input-box">
                <label>Ulangi Password</label> <br />
                <input type="text" placeholder="Ulangi Password"/>
            </div>

            <center>
                <button className='input-a-submit-btn'>Submit</button>
            </center>

        </div>
    )

}

export default RightContent