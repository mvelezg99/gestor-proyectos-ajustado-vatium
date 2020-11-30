import React from 'react'

import { Row, Col } from 'react-bootstrap'

import SideNavBar from '../../Components/Global/SideNavBar'
import withLogin from '../../Components/HOC/withLogin'
import ResourcesTable from '../../Components/Molecules/Tables/ResourcesTable'

const RemoveResource = () => {
  const p = 1

  return (
    <div>
      <Row>
        <Col className="col1-admin">
          <SideNavBar />
        </Col>
        <Col className="col2-admin">
          <p className="form-titles">Eliminar recursos</p>
          <ResourcesTable deleteResources />
        </Col>
      </Row>
    </div>
  )
}

export default withLogin(RemoveResource)
