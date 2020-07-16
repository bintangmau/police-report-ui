import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'

// ACTIONS
import { loginPersonil } from '../../Redux/Actions'

// API
import { api } from '../../helper/database'

// COMPONENTS
import Loader from '../../Components/Loader'

// STYLE 
import './style.css'

// LOGO
import Logo from '../../Images/Login/logo-musito-white.png'

function Login () {
    const [ nrp, setNrp ] = useState('')
    const [ password, setPassword ] = useState('') 
    const [ nrpEmpty, setNrpEmpty ] = useState(null)
    const [ passEmpty, setPassEmpty ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const [ loginMessage, setLoginMessage ] = useState(null)

    const history = useHistory()
    
    const loginPersonilBtn = () => {
        if(!nrp) {
            setLoginMessage(null)
            setNrpEmpty('(Masukkan NRP!)')
        } else if(!password) {
            setLoginMessage(null)
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
                    console.log(res.data)
                    var data = res.data.data
                    setLoginMessage('')
                    setLoading(false)
                    history.push('/')
                    loginPersonil(res.data.token, data.email, data.nama, data.id, data.nrp, data.jabatan, data.unit, data.submit)
                }
            })
            .catch((err) => {
                setLoading(false)
            })
        }
    }

    const onChangeNrp = (e) => {
        setNrp(e.target.value)
        setNrpEmpty(null)
        setLoginMessage(null)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
        setPassEmpty(null)
        setLoginMessage(null)
    }

    useEffect(()=>{
        if (localStorage.getItem('token')) {
            history.push('/')
        }
    },[])

    return (
        <div className="login-container-01">

            {/* LOGIN BOX */}
            <div className='login-row-container'>

                {/* LEFT BOX */}
                <div className='login-form-container-left'>
                    <img src={Logo} alt="logo-musito"/>
                    <span>Musito Police Report System</span>
                    <span>
                        Sistem Pelaporan Kasus Kriminal Untuk Kepolisian Resort
                    </span>
                </div>

                {/* RIGHT BOX */}
                <div className='login-form-container-right'>
                    <div className='login-form-box'>
                    <h3>Login Form</h3>
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
                            <span style={{ color: 'red', marginTop: '30px', fontSize: '12px' }}>{loginMessage}</span>
                            <button onClick={loginPersonilBtn}>Login</button>
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
