import React from 'react'
import { Route, Switch } from 'react-router-dom'

import '../Styles/Pages.css'
import '../Styles/Forms.css'

import Login from '../Pages/Login'
import Admin from '../Pages/Admin'
import AddResources from '../Pages/AdminPages/AddResources'
import RemoveResources from '../Pages/AdminPages/RemoveResources'

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/admin" component={Admin} />
    <Route exact path="/admin/recursos/agregar" component={AddResources} />
    <Route exact path="/admin/recursos/eliminar" component={RemoveResources} />
  </Switch>
)

export default Routes
