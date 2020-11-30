import React from 'react'
import { NavLink } from 'react-router-dom'

import { Navbar, Nav } from 'react-bootstrap'

import { useUser } from '../../state/user'

import '../../Styles/Header.css'
import logoVatium from '../../images/Logo_Vatium.png'

const Header = () => {
  const user = useUser()
  return (
    <header className="header">
      <Navbar className="color-nav" variant="light" expand="lg">
        <Navbar.Brand>
          <NavLink to="/home" className="nav-link">
            <img
              alt="logo vatium"
              src={logoVatium}
              width="151.2"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
        <p className="header-title">GESTOR DE PROYECTOS</p>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end style-font">
            <NavLink to="/home" className="nav-link">
              <strong>HOME</strong>
            </NavLink>
            <NavLink to="/recursos" className="nav-link">
              <strong>RECURSOS</strong>
            </NavLink>
            {user.type === 'admin' && (
                <NavLink to="/admin" className="nav-link">
                  <strong>ADMIN</strong>
                </NavLink>
            )}
            {user.type !== 'admin' && (
              <NavLink to="/login" className="nav-link">
                <strong>INGRESO</strong>
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
