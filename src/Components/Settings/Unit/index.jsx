// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../../helper/database'
import swal from 'sweetalert'
import io from 'socket.io-client'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ManageUnit() {

    const history = useHistory()
    const jabatanState = useSelector(state => state.user.jabatan)
    
    if(jabatanState !== "ADMIN") {
        history.push('/')
    }

    const [ dataUnit, setDataUnit ] = useState([])
    const [ showAdd, setShowAdd ] = useState(false)
    const [ newUnit, setNewUnit ] = useState('')

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
            console.log(err)
        })
    }

    const renderDataUnit = () => {
        return dataUnit.map((val) => {
            return (
                <tr className="manage-table-personil-content">
                    <td>{val.idUnit}</td>
                    <td>{val.unit}</td>
                    <td>
                        <button onClick={() => deleteUnit(val.idUnit)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const addNewUnit = () => {
        if(!newUnit) {
            return null
        }
        Axios({ 
            method: "POST",
            url: api + 'admin/add-field-personil',
            data: {
                field: 'unit',
                value: newUnit
            },
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setNewUnit('')
            setShowAdd(false)
            swal('Success', 'Unit Ditambahkan', 'success')
        })
        .catch((err) => {
            setNewUnit('')
            setShowAdd(false)
        })
    }

    const deleteUnit = (id) => {
        if(window.confirm('Anda yakin menghapus field ini? sangat beresiko untuk jalannya aplikasi')) {
            Axios({
                method: "POST",
                url: api + 'admin/delete-field-personil',
                data: {
                    field: "unit",
                    idName: "idUnit",
                    id
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((res) => {
                swal('Deleted', 'Unit Dihapus', 'success')
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    useEffect(() => {
        getDataUnit()
        const socket = io(`${api}`)
        socket.on('input-new-unit', data => {
            getDataUnit()
        })
        socket.on('delete-field-unit', data => {
            getDataUnit()
        })
    }, [])
    
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h1>Manage Unit</h1>
                <h1>
                    {
                        showAdd
                        ?
                        null
                        :
                        <button className="manage-table-personil-add-btn" onClick={() => setShowAdd(true)}>
                            Tambah Unit +
                        </button>
                    }
                </h1>
            </div>

            {
                showAdd
                ?
                <div style={{ display: 'flex' }}>
                    <input type="text" className="manage-table-personil-input" style={{ paddingLeft: '10px' }} onChange={(e) => setNewUnit(e.target.value)}/>
                    <button className="manage-table-personil-btn" style={{backgroundColor: '#00ab2e'}} onClick={addNewUnit}>Add</button>
                    <button className="manage-table-personil-btn" style={{backgroundColor: 'red'}} onClick={() => setShowAdd(false)}>Cancel</button>
                </div>
                :
                null
            }

            <table className="manage-table-personil">
               <tr className="manage-table-personil-header">
                   <th>Id</th>
                   <th>Unit</th>
                   <th>Delete</th>
               </tr>
               {renderDataUnit()}
            </table>
        </div>
    )
}
