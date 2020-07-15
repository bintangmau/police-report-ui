// MODULE
import React , { useEffect , useState } from 'react'
import Axios from 'axios'

// STYLE
import './style.css'

// COMPONENT 
import TableContent from './TableContent'

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
            url : `${api}report/get-data-report`,
            data : {
                offset : offsetParams ,
                limit : 5
            }
        })
        .then(({data})=>{
            console.log(data)
            setDataReport(data)
        })
        .catch(console.log)
    }

    return (
        <div className="view-report-container-02">
            <h1>Lihat Laporan</h1>
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