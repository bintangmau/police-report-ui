// MODULES
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import { MuiPickersUtilsProvider,KeyboardTimePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// CSS
import './style.css'
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from 'react-time-picker/dist/entry.nostyle';


export default function LeftContentInputA() {
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

            <div className='input-a-input-box'>
                <label>Pelaku</label> <br />
                <input type="text" placeholder="Masukkan Nama Pelaku"/>
            </div>

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
