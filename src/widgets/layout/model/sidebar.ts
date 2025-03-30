import { chatsRoute, tasksRoute } from '@/shared/config'
import { feedRoute } from '@/shared/config/frontend'
import { SideBarLinkProps } from '@/shared/ui'
import { HiClipboardList } from 'react-icons/hi'
import { HiChatBubbleLeftRight, HiHome } from 'react-icons/hi2'

export const sideBarLinks: SideBarLinkProps[] = [
    { icon: HiHome, title: 'Главная', to: feedRoute },
    { icon: HiChatBubbleLeftRight, title: 'Сообщения', to: chatsRoute },
    {
        icon: HiClipboardList,
        title: 'Задачи',
        to: tasksRoute
    }
]
