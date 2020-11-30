import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button, Card, Alert } from 'react-bootstrap'

import useForm from '../Components/hooks/useForm'
import auth from '../utils/petitions/auth.petitions'
import { useUserDispatch, LOGIN } from '../state/user'

const INITIAL_LOGIN_STATE = {
  user: '',
  password: '',
}

const Login = () => {
  const [formLogin, setFormLogin] = useState(INITIAL_LOGIN_STATE)

  const form = useForm()
  const history = useHistory()
  const userDispatch = useUserDispatch()

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.updatePetitionState({ loading: true, error: null })
    setFormLogin(INITIAL_LOGIN_STATE)

    auth
      .login(formLogin)
      .then(({ user, token }) => {
        form.updatePetitionState({ loading: false })
        localStorage.setItem('vatiumUser', JSON.stringify(user))
        localStorage.setItem('token', token)
        userDispatch({ type: LOGIN, payload: user })
        history.push('/admin')
        console.log('Exitoso')
      })
      .catch((error) => {
        console.log(error)
        form.updatePetitionState({
          loading: false,
          error: 'El usuario o la contraseña son incorrectas.',
        })
      })
  }

  return (
    <div className="page">
      <Container>
        <Row>
          <Col />
          <Col sm={6} md={5} lg={5} mx="auto">
            <div className="login">
              <Card>
                <Card.Body>
                  <Card.Title className="text-center">
                    INGRESO ADMINISTRADOR
                  </Card.Title>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="user">
                      <Form.Label>Usuario</Form.Label>
                      <Form.Control
                        name="user"
                        onChange={handleChange}
                        value={formLogin.user}
                        type="text"
                        placeholder="Ingresar usuario"
                        required
                        autoComplete="off"
                      />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Contraseña</Form.Label>
                      <Form.Control
                        name="password"
                        onChange={handleChange}
                        value={formLogin.password}
                        type="password"
                        placeholder="Ingresar contraseña"
                        required
                      />
                    </Form.Group>
                    <Button block variant="login-button" type="submit">
                      {form.petitionState.loading ? 'Ingresando ...' : 'Ingresar'}
                    </Button>
                    {form.petitionState.success && (
                      <Alert variant="success">Ingreso exitoso!</Alert>
                    )}
                    {form.petitionState.error && (
                      <Alert variant="danger">{form.petitionState.error}</Alert>
                    )}
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  )
}

export default Login
