// MODULES
import React from 'react'

// CSS
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'
import Lower from './LowerContent'

export default function InputReportB() {
    return (
        <div style={{width : "100%" , height : 800 }}>
           <h1>Input Report B</h1>

            {/* ROW CONTAINER */}
           <div className="input-b-row">
                
                <Left />

                <Right />

           </div>

            <Lower />
            
        </div>
    )
}
