import { feedRoute } from '@/shared/config/frontend';
import { Navigate, Route, Routes } from 'react-router-dom';

function HomeRoute() {
    return (
        <Routes>
            <Route path="" element={<Navigate to={feedRoute} />}></Route>
        </Routes>
    );
}

export default HomeRoute;
