import { IconType } from 'react-icons/lib';
import { ButtonProps } from '../types';
import style from './IconButton.module.css';

interface Props extends ButtonProps {
    icon?: IconType;
}

const IconButton = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            onBlur={props.onBlur}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            className={`${style.button} ${props.className || null}`}
        >
            {props.icon ? <props.icon /> : ''}
        </button>
    );
};

export default IconButton;
