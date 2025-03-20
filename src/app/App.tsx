import {
    createBrowserRouter,
    Navigate,
    Outlet,
    Route,
    RouterProvider,
    Routes
} from 'react-router-dom';
import './App.css';
import { UserPage } from '@/pages/users';
import { MarketLayout } from '@/widgets/marketLayout';
import { HomePage } from '@/pages/home';
import { TaskPage } from '@/pages/tasks';
import { SearchPage } from '@/pages/search';
import { ChatPage } from '@/pages/chats';

import {
    chatsRoute,
    createRoute,
    homeRoute,
    portfolioRoute,
    profileRoute,
    searchRoute,
    signRoute,
    tasksRoute,
    usersRoute
} from '@/shared/config';
import { SignPage } from '@/pages/sign-in';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { MarketFeed } from '@/widgets/post-feed';
import { feedRoute } from '@/shared/config/frontend';
import { CreatePost } from '@/widgets/create-post';
import { useSelector } from 'react-redux';
import { selectAccount } from '@/entities/auth';
const router = createBrowserRouter([
    {
        path: `${homeRoute}`,
        children: [
            { index: true, element: <HomeApp /> },
            { path: `${usersRoute}/*`, element: <PrivateRoute route={<UserApp />} /> },
            { path: `${tasksRoute}/*`, element: <PrivateRoute route={<TaskApp />} /> },
            { path: `${searchRoute}/*`, element: <PrivateRoute route={<SearchApp />} /> },
            { path: `${chatsRoute}/*`, element: <PrivateRoute route={<ChatApp />} /> },
            { path: `${signRoute}/*`, element: <SignApp /> },
            { path: `${profileRoute}/*`, element: <PrivateRoute route={<ProfileApp />} /> },
            { path: `${portfolioRoute}/*`, element: <PrivateRoute route={<PortfolioApp />} /> },
            { path: `${feedRoute}/*`, element: <FeedApp /> }
        ],
        element: <MarketLayout />
    }
]);

function HomeApp() {
    return (
        <Routes>
            <Route path="" element={<Navigate to={feedRoute} />}></Route>
        </Routes>
    );
}

function PrivateRoute(props: { route: React.ReactNode }) {
    const authState = useSelector(selectAccount);
    return authState ? props.route : <Navigate to={signRoute} />;
}

function FeedApp() {
    return (
        <Routes>
            <Route path="" element={<HomePage />}>
                <Route index element={<MarketFeed />} />
                <Route path={createRoute} element={<PrivateRoute route={<CreatePost />} />} />
            </Route>
        </Routes>
    );
}

function ChatApp() {
    return (
        <Routes>
            <Route index element={<ChatPage />}></Route>
        </Routes>
    );
}

function UserApp() {
    return (
        <Routes>
            <Route index element={<UserPage />}></Route>
        </Routes>
    );
}

function TaskApp() {
    return (
        <Routes>
            <Route index element={<TaskPage />}></Route>
        </Routes>
    );
}
function PortfolioApp() {
    return (
        <Routes>
            <Route path="" element={<h1>Not Implemented</h1>}></Route>
        </Routes>
    );
}
function ProfileApp() {
    return (
        <Routes>
            <Route path="" element={<h1>Not Implemented</h1>}></Route>
        </Routes>
    );
}

function SearchApp() {
    return (
        <Routes>
            <Route path="" element={<PrivateRoute route={<SearchPage />}></PrivateRoute>}>
                <Route index element={<div>not implemented</div>}></Route>
                <Route path={usersRoute} element={<div>not implemented</div>}></Route>
                <Route path={portfolioRoute} element={<div>not implemented</div>}></Route>
                <Route path={tasksRoute} element={<div>not implemented</div>}></Route>
            </Route>
        </Routes>
    );
}

function SignApp() {
    return (
        <Routes>
            <Route index element={<SignPage />}></Route>
        </Routes>
    );
}

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
}

export default App;
