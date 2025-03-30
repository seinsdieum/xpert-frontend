import { archiveRoute, draftRoute, tasksRoute } from '@/shared/config'
import { RouteTarget } from '@/shared/types'

export const profileRoutes: RouteTarget[] = [
    {
        title: 'Посты',
        targetRoute: ''
    },
    {
        title: 'Задачи',
        targetRoute: tasksRoute
    },
    {
        title: 'Архив',
        targetRoute: archiveRoute
    },
    {
        title: 'Черновики',
        targetRoute: draftRoute
    }
]
