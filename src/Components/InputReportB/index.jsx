// MODULES
import React, { useState } from 'react'
import Axios from 'axios'

// API
import { api } from '../../helper/database'

// CSS
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'
import Lower from './LowerContent'

export default function InputReportB() {

    // LEFT CONTENT STATE
    const [nomorLaporanPolisi,setNomorLaporanPolisi] = useState("") 
    const [pelapor,setPelapor] = useState("")
    const [tempatLahir,setTempatLahir] = useState("")
    const [tanggalLahir,setTanggalLahir] = useState("")
    const [jenisKelamin,setJenisKelamin] = useState("")
    const [wargaNegara,setWargaNegara] = useState("")
    const [agama,setAgama] = useState("")
    const [pekerjaan,setPekerjaan] = useState("")
    const [alamat,setAlamat] = useState("")
    const [provinsiPelapor,setProvinsiPelapor] = useState("")
    const [kotaPelapor,setKotaPelapor] = useState("")
    const [kecamataPelapor,setKecamataPelapor] = useState("")
    const [kelurahanPelapor,setKelurahanPelapor] = useState("")
    const [nomorTelpon,setNomorTelpon] = useState("")

    // RIGHT CONTENT STATE
    const [mengetahui,setMengetahui] = useState("")
    const [NRPMengetahui,setNRPMengetahui] = useState("")
    const [pangkatMengetahui,setPangkatMengetahui] = useState("")
    const [unitMengetahui,setUnitMengetahui] = useState("")
    const [yangMenerimaLaporan,setYangMenerimaLaporan] = useState("")
    const [NRPyangMenerimaLaporan,setNRPyangMenerimaLaporan] = useState("")
    const [pangkatyangMenerimaLaporan,setPangkatyangMenerimaLaporan] = useState("")
    const [ tindakanYangDiambil, setTindakanYangDiambil ] = useState([''])
    const [ tindakPidanaDanPasal, setTindakPidanaDanPasal ] = useState([''])
    const [ barangBukti, setBarangBukti ] = useState([''])


    // LOWER CONTENT STATE
    const [waktuKejadian,setWaktuKejadian] = useState("")
    const [waktuKejadianJam,setWaktuKejadianJam] = useState("")
    const [tempatKejadian,setTempatKejadian] = useState("")
    const [provinsiKejadian,setProvinsiKejadian] = useState("")
    const [kotaKejadian,setKotaKejadian] = useState("")
    const [kecamatanKejadian,setKecamatanKejadian] = useState("")
    const [kelurahanKejadian,setKelurahanKejadian] = useState("")
    const [apaYangTerjadi , setApaYangTerjadi] = useState("")
    const [terlapor,setTerlapor] = useState("")
    const [ korban, setKorban ] = useState([''])
    const [ saksi, setSaksi ] = useState([''])
    const [waktuDilaporkan,setWaktuDilaporkan] = useState("")
    const [waktuDilaporkanJam,setWaktuDilaporkanJam] = useState("")
    const [uraianSingkatKejadian,setUraianSingkatKejadian] = useState("")

    const BtnInputReportB = () => {
        Axios.post(api + 'report/input-report-b', {
            unitMengetahui,
            pangkatyangMenerimaLaporan,
            NRPyangMenerimaLaporan,
            pangkatMengetahui,
            NRPMengetahui,
            nomorLaporanPolisi,
            pelapor,
            tempatLahir,
            tanggalLahir,
            jenisKelamin,
            wargaNegara,
            agama,
            pekerjaan,
            alamat,
            provinsiPelapor,
            kotaPelapor,
            kecamataPelapor,
            kelurahanPelapor,
            nomorTelpon,
            waktuKejadian,
            waktuKejadianJam,
            tempatKejadian,
            provinsiKejadian,
            kotaKejadian,
            kecamatanKejadian,
            kelurahanKejadian,
            apaYangTerjadi,
            terlapor,
            korban,
            saksi,
            waktuDilaporkan,
            waktuDilaporkanJam,
            uraianSingkatKejadian,
            mengetahui,
            yangMenerimaLaporan,
            tindakanYangDiambil,
            tindakPidanaDanPasal,
            barangBukti,
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
           <h1>Input Report B</h1>

            {/* ROW CONTAINER */}
           <div className="input-b-row">
                
                <Left 
                    nomorLaporanPolisi={nomorLaporanPolisi}
                    setNomorLaporanPolisi={setNomorLaporanPolisi } 
                    pelapor={pelapor}
                    setPelapor={setPelapor}
                    tempatLahir={tempatLahir}
                    setTempatLahir={setTempatLahir}
                    tanggalLahir={tanggalLahir}
                    setTanggalLahir={setTanggalLahir}
                    jenisKelamin={jenisKelamin}
                    setJenisKelamin={setJenisKelamin}
                    wargaNegara={wargaNegara}
                    setWargaNegara={setWargaNegara}
                    agama={agama}
                    setAgama={setAgama}
                    pekerjaan={pekerjaan}
                    setPekerjaan={setPekerjaan}
                    alamat={alamat}
                    setAlamat={setAlamat}
                    provinsiPelapor={provinsiPelapor}
                    setProvinsiPelapor={setProvinsiPelapor}
                    kotaPelapor={kotaPelapor}
                    setKotaPelapor={setKotaPelapor}
                    kecamataPelapor={kecamataPelapor}
                    setKecamataPelapor={setKecamataPelapor}
                    kelurahanPelapor={kelurahanPelapor}
                    setKelurahanPelapor={setKelurahanPelapor}
                    nomorTelpon={nomorTelpon}
                    setNomorTelpon={setNomorTelpon}
                />

                <Right 
                    mengetahui={mengetahui}
                    setMengetahui={setMengetahui}
                    NRPMengetahui={NRPMengetahui}
                    setNRPMengetahui={setNRPMengetahui}
                    pangkatMengetahui={pangkatMengetahui}
                    setPangkatMengetahui={setPangkatMengetahui}
                    unitMengetahui={unitMengetahui}
                    setUnitMengetahui={setUnitMengetahui}
                    yangMenerimaLaporan={yangMenerimaLaporan}
                    setYangMenerimaLaporan={setYangMenerimaLaporan}
                    NRPyangMenerimaLaporan={NRPyangMenerimaLaporan}
                    setNRPyangMenerimaLaporan={setNRPyangMenerimaLaporan}
                    pangkatyangMenerimaLaporan={pangkatyangMenerimaLaporan}
                    setPangkatyangMenerimaLaporan={setPangkatyangMenerimaLaporan}
                    tindakanYangDiambil={tindakanYangDiambil}
                    setTindakanYangDiambil={setTindakanYangDiambil}
                    tindakPidanaDanPasal={tindakPidanaDanPasal}
                    setTindakPidanaDanPasal={setTindakPidanaDanPasal}
                    barangBukti={barangBukti}
                    setBarangBukti={setBarangBukti}
                />

           </div>

            <Lower 
                waktuKejadian={waktuKejadian}
                setWaktuKejadian={setWaktuKejadian}
                waktuKejadianJam={waktuKejadianJam}
                setWaktuKejadianJam={setWaktuKejadianJam}
                tempatKejadian={tempatKejadian}
                setTempatKejadian={setTempatKejadian}
                provinsiKejadian={provinsiKejadian}
                setProvinsiKejadian={setProvinsiKejadian}
                kotaKejadian={kotaKejadian}
                setKotaKejadian={setKotaKejadian}
                kecamatanKejadian={kecamatanKejadian}
                setKecamatanKejadian={setKecamatanKejadian}
                kelurahanKejadian={kelurahanKejadian}
                setKelurahanKejadian={setKelurahanKejadian}
                apaYangTerjadi={apaYangTerjadi }
                setApaYangTerjadi={setApaYangTerjadi}
                terlapor={terlapor}
                setTerlapor={setTerlapor}
                korban={korban}
                setKorban={setKorban}
                saksi={saksi}
                setNamaSaksi={setSaksi}
                waktuDilaporkan={waktuDilaporkan}
                setWaktuDilaporkan={setWaktuDilaporkan}
                waktuDilaporkanJam={waktuDilaporkanJam}
                setWaktuDilaporkanJam={setWaktuDilaporkanJam}
                uraianSingkatKejadian={uraianSingkatKejadian}
                setUraianSingkatKejadian={setUraianSingkatKejadian}
                BtnInputReportB={BtnInputReportB}
            />
            
        </div>
    )
}
