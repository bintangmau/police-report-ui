// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'
import { useHistory  } from 'react-router-dom'

// API
import { api } from '../../helper/database'

// COMPONENTS
import Loader from '../../Components/Loader'

// ACTIONS
import { logOut } from '../../Redux/Actions/userAction'

// CSS
import './style.css'

// ICON
import Pin from '../../Images/Profile/pin.png'
import Pencil from '../../Images/Profile/pencil.png'
import Save from '../../Images/Profile/save.png'
import Cancel from '../../Images/Profile/cancel.png'

function Profile() {
    const history = useHistory()

    const [ dataJabatan, setDataJabatan ] = useState([])
    const [ dataPangkat, setDataPangkat ] = useState([])
    const [ dataUnit, setDataUnit ] = useState([])
    const [ dataSubnit, setDataSubnit ] = useState([])

    const [ showEditOne, setShowEditOne ] = useState('')
    const [ editNrp, setEditNrp ] = useState(false)
    const [ editPangkat, setEditPangkat ] = useState(false)
    const [ editUnit, setEditUnit ] = useState(false)
    const [ editSubnit, setEditSubnit ] = useState(false)
    const [ editNomorHp, setEditNomorHp ] = useState(false)
    const [ editEmail, setEditEmail ] = useState(false)

    // DATA PERSONIL STATE
    const [ nama, setNama ] = useState('')
    const [ jabatan, setJabatan ] = useState('')
    const [ nrp, setNrp ] = useState('')
    const [ pangkat, setPangkat ] = useState('')
    const [ unit, setUnit ] = useState('')
    const [ subnit, setSubnit ] = useState('')
    const [ nomorHp, setNomorHp ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ valueEdit, setValueEdit ] = useState('')
    const [ fieldEdit, setFieldEdit ] = useState('')

    // const id = useSelector((state) => {
    //     state.id
    // })

    const id = useSelector(state => state.user.id)

    const handleChangeEditOne = (field, value) => {
        setFieldEdit(field)
        setValueEdit(value)
    }

    const getDataProfile = () => {
        Axios({
            method: "GET",
            url: api + `user/get-data-profile/33`,
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            const data = res.data[0]
            setNama(data.nama)
            setJabatan(data.jabatan)
            setNrp(data.nrp)
            setPangkat(data.pangkat)
            setUnit('UNIT ' + data.unit)
            setSubnit('SUBNIT ' + data.subnit)
            setNomorHp(data.nohp)
            setEmail(data.email)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const getDataJabatan = () => {
        Axios({
            method: "GET",
            url: api + 'admin/get-data-jabatan',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataJabatan(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataPangkat = () => {
        Axios({ 
            method: "GET", 
            url: api + 'admin/get-data-pangkat',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataPangkat(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataUnit = () => {
        Axios({ 
            method: "GET", 
            url: api + 'admin/get-data-unit',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataUnit(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataSubnit = () => {
        Axios({ 
            method: "GET", 
            url: api + 'admin/get-data-subnit',
            headers: {
                token: localStorage.getItem('token')
            }})
        .then((res) => {
            setDataSubnit(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const editDataPersonilOne = () => {
        setShowEditOne('')
        Axios({
            method: "POST",
            url: api + 'user/edit-data-personil-one',
            headers: {
                token: localStorage.getItem('token')
            },
            data: {
                field: fieldEdit, 
                value: valueEdit
            }
        })
        .then((res) => {
            return null
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const logOutBtn = () => {
        if(window.confirm('Yakin untuk keluar?')) {
            logOut()
        }
    }

    useEffect(() => {
        if(!localStorage.getItem('token')) {
            history.push('/login')
        }
        getDataProfile()
        getDataJabatan()
        getDataPangkat()
        getDataUnit()
        getDataSubnit()
        const socket = io(`${api}`)
        socket.on('edit-personil-one', data => {
            getDataProfile()
        })
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

    if(!nama) {
        return (
            <center>
                <div style={{ marginTop: '50px' }}>
                    <Loader/>
                </div>
            </center>
        )
    } else if(!localStorage.getItem('token')) {
        history.push('/login')
    }

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
                        <h1>{nama}
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
                        {
                            showEditOne === 'jabatan'
                            ?
                            <h3 className='jabatan-input-edit'>
                                <select onChange={(e) => handleChangeEditOne("jabatan", e.target.value)}>
                                    <option value="" disabled selected>Pilih Jabatan</option>
                                    {dataJabatan.map((val) => {
                                        return (
                                            <option value={val.idJabatan} key={val.idJabatan}>{val.jabatan}</option>
                                        )
                                    })}
                                </select>
                                <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne('')}/>
                            </h3>
                            :
                            <h3 className="jabatan-text">
                                {jabatan}
                                <img 
                                    src={Pencil} 
                                    alt="edit-button"
                                    className="edit-button-01"
                                    onClick={() => setShowEditOne("jabatan")}
                                />
                            </h3>
                        }
                    </div>

                </div>

                <div className="profile-container-02">

                    <div className='profile-info-left-01'>
                            
                    </div>

                    <div className="profile-info-02">

                        <div className='profile-info-details'>
                            <div className='profile-info-details-column-left'>
                                <h3>NRP :</h3> 
                                <h3>Pangkat :</h3>
                                <h3>Unit :</h3>
                                <h3>Subnit :</h3>
                                <h3>Nomor HP :</h3>
                                <h3>Email :</h3>

                            </div>
                            <div className='profile-info-details-column-right'>
                                {
                                    showEditOne === 'nrp'
                                    ?
                                    <h3 className='profile-info-details-input-box'>
                                        <input type="text" placeholder={nrp} onChange={(e) => handleChangeEditOne("nrp", e.target.value)}/>
                                        <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                        <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne('')}/>
                                    </h3>
                                    :
                                    <h3>
                                        {nrp}
                                        <img 
                                            src={Pencil} 
                                            alt="edit-button"
                                            onClick={() => setShowEditOne('nrp')}
                                            />
                                    </h3>
                                }
                                {
                                    showEditOne ===  "pangkat"
                                    ?
                                    <h3 className='profile-info-details-input-box'>
                                        <select onChange={(e) => handleChangeEditOne("pangkat", e.target.value)}>
                                            <option value="" disabled selected>Pilih Pangkat</option>
                                            {dataPangkat.map((val) => {
                                                return (
                                                    <option value={val.idPangkat} key={val.idPangkat}>{val.pangkat}</option>
                                                )
                                            })}
                                        </select>
                                        <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                        <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne('')}/>
                                    </h3>
                                    :
                                    <h3>
                                        {pangkat}
                                        <img 
                                            src={Pencil} 
                                            alt="edit-button"
                                            onClick={() => setShowEditOne("pangkat")}
                                            />
                                    </h3>
                                }
                                 {
                                    showEditOne === 'unit'
                                    ?
                                    <h3 className='profile-info-details-input-box'>
                                        <select onChange={(e) => handleChangeEditOne("unit", e.target.value)}>
                                            <option value="" disabled selected>Pilih Unit</option>
                                            {dataUnit.map((val) => {
                                                return (
                                                    <option value={val.idUnit} key={val.idUnit}>UNIT {val.unit}</option>
                                                )
                                            })}
                                        </select>
                                        <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                        <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne('')}/>
                                    </h3>
                                    :
                                    <h3>
                                        {unit}
                                        <img 
                                            src={Pencil} 
                                            alt="edit-button"
                                            onClick={() => setShowEditOne('unit')}
                                            />
                                    </h3>
                                }
                                {
                                    showEditOne === 'subnit'
                                    ?
                                    <h3 className='profile-info-details-input-box'>
                                        <select onChange={(e) => handleChangeEditOne("submit", e.target.value)}>
                                            <option value="" disabled selected>Pilih Subnit</option>
                                            {dataSubnit.map((val) => {
                                                return (
                                                    <option value={val.idSubnit} key={val.idUnit}>SUBNIT {val.subnit}</option>
                                                )
                                            })}
                                        </select>
                                        <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                        <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne('')}/>
                                    </h3>
                                    :
                                    <h3>
                                        {subnit}
                                        <img 
                                            src={Pencil} 
                                            alt="edit-button"
                                            onClick={() => setShowEditOne('subnit')}
                                            />
                                    </h3>
                                }
                                {
                                    showEditOne === 'nomorHp'
                                    ?
                                    <h3 className='profile-info-details-input-box'>
                                        <input type="text" placeholder={nomorHp} onChange={(e) => handleChangeEditOne("nohp", e.target.value)}/>
                                        <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                        <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne('')}/>
                                    </h3>
                                    :
                                    <h3>
                                        {nomorHp}
                                        <img 
                                            src={Pencil} 
                                            alt="edit-button"
                                            onClick={() => setShowEditOne('nomorHp')}
                                            />
                                    </h3>
                                }
                                 {
                                    showEditOne === "email"
                                    ?
                                    <h3 className='profile-info-details-input-box'>
                                        <input type="text" placeholder={email} onChange={(e) => handleChangeEditOne("email", e.target.value)} />
                                        <img src={Save} alt="save-btn" onClick={editDataPersonilOne}/>
                                        <img src={Cancel} alt="cancel-btn" onClick={() => setShowEditOne("")}/>
                                    </h3>
                                    :
                                    <h3>
                                        {email}
                                        <img 
                                            src={Pencil} 
                                            alt="edit-button"
                                            onClick={() => setShowEditOne("email")}
                                            />
                                    </h3>
                                }
                            </div>
                        </div>

                    </div>
                </div>


            </div>
                <button className="log-out-btn" onClick={logOutBtn}>Log Out</button>

        </div>
    )
}

export default Profile;