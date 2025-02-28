import { IconType } from 'react-icons/lib';
import IconWrapper from '../IconWrapper/IconWrapper';
import style from './IconLink.module.css';
import { ButtonProps } from '../types';

interface Props extends ButtonProps {
    title?: string;
    icon?: IconType;
    iconClassName?: string;
    titleClassName?: string;
    isExpanded?: boolean;
}

const IconLink = (props: Props) => {
    return (
        <IconWrapper
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
                    className={`
      ${style.icon}
      ${props.iconClassName || null}  
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
        </IconWrapper>
    );
};

export default IconLink;
