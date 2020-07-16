// MODULES
import React, { useEffect } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import Axios from 'axios'
import { api } from './helper/database'
import { useDispatch } from 'react-redux'

// COMPONENTS
import InputPersonil from './Pages/InputPersonil'
import LoginPage from './Pages/Login'
import HomeScreen from './Pages/Home'
import LupaPassword from './Pages/LupaPassword'

// ACTIONS
import { dataAuth } from './Redux/Actions/userAction'

function App() {

  const dispatch = useDispatch()

  const getDataAuth = () => {
    Axios({
      method : 'GET',
      url : `${api}user/data-auth`,
      headers : {
        token: localStorage.getItem('token')
      }
    })
    .then((res) => {
      // dataAuth(res.data)
      dispatch(dataAuth(res.data))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(localStorage.getItem('token')) {
      getDataAuth()
    }
  }, [])
  return (
    <div style={{width : "100%"}}>
      {/* <h1>Musito Product Police Report</h1>
      <Link to='/input-personil'>Input personil</Link> */}
      <Switch>
        <Route path='/input-personil' component={InputPersonil} />
        <Route path="/login" component={LoginPage} />
        <Route path='/input-personil' component={InputPersonil}  />
        <Route path="/login" component={LoginPage}   />
        <Route path='/lupa-password/:token/:email/:nrp' component={LupaPassword}  />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </div>
  )
}

export default withRouter(App)