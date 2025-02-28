import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import UserPage from '../pages/UserPage';
import MarketLayout from '../features/MarketLayout/MarketLayout';
import HomePage from '../pages/HomePage/HomePage';
import TaskPage from '../pages/TaskPage';
import SearchPage from '../pages/SearchPage';
import ChatPage from '../pages/ChatPage';
const router = createBrowserRouter([
    {
        path: '/',
        children: [
            { index: true, element: <HomeApp /> },
            { path: '/users/*', element: <UserApp /> },
            { path: '/task/*', element: <TaskApp /> },
            { path: '/search/*', element: <SearchApp /> },
            { path: '/chats/*', element: <ChatApp /> }
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

function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
