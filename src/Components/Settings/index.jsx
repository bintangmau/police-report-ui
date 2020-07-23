import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

// CSS
import './style.css'

export default function Settings() {

    const history = useHistory()
    const jabatanState = useSelector(state => state.user.jabatan)

    if(jabatanState !== "ADMIN") {
        history.push('/')
    }
    return (
        <div className='setting-container'>
            
            <h1>Pengaturan</h1>

            <div className='setting-row'>
                <div className="setting-column" onClick={() => history.push('/jabatan')}>
                    <span>Manage Jabatan</span>
                </div>
                <div className="setting-column" onClick={() => history.push('/pangkat')}>
                    Manage Pangkat
                </div>
                <div className="setting-column" onClick={() => history.push('/unit')}>
                    Manage Unit
                </div>  
                <div className="setting-column" onClick={() => history.push('/subnit')}>
                    Manage Subnit
                </div>
            </div>

        </div>
    )
}
