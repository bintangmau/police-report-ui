import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

// COMPONENTS
import InputPersonil from './Pages/InputPersonil'
import LoginPage from './Pages/Login'
import HomeScreen from './Pages/Home'

function App() {
  return (
    <div style={{width : "100%"}}>
      {/* <h1>Musito Product Police Report</h1>
      <Link to='/input-personil'>Input personil</Link> */}
      <Switch>
        <Route path='/input-personil' component={InputPersonil} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={HomeScreen} exact/>
      </Switch>
    </div>
  )
}

export default withRouter(App)