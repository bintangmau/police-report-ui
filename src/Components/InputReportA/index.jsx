// MODULE
import React, { useState } from 'react'
import Axios from 'axios'

// API
import { api } from '../../helper/database'

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

    // TO API
    const BtnInputReportA = () => {
        Axios.post(api + 'report/input-report-a', {
            mengetahuiUnit,
            NrpPelapor,
            PangkatPelapor,
            nomorLaporanPolisi,
            waktuKejadian,
            waktuKejadianJam,
            tempatKejadian,
            provinsi,
            kota,
            kecamatan,
            kelurahan,
            apaYangTerjadi,
            pelaku,
            korban,
            waktuDilaporkan,  
            waktuDilaporkanJam,
            tindakPidanaAtauPasal,
            sumir,
            namaSaksi,
            alamatSaksi,        
            uraianSingkatKejadian,
            barangBukti,
            tindakanYangDiambil,
            mengetahui,
            pelapor,    
            pangkat,
            nrp 
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

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
                    nomorLaporanPolisi={nomorLaporanPolisi}
                    setNomorLaporanPolisi={setNomorLaporanPolisi}
                    waktuKejadian={waktuKejadian}
                    setWaktuKejadian={setWaktuKejadian}
                    waktuKejadianJam={waktuKejadianJam}
                    setWaktuKejadianJam={setWaktuKejadianJam}
                    tempatKejadian={tempatKejadian}
                    setTempatKejadian={setTempatKejadian}
                    provinsi={provinsi}
                    setProvinsi={setProvinsi}
                    kota={kota}
                    setKota={setKota}
                    kecamatan={kecamatan}
                    setKecamatan={setKecamatan}
                    kelurahan={kelurahan}
                    setKelurahan={setKelurahan}
                    waktuDilaporkan={waktuDilaporkan}
                    setWaktuDilaporkan={setWaktuDilaporkan}
                    apaYangTerjadi={apaYangTerjadi}
                    setApaYangTerjadi={setApaYangTerjadi}
                    waktuDilaporkanJam={waktuDilaporkanJam}
                    setWaktuDilaporkanJam={setWaktuDilaporkanJam}
                    sumir={sumir}
                    setSumir={setSumir}
                />

                <Right 
                    namaSaksi={namaSaksi}
                    setNamaSaksi={setNamaSaksi}
                    alamatSaksi={alamatSaksi}
                    setAlamatSaksi={setAlamatSaksi}
                    barangBukti={barangBukti}
                    setBarangBukti={setBarangBukti}
                    tindakanYangDiambil={tindakanYangDiambil}
                    setTindakanYangDiambil={setTindakanYangDiambil}
                    uraianSingkatKejadian={uraianSingkatKejadian}
                    setUraianSingkatKejadian={setUraianSingkatKejadian}
                    mengetahui={mengetahui}
                    setMengetahui={setMengetahui}
                    mengetahuiUnit={mengetahuiUnit}
                    setMengetahuiUnit={setMengetahuiUnit}
                    NrpPelapor={NrpPelapor}
                    setNrpPelapor={setNrpPelapor}
                    PangkatPelapor={PangkatPelapor}
                    setPangkatPelapor={setPangkatPelapor}
                    pelapor={pelapor}
                    setPelapor={setPelapor}
                    nrp={nrp}
                    setNrp={setNrp}
                    BtnInputReportA={BtnInputReportA}
                    pangkat={pangkat}
                    setPangkat={setPangkat}
                />
                 
            </div>
        </div>
    )

}

export default InputReportA