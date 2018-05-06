import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CustomerList from './CustomerList'
import Customer from './Customer'

// The Roster component matches one of two different routes
// depending on the full pathname
const Customers = () => (
  <Switch>
    <Route exact path='/customers' component={CustomerList}/>
    <Route path='/customers/:id' component={Customer}/>
  </Switch>
)

export default Customers
