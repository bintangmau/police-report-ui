// MODULES
import React, { useState } from 'react'

// CSS
import './style.css'


// IMAGE
import PlusIcon from '../../../Images/input/plus.jpg'

export default function RightContentInputA(props) {

    const { 
        saksi, setNamaSaksi, alamatSaksi, setAlamatSaksi, barangBukti, setBarangBukti, tindakanYangDiambil, setTindakanYangDiambil
    } = props

    const arrayKey = [ saksi, alamatSaksi, barangBukti, tindakanYangDiambil ]
    const fnKey = [ setNamaSaksi, setAlamatSaksi, setBarangBukti, setTindakanYangDiambil ]

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
        <div className='input-a-right-container'>
           
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
                            <label>Saksi {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Nama Saksi" 
                                    value={saksi[idx]}
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
                                    index === saksi.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(0)}>
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
                                        <img src={PlusIcon} />
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
                                        <img src={PlusIcon} />
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
                                        <img src={PlusIcon} />
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
