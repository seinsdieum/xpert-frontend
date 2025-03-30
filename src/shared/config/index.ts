/* backend */
import { backendBaseUrl } from './backend'

/* frontend */
import {
    homeRoute,
    signRoute,
    chatsRoute,
    tasksRoute,
    usersRoute,
    searchRoute,
    categoryRoute,
    typeRoute,
    postsRoute,
    profileRoute,
    createRoute,
    archiveRoute,
    draftRoute
} from './frontend'

import { RootState } from './storeTypes'
import { AppDispatch } from './storeTypes'
/* export */
export {
    backendBaseUrl,
    homeRoute,
    signRoute,
    chatsRoute,
    tasksRoute,
    usersRoute,
    searchRoute,
    categoryRoute,
    typeRoute,
    postsRoute,
    profileRoute,
    createRoute,
    archiveRoute,
    draftRoute
}

export type { RootState, AppDispatch }
