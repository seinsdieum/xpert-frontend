import { Outlet, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { lazy } from 'react'
import { archiveRoute, draftRoute, tasksRoute } from '@/shared/config'
const PrivateFeed = lazy(() =>
    import('@/widgets/profile').then(module => ({
        default: module.PrivateFeed
    }))
)
const DraftsFeed = lazy(() =>
    import('@/widgets/profile').then(module => ({ default: module.DraftsFeed }))
)
const ProfileFeed = lazy(() =>
    import('@/widgets/profile').then(module => ({
        default: module.ProfileFeed
    }))
)
const ProfilePage = lazy(() =>
    import('@/pages/profile').then(module => ({ default: module.ProfilePage }))
)

const ProfileRoute = () => {
    return (
        <Routes>
            <Route path='' element={<PrivateRoute route={<ProfilePage />} />}>
                <Route index element={<ProfileFeed />}></Route>
                <Route path={tasksRoute} element={<ProfileFeed />}></Route>
                <Route path={archiveRoute} element={<PrivateFeed />}></Route>
                <Route path={draftRoute} element={<DraftsFeed />}></Route>
            </Route>
        </Routes>
    )
}

export default ProfileRoute
