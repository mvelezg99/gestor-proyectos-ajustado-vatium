import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Nav } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import { KeyIcon, SignOutIcon, PlusCircleIcon, XCircleIcon } from '@primer/octicons-react'

import useAuth from '../hooks/useAuth'
import { useUser } from '../../state/user'

import '../../Styles/SideNavBar.css'

const SideNavBar = () => {
  const auth = useAuth()
  const user = useUser()
  const location = useLocation()

  const isCurrentNav = (nav) => {
    return nav == location.pathname
  }

  return (
    <div className="sidenav side-font">
      <div className="sidemenu">
        &nbsp;
        <div className="menu-title">
          <KeyIcon size={16} /> <strong>{user.user}</strong>{' '}
          <KeyIcon size={16} />
          <Button
            as={NavLink}
            to="/login"
            onClick={auth.logout}
            variant="logout-button"
          >
            Cerrar sesión <SignOutIcon size={17} />
          </Button>
        </div>
        <hr />
        <Nav className="justify-content-end flex-column">
          <NavLink
            to="/admin"
            className={isCurrentNav('/admin') ? 'current-link' : 'side-link'}
          >
            &nbsp;ADMIN
          </NavLink>
          <div className="menu-section">&nbsp;Recursos</div>
          <NavLink
            name="/admin/recursos/agregar"
            to="/admin/recursos/agregar"
            className={
              isCurrentNav('/admin/recursos/agregar') ? 'current-link' : 'side-link'
            }
          >
            &nbsp;&nbsp;<PlusCircleIcon size={16} /> Agregar recursos
          </NavLink>
          <NavLink
          name="/admin/recursos/eliminar"
          to="/admin/recursos/eliminar"
          className={
            isCurrentNav('/admin/recursos/eliminar') ? 'current-link' : 'side-link'
          }>
            &nbsp;&nbsp;<XCircleIcon size={16} /> Eliminar recursos
          </NavLink>
        </Nav>
      </div>
    </div>
  )
}

export default SideNavBar
