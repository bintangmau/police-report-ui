// MODULES
import React, { useState } from 'react'

// CSS
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'
import Lower from './LowerContent'

export default function InputReportB() {

    // RIGHT CONTENT STATE
    const [ tindakanYangDiambil, setTindakanYangDiambil ] = useState([''])
    const [ tindakPidanaAtauPasal, setTindakPidanaAtauPasal ] = useState([''])
    const [ barangBukti, setBarangBukti ] = useState([''])

    // LOWER CONTENT STATE
    const [ korban, setKorban ] = useState([''])
    const [ namaSaksi, setNamaSaksi ] = useState([''])

    return (
        <div style={{width : "100%" , height : 800 }}>
           <h1>Input Report B</h1>

            {/* ROW CONTAINER */}
           <div className="input-b-row">
                
                <Left />

                <Right 
                    tindakanYangDiambil={tindakanYangDiambil}
                    setTindakanYangDiambil={setTindakanYangDiambil}
                    tindakPidanaAtauPasal={tindakPidanaAtauPasal}
                    setTindakPidanaAtauPasal={setTindakPidanaAtauPasal}
                    barangBukti={barangBukti}
                    setBarangBukti={setBarangBukti}
                />

           </div>

            <Lower 
                korban={korban}
                setKorban={setKorban}
                saksi={namaSaksi}
                setNamaSaksi={setNamaSaksi}
            />
            
        </div>
    )
}
