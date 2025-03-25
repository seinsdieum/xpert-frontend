import { selectAccount } from '@/entities/auth';
import { signRoute } from '@/shared/config';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRoute(props: { route: React.ReactNode }) {
    const authState = useSelector(selectAccount);
    return authState ? props.route : <Navigate to={signRoute} />;
}

export default PrivateRoute;
