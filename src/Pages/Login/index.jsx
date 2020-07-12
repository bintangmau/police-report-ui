import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

// ACTIONS
import { loginPersonil } from '../../Redux/Actions'

// API
import { api } from '../../helper/database'

// COMPONENTS
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
    
    const loginPersonilBtn = () => {
        if(!nrp) {
            setLoginMessage('')
            setNrpEmpty('(Masukkan NRP!)')
        } else if(!password) {
            setLoginMessage('')
            setPassEmpty('(Masukkan Password!)')
        } else {
            setLoading(true)
            Axios.post(api + 'user/login-personil', {
                nrp, password
            })
            .then((res) => {
                if(!res.data.token) {
                    setNrp('')
                    setPassword('')
                    setLoading(false)
                    setLoginMessage(res.data.message)
                } else {
                    var data = res.data.data
                    setLoginMessage('')
                    setLoading(false)
                    history.push('/input-personil')
                    loginPersonil(res.data.token, data.email, data.nama, data.id, data.nrp)
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
        setLoginMessage('')
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        setPassEmpty('')
        setLoginMessage('')
    }

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            history.push('/input-personil')
        }
    },[])

    return (
        <div className="login-container-01">
            <div className='login-row-container'>

                <div className='login-form-container-left'>
                    <h4>Musito Police Report System</h4>
                </div>

                <div className='login-form-container-right'>
                    <div className='login-form-box'>

                        <div className='login-form-input'>
                            {
                                nrp
                                ?
                                <> <label>NRP</label> <br /> </>
                                :
                                <> <label>NRP <span style={{ color: 'red', fontWeight: '350', fontSize: '12px' }}>{nrpEmpty}</span></label> <br /> </>
                            }
                            <input 
                                type="text" 
                                onChange={onChangeNrp}
                                value={nrp}
                                />
                        </div>

                        <div className='login-form-input' style={{marginTop: "15px"}}>
                            {
                                password
                                ?
                                <> <label>Password</label> <br /> </>
                                :
                                <> <label>Password <span style={{ color: 'red', fontWeight: '350', fontSize: '12px' }}>{passEmpty}</span> </label> <br /> </>
                            }
                            <input 
                                type="password" 
                                onChange={onChangePassword}
                                value={password}
                                />
                        </div>
                        
                        {
                            loading
                            ?
                            <div style={{ marginTop: '30px' }}>
                            <Loader />
                            </div>
                            :
                            <>
                            <button onClick={loginPersonilBtn}>Login</button>
                            <span style={{ color: 'red', marginTop: '2px', fontSize: '12px' }}>{loginMessage}</span>
                            </>
                        }

                    </div>
                </div>

            </div>
        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
    //         nama: state.user.name,
//         id: state.user.id
//     }
// }

// export default connect(mapStateToProps, {})(Login);
export default Login;
