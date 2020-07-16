// MODULE
import React , { useEffect , useState } from 'react'
import Axios from 'axios'

// COMPONENT 
import TableContent from './TableContent'
import Loader from '../Loader'

// ENDPOINT
import {api} from '../../helper/database/index'

function ViewReport () {

    const [offset,setOffset] = useState(0)
    const [dataReport,setDataReport] = useState([])

    useEffect(()=>{
        getDataReport(0)
    },[])

    let getDataReport = (offsetParams) => {
        setDataReport([])
        Axios({
            method : "POST",
            url : `${api}report/get-data-report-b`,
            data : {
                offset : offsetParams ,
                limit : 5
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
            url : `${api}report/search-report-b?keyword=${str}`
        })
        .then(({data})=>{
            setDataReport(data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return (
        <div className="view-report-container-02">
            <div style={{ display: 'flex', width: '100%' }}>
                <h1>Lihat Laporan B</h1> 
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