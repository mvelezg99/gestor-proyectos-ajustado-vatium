import React, { useState, useEffect } from 'react'

import { Row, Col, Form } from 'react-bootstrap'
import { Button, Alert, Fade } from 'react-bootstrap'

import withLogin from '../../Components/HOC/withLogin'
import SideNavBar from '../../Components/Global/SideNavBar'

import useForm from '../../Components/hooks/useForm'

import rolesAPI from '../../utils/petitions/roles.petitions'
import resourcesAPI from '../../utils/petitions/resources.petitions'

const INITIAL_RESOURCES_FORM = {
  name: '',
  role: 1,
}

const AddResources = () => {
  const [roles, setRoles] = useState([])
  const [formResources, setFormResources] = useState(INITIAL_RESOURCES_FORM)
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [alertError, setAlertError] = useState(false)

  const form = useForm()

  useEffect(() => {
    rolesAPI.getRoles().then(setRoles)
  }, [])

  const handleChange = (e) => {
    setFormResources({
      ...formResources,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.updatePetitionState({ loading: true, error: null })
    setFormResources(INITIAL_RESOURCES_FORM)

    console.log(formResources)

    resourcesAPI
      .insertResource(formResources)
      .then(() => {
        form.updatePetitionState({ loading: false })
        form.setSuccesfulPetition()
        setAlertError(false)
        setAlertSuccess(true)
      })
      .catch((error) => {
        form.updatePetitionState({
          loading: false,
          error: 'Error agregando el recurso',
        })
        setAlertSuccess(false)
        setAlertError(true)
        console.log(error)
      })
  }

  return (
    <div>
      <Row>
        <Col className="col1-admin">
          <SideNavBar />
        </Col>
        <Col className="col2-admin">
          <Form
            id="formResources"
            className="form-resources"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Form.Label className="form-titles">
              Agregar nuevos recursos
            </Form.Label>
            <hr />
            <Form.Row>
              <Form.Group as={Col} lg>
                <Form.Label className="form-labels">
                  Nombre de recurso
                </Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  value={formResources.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} lg>
                <Form.Label className="form-labels">Rol asignado</Form.Label>
                <Form.Control
                  as="select"
                  name="role"
                  value={formResources.role}
                  onChange={handleChange}
                >
                  {roles.map((role) => (
                    <option id={role.name} name="role" value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button block type="submit" variant="login-button">
              {form.petitionState.loading ? 'Agregando' : 'Agregar'}
            </Button>
            <br />
            {form.petitionState.success && alertSuccess && (
              <Alert
                variant="success"
                onClose={() => setAlertSuccess(false)}
                dismissible
                transition={Fade}
              >
                Registro éxitoso!
              </Alert>
            )}
            {form.petitionState.error && alertError && (
              <Alert
                variant="danger"
                onClose={() => setAlertError(false)}
                dismissible
                transition={Fade}
              >
                {form.petitionState.error}
              </Alert>
            )}
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default withLogin(AddResources)
