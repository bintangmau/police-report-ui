// MODULE
import React, { useState } from 'react'
import Axios from 'axios'

// API
import { api } from '../../helper/database'

// STYLE
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'

function InputPersonil () {
    const [ nama, setNama ] = useState('')
    const [ jabatan, setJabatan ] = useState('')
    const [ pangkat, setPangkat ] = useState('')
    const [ unit, setUnit ] = useState('')
    const [ submit, setSubmit ] = useState('')
    const [ nomorHp, setNomorHp ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ nrp, setNrp ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    // API BUTTON
    const inputPersonil = () => {
        Axios.post(api + 'admin/input-personil', {
            nama,
            jabatan,
            pangkat,
            nrp,
            unit,
            submit,
            nomorHp,
            email,
            password
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div style={{width : "100%" , height : 800 }}>
            <h1>Input Personil</h1>

            {/* ROW CONTAINER */}
            <div className='input-a-row'>

                <Left 
                    nama={nama}
                    setNama={setNama}
                    jabatan={jabatan}
                    setJabatan={setJabatan}
                    pangkat={pangkat}
                    setPangkat={setPangkat}
                    unit={unit}
                    setUnit={setUnit}
                    submit={submit}
                    setSubmit={setSubmit}
                    nomorHp={nomorHp}
                    setNomorHp={setNomorHp}
                    email={email}
                    setEmail={setEmail}
                />

                <Right 
                    nrp={nrp}
                    setNrp={setNrp}
                    password={password}
                    setPassword={setPassword}
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    inputPersonil={inputPersonil}
                />
                 
            </div>
            
        </div>
    )

}


export default InputPersonil