// MODULES
import React from 'react'
import DatePicker from 'react-datepicker'
import { MuiPickersUtilsProvider,KeyboardTimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// COMPONENTS
import Loader from '../../Loader'

// CSS
import './style.css'
import "react-datepicker/dist/react-datepicker.css";

// IMAGE
import PlusIcon from '../../../Images/input/plus.png'
import MinusIcon from '../../../Images/input/minus.png'

export default function LowerContentInputB(props) {
    const {
        waktuKejadian,setWaktuKejadian,
        waktuKejadianJam,setWaktuKejadianJam,
        tempatKejadian,setTempatKejadian,
        provinsiKejadian,setProvinsiKejadian,
        kotaKejadian,setKotaKejadian,
        kecamatanKejadian,setKecamatanKejadian,
        kelurahanKejadian,setKelurahanKejadian,
        apaYangTerjadi , setApaYangTerjadi,
        terlapor,setTerlapor,
        waktuDilaporkan,setWaktuDilaporkan,
        waktuDilaporkanJam,setWaktuDilaporkanJam,
        uraianSingkatKejadian,setUraianSingkatKejadian,
        korban, setKorban, 
        saksi, setNamaSaksi, BtnInputReportB, emptyMessage, loading
    } = props

    const arrayKey = [ korban, saksi ]
    const fnKey = [ setKorban, setNamaSaksi ]

    function PlusInput (type) {
        let result = [...arrayKey[type]]
        result.push("")
        fnKey[type](result)
    }

    function MinusInput (type,indexV) {
        if (indexV > 0 && arrayKey[type].length > 0) {
            let result = [...arrayKey[type]]
            result = result.filter((e,index)=> index !== indexV)
            // fnKey[type](result)
            fnKey[type](result)
        }
    }

    function FillValue (type,value,indexV) {
        let result = [...arrayKey[type]]
        result.forEach((el,index)=>{
            if (index === indexV) {
                result[index] = value
            }
        })
        fnKey[type](result)
    }

    return (
        <div className='input-b-lower-container'>
            
            <div className="input-b-row-box">
                
                <div className="input-b-column-box">
                    <label>Tanggal Kejadian</label> <br />
                    <DatePicker 
                        selected={waktuKejadian}
                        onChange={date => setWaktuKejadian(date)}
                        className="input-b-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Masukkan Tanggal Kejadian"
                    />
                </div>
                <div className="input-a-column-box">
                    <label>Waktu Kejadian</label> <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" className="input-a-time-picker">
                            <KeyboardTimePicker
                                className="input-Content-1"
                                style={{padding: "5px 10px", border: '1px solid #c4c5c7', backgroundColor: 'white'}}
                                value={waktuKejadianJam}
                                placeholder="Masukkan Waktu"
                                onChange={time => setWaktuKejadianJam(time)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>

            </div>

            <div className="input-b-input-box">
                <label>Tempat Kejadian</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Tempat Kejadian"
                    onChange={(e) => setTempatKejadian(e.target.value)}    
                />
            </div>

            <div className="input-b-row-box">

            <div className="input-b-column-box">
                <label>Provinsi</label> <br />
                <select onChange={(e) => setProvinsiKejadian(e.target.value)}>
                    <option value="" disabled selected>Pilih Provinsi</option>
                    <option value="Banten">Banten</option>
                    <option value="DKI Jakarta">DKI Jakarta</option>
                </select>
            </div>
            <div className="input-b-column-box">
                <label>Kabupaten/Kota</label> <br />
                <select onChange={(e) => setKotaKejadian(e.target.value)}>
                    <option value="" disabled selected>Pilih Kabupaten/Kota</option>
                    <option value="Tangerang">Tangerang</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                </select>
            </div>

            </div>

            <div className="input-b-row-box">

            <div className="input-b-column-box">
                <label>Kecamatan</label> <br />
                <select onChange={(e) => setKecamatanKejadian(e.target.value)}>
                    <option value="" disabled selected>Pilih Kecamatan</option>
                    <option value="Gambir">Gambir</option>
                    <option value="Kuningan">Kuningan</option>
                </select>
            </div>
            <div className="input-b-column-box">
                <label>Desa/Kelurahan</label> <br />
                <select onChange={(e) => setKelurahanKejadian(e.target.value)}>
                    <option value="" disabled selected>Pilih Desa/Kelurahan</option>
                    <option value="Doko">Doko</option>
                    <option value="Tebet">Tebet</option>
                </select>
            </div>

            </div>

            <div className="input-b-input-box">
                <label>Apa Yang Terjadi</label> <br />
                <textarea 
                    type="text" 
                    placeholder="Tulis Apa Yang Terjadi"
                    onChange={(e) => setApaYangTerjadi(e.target.value)}    
                />
            </div>

            <div className="input-b-input-box">
                <label>Terlapor</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Terlapor"
                    onChange={(e) => setTerlapor(e.target.value)}    
                />
            </div>

            {      
                korban.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Nama Korban {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Korban" 
                                    value={korban[idx]}
                                    onChange={e=>FillValue(0,e.target.value,index)}
                                />
                                {
                                    index !== 0 ?
                                    <div className="input-a-minus-box"  onClick={e=>MinusInput(0,index)}>
                                        <img src={MinusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === korban.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(0)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && korban.length > 1 && 
                                    <div className="input-a-minus-box">
                                    </div>
                                }
                                {/* <div className="input-a-container-plus-minus">
                                </div> */}
                            </div>
                        </div>
                    )
                })
            }

            {         
                saksi.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Nama Saksi {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Saksi" 
                                    value={saksi[idx]}
                                    onChange={e=>FillValue(1,e.target.value,index)}
                                />
                                {
                                    index !== 0 ?
                                    <div className="input-a-minus-box"  onClick={e=>MinusInput(1,index)}>
                                        <img src={MinusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === saksi.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(1)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && saksi.length > 1 && 
                                    <div className="input-a-minus-box">
                                    </div>
                                }
                                {/* <div className="input-a-container-plus-minus">
                                </div> */}
                            </div>
                        </div>
                    )
                })
            }

            <div className="input-b-row-box">
                
                <div className="input-b-column-box">
                    <label>Tanggal Pelaporan</label> <br />
                    <DatePicker 
                        selected={waktuDilaporkan}
                        onChange={date => setWaktuDilaporkan(date)}
                        className="input-b-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Masukkan Tanggal Pelaporan"
                    />
                </div>
                <div className="input-a-column-box">
                    <label>Waktu Pelaporan</label> <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" className="input-a-time-picker">
                            <KeyboardTimePicker
                                className="input-Content-1"
                                style={{padding: "5px 10px", border: '1px solid #c4c5c7', backgroundColor: 'white'}}
                                value={waktuDilaporkanJam}
                                placeholder="Masukkan Waktu"
                                onChange={time => setWaktuDilaporkanJam(time)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>

            </div>

            <div className="input-b-input-box">
                <label>Uraian Singkat Kejadian</label> <br />
                <textarea 
                    type="text" 
                    placeholder="Tulis Uraian Singkat Kejadian"
                    onChange={(e) => setUraianSingkatKejadian(e.target.value)}    
                />
            </div>

            <center>
                {
                    loading
                    ?
                    <Loader/>
                    :
                    <button 
                    className='input-a-submit-btn' 
                    onClick={BtnInputReportB}
                    style={{
                        marginBottom: '5px'
                    }}
                    >
                        Submit
                    </button> 
                } <br />
                <span style={{ color: 'red', fontWeight: '200', fontSize: '12px' }}>{emptyMessage}</span>
            </center>

        </div>
    )
}
