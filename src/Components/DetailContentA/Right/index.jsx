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
        setSelectedPenyidik
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
            <h3>Disposisi</h3>

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

            <div className="detail-disposisi-button" onClick={e=>disposisiKanitUnit()}>
                Simpan
            </div>

        </div>
    )
}
