// MODULE
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import swal from 'sweetalert'
import io from 'socket.io-client'

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

    const [ dataJabatan, setDataJabatan ] = useState([])
    const [ dataPangkat, setDataPangkat ] = useState([])
    const [ dataUnit, setDataUnit ] = useState([])
    const [ dataSubnit, setDataSubnit ] = useState([])

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

    const getDataJabatan = () => {
        Axios({
            method: "GET",
            url: api + 'admin/get-data-jabatan'
        })
        .then((res) => {
            setDataJabatan(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataPangkat = () => {
        Axios({ method: "GET", url: api + 'admin/get-data-pangkat'})
        .then((res) => {
            setDataPangkat(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataUnit = () => {
        Axios({ method: "GET", url: api + 'admin/get-data-unit'})
        .then((res) => {
            setDataUnit(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataSubnit = () => {
        Axios({ method: "GET", url: api + 'admin/get-data-subnit'})
        .then((res) => {
            setDataSubnit(res.data)
        })
        .catch((err) => {
            return null
        })
    }

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

    useEffect(() => {
        getDataJabatan()
        getDataPangkat()
        getDataUnit()
        getDataSubnit()
        const socket = io(`${api}`)
        socket.on('input-new-jabatan', data => {
            getDataJabatan()
        })
        socket.on('input-new-pangkat', data => {
            getDataPangkat()
        })
        socket.on('input-new-unit', data => {
            getDataUnit()
        })
        socket.on('input-new-subnit', data => {
            getDataSubnit()
        })
    }, [])

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
                    dataJabatan={dataJabatan}
                    dataPangkat={dataPangkat}
                    dataUnit={dataUnit}
                    dataSubnit={dataSubnit}
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