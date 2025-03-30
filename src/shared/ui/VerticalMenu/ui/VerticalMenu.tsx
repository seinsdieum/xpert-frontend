import { IconType } from 'react-icons/lib'
import style from './VerticalMenu.module.css'
import { ContextAction } from '@/shared/types'

type Props = {
    options: ContextAction[]
    className?: string
}

const VerticalMenu = ({ options, className }: Props) => {
    return (
        <div className={`${style.wrapper} ${className}`}>
            {options.map(x => (
                <button onClick={x.onClick} key={x.title}>
                    {x.icon && <x.icon />} {x.title ?? ''}
                </button>
            ))}
        </div>
    )
}

export default VerticalMenu
