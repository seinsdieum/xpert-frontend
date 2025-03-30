import { ReactNode } from '@/shared/lib'
import style from './Section.module.css'

type Props = {
    title: string
    className?: string
    children?: ReactNode
    gap?: boolean
}
const Section = ({ title, className, children, gap }: Props) => {
    return (
        <div className={`${style.wrapper} ${className ?? ''}`}>
            <p className={`${style.title} ${gap ? style.gap : ''}`}>{title}</p>
            {children}
        </div>
    )
}

export default Section
