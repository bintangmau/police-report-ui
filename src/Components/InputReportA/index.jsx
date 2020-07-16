// MODULE
import React, { useState } from 'react'
import Axios from 'axios'
import swal from 'sweetalert'

// API
import { api } from '../../helper/database'

// STYLE
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'

function InputReportA () {

    // STATE
    const [ emptyMessage, setEmptyMessage ] = useState('')
    const [ loading, setLoading ] = useState(false)

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
        if(!nomorLaporanPolisi) {
            setEmptyMessage('Masukkan Nomor Laporan!')
        } else if(!waktuKejadian) {
            setEmptyMessage('Masukkan Tanggal Kejadian!')
        } else if(!waktuKejadianJam) {
            setEmptyMessage('Masukkan Waktu Kejadian!')
        } else if(!tempatKejadian) {
            setEmptyMessage('Masukkan Tempat Kejadian!')
        } else if(!provinsi) {
            setEmptyMessage('Pilih Provinsi Kejadian!')
        } else if(!kota) {
            setEmptyMessage('Pilih Kabupaten/Kota Kejadian')
        } else if(!kecamatan) {
            setEmptyMessage('Pilih Kecamatan Kejadian!')
        } else if(!kelurahan) {
            setEmptyMessage('Pilih Desa/Kelurahan Kejadian!')
        } else if(!apaYangTerjadi) {
            setEmptyMessage('Masukkan Apa Yang Terjadi!')
        } else if(!pelaku[0]) {
            setEmptyMessage('Masukkan Nama Pelaku!')
        } else if(!korban[0]) {
            setEmptyMessage('Masukkan Nama Korban!')
        } else if(!waktuDilaporkan) {
            setEmptyMessage('Masukkan Tanggal Dilaporkan!')
        } else if(!tindakPidanaAtauPasal[0]) {
            setEmptyMessage('Masukkan Tindak Pidana Atau Pasal!')
        } else if(!sumir) {
            setEmptyMessage('Pilih Sumir!')
        } else if(!namaSaksi[0]) {
            setEmptyMessage('Masukkan Nama Saksi!')
        } else if(!alamatSaksi[0]) {
            setEmptyMessage('Masukkan Alamat Saksi')
        } else if(!barangBukti[0]) {
            setEmptyMessage('Masukkan Barang Bukti!')
        } else if(!tindakanYangDiambil[0]) {
            setEmptyMessage('Masukkan Tindakan Yang Diambil!')
        } else if(!pelapor) {
            setEmptyMessage("Masukkan Nama Pelapor!")
        } else if(!PangkatPelapor) {
            setEmptyMessage("Masukkan Pangkat Pelapor!")
        } else if(!NrpPelapor) {
            setEmptyMessage("Masukkan NRP Pelapor!")
        } else if(!mengetahui) {
            setEmptyMessage("Masukkan Nama Yang Mengetahui")
        } else if(!pangkat) {
            setEmptyMessage("Masukkan Pangkat Yang Mengetahui!")
        } else if(!nrp) {
            setEmptyMessage("Masukkan NRP Yang Mengetahui!")
        } else if(!mengetahuiUnit) {
            setEmptyMessage("Masukkan Unit Yang Mengetahui!")
        } else if(!uraianSingkatKejadian) {
            setEmptyMessage("Masukkan Uraian Singkat Kejadian!")
        } else {
            setEmptyMessage("")
            const jamKejadian = new Date(waktuKejadianJam).getHours() + ':'  + new Date(waktuKejadianJam).getMinutes()
            const jamPelaporan = new Date(waktuDilaporkanJam).getHours() + ':'  + new Date(waktuDilaporkanJam).getMinutes()
            Axios.post(api + 'report/input-report-a', {
                mengetahuiUnit,
                NrpPelapor,
                PangkatPelapor,
                nomorLaporanPolisi,
                waktuKejadian,
                waktuKejadianJam: jamKejadian,
                tempatKejadian,
                provinsi,
                kota,
                kecamatan,
                kelurahan,
                apaYangTerjadi,
                pelaku,
                korban,
                waktuDilaporkan,  
                waktuDilaporkanJam: jamPelaporan,
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
                setLoading(false)
                swal('Success', 'Input Laporan A Berhasil!', 'success')
            })
            .catch((err) => {
                setLoading(false)
            })
        }
    }

    return (
        <div style={{width : "100%" , height : 800 }}>
            <h1>Input Report A</h1>

            {/* ROW CONTAINER */}
            <div className='input-a-row'>

                <Left
                    emptyMessage={emptyMessage}
                    setEmptyMessage={setEmptyMessage}
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
                    emptyMessage={emptyMessage}
                    setEmptyMessage={setEmptyMessage}
                    loading={loading}
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