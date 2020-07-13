// MODULE
import React from 'react'

function LeftContent (props) {
    const {
        nama, setNama, jabatan, setJabatan, pangkat, setPangkat, unit, setUnit, submit, setSubmit, nomorHp, setNomorHp, email, setEmail
    } = props
    return (
        <div className='input-b-left-container'>

            <div className="input-b-input-box">
                <label>Nama</label> <br />
                <input 
                    type="text" 
                    placeholder="Nama"
                    onChange={(e) => setNama(e.target.value)}    
                />
            </div>

            <div className="input-b-input-box">
                <label>Jabatan</label> <br />
                <select onChange={(e) => setJabatan(e.target.value)}>
                    <option value="" disabled selected>Jabatan</option>
                    <option value="Kasat">Kasat</option>
                </select>
            </div>


            <div className="input-b-input-box">
                <label>Pangkat</label> <br />
                <select onChange={(e) => setPangkat(e.target.value)}>
                    <option value="" disabled selected>Pangkat</option>
                    <option value="Kompol">Kompol</option>
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Unit</label> <br />
                <select onChange={(e) => setUnit(e.target.value)}>
                    <option value="" disabled selected>Unit</option>
                    <option value="unit 1 kamneg">Unit I Kamneg</option>
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Subnit</label> <br />
                <select onChange={(e) => setSubmit(e.target.value)}>
                    <option value="" disabled selected>Subnit</option>
                    <option value="Subnit 1">Subnit 1</option>
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Nomor HP</label> <br />
                <input 
                    type="text" 
                    placeholder="Nomor HP"
                    onChange={(e) => setNomorHp(e.target.value)}    
                />
            </div>

            <div className="input-b-input-box">
                <label>Email</label> <br />
                <input 
                    type="text" 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}    
                />
            </div>

        </div>
    )

}

export default LeftContent