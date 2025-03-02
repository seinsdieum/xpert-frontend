import { chatsRoute, homeRoute, tasksRoute } from '@/shared/config/frontend';
import { SideBarLink } from '@/shared/config/types';
import { HiChatAlt, HiHome, HiPencilAlt } from 'react-icons/hi';

export const sideBarLinks: SideBarLink[] = [
    { icon: HiHome, title: 'Главная', to: homeRoute },
    {
        icon: HiPencilAlt,
        title: 'Задачи',
        to: tasksRoute
    },

    { icon: HiChatAlt, title: 'Сообщения', to: chatsRoute }
];
