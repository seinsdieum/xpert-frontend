import { ReactNode } from 'react';
import style from './MarketPage.module.css';
type Props = {
    children?: ReactNode;
    className?: string;
};
const MarketPage = (props: Props) => {
    return (
        <div
            {...props}
            className={`${style.wrapper} ${props.className ? props.className : null}`}
        ></div>
    );
};

export default MarketPage;
