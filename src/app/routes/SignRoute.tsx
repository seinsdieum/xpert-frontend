import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const SignPage = lazy(() =>
    import('@/pages/sign-in').then(module => ({ default: module.SignPage }))
);
function SignRoute() {
    return (
        <Routes>
            <Route index element={<SignPage />}></Route>
        </Routes>
    );
}

export default SignRoute;
