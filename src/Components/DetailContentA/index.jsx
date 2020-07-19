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
    const [dataMember ,setDataMember] = useState([])

    // FOR CHILDREN
    const [selectedUnit,setSelectedUnit] = useState(null)

    const getDetailsReportA = () => {
        Axios({
            method: "GET",
            url: api + 'report/get-report-a-details/' + params,
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataMember(res.data.dataMember)
            setData(res.data.dataLaporan)

            if (res.data.dataLaporan.unit) {
                setSelectedUnit(res.data.dataLaporan.unit )
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getDetailsReportA()
    }, [])

    let showDate = (dateParams) => {
        let date = new Date(dateParams).getDate() 
        let monthNumber = new Date(dateParams).getMonth()
        let month = ''
        let year = new Date(dateParams).getFullYear()
        switch (monthNumber) {
        case 0 :
            month = 'Januari'
            break;
        case 1 :
            month = 'Februari'
            break;
        case 2 :
            month = 'Maret'
            break;
        case 3 :
            month = 'April'
            break;
        case 4 :
            month = 'mei'
            break;
        case 5 :
            month = 'Juni'
            break;
        case 6 :
            month = 'Juli'
            break;
        case 7 :
            month = 'Agustus'
            break;
        case 8 :
            month = 'September'
            break;
        case 9 :
            month = 'Oktober'
            break;
        case 10 :
            month = 'November'
            break;
        case 11 :
            month = 'desember'
            break;
        default:
            month = 'hehe'
            break;
        }
        return date + ' ' + month  + ' ' + year
    }

    let disposisiKanitUnit = () => {
        Axios({
            method : "POST",
            url : `${api}report/update-report-status-disposisi`,
            data : {
                value : selectedUnit,
                idReport : params
            },
            headers : {
                token : localStorage.getItem('token')
            }
        })
        .then(({data})=>{
            alert('SUKSES')
        })
        .catch(err=>console.log(err , ' << ERROR CUK'))
    }

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

                <Left 
                    data={data}
                    showDate={showDate}    
                />

                <Right 
                    dataMember={dataMember}
                    selectedUnit={selectedUnit}
                    setSelectedUnit={setSelectedUnit}
                    disposisiKanitUnit={disposisiKanitUnit}
                />

            </div>

        </div>
    )

}

export default DetailContentA