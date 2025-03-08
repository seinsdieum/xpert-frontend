import { ButtonProps } from '../types';
import style from './IconWrapper.module.css';

const IconWrapper = (props: ButtonProps) => {
    return (
        <button
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onClick={props.onClick}
            disabled={props.disabled}
            {...props}
            className={`
        ${style.icon}
        ${props.className || ''}
        `}
        ></button>
    );
};

export default IconWrapper;
