import React, { useState, useEffect } from 'react'

import { Table } from 'react-bootstrap'
import { Button, Toast, Alert, Fade } from 'react-bootstrap'

import {
  TrashIcon,
  CheckCircleFillIcon,
  XCircleFillIcon,
} from '@primer/octicons-react'

import useForm from '../../hooks/useForm'
import resourcesAPI from '../../../utils/petitions/resources.petitions'

const ResourcesTable = ({ deleteResources }) => {
  const [resources, setResources] = useState()
  const [alertSuccess, setAlertSuccess] = useState(false)
  const [alertError, setAlertError] = useState(false)

  const form = useForm()

  useEffect(() => {
    resourcesAPI.getResources().then(setResources)
  }, [])

  function removeResource(resource) {
    form.updatePetitionState({ loading: true, error: null })

    resourcesAPI
      .deleteResource(resource)
      .then(() => {
        form.updatePetitionState({ loading: false })
        form.setSuccesfulPetition()
        setResources(resources.filter((el) => el.id !== resource.id))
        setAlertSuccess(true)
        setAlertError(false)
      })
      .catch((error) => {
        form.updatePetitionState({
          loading: false,
          error: 'Error eliminando el recurso',
        })
        setAlertSuccess(false)
        setAlertError(true)
        console.log(error)
      })
  }

  return (
    <div>
      <Table responsive className="tables">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            {deleteResources && <th>Acción</th>}
          </tr>
        </thead>
        <tbody>
          {Array.isArray(resources) &&
            resources.length > 0 &&
            resources.map((resource) => (
              <tr>
                <td>{resource.name}</td>
                <td>{resource.role}</td>
                {deleteResources && (
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => removeResource(resource)}
                    >
                      <TrashIcon />{' '}
                      {form.petitionState.loading ? 'Eliminando' : 'Eliminar'}
                    </Button>
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </Table>
      {form.petitionState.success && alertSuccess && (
        <Alert
          variant="success"
          className="toast-alert"
          onClose={() => setAlertSuccess(false)}
          dismissible
          transition={Fade}
        >
          <CheckCircleFillIcon size={16} /> Recurso eliminado correctamente!
        </Alert>
      )}
      {form.petitionState.error && alertError && (
        <Alert
          variant="danger"
          className="toast-alert"
          onClose={() => setAlertError(false)}
          dismissible
          transition={Fade}
        >
          <XCircleFillIcon size={16} /> {form.petitionState.error}
        </Alert>
      )}
    </div>
  )
}

export default ResourcesTable
