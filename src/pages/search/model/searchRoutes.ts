import { portfolioRoute, tasksRoute, usersRoute } from '@/shared/config';
import { SearchRoute } from './types';

const searchRoutes: SearchRoute[] = [
    { targetRoute: '', title: 'Все' },
    { targetRoute: usersRoute, title: 'Пользователи' },
    { targetRoute: portfolioRoute, title: 'Портфолио' },
    { targetRoute: tasksRoute, title: 'Объявления' }
];
export default searchRoutes;
