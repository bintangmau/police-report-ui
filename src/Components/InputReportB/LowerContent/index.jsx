// MODULES
import React from 'react'
import DatePicker from 'react-datepicker'

// CSS
import './style.css'

// IMAGE
import PlusIcon from '../../../Images/input/plus.jpg'

export default function LowerContentInputB(props) {
    const {
        korban, setKorban, saksi, setNamaSaksi
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
                        // selected={waktuKejadian}
                        // onChange={date => setWaktuKejadian(date)}
                        className="input-b-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText={"yyyy-mm-dd"}
                    />
                </div>
                <div className="input-b-column-box">
                    <label>Waktu Kejadian</label> <br />
                </div>

            </div>

            <div className="input-b-input-box">
                <label>Tempat Kejadian</label> <br />
                <input type="text" placeholder="Masukkan Tempat Kejadian"/>
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
                    <option value="" disabled selected>Pilih Kabupaten/Kota</option>
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
                    <option value="" disabled selected>Pilih Desa/Kelurahan</option>
                    <option value="Doko">Doko</option>
                    <option value="Tebet">Tebet</option>
                </select>
            </div>

            </div>

            <div className="input-b-input-box">
                <label>Apa Yang Terjadi</label> <br />
                <textarea type="text" placeholder="Tulis Apa Yang Terjadi"/>
            </div>

            <div className="input-b-input-box">
                <label>Terlapor</label> <br />
                <input type="text" placeholder="Masukkan Nama Terlapor"/>
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
                                        <img src={PlusIcon} />
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
                                        <img src={PlusIcon} />
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
                        // selected={waktuKejadian}
                        // onChange={date => setWaktuKejadian(date)}
                        className="input-b-datepicker"
                        dateFormat="dd-MM-yyyy"
                        placeholderText={"yyyy-mm-dd"}
                    />
                </div>
                <div className="input-b-column-box">
                    <label>Waktu Pelaporan</label> <br />
                </div>

            </div>

            <div className="input-b-input-box">
                <label>Uraian Kejadian</label> <br />
                <textarea type="text" placeholder="Tulis Uraian Kejadian"/>
            </div>

            <div className="input-b-input-box">
                <label>Uraian Kejadian</label> <br />
                <textarea type="text" placeholder="Tulis Uraian Kejadian"/>
            </div>

            <center>
                <button className='input-a-submit-btn'>Submit</button>
            </center>

        </div>
    )
}
