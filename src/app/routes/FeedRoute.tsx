import { createRoute } from '@/shared/config';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
const Feed = lazy(() => import('@/widgets/post/feed').then(module => ({ default: module.Feed })));
const CreatePost = lazy(() =>
    import('@/widgets/post/create').then(module => ({ default: module.CreatePost }))
);
const FeedPage = lazy(() => import('@/pages/feed').then(module => ({ default: module.FeedPage })));

function FeedRoute() {
    return (
        <Routes>
            <Route path="" element={<FeedPage />}>
                <Route index element={<Feed />} />
                <Route path={createRoute} element={<PrivateRoute route={<CreatePost />} />} />
            </Route>
        </Routes>
    );
}

export default FeedRoute;
