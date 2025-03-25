import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { tasksRoute, usersRoute } from '@/shared/config';

const PostSearch = lazy(() =>
    import('@/widgets/post/search').then(module => ({ default: module.PostSearch }))
);

const SearchPage = lazy(() =>
    import('@/pages/search').then(module => ({ default: module.SearchPage }))
);

function SearchRoute() {
    return (
        <Routes>
            <Route path="" element={<PrivateRoute route={<SearchPage />}></PrivateRoute>}>
                <Route index element={<PostSearch />}></Route>
                <Route path={usersRoute} element={<div>not implemented</div>}></Route>
                <Route path={tasksRoute} element={<div>not implemented</div>}></Route>
            </Route>
        </Routes>
    );
}

export default SearchRoute;
