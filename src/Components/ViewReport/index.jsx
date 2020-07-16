// MODULE
import React , { useEffect , useState } from 'react'
import Axios from 'axios'

// STYLE
import './style.css'

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
            url : `${api}report/get-data-report`,
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