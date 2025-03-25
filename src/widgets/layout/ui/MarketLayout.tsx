import { Outlet, useNavigate } from 'react-router-dom';
import style from './MarketLayout.module.css';

import { lazy, Suspense } from 'react';
const MarketSideBar = lazy(() => import('./MarketSideBar'));
const MarketHeader = lazy(() => import('./MarketHeader'));
import { sideBarLinks } from '../model/sidebar';
import { useHotKey } from '@/shared/lib';
import { chatsRoute, homeRoute, tasksRoute } from '@/shared/config';
import { useSelector } from 'react-redux';
import { selectAccount } from '@/entities/auth';
import { Loader } from '@/shared/ui';

const MarketLayout = () => {
    const navigate = useNavigate();
    const authState = useSelector(selectAccount);
    useHotKey(
        ['Alt', 'c'],
        () => {
            navigate(chatsRoute);
        },
        true
    );
    useHotKey(
        ['Alt', 'h'],
        () => {
            navigate(homeRoute);
        },
        true
    );
    useHotKey(
        ['Alt', 't'],
        () => {
            navigate(tasksRoute);
        },
        true
    );
    return (
        <div className={style.layout_wrapper}>
            <Suspense fallback={<h1>header loading</h1>}>
                <MarketHeader></MarketHeader>
            </Suspense>
            <div className={style.wrapper}>
                {authState && (
                    <Suspense fallback={<h1>sb l</h1>}>
                        <MarketSideBar options={sideBarLinks} />
                    </Suspense>
                )}
                <Suspense fallback={<Loader />}>
                    <Outlet></Outlet>
                </Suspense>
            </div>
        </div>
    );
};

export default MarketLayout;
