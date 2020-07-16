// MODULES
import React from 'react'
import DatePicker from 'react-datepicker'
import { MuiPickersUtilsProvider,KeyboardTimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// CSS
import './style.css'
import './plus.css'
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from 'react-time-picker/dist/entry.nostyle';

// IMAGE
import PlusIcon from '../../../Images/input/plus.png'
import MinusIcon from '../../../Images/input/minus.png'

export default function LeftContentInputB(props) {
    const {
        pelaku,setPelaku,korban,setKorban, tindakPidanaAtauPasal, setTindakPidanaAtauPasal, nomorLaporanPolisi, setNomorLaporanPolisi,
        waktuKejadian, setWaktuKejadian, waktuKejadianJam, setWaktuKejadianJam, tempatKejadian, setTempatKejadian, provinsi, setProvinsi,
        kota, setKota, kecamatan, setKecamatan, kelurahan, setKelurahan, waktuDilaporkan, setWaktuDilaporkan, apaYangTerjadi, setApaYangTerjadi,
        waktuDilaporkanJam, setWaktuDilaporkanJam, sumir, setSumir
    } = props

    const arrayKey = [ pelaku, korban, tindakPidanaAtauPasal ]
    const fnKey = [ setPelaku, setKorban, setTindakPidanaAtauPasal ]

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
        <div className='input-a-left-container'>
            
            <div className='input-a-input-box'>
                <label>Nomor Laporan</label> <br />
                <input type="text" placeholder="Masukkan Nomor Laporan" onChange={(e) => setNomorLaporanPolisi(e.target.value)}/>
            </div>

            <div className='input-a-row-box'>

                <div className='input-a-column-box'>
                    <label>Tanggal Kejadian</label> <br />
                    <DatePicker 
                        selected={waktuKejadian}
                        onChange={date => setWaktuKejadian(date)}
                        className="input-a-datepicker"
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

            <div className='input-a-input-box'>
                <label>Tempat Kejadian</label> <br />
                <input type="text" placeholder="Masukkan Tempat Kejadian" onChange={(e) => setTempatKejadian(e.target.value)}/>
            </div>

            <div className="input-a-row-box">

                <div className="input-a-column-box">
                    <label>Provinsi</label> <br />
                    <select onChange={(e) => setProvinsi(e.target.value)}>
                        <option value='' disabled selected>Pilih Provinsi</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Banten">Banten</option>
                    </select>
                </div>
                <div className="input-a-column-box">
                    <label>Kabupaten/Kota</label> <br />
                    <select onChange={(e) => setKota(e.target.value)}>
                        <option value="" disabled selected>Pilih Kabupaten/Kota</option> <br />
                        <option value="Jakarta Pusat">Jakarta Pusat</option>
                        <option value="Tangerang">Tangerang</option>
                    </select>
                </div>

            </div>

            <div className="input-a-row-box">

                <div className="input-a-column-box">
                    <label>Kecamatan</label> <br />
                    <select onChange={(e) => setKecamatan(e.target.value)}>
                        <option value="" disabled selected>Pilih Kecamatan</option>
                        <option value="Gambir">Gambir</option>
                        <option value="Kuningan">Kuningan</option>
                    </select>
                </div>
                <div className="input-a-column-box">
                    <label>Desa/Kelurahan</label> <br />
                    <select onChange={(e) => setKelurahan(e.target.value)}>
                        <option value="" disabled selected>Pilih Desa/Kelurahan</option>
                        <option value="Doko">Doko</option>
                        <option value="Jimbaran">Jimbaran</option>
                    </select>
                </div>

            </div>

            <div className="input-a-input-box">
                <label>Kejadian</label> <br />
                <textarea placeholder="Tulis Uraian Kejadian" type="text" onChange={(e) => setApaYangTerjadi(e.target.value)}/>
            </div>

            {
                pelaku.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Pelaku {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Pelaku" 
                                    value={pelaku[idx]}
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
                                    index === pelaku.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(0)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && pelaku.length > 1 && 
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
                korban.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Korban {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Korban" 
                                    value={korban[idx]}
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
                                    index === korban.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(1)}>
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

            <div className='input-a-row-box'>

                <div className='input-a-column-box'>
                    <label>Tanggal Dilaporkan</label> <br />
                    <DatePicker 
                        selected={waktuDilaporkan}
                        onChange={date => setWaktuDilaporkan(date)}
                        className="input-a-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Masukkan Tanggal Dilaporkan"
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
                                onChange={time => setWaktuDilaporkanJam(time) }
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                </div>

            </div>

            {
                tindakPidanaAtauPasal.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Tindak Pidana Atau Pasal {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Tindak Pidana Atau Pasal" 
                                    value={tindakPidanaAtauPasal[idx]}
                                    onChange={e=>FillValue(2,e.target.value,index)}
                                />
                                {
                                    index !== 0 ?
                                    <div className="input-a-minus-box"  onClick={e=>MinusInput(2,index)}>
                                        <img src={MinusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === tindakPidanaAtauPasal.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(2)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && tindakPidanaAtauPasal.length > 1 && 
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

            <div className='input-a-input-box'>
                <label>Sumir</label> <br />
                <select onChange={(e) => setSumir(e.target.value)}>
                    <option value="" disabled selected>Pilih Sumir</option>
                    <option value="Ya">Ya</option>
                    <option value="Tidak">Tidak</option>
                </select>
            </div>

        </div>
    )
}
