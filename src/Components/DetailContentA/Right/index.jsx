import React from 'react'

export default function Right(props) {

    const {
        dataMember,
        selectedUnit,
        setSelectedUnit,
        disposisiKanitUnit
    } = props

    return (
        <div className="detail-a-right">
            <h3>Disposisi</h3>

            {
                dataMember.map((el,index)=>{
                    console.log( typeof el.idUnit , ' <<< ID PER LAPORAN')
                    console.log(selectedUnit , ' <<< SELECTED UNIT')
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

            <div className="detail-disposisi-button" onClick={e=>disposisiKanitUnit()}>
                Simpan
            </div>

        </div>
    )
}
