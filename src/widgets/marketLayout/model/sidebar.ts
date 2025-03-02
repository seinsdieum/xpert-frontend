import { chatsRoute, homeRoute, tasksRoute } from '@/shared/config';
import { SideBarLinkProps } from '@/shared/ui';
import { HiChatAlt, HiHome, HiPencilAlt } from 'react-icons/hi';

export const sideBarLinks: SideBarLinkProps[] = [
    { icon: HiHome, title: 'Главная', to: homeRoute },
    {
        icon: HiPencilAlt,
        title: 'Задачи',
        to: tasksRoute
    },

    { icon: HiChatAlt, title: 'Сообщения', to: chatsRoute }
];
