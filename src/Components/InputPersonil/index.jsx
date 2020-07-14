// MODULE
import React, { useState } from 'react'
import Axios from 'axios'
import swal from 'sweetalert'

// API
import { api } from '../../helper/database'

// STYLE
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'

function InputPersonil () {
    const [ emptyMessage, setEmptyMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)

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
        if(!nama) {
            setEmptyMessage("Masukkan Nama Personil!")
        } else if(!jabatan) {
            setEmptyMessage("Pilih Jabatan Personil!")
        } else if(!pangkat) {
            setEmptyMessage("Pilih Pangkat Personil!")
        } else if(!unit) {
            setEmptyMessage("Pilih Unit Personil!")
        } else if(!submit) {
            setEmptyMessage("Pilih Subnit Personil")
        } else if(!nomorHp) {
            setEmptyMessage("Masukkan Nomor HP!")
        } else if(!email) {
            setEmptyMessage("Masukkan Email Personil")
        } else if(!nrp) {
            setEmptyMessage("Masukkan NRP Personil!")
        } else if(!password) {
            setEmptyMessage("Masukkan Password!")
        } else if(!confirmPassword) {
            setEmptyMessage("Masukkan Konfirmasi Password!")
        } else if(password !== confirmPassword) {
            setEmptyMessage("Konfirmasi Password Tidak Sama!")
        } else {
            setEmptyMessage("")
            setLoading(true)
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
                setLoading(false)
                swal('Success', 'Input Personil Berhasil!', 'success')
            })
            .catch((err) => {
                setLoading(false)
                // console.log(err)
            })
        }
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
                    emptyMessage={emptyMessage}
                    loading={loading}
                />
                 
            </div>
            
        </div>
    )

}


export default InputPersonil