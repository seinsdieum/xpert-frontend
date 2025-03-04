import { Outlet, useNavigate } from 'react-router-dom';
import style from './MarketLayout.module.css';
import MarketSideBar from './MarketSideBar';
import MarketHeader from './MarketHeader';
import { sideBarLinks } from '../model/sidebar';
import { useHotKey } from '@/shared/lib';
import { chatsRoute, homeRoute, tasksRoute } from '@/shared/config';

const MarketLayout = () => {
    const navigate = useNavigate();

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
            <MarketHeader></MarketHeader>
            <div className={style.wrapper}>
                <MarketSideBar options={sideBarLinks}></MarketSideBar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MarketLayout;
