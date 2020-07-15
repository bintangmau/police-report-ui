// MODULE
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'

// API
import { api } from '../../helper/database'

// STYLE

// COMPONENTS
import Left from './Left'
import Right from './Right'
import Loader from '../Loader'

function DetailContentA (props) {
    const history = useHistory()
    const params = props.match.params.id
    const [ data, setData ] = useState('')

    const getDetailsReportA = () => {
        Axios.get(api + 'report/get-report-b-details/' + params)
        .then((res) => {
            console.log(res.data)
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
                <h1>Details Laporan B</h1> 
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