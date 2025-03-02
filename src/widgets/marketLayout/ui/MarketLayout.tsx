import { Outlet } from 'react-router-dom';
import style from './MarketLayout.module.css';
import MarketSideBar from './MarketSideBar';
import MarketHeader from './MarketHeader';
import { sideBarLinks } from '../model/sidebar';

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
