// MODULE
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { api } from '../../helper/database'

// STYLE
import './style.css'

// COMPONENTS
import Left from './Left'
import Right from './Right'
import Loader from '../Loader'

function DetailContentA (props) {
    const params = props.match.params.id
    const [ data, setData ] = useState([])

    const getDetailsReportA = () => {
        Axios.get(api + 'report/get-report-a-details/' + params)
        .then((res) => {
            setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getDetailsReportA()
    }, [])
    return (
        <div>
           <div style={{ display: 'flex', width: '100%' }}>
                <h1>Details Laporan A</h1> 
                {
                    data.length === 0
                    ?
                    <div style={{ marginTop: '24px', marginLeft: '10px' }}>
                        <Loader />
                    </div>
                    :
                    null
                }
            </div>

            <div className="detail-a-container">

                <Left data={data}/>

                <Right />

            </div>

        </div>
    )

}

export default DetailContentA