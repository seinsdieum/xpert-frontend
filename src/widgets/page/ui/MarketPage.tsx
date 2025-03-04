import style from './MarketPage.module.css';
import { ContainerProps } from '@/shared/ui';
type Props = ContainerProps;
const MarketPage = (props: Props) => {
    return (
        <div
            {...props}
            className={`${style.wrapper} ${props.className ? props.className : ''}`}
        ></div>
    );
};

export default MarketPage;
