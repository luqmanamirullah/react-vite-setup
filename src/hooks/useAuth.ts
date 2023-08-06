import AuthContext from '@/context/AuthProvider';
import { Auth } from '@/interfaces';
import { useContext, useDebugValue } from 'react';

interface UseAuthProps {
  auth?: Auth;
}
const useAuth = () => {
  const { auth }: UseAuthProps = useContext(AuthContext);
  useDebugValue(auth, (auth) => (auth?.user ? 'Logged In' : 'Logged Out'));
  return useContext(AuthContext);
};

export default useAuth;
