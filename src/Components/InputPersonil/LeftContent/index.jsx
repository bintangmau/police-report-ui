// MODULE
import React from 'react'

function LeftContent () {

    return (
        <div className='input-b-left-container'>

            <div className="input-b-input-box">
                <label>Nama</label> <br />
                <input type="text" placeholder="Nama"/>
            </div>

            <div className="input-b-input-box">
                <label>Jabatan</label> <br />
                <select>
                    <option value="" disabled selected>Jabatan</option>
                    <option value="Kasat">Kasat</option>
                </select>
            </div>


            <div className="input-b-input-box">
                <label>Pangkat</label> <br />
                <select>
                    <option value="" disabled selected>Pangkat</option>
                    <option value="Kasat">Kompol</option>
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Unit</label> <br />
                <select>
                    <option value="" disabled selected>Unit</option>
                    <option value="Kasat">Unit I Kamneg</option>
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Subnit</label> <br />
                <select>
                    <option value="" disabled selected>Subnit</option>
                    <option value="Kasat">Subnit</option>
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Nomor HP</label> <br />
                <input type="text" placeholder="Nomor HP"/>
            </div>

            <div className="input-b-input-box">
                <label>Email</label> <br />
                <input type="text" placeholder="Email"/>
            </div>

        </div>
    )

}

export default LeftContent