// MODULES
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import { MuiPickersUtilsProvider,KeyboardTimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// CSS
import './style.css'
import './plus.css'
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from 'react-time-picker/dist/entry.nostyle';

// IMAGE
import PlusIcon from '../../../Images/input/plus.jpg'

export default function LeftContentInputB() {

    const [ waktuKejadian, setWaktuKejadian ] = useState('')

    // INPUT PLUS STATE
    const [dataPelaku,setDataPelaku] = useState([""])

    function PlusInput (type) {
        if (type === 0) {
            let result = [...dataPelaku]
            result.push("")
            setDataPelaku(result)
        }
    }

    function MinusInput (type,indexV) {
        if (type === 0 ) {
            if (indexV > 0 && dataPelaku.length > 0) {
                let result = [...dataPelaku]
                result = result.filter((e,index)=> index !== indexV)
                setDataPelaku(result)
            }
        }
    }

    function FillValue (type,value,indexV) {
        if (type === 0) {
            let result = [...dataPelaku]
            result.forEach((el,index)=>{
                if (index === indexV) {
                    result[index] = value
                }
            })
            setDataPelaku(result)
        }
    }

    useEffect(()=>{
        console.log(dataPelaku , ' <<< VALUE DATA PELAKU')
    },[dataPelaku])

    return (
        <div className='input-a-left-container'>
            
            <div className='input-a-input-box'>
                <label>Nomor Laporan</label> <br />
                <input type="text" placeholder="Masukkan Nomor Laporan"/>
            </div>

            <div className='input-a-row-box'>

                <div className='input-a-column-box'>
                    <label>Tanggal Kejadian</label> <br />
                    <DatePicker 
                        // selected={waktuKejadian}
                        // onChange={date => setWaktuKejadian(date)}
                        className="input-a-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText={"yyyy-mm-dd"}
                    />
                </div>

                <div className="input-a-column-box">
                    <label>Waktu Kejadian</label> <br />
                    {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around" style={{borderBottom: 'none'}}>
                            <KeyboardTimePicker
                                className="input-Content-1"
                                style={{padding: "5px 10px", border: '1px solid #c4c5c7'}}
                                value={waktuKejadianJam}
                                onChange={time => setWaktuKejadianJam(time)}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider> */}
                </div>

            </div>

            <div className='input-a-input-box'>
                <label>Tempat Kejadian</label> <br />
                <input type="text" placeholder="Masukkan Tempat Kejadian"/>
            </div>

            <div className="input-a-row-box">

                <div className="input-a-column-box">
                    <label>Provinsi</label> <br />
                    <select>
                        <option value='' disabled selected>Pilih Provinsi</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                        <option value="Banten">Banten</option>
                    </select>
                </div>
                <div className="input-a-column-box">
                    <label>Kabupaten/Kota</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Kabupaten/Kota</option> <br />
                        <option value="Jakarta Pusat">Jakarta Pusat</option>
                        <option value="Tangerang">Tangerang</option>
                    </select>
                </div>

            </div>

            <div className="input-a-row-box">

                <div className="input-a-column-box">
                    <label>Kecamatan</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Kecamatan</option>
                        <option value="Gambir">Gambir</option>
                        <option value="Kuningan">Kuningan</option>
                    </select>
                </div>
                <div className="input-a-column-box">
                    <label>Desa/Kelurahan</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Desa/Kelurahan</option>
                        <option value="Doko">Doko</option>
                        <option value="Jimbaran">Jimbaran</option>
                    </select>
                </div>

            </div>

            <div className="input-a-input-box">
                <label>Kejadian</label> <br />
                <textarea placeholder="Tulis Uraian Kejadian" type="text"/>
            </div>

            {
                dataPelaku.map((el,index)=>{
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Pelaku</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Pelaku" 
                                    value={dataPelaku[index]}
                                    onChange={e=>FillValue(0,e.target.value,index)}
                                />
                                {
                                    index !== 0 ?
                                    <div className="input-a-minus-box"  onClick={e=>MinusInput(0,index)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === dataPelaku.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(0)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && dataPelaku.length > 1 && 
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
                <label>Korban</label> <br />
                <input type="text" placeholder="Masukkan Nama Korban"/>
            </div>

            <div className='input-a-row-box'>

                <div className='input-a-column-box'>
                    <label>Tanggal Dilaporkan</label> <br />
                    <DatePicker 
                        // selected={waktuKejadian}
                        // onChange={date => setWaktuKejadian(date)}
                        className="input-a-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText={"yyyy-mm-dd"}
                    />
                </div>

                <div className="input-a-column-box">
                    <label>Waktu Pelaporan</label>
                </div>

            </div>

            <div className='input-a-input-box'>
                <label>Tindak Pidana/Pasal</label> <br />
                <input type="text" placeholder="Masukkan Tindak Pidana/Pasal"/>
            </div>

            <div className='input-a-input-box'>
                <label>Sumir</label> <br />
                <select>
                    <option value="" disabled selected>Pilih Sumir</option>
                    <option value="Ya">Ya</option>
                    <option value="Tidak">Tidak</option>
                </select>
            </div>

        </div>
    )
}
