import { IconType } from 'react-icons/lib';
import style from './IconLink.module.css';
import { ButtonProps } from '@/shared/ui';

interface Props extends ButtonProps {
    title?: string;
    icon?: IconType;
    iconClassName?: string;
    titleClassName?: string;
    isExpanded?: boolean;
}

const IconLink = (props: Props) => {
    return (
        <button
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            onClick={props.onClick}
            className={`
        ${style.wrapper}
        ${props.isExpanded ? style.expanded : ''}
        `}
        >
            {props.icon ? (
                <props.icon
                    className={`${style.icon}
      ${props.iconClassName ? props.iconClassName : ''}  
        `}
                />
            ) : null}
            {props.title ? (
                <p
                    className={`
                ${style.text}
                ${props.titleClassName || null}
                `}
                >
                    {props.title}
                </p>
            ) : null}
        </button>
    );
};

export default IconLink;
