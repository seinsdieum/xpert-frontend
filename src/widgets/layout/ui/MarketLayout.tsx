import { Outlet, useNavigate } from 'react-router-dom'
import style from './MarketLayout.module.css'

import { lazy, Suspense } from 'react'
const MarketSideBar = lazy(() => import('./MarketSideBar'))
const MarketHeader = lazy(() => import('./MarketHeader'))
import { sideBarLinks } from '../model/sidebar'
import { useHotKey } from '@/shared/lib'
import { chatsRoute, homeRoute, tasksRoute } from '@/shared/config'
import { useSelector } from 'react-redux'
import { selectAccount } from '@/entities/auth'
import { Loader } from '@/shared/ui'

const MarketLayout = () => {
    const navigate = useNavigate()
    const authState = useSelector(selectAccount)
    useHotKey(
        ['Alt', 'c'],
        () => {
            navigate(chatsRoute)
        },
        true
    )
    useHotKey(
        ['Alt', 'h'],
        () => {
            navigate(homeRoute)
        },
        true
    )
    useHotKey(
        ['Alt', 't'],
        () => {
            navigate(tasksRoute)
        },
        true
    )
    return (
        <div className={style.layout_wrapper}>
            <Suspense
                fallback={
                    <div
                        style={{
                            borderRadius: 0,
                            alignItems: 'center'
                        }}
                        className='skeleton'>
                        <div className='buttons'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                }>
                <MarketHeader></MarketHeader>
            </Suspense>
            <div className={style.wrapper}>
                {authState && (
                    <Suspense
                        fallback={
                            <div className='skeleton'>
                                <div className='buttons'>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        }>
                        <MarketSideBar options={sideBarLinks} />
                    </Suspense>
                )}
                <Suspense fallback={<Loader />}>
                    <Outlet></Outlet>
                </Suspense>
            </div>
        </div>
    )
}

export default MarketLayout
