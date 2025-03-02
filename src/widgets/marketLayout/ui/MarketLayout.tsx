import { Outlet } from 'react-router-dom';
import style from './MarketLayout.module.css';
import MarketSideBar from '@/features/marketSideBar/ui/MarketSideBar';
import MarketHeader from '@/features/marketHeader/ui/MarketHeader';
import { sideBarLinks } from '../config/sidebar';

const MarketLayout = () => {
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
