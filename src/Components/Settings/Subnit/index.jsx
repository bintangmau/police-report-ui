// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../../helper/database'
import swal from 'sweetalert'
import io from 'socket.io-client'

export default function ManageSubnit() {
    const [ dataSubnit, setDataSubnit ] = useState([])
    const [ showAdd, setShowAdd ] = useState(false)
    const [ newSubnit, setNewSubnit ] = useState('')

    const getDataSubnit = () => {
        Axios.get(api + 'admin/get-data-subnit')
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
                        <button>Delete</button>
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

    useEffect(() => {
        getDataSubnit()
        const socket = io(`${api}`)
        socket.on('input-new-subnit', data => {
            getDataSubnit()
        })
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
