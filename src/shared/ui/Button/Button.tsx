import { useClassName } from '@/shared/lib';
import { ButtonProps } from '../types';
import style from './Button.module.css';

type Props = ButtonProps;
const Button = (props: Props) => {
    const activeClassName = useClassName(props.isActive, style.active);
    const propsClassName = useClassName(props.className != undefined, props.className);
    return (
        <button
            {...props}
            className={`${style.button} ${activeClassName} ${propsClassName}`}
        ></button>
    );
};

export default Button;
