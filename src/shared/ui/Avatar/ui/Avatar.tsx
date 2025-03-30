import { HiUser } from 'react-icons/hi2'
import style from './Avatar.module.css'
type Props = {
    src?: string
    className?: string
}

const Avatar = ({ src, className }: Props) => {
    return (
        <div className={`${style.wrapper} ${className ?? ''}`}>
            <HiUser />
            <img src={src}></img>
        </div>
    )
}

export default Avatar
