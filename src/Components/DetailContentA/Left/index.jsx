
import React from 'react'

export default function Left(props) {
    const {
        data, showDate
    } = props
    return (
        <div className='detail-a-left'>
             <div className="da-title" style={{marginTop : 0}}>
                    Status
                </div>

                <div className="da-text">
                     {data.statusLaporan}
                </div>

                <div className="da-title" >
                    Unit
                </div>

                <div className="da-text">
                    {data.kanit}
                </div>

                <div className="da-title" >
                    Subnit
                </div>

                <div className="da-text">
                    {data.kasubmit}
                </div>

                <div className="da-title" >
                    Penyidik
                </div>

                <div className="da-text">
                    {data.penyidik}
                </div>

                <div className="da-text">
                    Hodor
                </div>

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

        </div>
    )
}
