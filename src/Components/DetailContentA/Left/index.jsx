// MODULE
import React , { useRef } from 'react'
import ReactToPrint from "react-to-print"

// PAGES
import PrintReportA from '../../../Pages/PrintReportA'

export default function Left(props) {

    const {
        data, showDate, statusLaporan, dataPenyidik
    } = props

    const componentRef = useRef()

    return (
        <div className='detail-a-left'>
             <div className="da-title" style={{marginTop : 0}}>
                    Status
                </div>

                <div className="da-text">
                    {statusLaporan}
                </div>

                <div className="da-title" >
                    Unit
                </div>

                <div className="da-text">
                    UNIT {data.UnitYangMenangani}
                </div>

                <div className="da-title" >
                    Subnit
                </div>

                <div className="da-text">
                    SUBNIT {data.SubnitYangMenangani}
                </div>

                <div className="da-title" >
                    Penyidik
                </div>

                {dataPenyidik.map((val) => {
                    return (
                        <div className="da-text">
                            {val.nama_penyidik}
                        </div>
                    )
                })}

                <div className="da-title" >
                    Terlapor
                </div>

                <div className="da-text">
                    belum ada
                </div>

                <div className="da-title" >
                    Pelapor
                </div>

                <div className="da-text">
                    {data.pelapor && data.pelapor}
                </div>
                
                <div className="da-title" >
                    Pasal
                </div>

                {
                   data.tindakPidanaAtauPasal &&  data.tindakPidanaAtauPasal.map((val) => {
                        return (
                            <div className="da-text">
                                {val}
                            </div>
                        )
                    })
                }

 
                <div className="da-title">
                    Tempat Kejadian Perkara
                </div>

                <div className="da-text">
                    {data.tempatKejadian}
                </div>

                <div className="da-title">
                    Tanggal Kejadian
                </div>

                <div className="da-text">
                    {data.waktuKejadian && showDate(data.waktuKejadian)}
                </div>  
                
                <div className="da-title">
                    Tanggal Dilaporkan
                </div>

                <div className="da-text">
                    {data.waktuDilaporkan && showDate(data.waktuDilaporkan)}
                </div>

                <div className="da-title">
                    Uraian Singkat Kejadian
                </div>

                <div className="da-text">
                    {data.uraianSingkatKejadian}
                </div>
                
                {
                    data &&
                    <ReactToPrint
                        trigger={()=> <div className="da-button"> PRINT </div> }
                        content={() => componentRef.current}
                        pageStyle=""
                    />
                }
                
                {
                    data &&
                    <div style={{display : "none"}}>
                        {
                            data &&
                            <PrintReportA
                                data={data}
                                ref={componentRef}
                            />
                        }
                    </div>
                }


        </div>
    )
}
