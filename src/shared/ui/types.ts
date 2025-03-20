import { IconType } from 'react-icons/lib';
import { ReactNode } from '../lib';

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
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
    spaceBetween?: boolean;

    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}

export interface EditProps {
    onDelete?: (index: number) => void;
    onEdit?: (index: number) => void;
    onView?: (index: number) => void;
    onSwap?: (indexFrom: number, indexTo: number) => void;
}

export interface ImageCollectionProps {
    imagesSrc?: string[];
    onClick?: (index: number) => void;
    editing?: EditProps;
    className?: string;
    imageClassName?: string;
    states?: Array<0 | 1 | 2 | 3>;
}
