// MODULES
import React, { useState } from 'react'

// CSS
import './style.css'

export default function RightContentInputA() {
    return (
        <div className='input-a-right-container'>
           
            <div className="input-a-input-box">
                <label>Saksi</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Saksi"
                />
            </div>

            <div className="input-a-input-box">
                <label>Alamat Saksi</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Alamat Saksi"
                
                />
            </div>

            <div className="input-a-input-box">
                <label>Barang Bukti</label> <br />
                <input  
                    type="text" 
                    placeholder="Masukkan Barang Bukti"
                />
            </div>

            <div className="input-a-input-box">
                <label>Tindakan Yang Diambil</label> <br />
                <textarea 
                    type="text" 
                    placeholder="Tulis Tindakan Yang Diambil"

                />
            </div>

            <div className="input-a-input-box">
                <label>Pelapor</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Pelapor"
                    
                />
            </div>

            <div className="input-a-input-box">
                <label>Pangkat</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Pangkat Pelapor"
                
                />
            </div>

            <div className="input-a-input-box">
                <label>NRP</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan NRP Pelapor"
                
                />
            </div>

            <div className="input-a-input-box">
                <label>Mengetahui</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Yang Mengetahui"
                    
                />
            </div>

            <div className="input-a-input-box">
                <label>Pangkat</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Pangkat Yang Mengetahui"
                
                />
            </div>

            <div className="input-a-input-box">
                <label>NRP</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan NRP Yang Mengetahui"
                    
                />
            </div>

            <div className="input-a-input-box">
                <label>Unit</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Unit"
                    
                />
            </div>

            <div className="input-a-input-box">
                <label>Uraian Singkat Kejadian</label> <br />
                <textarea 
                    type="text" 
                    placeholder="Tulis Uraian Singkat Kejadian"
                    
                />
            </div>
            
            <center>
                <button className='input-a-submit-btn'>Submit</button>
            </center>

        </div>
    )
}
