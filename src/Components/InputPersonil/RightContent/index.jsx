// MODULE
import React from 'react'

// COMPONENTS
import Loader from '../../Loader'

function RightContent (props) {
    const {
        nrp, setNrp, password, setPassword, confirmPassword, setConfirmPassword, inputPersonil, emptyMessage, loading
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
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="input-b-input-box">
                <label>Ulangi Password</label> <br />
                <input 
                    type="password" 
                    placeholder="Ulangi Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}    
                />
            </div>

            <center>
                {
                    loading
                    ?
                    <Loader/>
                    :
                    <button 
                    className='input-a-submit-btn' 
                    onClick={inputPersonil}
                    style={{
                        marginBottom: '5px'
                    }}
                    >
                        Submit
                    </button> 
                } <br />
                <span style={{ color: 'red', fontWeight: '200', fontSize: '12px' }}>{emptyMessage}</span>
            </center>

        </div>
    )

}

export default RightContent