import { ContextAction } from '@/shared/types'
import { HiCog, HiNoSymbol, HiPencil } from 'react-icons/hi2'
import { IconType } from 'react-icons/lib'

export function getContextAction(
    icon: IconType,
    title: string,
    onClick: VoidFunction
) {
    return { icon, title, onClick }
}

export const editContextAction = (onClick: VoidFunction) => {
    return getContextAction(HiPencil, 'Редактировать', onClick)
}

export const blockContextAction = (onClick: VoidFunction) => {
    return getContextAction(HiNoSymbol, 'Заблокировать', onClick)
}

export const settingsContextAction = (onClick: VoidFunction) => {
    return getContextAction(HiCog, 'Параметры', onClick)
}
