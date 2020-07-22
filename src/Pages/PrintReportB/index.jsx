import React , { Component } from 'react'

// STYLE
import './style.css'

class PrintReportB extends Component {

    constructor (props) {
        super(props)
        this.state = {
            hari : [
                'Minggu',
                'Senin',
                'Selasa',
                'Rabu',
                'Kamis',
                'Jumat',
                'Sabtu'
            ]
        }
    }

    renderComma = (arr) => {

        let result = ''
        if (arr) {
            arr.forEach((el,index)=>{
                result += `${el}${index === arr.length -1 ? '' : ","} `
            })
        }

        return result

    }

    renderCommaObj = (arr) => {

        // console.log(arr , ' <<< INI ARR')
        if (arr ) {
            let kondisi = false
            if ( arr.length > 0) {
                let result = ''
    
                arr.forEach((el,index)=>{
                    if (el.nama && el.tgl) {
                        result += `${el.nama} (${this.showDate(el.tgl)})${index === arr.length -1 ? '' : ","} `
                    }else {
                        kondisi = true
                    }
                })
    
                if (kondisi) {
                    return '-'
                }else {
                    return result
                }
    
            }
        }
        else {
            return '-'
        }

        

    }

    renderWithDiv1 = (arr) => {

        let abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let result = ''

        // arr.forEach((el,index)=>{
        //     result += `
        //     <div class="fourth-content-second-item-value ">
        //         ${abjad[index]}. ${el}
        //     </div> \n
        // `
        // })

        // return result
        if (arr) {
            return arr.map((el,index)=>{
                return (
                    <div class="fourth-content-second-item-value ">
                        {abjad[index]}. {el}
                    </div>
                )
            })
        }else {
            return (
                <div class="fourth-content-second-item-value "></div>
            )
        }


    }

    romanNumber = (num) =>  {
        if (num == 1) {
            return 'I'
        }else if ( num == 2 ) {
            return 'II'
        }else if ( num == 3 ) {
            return 'III'
        }else if ( num == 4 ) {
            return 'IV'
        }else if ( num == 5 ) {
            return 'V'
        }else if ( num == 6 ) {
            return 'VI'
        }else if ( num == 7 ) {
            return 'VII'
        }else if ( num == 8 ) {
            return 'VIII'
        }else if ( num == 9 ) {
            return 'IX'
        }else if ( num == 10 ) {
            return 'X'
        }else if ( num == 11 ) {
            return 'XI'
        }else if ( num == 12 ) {
            return 'XII'
        }
    }

    showDate = (dateParams) => {
        if (dateParams) {

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
            return date < 9 ? "0" : "" + date + ' ' + month  + ' ' + year
        }else {
            return '-'
        }
    }

    showDate2 = (dateParams) => {
        if (dateParams) {

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
            // console.log(date , ' <<< ini date')
            // console.log(monthNumber , ' <<<< month number')
            // console.log(year , ' <<<< YEAR')
            return date + '-' +  `${monthNumber < 10 ? 0 : ""}` +  monthNumber    + '-' + year

        }else {
            return '-'
        }
    }
    
