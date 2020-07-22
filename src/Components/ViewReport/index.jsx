// MODULE
import React , { useEffect , useState } from 'react'
import Axios from 'axios'
import { useSelector } from 'react-redux'

// STYLE
import './style.css'

// COMPONENT 
import TableContent from './TableContent'
import Loader from '../Loader'
import io from 'socket.io-client'

// ENDPOINT
import {api} from '../../helper/database/index'

function ViewReport () {
    const jabatanState = useSelector(state=>state.user.jabatan) 

    const [offset,setOffset] = useState(0)
    const [dataReport,setDataReport] = useState([])
    const [ searchMessage, setSearchMessage ] = useState('')
    
    const style = {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }

    useEffect(()=>{
        getDataReport(0)
    },[])

    useEffect(()=>{
        // getDataReport(0)
        if (jabatanState) {
            const socket = io(`${api}`)
            socket.on('input-report-a', data => {
                getDataReport(0,true)
            })
            socket.on('update-status-disposisi-unit', data => {
                getDataReport(0,true)
            })
            socket.on('update-status-disposisi-subnit', data => {
                getDataReport(0,true)
            })
            socket.on('update-status-disposisi-penyidik', data => {
                getDataReport(0,true)
            })
        }
 
    },[jabatanState])   

    let getDataReport = (offsetParams,isNotif) => {
        setDataReport([])
        Axios({
            method : "POST",
            url : `${api}report/get-data-report`,
            data : {
                offset : offsetParams ,
                limit : 10
            },
            headers : {
                token : localStorage.getItem('token')
            }
        })
        .then(({data})=>{
            setDataReport(data)
        })
        .catch(console.log)
    }

    let searchData = (str) => {
        setDataReport([])
        Axios({
            method : "GET",
            url : `${api}report/search-report-a?keyword=${str}`
        })
        .then(({data})=>{
            if(data.length < 1) {
                setSearchMessage("Hasil Pencarian Tidak Ditemukan")
            }
            // setSearchMessage('')
            setDataReport(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="view-report-container-02">

            <div style={{ display: 'flex', width: '100%' }}>
                <h1>Lihat Laporan A</h1> 
                {
                    !dataReport[0]
                    ?
                    <div style={{ marginTop: '24px', marginLeft: '10px' }}>
                        <Loader />
                    </div>
                    :
                    null
                }
            </div>

            <input 
                type="text" 
                className="search-report-02" 
                placeholder="Cari Laporan"
                onChange={e=>searchData(e.target.value)}
            />
            {searchMessage}
            <TableContent 
                getDataReport={getDataReport} 
                dataReport={dataReport}
                offset={offset}
                setOffset={setOffset}
            />

        </div>
    )

}

export default ViewReport