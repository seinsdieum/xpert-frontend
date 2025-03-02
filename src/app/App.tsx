import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import UserPage from '@/pages/users/ui/UserPage';
import MarketLayout from '@/features/MarketLayout/MarketLayout';
import HomePage from '@/pages/home/ui/HomePage';
import TaskPage from '@/pages/tasks/ui/TaskPage';
import SearchPage from '@/pages/search/SearchPage';
import ChatPage from '@/pages/chats/ui/ChatPage';
import {
    chatsRoute,
    searchRoute,
    signRoute,
    tasksRoute,
    usersRoute
} from '@/shared/config/frontend';
import SignPage from '@/pages/sign-in/ui/SignPage';
const router = createBrowserRouter([
    {
        path: '/',
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
