import { chatsRoute, tasksRoute } from '@/shared/config';
import { feedRoute } from '@/shared/config/frontend';
import { SideBarLinkProps } from '@/shared/ui';
import { HiChatAlt, HiHome, HiPencilAlt } from 'react-icons/hi';

export const sideBarLinks: SideBarLinkProps[] = [
    { icon: HiHome, title: 'Главная', to: feedRoute },
    {
        icon: HiPencilAlt,
        title: 'Задачи',
        to: tasksRoute
    },

    { icon: HiChatAlt, title: 'Сообщения', to: chatsRoute }
];
