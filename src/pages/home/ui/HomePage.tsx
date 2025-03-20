import { MarketPage } from '@/widgets/page';
import style from './HomePage.module.css';
import { MarketFeedSidebar } from '@/features/feed-sidebar';
import { Outlet } from 'react-router-dom';
import { FieldInput } from '@/shared/ui';
import { useState } from 'react';
const HomePage = () => {
    return (
        <MarketPage className={style.wrapper}>
            <div className={style.center_wrapper}>
                <Outlet />
            </div>
            <div className={style.sidebar}>
                <MarketFeedSidebar />
            </div>
        </MarketPage>
    );
};

export default HomePage;
