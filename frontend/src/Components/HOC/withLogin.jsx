import React from 'react'

import { useHistory } from 'react-router-dom'
import { useUserDispatch, LOGOUT } from '../../state/user'

function withLogin(WrappedComponent) {
  return function WithLoginComponent(props) {
    const history = useHistory()
    const userDispatch = useUserDispatch()

    React.useEffect(() => {
      const { token } = localStorage
      if (!token) {
        userDispatch({ type: LOGOUT })
        history.push('/home')
      }
    })

    return <WrappedComponent {...props} />
  }
}

export default withLogin
