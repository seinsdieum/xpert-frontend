import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import { UserPage } from '@/pages/users';
import { MarketLayout } from '@/widgets';
import { HomePage } from '@/pages/home';
import { TaskPage } from '@/pages/tasks';
import { SearchPage } from '@/pages/search';
import { ChatPage } from '@/pages/chats';
import {
    chatsRoute,
    homeRoute,
    searchRoute,
    signRoute,
    tasksRoute,
    usersRoute
} from '@/shared/config';
import { SignPage } from '@/pages/sign-in';
const router = createBrowserRouter([
    {
        path: `${homeRoute}`,
        children: [
            { index: true, element: <HomeApp /> },
            { path: `${usersRoute}/*`, element: <UserApp /> },
            { path: `${tasksRoute}/*`, element: <TaskApp /> },
            { path: `${searchRoute}/*`, element: <SearchApp /> },
            { path: `${chatsRoute}/*`, element: <ChatApp /> },
            { path: `${signRoute}/*`, element: <SignApp /> }
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

function SearchApp() {
    return (
        <Routes>
            <Route index element={<SearchPage />}></Route>
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
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
