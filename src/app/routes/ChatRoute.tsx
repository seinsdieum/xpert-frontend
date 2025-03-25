import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const ChatPage = lazy(() => import('@/pages/chats').then(module => ({ default: module.ChatPage })));

function ChatRoute() {
    return (
        <Routes>
            <Route index element={<ChatPage />}></Route>
        </Routes>
    );
}

export default ChatRoute;
