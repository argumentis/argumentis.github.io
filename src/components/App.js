import React from 'react'
import Timer from './timerComponents/timerFolder/Timer'
import Info from './infoPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default function App () {
  return (
    <div >
      <Router>
        <Switch>
          <Route path='/Timer' component={Timer} />
          <Route path='/Info/:id' component={Info} />
          <Redirect from='/' to='/Timer'/>
        </Switch>
      </Router>
    </div>
  )
}
