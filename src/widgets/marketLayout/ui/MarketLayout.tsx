import { Outlet, useNavigate } from 'react-router-dom';
import style from './MarketLayout.module.css';
import MarketSideBar from './MarketSideBar';
import MarketHeader from './MarketHeader';
import { sideBarLinks } from '../model/sidebar';
import { useHotKey } from '@/shared/lib';
import { chatsRoute, homeRoute, tasksRoute } from '@/shared/config';
import { useSelector } from 'react-redux';
import { selectAccount } from '@/entities/auth';

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
            <MarketHeader></MarketHeader>
            <div className={style.wrapper}>
                {authState && <MarketSideBar options={sideBarLinks}></MarketSideBar>}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MarketLayout;
