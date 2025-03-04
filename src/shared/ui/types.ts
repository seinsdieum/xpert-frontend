import { IconType } from 'react-icons/lib';
import { ReactNode } from '../lib';

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    isActive?: boolean;
    className?: string;
}
export interface SideBarLinkProps {
    title: string;
    icon: IconType;
    to: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ContainerProps {
    children?: ReactNode | Array<ReactNode>;
    animateRender?: boolean;
    className?: string;
}
