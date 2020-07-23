// MODULE
import React , { Component } from 'react'

// STYLE
import './style.css'

class PrintReportA extends Component {

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
            return date + ' ' + month  + ' ' + year
        }else {
            return '-'
        }
    }

    showDateWithoutYear = (dateParams) => {
        if (dateParams) {

            let date = new Date(dateParams).getDate() 
            let monthNumber = new Date(dateParams).getMonth()
            let month = ''
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
            return date + ' ' + month  
        }else {
            return '-'
        }
    }

    renderWithResponsive = (arr,str) => {
        let abjad = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
        let result = ''

        arr.forEach((el,index)=>{
        //     result += `
        //     <div className="fourth-content-second-item-value">
        //         {abjad[index]}. {el}
        //     </div> \n
        // `
            result +=`
                ${str.split('>')[0]}>
                    {el}
                ${str.split('>')[1]}>
            `
        })
        // console.log(result , ' fix')
        return result 
    }

    renderDashWhite = (value) => {
        return value.map((el,index)=>{
            return (
                <div style={{marginBottom: "15px" , color: "white"}}>-</div>
            )
        })
    }

    renderValueV1 = (value) => {
        return value.map((el,index)=>{
            return (
                <div style={
                            {
                                marginBottom: "15px",
                                // paddingTop :  index !== 0 ?  4.5 : null
                            }
                        }>
                    { el}
                </div>
            )
        })
    }

    renderValueV2 = (value) => {
        return value.map((el,index)=>{
            return (
                <div style={{
                                marginBottom: "15px",
                                // paddingTop : "2px"
                            }
                        }>
                    { el}
                </div>
            )
        })
    }

    setArr = (arr,value) => {

        let result = []
        for(let i in arr) {
            result.push(value)
        }

        // console.log(result , ' <<<< FIX RESULT')

        return result

    }

    setArr2 = (arr) => {

        let result = []
        for(let i in arr) {
            result.push(arr[i])
        }

        return result

    }

    renderBarangBukti = (arr) => {
        // if (arr) {
            return arr.map((el,index)=>{
                return (
                    <div style={{width: "100%" , display: "flex" , flexDirection: "row"}}>
                        <div>
                            -
                        </div> 
                        <div style={{marginLeft: "7%"}}>
                            {el}
                        </div>
                    </div>
                )
            })
        // }
    }

    renderSaksi = (arr) => {
        if (arr) {

            return arr.map((el,index)=>{
                return (
                    <div style={{display: "flex" , flexDirection: "row" ,  width: "100%"}}>
                        <div style={{marginRight: "2%"}}>{index + 1}.</div>
                        <div>{el}</div>
                    </div>
                )
            })
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
                
                                <div style={{fontWeight: "bold", fontSize: "16px"}}>
                                    Model "A"
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

                                {/* {this.romanNumber( new Date(this.props.data.waktuDilaporkan).getMonth() )}/{new Date(this.props.data.waktuDilaporkan).getFullYear()} */}
                                
                                <div className="second-content-first-item">
                                    Nomor : {this.props.data.nomorLaporanPolisi} 
                                </div>
                
                            </div>
                
                            <div className="content-pdf-title-1">
                                
                                <div className="content-pdf-title-1-word">
                                    PERISTIWA YANG TERJADI
                                </div>
                
                            </div>
                
                            <div className="content-pdf-item-1">
                
                                <div className="content-pdf-per-item-1">
                
                                    <div style={{width: "10%"}}>
                                        1.
                                    </div>
                
                                    <div className="content-pdf-key-1">
                
                                        <div>
                                            Waktu Kejadian
                                        </div>
                
                                        <div>
                                            :
                                        </div>
                
                                    </div>
                
                                    <div className="content-pdf-value-1">
                                        Hari {this.state.hari[new Date(this.props.data.waktuKejadian).getDay()]}, {this.showDate(this.props.data.waktuKejadian)}, sekitar jam {
                                            this.props.data.waktuKejadianJam
                                        //     new Date(this.props.data.waktuKejadianJam).getHours() < 9 ? 
                                        //     '0' + new Date(this.props.data.waktuKejadianJam).getHours() : 
                                        //     new Date(this.props.data.waktuKejadianJam).getHours()                                            
                                        // }:{
                                        //     new Date(this.props.data.waktuKejadianJam).getMinutes() < 9 ? 
                                        //     '0' + new Date(this.props.data.waktuKejadianJam).getMinutes() : 
                                        //     new Date(this.props.data.waktuKejadianJam).getMinutes()
                                        }
                                    </div>
                
                                </div>
                
                
                            </div>
                
                            <div className="content-pdf-item-1">
                
                                <div className="content-pdf-per-item-1">
                
                                    <div style={{width: "10%"}}>
                                        2.
                                    </div>
                
                                    <div className="content-pdf-key-1">
                
                                        <div>
                                            Tempat Kejadian
                                        </div>
                
                                        <div>
                                            :
                                        </div>
                
                                    </div>
                
                                    <div className="content-pdf-value-1">
                                        {this.props.data.tempatKejadian.toUpperCase()}, {this.props.data.kelurahan.toUpperCase()}, {this.props.data.kecamatan.toUpperCase()}, {this.props.data.kota.toUpperCase()}, {this.props.data.provinsi.toUpperCase()}
                                    </div>
                
                                </div>
                
                
                            </div>
                
                            <div className="content-pdf-item-1">
                
                                <div className="content-pdf-per-item-1">
                
                                    <div style={{width: "10%"}}>
                                        3.
                                    </div>
                
                                    <div className="content-pdf-key-1">
                
                                        <div>
                                            Apa Yang terjadi
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
                
                                    <div style={{width: "10%"}}>
                                        4.
                                    </div>
                
                                    <div className="content-pdf-key-1">
                
                                        <div>
                                            Siapa
                                        </div>
                
                                        <div>
                                            <div style={{marginBottom: "15px"}}>a) Pelaku</div>
                
                                            {/* DASH WHITE 678 ===== */}
                                            {
                                                this.props.data.pelaku.length > 0 ?
                                                this.renderDashWhite( this.setArr(this.props.data.pelaku.filter((e,index)=>index !== 0)) ) :
                                                <div style={{marginBottom: "15px" , color: "white"}}>-</div>
                                            }
                
                                            <div style={{marginBottom: "15px"}}>b) Korban</div>
                                        </div>
                
                                        <div>
                                            {
                                                this.props.data.pelaku.length > 0 ? this.renderValueV1(this.setArr( this.props.data.pelaku , ':' )) : ""
                                            }
                                            {this.renderValueV1(this.setArr( this.props.data.korban  , ':' ))}
                                        </div>
                                        
                
                                    </div>
                
                                    <div className="content-pdf-value-1">
                                        <div>
                                            {
                                                this.props.data.pelaku.length > 0 ? this.renderValueV1(this.setArr2( this.props.data.pelaku  )) : <div style={{marginBottom: "15px" , color: "white"}}>-</div>
                                            }
                                            {
                                                this.props.data.pelaku.length > 0 ? "" : <div style={{marginBottom: "15px" , color: "white"}}>-</div>
                                            }
                                            {
                                                this.props.data.korban.length > 0 ? this.renderValueV2(this.setArr2( this.props.data.korban  )) : ""
                                            }

                                        </div>
                                    </div>
                
                                </div>
                
                
                            </div>
                
                            <div className="content-pdf-item-1">
                
                                <div className="content-pdf-per-item-1">
                
                                    <div style={{width: "10%"}}>
                                        5.
                                    </div>
                
                                    <div className="content-pdf-key-1">
                
                                        <div>
                                            Bagaimana Terjadi
                                        </div>
                
                                        <div>
                                            :
                                        </div>
                
                                    </div>
                
                                    <div className="content-pdf-value-1">
                                        Lihat uraian dibawah
                                    </div>
                
                                </div>
                
                
                            </div>
                
                            <div className="content-pdf-item-1">
                
                                <div className="content-pdf-per-item-1">
                
                                    <div style={{width: "10%"}}>
                                        6.
                                    </div>
                
                                    <div className="content-pdf-key-1">
                
                                        <div>
                                            Dilaporkan pada
                                        </div>
                
                                        <div>
                                            :
                                        </div>
                
                                    </div>
                
                                    <div className="content-pdf-value-1">
                                        Hari {this.state.hari[new Date(this.props.data.waktuDilaporkan).getDay()]}, {this.showDate(this.props.data.waktuDilaporkan)}, jam {
                                            new Date(this.props.data.waktuDilaporkanJam).getHours() < 9 ? 
                                            '0' + new Date(this.props.data.waktuDilaporkanJam).getHours() : 
                                            new Date(this.props.data.waktuDilaporkanJam).getHours()                                            
                                        }:{
                                            new Date(this.props.data.waktuDilaporkanJam).getMinutes() < 9 ? 
                                            '0' + new Date(this.props.data.waktuDilaporkanJam).getMinutes() : 
                                            new Date(this.props.data.waktuDilaporkanJam).getMinutes()
                                        }
                                    </div>
                
                                </div>
                
                
                            </div>
                
                            <div className="content-reporta-1">
                
                                <div className="content-reporta-1-first">
                
                                    <div className="content-reporta-1-first-content">
                
                                        <div>Tindak Pidana / Pasal :</div>
                                        {
                                            this.props.data.tindakPidanaAtauPasal.map((el,index)=>{
                                                return (
                                                    <div style={{fontWeight: "bold"}}>{el}</div>
                                                )
                                            })
                                        }
                
                                        <div style={{marginTop: "10px"}}>Sumir/tidak sumir:</div>
                                        <div>
                                            {
                                                this.props.data.sumir 
                                            }
                                        </div>
                
                
                                    </div>
                
                                </div>
                
                                <div className="content-reporta-1-second">
                                    
                                    {/* SAKSI VIEW */}

                                    <div className="content-reporta-1-second-content">
                                        <div style={{fontWeight: "bold",  width: "auto", marginBottom: "20px", marginLeft: "3.5%"}}>
                                            <u>NAMA DAN ALAMAT SAKSI</u> 
                                        </div>
                
                                        {this.renderSaksi(this.props.data.namaSaksi)}
                
                                        <div style={{width: "100%" , marginLeft: "3.5%"}}>
                                            d/a Sat Reskrim Polres Metro Jakarta Utara
                                        </div>
                
                                    </div>
                
                                </div>
                
                            </div>
                
                            <div className="content-reporta-1">
                
                                <div className="content-reporta-1-first" style={{flexDirection: "column"}}>
                                    <div style={{width: "80%" , display: "flex" ,justifyContent: "center" , alignItems: "center" , alignContent: "center" , fontWeight: "bold" , marginTop: "15px"}}>
                                        Barang Bukti
                                    </div>
                                    <div className="content-reporta-1-first-content" style={{marginTop: "10px"}}>
                                        {
                                            this.renderBarangBukti(this.props.data.barangbukti ? this.props.data.barangbukti : [])
                                        }
                                        {/* <div style={{width: "100%" , display: "flex" , flexDirection: "row"}}>
                                            <div>
                                                -
                                            </div> 
                                            <div style={{marginLeft: "7%"}}> Uang tunai RP.283.500 </div>
                                        </div>
                                        <div style={{width: "100%" , display: "flex" , flexDirection: "row"}}>
                                            <div>
                                                -
                                            </div>
                                            <div style={{marginLeft: "7%"}}> 1 (satu) Set Kartu bergambar buah 1 (satu) Set Kartu bergambar buah 1 (satu) Set Kartu bergambar buah 1 (satu) Set Kartu bergambar buah </div>
                                        </div>
                                        <div style={{width: "100%" , display: "flex" , flexDirection: "row"}}>
                                            <div>
                                                -
                                            </div>
                                            <div style={{marginLeft: "7%"}}> 1 (satu) Set Kartu bergambar buah 1 (satu) Set Kartu bergambar buah 1 (satu) Set Kartu bergambar buah 1 (satu) Set Kartu bergambar buah </div>
                                        </div> */}
                
                                    </div>
                
                                </div>
                
                                <div className="content-reporta-1-second" >
                                    <div className="content-reporta-1-second-content">
                                        <div style={{fontWeight: "bold" , width: "auto" , marginBottom: "20px" , marginLeft: "3.5%" , marginTop: "15px"}}>
                    
                                            <u>
                                                URAIAN SINGKAT KEJADIAN
                    
                                            </u>
                                        </div>
                
                                    </div>
                
                                    <div style={{width: "100%" , marginLeft: "8%"}}>
                                        {this.props.data.uraianSingkatKejadian}
                                    </div>
                                   
                                </div>
                
                            </div>
                
                            <div className="content-reporta-1" style={{ borderBottomWidth : "0.5px" , borderBottomColor : "black" , borderBottomStyle : "solid" , borderBottom: "0.5px solid black"}}>
                
                                <div className="content-reporta-1-first" style={{justifyContent: "flex-start" , alignItems: "flex-start"}}>
                
                                    <div style={{marginTop: "16px" , width: "auto" , marginRight: "10%"}}>
                                        TINDAKAN YANG DIAMBIL
                                    </div>
                                    <div style={{marginTop: "16px" , width: "auto"}}>
                                        :
                                    </div>
                
                                </div>
                
                                <div className="content-reporta-1-second" >
                                    <div style={{width: "100%" , marginLeft: "8%" , marginTop: "15px" , marginBottom: "15px"}}>
                                        {
                                            this.props.data.tindakanYangDiambil
                                        }
                                    </div>
                                </div>
                
                            </div>
                
                            <div className="last-content" >
                
                                <div className="last-content-first-item">
                                    <div style={{marginBottom: "10px"}}>MENGETAHUI :</div>
                                    <div>a.n KAPOLRES METRO JAKARTA UTARA</div>
                                    <div>KAP SPKT TERPADU</div>
                                    <div>u.b</div>
                                    <div>{this.props.data.mengetahuiUnit}</div>
                
                                    <div style={{marginTop: "80px" , width: "auto" ,  fontSize: "15px" , fontWeight: "bold" , borderBottomWidth : "0.5px" , borderBottomColor : "black" , borderBottomStyle : "solid" , borderBottom: "1.5px solid black"}}>
                                        { this.props.data.mengetahui}
                                    </div>
                
                                    <div style={{fontSize: "15px" , fontWeight: "bold"}}>
                                        {this.props.data.pangkat + " " + "NRP" + " " + this.props.data.nrp }
                                    </div>
                
                                </div>
                
                                <div className="last-content-first-item-2">
                
                                    <div style={{display: "flex",flexDirection: "row" , width: "100%"}}>
                                        <div style={{marginRight: "10%" , width :  "30%"}}>Tanggal</div>
                                        <div >:</div>
                                        <div style={{marginLeft: "5%"}}>{this.showDateWithoutYear(this.props.data.waktuDilaporkan)}</div>
                                    </div>
                
                                    <div style={{display: "flex" ,flexDirection: "row" , width: "100%"}}>
                                        <div style={{marginRight: "10%", width :  "30%"}}>Pelapor</div>
                                        <div >:</div>
                                        <div style={{marginLeft: "5%"}}>{this.props.data.pelapor}</div>
                                    </div>
                
                                    <div style={{display: "flex" ,flexDirection: "row" , width: "100%"}}>
                                        <div style={{marginRight: "10%", width :  "30%"}}>Jabatan & NRP</div>
                                        <div >:</div>
                                        {/* <div style={{marginLeft: "5%"}}>IPDA Nrp, 94071331</div> */}
                                        <div style={{marginLeft: "5%"}}>{this.props.data.jabatan + " Nrp " + this.props.data.nrp }</div>
                                    </div>
                
                                    <div style={{display: "flex" ,flexDirection: "row" , width: "100%" , marginTop: "auto"}}>
                                        <div style={{marginRight: "10%", width :  "30%"}}>TANDA TANGAN</div>
                                        <div >:</div>
                                        <div style={{marginLeft: "5%"}}></div>
                                    </div>
                
                                </div>
                
                            </div>
                
                        </div>
                
                    </div>
        )
    }

}

export default PrintReportA