import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { UserPage } from '@/pages/users';
import { MarketLayout } from '@/widgets/marketLayout';
import { HomePage } from '@/pages/home';
import { TaskPage } from '@/pages/tasks';
import { SearchPage } from '@/pages/search';
import { ChatPage } from '@/pages/chats';

import {
    chatsRoute,
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
import { store } from '@/entities/store';
const router = createBrowserRouter([
    {
        path: `${homeRoute}`,
        children: [
            { index: true, element: <HomeApp /> },
            { path: `${usersRoute}/*`, element: <UserApp /> },
            { path: `${tasksRoute}/*`, element: <TaskApp /> },
            { path: `${searchRoute}/*`, element: <SearchApp /> },
            { path: `${chatsRoute}/*`, element: <ChatApp /> },
            { path: `${signRoute}/*`, element: <SignApp /> },
            { path: `${profileRoute}/*`, element: <ProfileApp /> },
            { path: `${portfolioRoute}/*`, element: <PortfolioApp /> }
        ],
        element: <MarketLayout />
    }
]);

function HomeApp() {
    return (
        <Routes>
            <Route index element={<HomePage />}></Route>
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
            <Route path="" element={<SearchPage />}>
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
