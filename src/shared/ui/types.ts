import { IconType } from 'react-icons/lib';

export interface ButtonProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    active?: boolean;
    className?: string;
}
export type SideBarLinkProps = {
    title: string;
    icon: IconType;
    to: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
};
