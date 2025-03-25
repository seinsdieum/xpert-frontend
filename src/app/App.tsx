import { lazy, Suspense, useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { chatsRoute, homeRoute, searchRoute, signRoute, tasksRoute } from '@/shared/config';
import { feedRoute } from '@/shared/config/frontend';

const MarketLayout = lazy(() =>
    import('@/widgets/layout').then(module => ({ default: module.MarketLayout }))
);

//pages

// widgets

import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { authApi } from '@/entities/auth/api';
import PrivateRoute from './routes/PrivateRoute';
import TaskRoute from './routes/TaskRoute';
import { Loader } from '@/shared/ui';
const SearchRoute = lazy(() => import('./routes/SearchRoute'));
const ChatRoute = lazy(() => import('./routes/ChatRoute'));
const SignRoute = lazy(() => import('./routes/SignRoute'));
const FeedRoute = lazy(() => import('./routes/FeedRoute'));
const HomeRoute = lazy(() => import('./routes/HomeRoute'));
const router = createBrowserRouter([
    {
        path: `${homeRoute}`,
        children: [
            { index: true, element: <HomeRoute /> },
            {
                path: `${tasksRoute}/*`,
                element: (
                    <PrivateRoute
                        route={
                            <Suspense fallback={<Loader />}>
                                <TaskRoute />
                            </Suspense>
                        }
                    />
                )
            },
            {
                path: `${searchRoute}/*`,
                element: (
                    <PrivateRoute
                        route={
                            <Suspense fallback={<Loader />}>
                                <SearchRoute />
                            </Suspense>
                        }
                    />
                )
            },
            {
                path: `${chatsRoute}/*`,
                element: (
                    <PrivateRoute
                        route={
                            <Suspense fallback={<Loader />}>
                                <ChatRoute />
                            </Suspense>
                        }
                    />
                )
            },
            {
                path: `${signRoute}/*`,
                element: (
                    <Suspense fallback={<Loader />}>
                        <SignRoute />
                    </Suspense>
                )
            },
            {
                path: `${feedRoute}/*`,
                element: (
                    <Suspense fallback={<Loader />}>
                        <FeedRoute />
                    </Suspense>
                )
            }
        ],
        element: <MarketLayout />
    }
]);

function App() {
    useEffect(() => {
        store.dispatch(authApi.endpoints.verify.initiate());
    }, []);
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
}

export default App;
