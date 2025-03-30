import { useGetProfileQuery } from '@/entities/user'
import ErrorModal from '@/features/error/modal/ui/ErrorModal'
import { InlineWrapper } from '@/shared/ui'
import { PageWidget } from '@/widgets/page'
import { lazy } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { profileRoutes } from '../model/routes'
import ProfileRouteButton from './ProfileRouteButton'
import { settingsContextAction } from '@/shared/lib/contextActions'
const UserCard = lazy(() =>
    import('@/features/user/card').then(module => ({
        default: module.UserCard
    }))
)

const ProfilePage = () => {
    const { data: profile, isLoading, error } = useGetProfileQuery()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    console.log(pathname)
    return (
        <PageWidget>
            {isLoading ? (
                <div className='skeleton'></div>
            ) : (
                profile && (
                    <UserCard
                        onEdit={() => {}}
                        options={[settingsContextAction(() => {})]}
                        user={profile}></UserCard>
                )
            )}
            {
                <InlineWrapper>
                    {profileRoutes.map(x => (
                        <ProfileRouteButton {...x} route={pathname} />
                    ))}
                </InlineWrapper>
            }
            <Outlet />
            <ErrorModal
                onClose={() => {
                    navigate(-1)
                }}
                isOpen={error !== undefined}
                header='Ошибка загрузки профиля'></ErrorModal>
        </PageWidget>
    )
}

export default ProfilePage