    render () {
        return (
            <div className="container">
                        <div className="content">
    
                            <div className="first-content">
                                <div style={{width: "40%"}}>
                                    <div className="first-content-1-title">
                    
                                        <div className="first-content-1-title-word">
                                            KEPOLISIAN NEGARA REPUBLIK INDONESIA
                                        </div>
                    
                                        <div className="first-content-1-title-word">
                                            DAERAH METRO JAYA
                                        </div>
                    
                                        <div className="first-content-1-title-word">
                                            RESOR METRO JAKUT
                                        </div>
    
                    
                                    </div>
                                    
                                    <div style={{marginLeft: "5px"}}>
                                        " PRO JUSTITIA "
                                    </div>
                                </div>
    
                                <div style={{fontWeight: "bold" , fontSize: "16px"}}>
                                    Model B
                                </div>
    
                            </div>
    
                            <div className="second-content">
                                
                                <img
                                    src="https://3.bp.blogspot.com/-vDSE3yUUHJs/VtVFn0qZOkI/AAAAAAAAA2E/EqICaTGQ5nE/s1600/Logo%2BPOLRI%2B-%2BKepolisian%2BRepublik%2BIndonesia%2BBW.jpg"
                                    className="image-content-1"
                                />
    
                                <div className="laporan-polisi-1-word">
                                    LAPORAN POLISI
                                </div>

                                {/* {this.romanNumber( new Date(this.props.data.waktuDilaporkan).getMonth() )} / {new Date(this.props.data.waktuDilaporkan).getFullYear()} / PMJ /RESJU */}
    
                                <div className="second-content-first-item">
                                    {this.props.data.nomorLaporanPolisi}  
                                </div>
    
                            </div>
    
                            <div className="content-pdf-title-1">
                                
                                <div className="content-pdf-title-1-word">
                                    YANG MELAPORKAN
                                </div>
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Nama
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1-name-item">
                                        <u>{this.props.data.pelapor}</u>
                                    </div>
                                
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Tempat Tanggal Lahir
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.tempatLahir} , {this.showDate2(this.props.data.tanggalLahir)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Jenis Kelamin
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.jenisKelamin}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Warga Negara/Suku/Agama
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.wargaNegara.toUpperCase()}/{this.props.data.agama.toUpperCase()}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Pekerjaan
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.pekerjaan.toUpperCase()}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Alamat
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        { this.props.data.alamat && this.props.data.alamat}, { this.props.data.kelurahanPelapor && this.props.data.kelurahanPelapor}, {this.props.data && this.props.data.kecamataPelapor}, {this.props.data.kotaPelapor}, { this.props.data.provinsiPelapor && this.props.data.provinsiPelapor}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            No. Telp/Fax/Email
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.nomorTelpon}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-title-1">
                                
                                <div className="content-pdf-title-1-word">
                                    PERISTIWA YANG DILAPORKAN
                                </div>
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Waktu Kejadian
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        { this.showDate2(this.props.data.waktuKejadian) } {this.props.data.waktuKejadianJam}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Tempat Kejadian
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.tempatKejadian.toUpperCase()}, {this.props.data.kelurahanKejadian.toUpperCase()}, {this.props.data.kecamatanKejadian.toUpperCase()}, {this.props.data.kotaKejadian.toUpperCase()}, {this.props.data.provinsiKejadian.toUpperCase()}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Apa Yang Terjadi
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.apaYangTerjadi}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Terlapor
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.terlapor}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Korban
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        { this.renderComma(this.props.data.korban)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Saksi
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.renderComma(this.props.data.saksi)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Waktu Dilaporkan
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        { this.showDate2(this.props.data.waktuDilaporkan) }, {this.props.data.waktuDilaporkanJam}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-title-1">
                                
                                <div className="content-pdf-title-1-word">
                                    URAIAN SINGKAT KEJADIAN
                                </div>
    
                            </div>
    
                            <div className="content-pdf-large-content">
                                {this.props.data.uraianSingkatKejadian}
                            </div>
    
                            <div className="content-pdf-title-1">
                                
                                <div className="content-pdf-title-1-word">
                                    PERKEMBANGAN LAPORAN
                                </div>
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Langkah Yang Sudah Diambil
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                       {this.props.data.langkahYangSudahDiAmbil}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Kesimpulan Sementara
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                       {this.props.data.kesimpulanSementara}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Hambatan
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.Hambatan}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Rencana Tindak Lanjut
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.props.data.rencanaTindakLanjut}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-title-1">
                                
                                <div className="content-pdf-title-1-word">
                                    KONTROL PERKARA
                                </div>
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Klarifikasi
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.renderCommaObj(this.props.data.klarifikasi)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Gelar Perkara Naik Sidik
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        { this.showDate(this.props.data.naikSidik) }
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            Gelar Perkara Naik Tersangka
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.showDate(this.props.data.naikTersangka)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            BAP Saksi
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.renderCommaObj(this.props.data.BAPSaksi)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div className="content-pdf-item-1">
    
                                <div className="content-pdf-per-item-1">
    
                                    <div className="content-pdf-key-1">
    
                                        <div>
                                            BAP Tersangka
                                        </div>
    
                                        <div>
                                            :
                                        </div>
    
                                    </div>
    
                                    <div className="content-pdf-value-1">
                                        {this.renderCommaObj(this.props.data.BAPTersangka)}
                                    </div>
    
                                </div>
    
    
                            </div>
    
                            <div style={{marginTop : "300px"}} className="third-pdf-content">
                                <div style={{marginLeft: "5px" , marginBottom: "20px" , marginTop: "10px"}}>
                                    <div style={{fontSize: "13px"}}>
                                        Pelapor atau Pengadu, memberikan keteranganny Kemudian membubuhkan
                                    </div>
                                    <div style={{fontSize: "13px"}}>
    
                                        tanda tangan
                                    </div>
                                </div>
                                <div style={{
                                                width: "auto" , 
                                                marginRight: "15px" , 
                                                marginBottom: "10px", 
                                                marginTop: "10px" , 
                                                display: "flex" , 
                                                justifyContent: "center" , 
                                                alignItems: "center" , 
                                                alignContent: "center" , 
                                                flexDirection: "column"
                                            }}>
                                    <div style={{marginBottom: "20px" , fontSize: "13px"}}>PELAPOR</div>
                                    <div style={{fontSize: "13px"}}>
                                        {this.props.data.pelapor.toUpperCase()}
                                    </div>
                                </div>
                            </div>
    
                            <div className="fourth-content">
    
                                <div style={{fontWeight: "bold" , fontSize: "14px" , marginBottom: "5px" , marginTop: "5px"}}>
                                    Catatan Kepolisian
                                </div>
    
                                <div style={{width: "100%" , display: "flex",flexDirection: "row" , marginTop: "5px" }}>
                                    <div className="fourth-content-first-item">
                                        1.
                                    </div>
                                    <div className="fourth-content-second-item-key">
                                        Tindakan yang diambil
                                    </div>
                                </div>
                                {this.renderWithDiv1(this.props.data.tindakanYangDiAmbil)}
                                <div style={{width: "100%" , display: "flex" , flexDirection: "row" , marginTop: "5px" }}>
                                    <div className="fourth-content-first-item">
                                        2.
                                    </div>
                                    <div className="fourth-content-second-item-key">
                                        Tindak Pidana Apa/Pasal
                                    </div>
                                </div>
    
                                {this.renderWithDiv1(this.props.data.tindakPidanaDanPasal)}
    
                                <div style={{width: "100%" , display: "flex" , flexDirection: "row" , marginTop: "5px" }}>
                                    <div className="fourth-content-first-item">
                                        3.
                                    </div>
                                    <div className="fourth-content-second-item-key">
                                        Barang Bukti
                                    </div>
                                </div>
    
                                {this.renderWithDiv1(this.props.data.barangBukti)}
    
                                
    
                            </div>
    
                            <div className="last-content">
    
                                <div className="last-content-first-item">
                                    <div style={{marginBottom: "10px" }}>Mengetahui</div>
                                    <div>a.n KEPALA KEPOLISIAN RESOR METRO JAKUT</div>
                                    <div>KAP SPKT</div>
                                    <div>u.b</div>
                                    <div>{this.props.data.unitMengetahui}</div>
    
                                    <div style={{marginTop: "80px" , width: "auto" ,  fontSize: "15px" , fontWeight: "bold"}}>
                                        {this.props.data.mengetahui}
                                    </div>
    
                                    <div style={{fontSize: "15px" , fontWeight: "bold" , borderTopWidth : "1.5px" , borderTopStyle : "solid" ,  borderTopColor : "black"   }}>
                                        {this.props.data.pangkatMengetahui + " NRP " + this.props.data.NRPMengetahui} 
                                    </div>
    
                                </div>
    
                                <div className="last-content-first-item">
    
                                    <div>Jakarta Utara, {this.showDate(this.props.data.waktuDilaporkan)}</div>
    
                                    <div style={{marginTop: "25px" }}>
                                        Yang menerima Laporan
                                    </div>
    
                                    <div style={{fontSize: "15px" , fontWeight: "bold" , marginTop: "110px" }}>
                                        {this.props.data.yangMenerimaLaporan}
                                    </div>
                                    <div style={{fontSize: "15px" , fontWeight: "bold" ,  borderTopWidth : "1.5px" , borderTopStyle : "solid" ,  borderTopColor : "black" }}>
                                        {this.props.data.pangkatyangMenerimaLaporan + " NRP " + this.props.data.NRPyangMenerimaLaporan}
                                    </div>
    
                                </div>
    
                            </div>
                            
    
                        </div>
    
                    </div>
        )
    }

}

export default PrintReportB