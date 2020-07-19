// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../../helper/database'
import swal from 'sweetalert'
import io from 'socket.io-client'

export default function ManageJabatan() {
    const [ dataJabatan, setDataJabatan ] = useState([])
    const [ showAdd, setShowAdd ] = useState(false)
    const [ newJabatan, setNewJabatan ] = useState('')

    const getDataJabatan = () => {
        Axios({
            method: 'GET',
            url: api + 'admin/get-data-jabatan',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataJabatan(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const renderDataJabatan = () => {
        return dataJabatan.map((val) => {
            return (
                <tr className="manage-table-personil-content">
                    <td>{val.idJabatan}</td>
                    <td>{val.jabatan}</td>
                    <td>
                        <button onClick={() => deleteJabatan(val.idJabatan)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const addJabatan = () => {
        if(!newJabatan) {
            return null 
        } else {
            Axios({
                method: "post",
                url: api + 'admin/add-field-personil',
                data: {
                    field: 'jabatan',
                    value: newJabatan
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setNewJabatan('')
                setShowAdd(false)
                swal('Success', 'Jabatan Ditambahkan', 'success')
            })
            .catch((err) => {
                setShowAdd(false)
                setNewJabatan('')
                // console.log(err)
            })
        }
    }

    const deleteJabatan = (id) => {
        if(window.confirm('Anda yakin menghapus field ini? sangat beresiko untuk jalannya aplikasi')) {
            Axios({
                method: "POST",
                url: api + 'admin/delete-field-personil',
                data: {
                    field: 'jabatan',
                    idName: 'idJabatan',
                    id
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((res) => {
                swal('Deleted', 'Jabatan Dihapus', 'success')
            })
            .catch((err) => {
                return null
            })
        }
    }
    useEffect(() => {
        getDataJabatan()
        const socket = io(`${api}`)
        socket.on('input-new-jabatan', data => {
            getDataJabatan()
        })
        socket.on('delete-field-jabatan', data => {
            getDataJabatan()
        })
    }, [])
    
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h1>Manage Jabatan</h1>
                <h1>
                    {
                        showAdd
                        ?
                        null
                        :
                        <button className="manage-table-personil-add-btn" onClick={() => setShowAdd(true)}>
                            Tambah Jabatan +
                        </button>
                    }
                </h1>
            </div>

            {
                showAdd
                ?
                <div style={{ display: 'flex' }}>
                    <input type="text" className="manage-table-personil-input" style={{ paddingLeft: '10px' }} onChange={(e) => setNewJabatan(e.target.value)}/>
                    <button     
                        className="manage-table-personil-btn" 
                        style={{backgroundColor: '#00ab2e'}}
                        onClick={addJabatan}
                    >
                            Add
                    </button>
                    <button className="manage-table-personil-btn" style={{backgroundColor: 'red'}} onClick={() => setShowAdd(false)}>Cancel</button>
                </div>
                :
                null
            }

            <table className="manage-table-personil">
               <tr className="manage-table-personil-header">
                   <th>Id</th>
                   <th>Jabatan</th>
                   <th>Delete</th>
               </tr>
               {renderDataJabatan()}
            </table>
        </div>
    )
}
