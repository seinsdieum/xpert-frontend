import { IconType } from 'react-icons/lib'

export interface ContextAction {
    title?: string
    icon?: IconType
    onClick?: VoidFunction
}
