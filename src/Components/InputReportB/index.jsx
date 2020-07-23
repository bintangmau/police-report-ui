// MODULES
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import swal from 'sweetalert'
import io from 'socket.io-client'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

// API
import { api } from '../../helper/database'

// CSS
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'
import Lower from './LowerContent'

export default function InputReportB() {

    const history = useHistory()
    const jabatanState = useSelector(state => state.user.jabatan)

    if(jabatanState !== "ADMIN") {
        history.push('/')
    }

    // STATE
    const [ emptyMessage, setEmptyMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ dataPangkat, setDataPangkat ] = useState([])
    const [ dataUnit, setDataUnit ] = useState([])

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
    const [waktuKejadianJam,setWaktuKejadianJam] = useState(null)
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
    const [waktuDilaporkanJam,setWaktuDilaporkanJam] = useState(null)
    const [uraianSingkatKejadian,setUraianSingkatKejadian] = useState("")

    const BtnInputReportB = () => {
        if(!nomorLaporanPolisi) {
            setEmptyMessage('Masukkan Nomor Laporan Polisi!')
        } else if(!pelapor) {
            setEmptyMessage('Masukkan Nama Pelapor!')
        } else if(!tempatLahir) {
            setEmptyMessage('Masukkan Tempat Lahir Pelapor')
        } else if(!tanggalLahir) {
            setEmptyMessage('Masukkan Tanggal Lahir!')
        } else if(!jenisKelamin) {
            setEmptyMessage('Pilih Jenis Kelamin!')
        } else if(!wargaNegara) {
            setEmptyMessage('Masukkan Kewarganegaraan!')
        } else if(!agama) {
            setEmptyMessage('Masukkan Agama Pelapor!')
        } else if(!pekerjaan) {
            setEmptyMessage('Masukkan Pekerjaan Pelapor!')
        } else if(!alamat) {
            setEmptyMessage('Masukkan Alamat Pelapor!')
        } else if(!provinsiPelapor) {
            setEmptyMessage("Masukkan Provinsi Pelapor!")
        } else if(!kotaPelapor) {
            setEmptyMessage("Masukkan Kota Pelapor!")
        } else if(!kecamataPelapor) {
            setEmptyMessage("Masukkan Kecamatan Pelapor!")
        } else if(!kelurahanPelapor) {
            setEmptyMessage("Masukkan Kelurahan Pelapor!")
        } else if(!nomorTelpon) {
            setEmptyMessage("Masukkan Nomor Telepon Pelapor!")
        } else if(!mengetahui) {
            setEmptyMessage("Masukkan Nama Petugas Yang Mengetahui!")
        } else if(!NRPMengetahui) {
            setEmptyMessage("Masukkan NRP Yang Mengetahui!")
        } else if(!pangkatMengetahui) {
            setEmptyMessage("Masukkan Pangkat Yang Mengetahui!")
        } else if(!unitMengetahui) {
            setEmptyMessage("Masukkan Unit Yang Mengetahui!")
        } else if(!yangMenerimaLaporan) {
            setEmptyMessage("Masukkan Nama Yang Menerima Laporan!")
        } else if(!NRPyangMenerimaLaporan) {
            setEmptyMessage("Masukkan NRP Yang Menerima Laporan!")
        } else if(!pangkatyangMenerimaLaporan) {
            setEmptyMessage("Masukkan Pangkat Yang Menerima Laporan!")
        } else if(!tindakanYangDiambil[0]) {
            setEmptyMessage("Masukkan Tindakan Yang Diambil!")
        } else if(!tindakPidanaDanPasal[0]) {
            setEmptyMessage("Masukkan Tindak Pidana/Pasal!")
        } else if(!barangBukti[0]) {
            setEmptyMessage("Masukkan Barang Bukti!")
        } else if(!waktuKejadian) {
            setEmptyMessage("Masukkan Tanggal Kejadian!")
        } else if(!tempatKejadian) {
            setEmptyMessage("Masukkan Tempat Kejadian!")
        } else if(!provinsiKejadian) {
            setEmptyMessage("Pilih Provinsi Kejadian!")
        } else if(!kotaKejadian) {
            setEmptyMessage("Pilih Kota Kejadian!")
        } else if(!kecamatanKejadian) {
            setEmptyMessage("Pilih Kecamatan Kejadian!")
        } else if(!kelurahanKejadian) {
            setEmptyMessage("Pilih Kelurahan Kejadian!")
        } else if(!apaYangTerjadi) {
            setEmptyMessage("Tulis Apa Yang Terjadi!")
        } else if(!terlapor) {
            setEmptyMessage("Masukkan Nama Yang Terlapor!")
        } else if(!korban[0]) {
            setEmptyMessage("Masukkan Nama Korban!")
        } else if(!saksi[0]) {
            setEmptyMessage("Masukkan Nama Saksi!")
        } else if(!waktuDilaporkan) {
            setEmptyMessage("Masukkan Tanggal Pelaporan!")
        } else if(!uraianSingkatKejadian) {
            setEmptyMessage("Tulis Uraian Singkat Kejadian")
        } else {
            setEmptyMessage('')
            setLoading(true)
            const jamKejadian = new Date(waktuKejadianJam).getHours() + ':'  + new Date(waktuKejadianJam).getMinutes()
            const jamPelaporan = new Date(waktuDilaporkanJam).getHours() + ':'  + new Date(waktuDilaporkanJam).getMinutes()
            Axios({
                method: "POST",
                url: api + 'report/input-report-b',
                data: {
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
                    waktuKejadianJam: jamKejadian,
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
                    waktuDilaporkanJam: jamPelaporan,
                    uraianSingkatKejadian,
                    mengetahui,
                    yangMenerimaLaporan,
                    tindakanYangDiambil,
                    tindakPidanaDanPasal,
                    barangBukti
                },
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then((res) => {
                setLoading(false)
                swal("Success", "Input Laporan B Sukses", 'success')
            })
            .catch((err) => {
                setLoading(false)
                // console.log(err)
            })
        }
    }

    const getDataPangkat = () => {
        Axios({ 
            method: "GET", 
            url: api + 'admin/get-data-pangkat',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataPangkat(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    const getDataUnit = () => {
        Axios({ 
            method: "GET", 
            url: api + 'admin/get-data-unit',
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then((res) => {
            setDataUnit(res.data)
        })
        .catch((err) => {
            return null
        })
    }

    useEffect(() => {
        getDataPangkat()
        getDataUnit()
        const socket = io(`${api}`)
        socket.on('input-new-unit', data => {
            getDataUnit()
        })
        socket.on('input-new-pangkat', data => {
            getDataPangkat()
        })
    }, [])

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
                    dataPangkat={dataPangkat}
                    dataUnit={dataUnit}
                />

           </div>

            <Lower 
                loading={loading}
                emptyMessage={emptyMessage}
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
