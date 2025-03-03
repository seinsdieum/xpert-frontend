import { ButtonProps } from '../types';
import style from './Button.module.css';

type Props = ButtonProps;
const Button = (props: Props) => {
    return (
        <button
            {...props}
            className={`${style.button} ${props.className ? props.className : null}`}
        ></button>
    );
};

export default Button;
