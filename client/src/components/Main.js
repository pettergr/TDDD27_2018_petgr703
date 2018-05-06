import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Customers from './Customers'
//import Schedule from './Orders'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/customers' component={Customers}/>
    </Switch>
  </main>
)

export default Main
