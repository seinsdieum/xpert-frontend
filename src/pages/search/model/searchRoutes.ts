import { tasksRoute, usersRoute } from '@/shared/config'
import { RouteTarget } from '@/shared/types'

const searchRoutes: RouteTarget[] = [
    { targetRoute: '', title: 'Все' },
    { targetRoute: usersRoute, title: 'Пользователи' },
    { targetRoute: tasksRoute, title: 'Объявления' }
]
export default searchRoutes
