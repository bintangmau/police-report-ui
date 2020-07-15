// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

// API
import { api } from '../../helper/database'

// CSS
import './style.css'

// ICON
import Pin from '../../Images/Profile/pin.png'
import Pencil from '../../Images/Profile/pencil.png'
import Save from '../../Images/Profile/save.png'
import Cancel from '../../Images/Profile/cancel.png'

export default function Profile() {
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

    const handleChangeEditOne = (field, value) => {
        console.log(field)
        setFieldEdit(field)
        setValueEdit(value)
    }

    const getDataProfile = () => {
        Axios.get(api + 'user/get-data-profile/13')
        .then((res) => {
            const data = res.data[0]
            setNama(data.nama)
            setJabatan(data.jabatan)
            setNrp(data.nrp)
            setPangkat(data.pangkat)
            setUnit(data.unit)
            setSubnit(data.submit)
            setNomorHp(data.nohp)
            setEmail(data.email)
             
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const editDataPersonilOne = () => {
        Axios.post(api + 'user/edit-data-personil-one', {
            field: fieldEdit, 
            value: valueEdit,
            id: 13
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getDataProfile()
    }, [])

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
                        <h4>{jabatan}</h4>
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
                                        <input type="text" placeholder={pangkat} onChange={(e) => handleChangeEditOne("pangkat", e.target.value)}/>
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
                                        <input type="text" placeholder={unit} onChange={(e) => handleChangeEditOne("unit", e.target.value)}/>
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
                                        <input type="text" placeholder={subnit} onChange={(e) => handleChangeEditOne("submit", e.target.value)}/>
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

        </div>
    )
}
