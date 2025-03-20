import { useClassName } from '@/shared/lib';
import { ButtonProps } from '../types';
import style from './Button.module.css';

type Props = ButtonProps;
const Button = (props: Props) => {
    const activeClassName = useClassName(props.isActive, style.active);
    const propsClassName = useClassName(props.className != undefined, props.className);
    return (
        <button
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onBlur={props.onBlur}
            onClick={props.onClick}
            onFocus={props.onFocus}
            disabled={props.disabled}
            className={`${style.button} ${activeClassName} ${propsClassName}`}
            children={props.children}
        ></button>
    );
};

export default Button;
