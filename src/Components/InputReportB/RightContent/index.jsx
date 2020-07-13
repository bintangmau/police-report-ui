// MODULES
import React from 'react'

// CSS
import './style.css'

export default function RightContentInputB() {
    return (
        <div className='input-b-right-container'>
            
            <div className="input-b-input-box">
                <label>Mengetahui</label> <br />
                <input type="text" placeholder="Nama Petugas Yang Mengetahui"/>
            </div>

            <div className="input-b-input-box">
                <label>Nrp</label> <br />
                <input type="text" placeholder="NRP Petugas Yang Mengetahui"/>
            </div>

            <div className="input-b-input-box">
                <label>Pangkat</label> <br />
                <input type="text" placeholder="Pangkat Petugas Yang Mengetahui"/>
            </div>

            <div className="input-b-input-box">
                <label>Unit</label> <br />
                <input type="text" placeholder="Unit Petugas Yang Mengetahui"/>
            </div>

            <div className="input-b-input-box">
                <label>Yang Menerima Laporan</label> <br />
                <input type="text" placeholder="Nama Petugas Yang Menerima Laporan"/>
            </div>

            <div className="input-b-input-box">
                <label>NRP</label> <br />
                <input type="text" placeholder="NRP Petugas Yang Menerima Laporan"/>
            </div>

            <div className="input-b-input-box">
                <label>Pangkat</label> <br />
                <input type="text" placeholder="Pangkat Petugas Yang Menerima Laporan"/>
            </div>

            <div className="input-b-input-box">
                <label>Tindakan Yang Diambil</label> <br />
                <input type="text" placeholder="Masukkan Tindakan Yang telah diambil"/>
            </div>

            <div className="input-b-input-box">
                <label>Tindak Pidana Apa/Pasal</label> <br />
                <input type="text" placeholder="Masukkan Tindak Pidana/Pasal"/>
            </div>

            <div className="input-b-input-box">
                <label>Barang Bukti</label> <br />
                <input type="text" placeholder="Masukkan Barang Bukti"/>
            </div>

        </div>
    )
}
