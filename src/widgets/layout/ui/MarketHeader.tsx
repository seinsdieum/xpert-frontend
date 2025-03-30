import style from './MarketHeader.module.css'
import { Card, IconLink, InlineWrapper, VerticalMenu } from '@/shared/ui'
import { MarketSearch } from '@/features/search'
import { useSelector } from 'react-redux'
import { clearAccount, selectAccount } from '@/entities/auth'
import { Link, useNavigate } from 'react-router-dom'
import { profileRoute, signRoute } from '@/shared/config'
import { useDispatch } from 'react-redux'
import {
    HiArrowLeftOnRectangle,
    HiArrowRightOnRectangle,
    HiBell,
    HiUser,
    HiUserCircle
} from 'react-icons/hi2'
import { DropoverButton } from '@/shared/ui/DropoverButton'

function MarketHeader() {
    const authState = useSelector(selectAccount)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className={style.wrapper}>
            <div className={style.right_wrapper}>
                <h2>Logo</h2>
            </div>
            <div className={style.center_wrapper}>
                <MarketSearch />
            </div>
            <div className={style.right_wrapper}>
                {authState ? (
                    <>
                        <IconLink
                            className={style.profile_button}
                            icon={HiBell}
                        />
                        <DropoverButton
                            posX='l'
                            posY='b'
                            renderTrigger={handler => (
                                <IconLink
                                    isExpanded
                                    onClick={handler}
                                    title={authState.username}
                                    className={style.profile_button}
                                    icon={HiUser}></IconLink>
                            )}>
                            <VerticalMenu
                                className='ui-shadow'
                                options={[
                                    {
                                        icon: HiUserCircle,
                                        title: 'Профиль',
                                        onClick() {
                                            navigate(profileRoute)
                                        }
                                    },
                                    {
                                        icon: HiArrowLeftOnRectangle,
                                        title: 'Выйти из аккаунта',
                                        onClick() {
                                            dispatch(clearAccount())
                                        }
                                    }
                                ]}></VerticalMenu>
                        </DropoverButton>
                    </>
                ) : (
                    <>
                        <Link to={signRoute}>
                            <IconLink
                                className={style.profile_button}
                                isExpanded
                                title='Войти'
                                icon={HiArrowRightOnRectangle}></IconLink>
                        </Link>
                    </>
                )}
            </div>
        </div>
    )
}

export default MarketHeader
