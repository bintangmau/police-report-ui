// MODULES
import React, { useState } from 'react'

// COMPONENTS
import Loader from '../../Loader'

// CSS
import './style.css'


// IMAGE
import PlusIcon from '../../../Images/input/plus.png'
import MinusIcon from '../../../Images/input/minus.png'

export default function RightContentInputA(props) {

    const { 
        namaSaksi, setNamaSaksi, alamatSaksi, setAlamatSaksi, barangBukti, setBarangBukti, tindakanYangDiambil, setTindakanYangDiambil,
        uraianSingkatKejadian, setUraianSingkatKejadian, mengetahui, setMengetahui, mengetahuiUnit, setMengetahuiUnit, NrpPelapor,
        setNrpPelapor, PangkatPelapor, setPangkatPelapor, pelapor, setPelapor, nrp, setNrp, BtnInputReportA, pangkat, setPangkat, emptyMessage, setEmptyMessage,
        loading, dataPangkat, dataUnit, cekIfNrpEmpty
    } = props

    const arrayKey = [ namaSaksi, alamatSaksi, barangBukti, tindakanYangDiambil ]
    const fnKey = [ setNamaSaksi, setAlamatSaksi, setBarangBukti, setTindakanYangDiambil ]

    function PlusInput (type) {
        let result = [...arrayKey[type]]
        result.push("")
        console.log(result , ' <<< VALUE RESULT -------')
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
        <div className='input-a-right-container'>
           
           {
                namaSaksi.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Saksi {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Saksi" 
                                    value={namaSaksi[idx]}
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
                                    index === namaSaksi.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(0)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && namaSaksi.length > 1 && 
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
                alamatSaksi.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Alamat Saksi {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Alamat Saksi" 
                                    value={alamatSaksi[idx]}
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
                                    index === alamatSaksi.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(1)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && alamatSaksi.length > 1 && 
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
                barangBukti.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Barang Bukti {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Barang Bukti" 
                                    value={barangBukti[idx]}
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
                                    index === barangBukti.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(2)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && barangBukti.length > 1 && 
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
                tindakanYangDiambil.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Tindakan Yang Diambil {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Tindakan Yang Diambil" 
                                    value={tindakanYangDiambil[idx]}
                                    onChange={e=>FillValue(3,e.target.value,index)}
                                />
                                {
                                    index !== 0 ?
                                    <div className="input-a-minus-box"  onClick={e=>MinusInput(3,index)}>
                                        <img src={MinusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === tindakanYangDiambil.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(3)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && tindakanYangDiambil.length > 1 && 
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

            <div className="input-a-input-box">
                <label>Pelapor</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Pelapor"
                    onChange={(e) => setPelapor(e.target.value)}
                />
            </div>

            <div className="input-a-input-box">
                <label>Pangkat Pelapor</label> <br />
                <select onChange={(e) => setPangkatPelapor(e.target.value)}>
                    <option value="" disabled selected>Pilih Pangkat Pelapor</option>
                    {dataPangkat.map((val) => {
                        return (
                            <option value={val.idPangkat} key={val.idPangkat}>{val.pangkat}</option>
                        )
                    })}
                </select>
            </div>

            <div className="input-a-input-box">
                <label>NRP Pelapor</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan NRP Pelapor"
                    onChange={(e) => setNrpPelapor(e.target.value)}
                />
            </div>

            <div className="input-a-input-box">
                <label>Mengetahui</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan Nama Yang Mengetahui"
                    onChange={(e) => setMengetahui(e.target.value)}  
                />
            </div>

            <div className="input-a-input-box">
                <label>Pangkat Yang Mengetahui</label> <br />
                <select onChange={(e) => setPangkat(e.target.value)}>
                    <option value="" disabled selected>Pilih Pangkat Mengetahui</option>
                    {dataPangkat.map((val) => {
                        return (
                            <option value={val.idPangkat} key={val.idPangkat}>{val.pangkat}</option>
                        )
                    })}
                </select>
            </div>

            <div className="input-a-input-box">
                <label>NRP Yang Mengetahui</label> <br />
                <input 
                    type="text" 
                    placeholder="Masukkan NRP Yang Mengetahui"
                    onChange={(e) => setNrp(e.target.value)}
                />
            </div>

            <div className="input-a-input-box">
                <label>Unit</label> <br />
                <select onChange={(e) => setMengetahuiUnit(e.target.value)}>
                    <option value="" disabled selected>Pilih Unit Mengetahui</option>
                    {dataUnit.map((val) => {
                        return (
                            <option value={val.idUnit} key={val.idUnit}>{val.unit}</option>
                        )
                    })}
                </select>
            </div>

            <div className="input-a-input-box">
                <label>Uraian Singkat Kejadian</label> <br />
                <textarea 
                    type="text" 
                    placeholder="Tulis Uraian Singkat Kejadian"
                    onChange={(e) => setUraianSingkatKejadian(e.target.value)}
                />
            </div>
            
            <center>
                {
                    loading
                    ?
                    <Loader/>
                    :
                    <button 
                    className='input-a-submit-btn' 
                    onClick={cekIfNrpEmpty}
                    style={{
                        marginBottom: '5px'
                    }}
                    >
                        Submit
                    </button> 
                }
                <br />
                <span style={{ color: 'red', fontWeight: '200', fontSize: '12px' }}>{emptyMessage}</span>
            </center>

        </div>
    )
}
