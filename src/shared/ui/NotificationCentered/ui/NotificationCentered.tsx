import { IconType } from 'react-icons/lib';
import style from './NotificationCentered.module.css';
import { useRef, useState } from 'react';
import { useClassName } from '@/shared/lib';
type Props = {
    Icon?: IconType;
    label: string;
    state: 0 | 1 | 2;
    timeout?: number;
    onHide: () => void;
};
const NotificationCentered = ({ Icon, label, state, timeout, onHide }: Props) => {
    const [isDisappearing, setIsDisappearing] = useState(false);
    const disappear = () => {
        setIsDisappearing(true);
        setTimeout(() => {
            onHide();
        }, 1000);
    };
    useRef(setTimeout(disappear, timeout || 500));
    const defaultClass = useClassName(state === 0, style.default);
    const successClass = useClassName(state === 1, style.success);
    const errorClass = useClassName(state === 2, style.error);
    const disappearClass = useClassName(isDisappearing, style.disappearing);
    return (
        <div
            className={`${style.wrapper} ${disappearClass} ${
                successClass || errorClass || defaultClass
            }`}
        >
            {Icon && <Icon />}
            <p>{label}</p>
        </div>
    );
};

export default NotificationCentered;
