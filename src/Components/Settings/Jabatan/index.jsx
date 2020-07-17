// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../../helper/database'

export default function ManageJabatan() {
    const [ dataJabatan, setDataJabatan ] = useState([])
    const [ showAdd, setShowAdd ] = useState(false)

    const getDataJabatan = () => {
        Axios.get(api + 'admin/get-data-jabatan')
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
                        <button>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    useEffect(() => {
        getDataJabatan()
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
                    <input type="text" className="manage-table-personil-input" style={{ paddingLeft: '10px' }}/>
                    <button className="manage-table-personil-btn" style={{backgroundColor: '#00ab2e'}}>Add</button>
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
