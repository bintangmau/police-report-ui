// MODULE
import React , { useEffect , useState } from 'react'
import Axios from 'axios'
import io from 'socket.io-client'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

// COMPONENT 
import TableContent from './TableContent'
import Loader from '../Loader'

// ENDPOINT
import {api} from '../../helper/database/index'

function ViewReport () {

    const history = useHistory()
    const jabatanState = useSelector(state => state.user.jabatan)

    const [offset,setOffset] = useState(0)
    const [dataReport,setDataReport] = useState([])
    const [ searchMessage, setSearchMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        if(jabatanState === "ADMIN") {
            history.push('/inputa')
        }
        getDataReport(0)
        const socket = io(`${api}`)
        socket.on('input-report-b', data => {
            getDataReport(0)
        })
        socket.on('update-status-disposisi-b-unit', data => {
            getDataReport(0,true)
        })
        socket.on('update-status-disposisi-b-subnit', data => {
            getDataReport(0,true)
        })
        socket.on('update-status-disposisi-b-penyidik', data => {
            getDataReport(0,true)
        })
    },[])

    let getDataReport = (offsetParams) => {
        setLoading(true)
        setDataReport([])
        setSearchMessage("")
        Axios({
            method : "POST",
            url : `${api}report/get-data-report-b`,
            data : {
                offset : offsetParams ,
                limit : 5
            },
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(({data})=>{
            if(data.length < 1) {
                setLoading(false)
                setSearchMessage("Data tidak ada")
            } else {
                setLoading(false)
                setDataReport(data)
            }
        })
        .catch((err) => 
            setLoading(false)
        )
    }

    let searchData = (str) => {
        setDataReport([])
        setSearchMessage('')
        Axios({
            method : "GET",
            url : `${api}report/search-report-b?keyword=${str}`,
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(({data})=>{
            if(data.length < 1) {
                setSearchMessage("Hasil Pencarian Tidak Ditemukan")
            }
            setDataReport(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    if(jabatanState === "ADMIN") {
        history.push('/inputa')
    }

    return (
        <div className="view-report-container-02">
            <div style={{ display: 'flex', width: '100%' }}>
                <h1>Lihat Laporan B</h1> 
                {
                    loading
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
                style={{ marginRight: '20px' }}
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