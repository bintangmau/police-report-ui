import React, { useState , useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

// API
import { api } from '../../helper/database'
import Loader from '../../Components/Loader'

// STYLE 
import './style.css'

function Login () {
    const [ nrp, setNrp ] = useState('')
    const [ password, setPassword ] = useState('') 
    const [ nrpEmpty, setNrpEmpty ] = useState('')
    const [ passEmpty, setPassEmpty ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const [ loginMessage, setLoginMessage ] = useState('')

    const history = useHistory()
    
    const loginPersonil = () => {
        if(!nrp) {
            setNrpEmpty('(Masukkan NRP!)')
        } else if(!password) {
            setPassEmpty('(Masukkan Password!)')
        } else {
            setLoading(true)
            Axios.post(api + 'user/login-personil', {
                nrp, password
            })
            .then((res) => {
                if(!res.data.token) {
                    setLoading(false)
                    setLoginMessage(res.data.message)
                } else {
                    setLoginMessage('')
                    setLoading(false)
                    localStorage.setItem('token', res.data.token)
                    history.push('/input-personil')
                }
            })
            .catch((err) => {
                setLoading(false)
            })
        }
    }

    const onChangeNrp = (e) => {
        setNrp(e.target.value)
        setNrpEmpty('')
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        setPassEmpty('')
    }

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            history.push('/input-personil')
        }
    },[])

    return (
        <div className="login-container-01">
            <div className='login-form-container'>
                <h4>
                    Musito Police Report System
                </h4>
                <div className='login-form-box'>

                    <div className='login-form-input'>
                        {
                            nrp
                            ?
                            <> <label>NRP</label> <br /> </>
                            :
                            <> <label>NRP <span style={{ color: 'red' }}>{nrpEmpty}</span></label> <br /> </>
                        }
                        <input 
                            type="text" 
                            placeholder='NRP' 
                            onChange={onChangeNrp}
                        />
                    </div>

                    <div className='login-form-input' style={{marginTop: "15px"}}>
                        {
                            password
                            ?
                            <> <label>Password</label> <br /> </>
                            :
                            <> <label>Password <span style={{ color: 'red' }}>{passEmpty}</span> </label> <br /> </>
                        }
                        <input type="password" placeholder="Password" onChange={onChangePassword}/>
                    </div>
                    
                    {
                        loading
                        ?
                        <div style={{ marginTop: '30px' }}>
                        <Loader />
                        </div>
                        :
                        <>
                        <button onClick={loginPersonil}>Login</button>
                        <span style={{ color: 'red', marginTop: '2px', fontSize: '12px' }}>{loginMessage}</span>
                        </>
                    }

                </div>
            </div>

        </div>
    )

}

export default Login
