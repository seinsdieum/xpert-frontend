import { ButtonProps } from '../types';
import style from './IconWrapper.module.css';

const IconWrapper = (props: ButtonProps) => {
    return (
        <button
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onClick={props.onClick}
            {...props}
            className={`
        ${style.icon}
        ${props.className || null}
        `}
        ></button>
    );
};

export default IconWrapper;
