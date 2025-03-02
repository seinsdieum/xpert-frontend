import { Outlet } from 'react-router-dom';
import style from './MarketLayout.module.css';
import MarketMenu from '@/features/MarketMenu/MarketMenu';
import MarketHeader from '@/features/MarketHeader/MarketHeader';

const MarketLayout = () => {
    return (
        <div className={style.layout_wrapper}>
            <MarketHeader></MarketHeader>
            <div className={style.wrapper}>
                <MarketMenu></MarketMenu>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MarketLayout;
