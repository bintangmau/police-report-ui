import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// COMPONENTS
import Loader from '../../Components/Loader'

// SWAL
import swal from 'sweetalert'

// CSS
import './style.css'
import Axios from 'axios'
import { api } from '../../helper/database'

export default function LupaPassword() {
    const [ password, setPassword ] = useState('')
    const [ conPassword, setConPassword ] = useState('') 
    const [ passEmpty, setPassEmpty ] = useState('')
    const [ conPassEmpty, setConPassEmpty ] = useState('')
    const [ passMessage, setPassMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)
    
    // GET PARAMS
    const history = useHistory()
    
    const email = history.location.pathname.split('/')[3]
    const nrp = history.location.pathname.split('/')[4]

    const changePassword = () => {
        if(!password) {
            setPassMessage('')
            setPassEmpty('(Masukkan Password Anda!)')
        } else if (!conPassword) {
            setPassMessage('')
            setConPassEmpty('(Masukkan Konfirmasi Password!')
        } else if(password !== conPassword) {
            setPassMessage('Konfirmasi tidak valid!')
        } else {
            setLoading(true)
            Axios.post(api + 'user/change-password', {
                email, nrp, password
            })
            .then((res) => {
                setLoading(false)
                swal('Ok', 'Password Diganti', 'success')
            })
            .catch((err) => {
                setLoading(false)
                swal('Ups', 'Something is Wrong', 'error')
            })
        }
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        setPassEmpty('')
        setPassMessage('')
    }

    const onChangeConPassword = (e) => {
        setConPassword(e.target.value)
        setConPassEmpty('')
        setPassMessage('')
    }

    return (
        <div className='lupa-password-container'>
            <h4>Musito-App Lupa Password</h4>

            <div className='lupa-password-input-box'>
                <label>Masukkan Password Baru Anda <span className='lupa-password-span'>{passEmpty}</span> </label> <br />
                <input type="password" onChange={onChangePassword}/>
            </div>

            <div className='lupa-password-input-box' style={{ marginTop: '20px' }}>
                <label>Konfirmasi Password Baru Anda <span className='lupa-password-span'>{conPassEmpty}</span></label> <br />
                <input type="password" onChange={onChangeConPassword}/>
            </div>

            {
                loading
                ?
                <div style={{ marginTop: '30px' }}>
                    <Loader />
                </div>
                :
                <>
                <button onClick={changePassword}>Simpan</button>
                <span className='lupa-password-span'>{passMessage}</span> 
                </>
            }


        </div>
    )
}
