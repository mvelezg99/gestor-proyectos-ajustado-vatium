import { LOGOUT, useUserDispatch } from '../../state/user';


function useAuth() {
  const userDispatch = useUserDispatch();

  function logout() {
    localStorage.removeItem('vatiumUser');
    localStorage.removeItem('token');
    userDispatch({ type: LOGOUT });
  }

  return { logout };
}

export default useAuth;