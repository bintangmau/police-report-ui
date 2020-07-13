// MODULES
import React from 'react'

// CSS
import './style.css'

// IMAGE
import PlusIcon from '../../../Images/input/plus.jpg'

export default function RightContentInputB(props) {
    const {
        mengetahui,
        setMengetahui,
        NRPMengetahui,
        setNRPMengetahui,
        pangkatMengetahui,
        setPangkatMengetahui,
        unitMengetahui,
        setUnitMengetahui,
        yangMenerimaLaporan,
        setYangMenerimaLaporan,
        NRPyangMenerimaLaporan,
        setNRPyangMenerimaLaporan,
        pangkatyangMenerimaLaporan,
        setPangkatyangMenerimaLaporan,
        tindakanYangDiambil, setTindakanYangDiambil, tindakPidanaAtauPasal, setTindakPidanaAtauPasal, barangBukti, setBarangBukti
    } = props

    const arrayKey = [ tindakanYangDiambil, tindakPidanaAtauPasal, barangBukti ]
    const fnKey = [ setTindakanYangDiambil, setTindakPidanaAtauPasal, setBarangBukti ]

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
                                    index === tindakanYangDiambil.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(0)}>
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

            {
                tindakPidanaAtauPasal.map((el,index)=>{
                    var idx = index
                    if(idx < 1) {
                        idx = null
                    } else if(idx > 0) {
                        idx = idx + 1
                    }
                    return (
                        <div className='input-a-input-box-plus'>
                            <label>Tindak Pidana Atau Pasal {idx}</label> <br />
                            <div className="input-a-container-box-plus">
                                <input 
                                    type="text" 
                                    className="input-a-plus" 
                                    placeholder="Masukkan Tindak Pidana Atau Pasal" 
                                    value={tindakPidanaAtauPasal[idx]}
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
                                    index === tindakPidanaAtauPasal.length -1 ?
                                    <div className="input-a-plus-box" onClick={e=>PlusInput(1)}>
                                        <img src={PlusIcon} />
                                    </div> :
                                    <></>
                                }
                                {
                                    index === 0 && tindakPidanaAtauPasal.length > 1 && 
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

        </div>
    )
}
