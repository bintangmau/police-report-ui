// MODULE
import React from 'react'

function LeftContent (props) {
    const {
        nama, setNama, jabatan, setJabatan, pangkat, setPangkat, unit, setUnit, submit, setSubmit, nomorHp, setNomorHp, email, setEmail,
        dataJabatan, dataPangkat, dataUnit, dataSubnit
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
                    <option value="" disabled selected>Pilih Jabatan</option>
                    {dataJabatan.map((val) => {
                        return (
                            <option value={val.jabatan} key={val.idJabatan}>{val.jabatan}</option>
                        )
                    })}
                </select>
            </div>


            <div className="input-b-input-box">
                <label>Pangkat</label> <br />
                <select onChange={(e) => setPangkat(e.target.value)}>
                    <option value="" disabled selected>Pilih Pangkat</option>
                    {dataPangkat.map((val) => {
                        return (
                            <option value={val.pangkat} key={val.idPangkat}>{val.pangkat}</option>
                        )
                    })}
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Unit</label> <br />
                <select onChange={(e) => setUnit(e.target.value)}>
                    <option value="" disabled selected>Pilih Unit</option>
                    {dataUnit.map((val) => {
                        return (
                            <option value={val.unit} key={val.idUnit}>{val.unit}</option>
                        )
                    })}
                </select>
            </div>

            <div className="input-b-input-box">
                <label>Subnit</label> <br />
                <select onChange={(e) => setSubmit(e.target.value)}>
                    <option value="" disabled selected>Pilih Subnit</option>
                    {dataSubnit.map((val) => {
                        return (
                            <option value={val.subnit} key={val.idUnit}>{val.subnit}</option>
                        )
                    })}
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