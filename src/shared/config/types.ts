import { ReactElement, ReactPortal } from 'react';
import { IconType } from 'react-icons/lib';

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

export type ReactNode = ReactChild | ReactPortal | boolean | null | undefined;

export type SideBarLink = {
    title: string;
    icon: IconType;
    to: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
};
