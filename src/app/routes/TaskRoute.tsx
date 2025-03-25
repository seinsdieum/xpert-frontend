import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const TaskPage = lazy(() => import('@/pages/tasks').then(module => ({ default: module.TaskPage })));

function TaskRoute() {
    return (
        <Routes>
            <Route index element={<TaskPage />}></Route>
        </Routes>
    );
}

export default TaskRoute;
