// MODULE
import React from 'react'

// STYLE
import './style.css'

// COMPONENTS
import Left from './LeftContent'
import Right from './RightContent'

function InputPersonil () {

    return (
        <div style={{width : "100%" , height : 800 }}>
            <h1>Input Personil</h1>

            {/* ROW CONTAINER */}
            <div className='input-a-row'>

                <Left />

                <Right />
                 
            </div>
            
        </div>
    )

}


export default InputPersonil