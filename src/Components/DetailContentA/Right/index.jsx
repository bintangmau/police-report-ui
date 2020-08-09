// MODULE
import React from 'react'
import { useSelector } from 'react-redux'

export default function Right(props) {

    const {
        dataMember,
        selectedUnit,
        setSelectedUnit,
        disposisiKanitUnit,
        fillPenyidik,
        selectedPenyidik,
        setSelectedPenyidik,
        penyidikState,
        setPenyidikState,
        updatePenyidik,
        disableButton,
        disposisiMessage
    } = props

    const jabatanState = useSelector(state=>state.user.jabatan) 

    let getUnitSubnit = () => {

        if (jabatanState === "KANIT") {
            return "subnit"
        }else {
            return "unit"
        }

    } 

    return (
        <div className="detail-a-right">

            {
                jabatanState !== "PENYIDIK" ?
                <h3>Disposisi</h3> :
                <h3>Update Perkembangan</h3>

            }

            {
                jabatanState === "WAKASAT" && dataMember.map((el,index)=>{
                    return (
                        <div 
                            className="detail-disposisi-box" 
                            style={
                                    {
                                        marginTop : index === 0 ? 0 : null,
                                        backgroundColor : el.idUnit === selectedUnit ? "#00698C" : null,
                                        color : el.idUnit === selectedUnit ? "white" : null
                                    }}
                            onClick={e=>setSelectedUnit(el.idUnit)}
                        >
                            {el.jabatan + " " + el.unit}
                        </div>
                    )
                })
            }

            {
                jabatanState === "KANIT" && dataMember.map((el,index)=>{

                    return (
                        <div 
                            className="detail-disposisi-box" 
                            style={
                                    {
                                        marginTop : index === 0 ? 0 : null,
                                        backgroundColor : el.idSubmit === selectedUnit ? "#00698C" : null,
                                        color : el.idSubmit === selectedUnit ? "white" : null
                                    }}
                            onClick={e=>setSelectedUnit(el.idSubmit)}
                        >
                            {el.jabatan + " " + el.submit }
                        </div>
                    )
                })
            }

            {
                jabatanState === "KASUBNIT" && dataMember.map((el,index)=>{

                    return (
                        <div 
                            className="detail-disposisi-box" 
                            style={
                                    {
                                        marginTop : index === 0 ? 0 : null,
                                        backgroundColor : selectedPenyidik.filter(e=>e === el.id).length > 0 ? "#00698C" : null,
                                        color : selectedPenyidik.filter(e=>e === el.id).length > 0 ? "white" : null
                                    }}
                            onClick={e=>fillPenyidik(el.id)}
                        >
                            {el.pangkat + " " + el.nama}
                        </div>
                    )
                })
            }

            {
                jabatanState === "PENYIDIK" && 
                <textarea 
                    className="input-penyidik"
                    onChange={e=>setPenyidikState(e.target.value)}
                    required={true}
                    value={penyidikState}
                >

                </textarea>
            }

            <div  
                className="detail-disposisi-button" 
                onClick={e=> jabatanState !== "PENYIDIK" ? disposisiKanitUnit() :  updatePenyidik()}
                style={{
                    cursor : disableButton ? "auto" : null
                }}
            >
                Simpan
            </div>
            <span style={{ color: "red", fontSize: '12px', marginTop: '10px' }}>{disposisiMessage}</span>

        </div>
    )
}
