// MODULES
import React from 'react'
import DatePicker from 'react-datepicker'

// CSS
import './style.css'

export default function LeftContentInputB() {
    return (
        <div className='input-b-left-container'>

            <div className="input-b-input-box">
                <label>Nomor Laporan</label> <br />
                <input type="text" placeholder="Masukkan Nomor Laporan"/>
            </div>

            <div className="input-b-input-box">
                <label>Nama Pelapor</label> <br />
                <input type="text" placeholder="Masukkan Nama Pelapor"/>
            </div>

            <div className="input-b-row-box">

                <div className="input-b-column-box">
                    <label>Tempat Lahir</label> <br />
                    <input type="text" placeholder="Masukkan Tempat Lahir"/>
                </div>

                <div className="input-b-column-box">
                    <label>Tanggal Lahir</label>
                    <DatePicker 
                        // selected={waktuKejadian}
                        // onChange={date => setWaktuKejadian(date)}
                        className="input-b-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText={"yyyy-mm-dd"}
                    />
                </div>

            </div>

            <div className="input-b-input-box">
                <label>Jenis Kelamin</label> <br />
                <select>
                    <option value="" disabled selected>Pilih Jenis Kelamin</option>
                    <option value="L">Laki-laki</option>
                    <option value="P">Perempuan</option>
                </select>
            </div>

            <div className="input-b-row-box">

                <div className="input-b-column-box">
                    <label>Kewarganegaraan</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Kewarganegaraan</option>
                        <option value="WNI">WNI</option>
                        <option value="WNA">WNA</option>
                    </select>
                </div>
                <div className="input-b-column-box">
                    <label>Agama</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Agama</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Katholik">Katholik</option>
                        <option value="Budha">Budha</option>
                    </select>
                </div>

            </div>
            
            <div className="input-b-input-box">
                <label>Pekerjaan</label> <br />
                <input type="text" placeholder="Masukkan Pekerjaan Pelapor"/>
            </div>

            <div className="input-b-input-box">
                <label>Alamat</label> <br />
                <input type="text" placeholder="Masukkan Alamat Pelapor"/>
            </div>

            <div className="input-b-row-box">

                <div className="input-b-column-box">
                    <label>Provinsi</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Provinsi</option>
                        <option value="Banten">Banten</option>
                        <option value="DKI Jakarta">DKI Jakarta</option>
                    </select>
                </div>
                <div className="input-b-column-box">
                    <label>Kabupaten/Kota</label> <br />
                    <select>
                        <option value="" disabled select>Pilih Kabupaten/Kota</option>
                        <option value="Tangerang">Tangerang</option>
                        <option value="Jakarta Pusat">Jakarta Pusat</option>
                    </select>
                </div>

            </div>
            
            <div className="input-b-row-box">

                <div className="input-b-column-box">
                    <label>Kecamatan</label> <br />
                    <select>
                        <option value="" disabled selected>Pilih Kecamatan</option>
                        <option value="Gambir">Gambir</option>
                        <option value="Kuningan">Kuningan</option>
                    </select>
                </div>
                <div className="input-b-column-box">
                    <label>Desa/Kelurahan</label> <br />
                    <select>
                        <option value="" disabled select>Pilih Desa/Kelurahan</option>
                        <option value="Doko">Doko</option>
                        <option value="Tebet">Tebet</option>
                    </select>
                </div>

            </div>

            <div className="input-b-input-box">
                <label>No Telepon/Fax/Email</label> <br />
                <input type="text" placeholder="Masukkan No Telepon/Fax/Email"/>
            </div>


        </div>
    )
}
