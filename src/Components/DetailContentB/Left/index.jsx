// MODULE
import React , { useRef } from 'react'
import ReactToPrint from "react-to-print"

// COMPONENT
import PrintReportB from '../../../Pages/PrintReportB'


export default function Left(props) {


    const {
        data,
        showDate,
        dataPenyidik,
        statusLaporan
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
                    {data.pelapor}
                </div>
                
                <div className="da-title" >
                    Pasal
                </div>

                {
                   data.tindakPidanaDanPasal && data.tindakPidanaDanPasal.map((val) => {
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
                        trigger={()=> <div className="da-button"> </div> }
                        content={() => componentRef.current}
                        pageStyle=""
                    />
                }
                
                {
                    data &&
                    <div style={{display : "none"}}>
                        {
                            data &&
                            <PrintReportB
                                data={data}
                                ref={componentRef}
                            />
                        }
                    </div>
                }

        </div>
    )
}
