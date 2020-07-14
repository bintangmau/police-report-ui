// MODULES
import React from 'react'

// CSS
import './style.css'

// ICON
import Pin from '../../Images/Profile/pin.png'

export default function Profile() {
    return (
        <div>
            <h1>Profile Personil</h1>

            <div className='profile-container'>

                <div className='profile-container-01'>

                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/HH_Polizeihauptmeister_MZ.jpg/1200px-HH_Polizeihauptmeister_MZ.jpg" 
                        alt="profile-photo"
                        className="profile-photo"    
                    />

                    <div className='profile-info-01'>
                        <h1>John Doe 
                            <span style={{ 
                                    fontSize: '12px', color: '#C4C4C4', fontWeight: '200', marginLeft: '10px'
                                }}>
                                <img 
                                    src={Pin} 
                                    alt="pin"
                                    className='profile-pin'
                                />
                                Polres Jakarta Pusat
                            </span> 
                        </h1> 
                        <h4>Kasat</h4>
                    </div>

                </div>

                <div className="profile-container-02">

                    <div className='profile-info-left-01'>
                            
                    </div>

                    <div className="profile-info-02">

                        <div className='profile-info-details'>
                            <h3>NRP :</h3> 
                            <h4>23232</h4>
                        </div>

                    </div>
                    
                </div>

            </div>

        </div>
    )
}
