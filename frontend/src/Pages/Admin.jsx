import React from 'react'

import { Row, Col } from 'react-bootstrap'

import withLogin from '../Components/HOC/withLogin'
import SideNavBar from '../Components/Global/SideNavBar'

const Admin = () => (
  <div>
    <Row>
      <Col className="col1-admin">
        <SideNavBar />
      </Col>
      <Col className="col2-admin">
        COSAS
      </Col>
    </Row>
  </div>
)

export default withLogin(Admin)
