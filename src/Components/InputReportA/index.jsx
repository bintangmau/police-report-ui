// MODULE
import React, { useState } from 'react'

// STYLE
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'

function InputReportA () {

    // LEFT CONTENT STATE
    const [ nomorLaporanPolisi, setNomorLaporanPolisi ] = useState('')
    const [ waktuKejadian, setWaktuKejadian ] = useState('')
    const [ waktuKejadianJam, setWaktuKejadianJam ] = useState('')
    const [ tempatKejadian, setTempatKejadian ] = useState('')
    const [ provinsi, setProvinsi ] = useState('')
    const [ kota, setKota ] = useState('')
    const [ kecamatan, setKecamatan ] = useState('')
    const [ kelurahan, setKelurahan ] = useState('')
    const [ apaYangTerjadi, setApaYangTerjadi ] = useState('')
    const [ pelaku, setPelaku ] = useState([''])
    const [ korban, setKorban ] = useState([''])
    const [ waktuDilaporkan, setWaktuDilaporkan ] = useState('')
    const [ tindakPidanaAtauPasal, setTindakPidanaAtauPasal ] = useState([''])
    const [ waktuDilaporkanJam, setWaktuDilaporkanJam ] = useState('')
    const [ sumir, setSumir ] = useState('') 

    // RIGHT CONTENT STATE
    const [ namaSaksi, setNamaSaksi ] = useState([''])
    const [ alamatSaksi, setAlamatSaksi ] = useState([''])
    const [ uraianSingkatKejadian, setUraianSingkatKejadian ] = useState('')
    const [ barangBukti, setBarangBukti ] = useState([''])
    const [ mengetahui, setMengetahui ] = useState('')
    const [ tindakanYangDiambil, setTindakanYangDiambil ] = useState([''])
    const [ mengetahuiUnit, setMengetahuiUnit ] = useState('')
    const [ NrpPelapor, setNrpPelapor ] = useState('')
    const [ PangkatPelapor, setPangkatPelapor ] = useState('')
    const [ pelapor, setPelapor ] = useState('')
    const [ pangkat, setPangkat ] = useState('')
    const [ nrp, setNrp ] = useState('')


    return (
        <div style={{width : "100%" , height : 800 }}>
            <h1>Input Report A</h1>

            {/* ROW CONTAINER */}
            <div className='input-a-row'>

                <Left
                    pelaku={pelaku}
                    setPelaku={setPelaku}
                    korban={korban}
                    setKorban={setKorban}
                    tindakPidanaAtauPasal={tindakPidanaAtauPasal}
                    setTindakPidanaAtauPasal={setTindakPidanaAtauPasal}
                />

                <Right 
                    saksi={namaSaksi}
                    setNamaSaksi={setNamaSaksi}
                    alamatSaksi={alamatSaksi}
                    setAlamatSaksi={setAlamatSaksi}
                    barangBukti={barangBukti}
                    setBarangBukti={setBarangBukti}
                    tindakanYangDiambil={tindakanYangDiambil}
                    setTindakanYangDiambil={setTindakanYangDiambil}
                />
                 
            </div>
        </div>
    )

}

export default InputReportA