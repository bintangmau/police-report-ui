// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../../helper/database'
import swal from 'sweetalert'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function ManageSubnit() {

    const history = useHistory()
    const jabatanState = useSelector(state => state.user.jabatan)
    
    if(jabatanState !== "ADMIN") {
        history.push('/')
    }

    const [ dataSubnit, setDataSubnit ] = useState([])
    const [ showAdd, setShowAdd ] = useState(false)
    const [ newSubnit, setNewSubnit ] = useState('')

    const getDataSubnit = () => {
        Axios({ 
            method: "GET",
            url: api + 'admin/get-data-subnit',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataSubnit(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const renderDataSubnit = () => {
        return dataSubnit.map((val) => {
            return (
                <tr className="manage-table-personil-content">
                    <td>{val.idSubnit}</td>
                    <td>{val.subnit}</td>
                    <td>
                        <button onClick={() => deleteSubnit(val.idSubnit)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const addNewSubnit = () => {
        if(!newSubnit) {
            return null
        }
        Axios({
            method: "POST",
            url: api + 'admin/add-field-personil',
            data: {
                field: 'subnit',
                value: newSubnit
            },
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setNewSubnit('')
            setShowAdd(false)
            swal('Success', 'Subnit Ditambahkan', 'success')
        })
        .catch((err) => {
            setNewSubnit('')
            setShowAdd(false)
        })
    }

    const deleteSubnit = (id) => {
        if(window.confirm('Anda yakin menghapus field ini? sangat beresiko untuk jalannya aplikasi')) {
            Axios({
                method: "POST",
                url: api + 'admin/delete-field-personil',
            data: {
                field: 'subnit',
                idName: "idSubnit",
                id
            },
            headers: {
                token: localStorage.getItem('token')
            }
            })
            .then((res) => {
                swal('Deleted', 'Subnit Dihapus', 'success')
            })
            .catch(() => {
                
            })
        }
    }

    useEffect(() => {
        getDataSubnit()
        const socket = io(`${api}`)
        socket.on('input-new-subnit', data => {
            getDataSubnit()
        })
        socket.on('delete-field-subnit', data => [
            getDataSubnit()
        ])
    }, [])
    
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h1>Manage Subnit</h1>
                <h1>
                    {
                        showAdd
                        ?
                        null
                        :
                        <button className="manage-table-personil-add-btn" onClick={() => setShowAdd(true)}>
                            Tambah Subnit +
                        </button>
                    }
                </h1>
            </div>

            {
                showAdd
                ?
                <div style={{ display: 'flex' }}>
                    <input type="text" className="manage-table-personil-input" style={{ paddingLeft: '10px' }} onChange={(e) => setNewSubnit(e.target.value)}/>
                    <button className="manage-table-personil-btn" style={{backgroundColor: '#00ab2e'}} onClick={addNewSubnit}>Add</button>
                    <button className="manage-table-personil-btn" style={{backgroundColor: 'red'}} onClick={() => setShowAdd(false)}>Cancel</button>
                </div>
                :
                null
            }

            <table className="manage-table-personil">
               <tr className="manage-table-personil-header">
                   <th>Id</th>
                   <th>Subnit</th>
                   <th>Delete</th>
               </tr>
               {renderDataSubnit()}
            </table>
        </div>
    )
}
