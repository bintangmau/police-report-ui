// MODULE
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Axios from 'axios'
import { useSelector } from 'react-redux'


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

    const [dataMember ,setDataMember] = useState([])

    // FOR CHILDREN
    const [selectedUnit,setSelectedUnit] = useState(null)
    const [selectedPenyidik,setSelectedPenyidik] = useState([])
    const [penyidikState,setPenyidikState] = useState("")

    const getDetailsReportA = () => {
        Axios({
            method: "GET",
            url: api + 'report/get-report-b-details/' + params,
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {            
            setDataMember(res.data.dataMember)
            setData(res.data.dataLaporan)
            if (res.data.dataLaporan.unit && jabatanState === "WAKASAT") {
                setSelectedUnit(res.data.dataLaporan.unit )
            }

            if (res.data.dataLaporan.subnit && jabatanState === "KANIT") {
                setSelectedUnit(res.data.dataLaporan.subnit)
            }
            
            if (res.data.dataLaporan.penyidik && jabatanState === "KASUBNIT") {
                
                setSelectedPenyidik(res.data.dataLaporan.penyidik)
            }
            // setData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    let fillPenyidik = (id) => {
        let arr = [...selectedPenyidik]
        if (selectedPenyidik.filter(e=>e === id).length > 0) {
            arr = arr.filter(e=>e !== id)
        }else {
            arr.push(id)
        }
        setSelectedPenyidik(arr)
    }

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
            url : `${api}report/update-report-status-disposisi-b`,
            data : {
                value : jabatanState !== "KASUBNIT" ? selectedUnit : selectedPenyidik,
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

    let updatePenyidik = () =>  {
        Axios({
            method : 'POST',
            data : {
                idLaporan : params,
                value : penyidikState
            },
            headers : {
                token : localStorage.getItem('token')
            },
            url : `${api}report/update-perkembangan-laporan-b`
        })
        .then(({data})=>{
            alert('BERHASIL INPUT')
        })
        .catch(console.log)
    }

    // REDUX
    const jabatanState = useSelector(state=>state.user.jabatan) 
    
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

                {
                    data &&
                    <Left 
                        data={data}
                        showDate={showDate}    
                    />
                }

                {
                    data && jabatanState &&
                    <Right 
                        dataMember={dataMember}
                        selectedUnit={selectedUnit}
                        setSelectedUnit={setSelectedUnit}
                        disposisiKanitUnit={disposisiKanitUnit}
                        fillPenyidik={fillPenyidik}
                        selectedPenyidik={selectedPenyidik}
                        setSelectedPenyidik={setSelectedPenyidik}
                        penyidikState={penyidikState}
                        setPenyidikState={setPenyidikState}
                        updatePenyidik={updatePenyidik}
                    />
                }

            </div>

        </div>
    )

}

export default DetailContentA