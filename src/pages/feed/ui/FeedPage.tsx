import { PageWidget } from '@/widgets/page';
import style from './FeedPage.module.css';
import { FeedSidebar } from '@/features/feed/sidebar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { FeedSkeleton } from '@/features/feed/skeleton';
const FeedPage = () => {
    return (
        <PageWidget className={style.wrapper}>
            <div className={style.center_wrapper}>
                <Suspense fallback={<FeedSkeleton />}>
                    <Outlet />
                </Suspense>
            </div>
            <div className={style.sidebar}>
                <FeedSidebar />
            </div>
        </PageWidget>
    );
};

export default FeedPage;
