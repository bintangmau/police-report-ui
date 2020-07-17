// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../../helper/database'
import swal from 'sweetalert'
import io from 'socket.io-client'

export default function ManagePangkat() {
    const [ dataPangkat, setDataPangkat ] = useState([])
    const [ showAdd, setShowAdd ] = useState(false)
    const [ newPangkat, setNewPangkat ] = useState('')

    const getDataPangkat = () => {
        Axios.get(api + 'admin/get-data-pangkat')
        .then((res) => {
            setDataPangkat(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const renderDataPangkat = () => {
        return dataPangkat.map((val) => {
            return (
                <tr className="manage-table-personil-content">
                    <td>{val.idPangkat}</td>
                    <td>{val.pangkat}</td>
                    <td>
                        <button>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    const addNewPangkat = () => {
        if(!newPangkat) {
            return null
        }
        Axios({
            method: "post",
            url: api + 'admin/add-field-personil',
            data: {
                field: 'pangkat',
                value: newPangkat
            },
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setNewPangkat('')
            setShowAdd(false)
            swal('Success', 'Pangkat Ditambahkan!', 'success')
        })
        .catch((err) => {
            setShowAdd(false)
            setNewPangkat('')
        })
    }

    useEffect(() => {
        getDataPangkat()
        const socket = io(`${api}`)
        socket.on('input-new-pangkat', data => {
            getDataPangkat()
        })
    }, [])
    
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <h1>Manage Pangkat</h1>
                <h1>
                    {
                        showAdd
                        ?
                        null
                        :
                        <button className="manage-table-personil-add-btn" onClick={() => setShowAdd(true)}>
                            Tambah Pangkat +
                        </button>
                    }
                </h1>
            </div>

            {
                showAdd
                ?
                <div style={{ display: 'flex' }}>
                    <input type="text" className="manage-table-personil-input" style={{ paddingLeft: '10px' }} onChange={(e) => setNewPangkat(e.target.value)}/>
                    <button className="manage-table-personil-btn" style={{backgroundColor: '#00ab2e'}} onClick={addNewPangkat}>Add</button>
                    <button className="manage-table-personil-btn" style={{backgroundColor: 'red'}} onClick={() => setShowAdd(false)}>Cancel</button>
                </div>
                :
                null
            }

            <table className="manage-table-personil">
               <tr className="manage-table-personil-header">
                   <th>Id</th>
                   <th>Pangkat</th>
                   <th>Delete</th>
               </tr>
               {renderDataPangkat()}
            </table>
        </div>
    )
}
