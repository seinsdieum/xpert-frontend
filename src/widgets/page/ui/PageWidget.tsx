import style from './PageWidget.module.css';
import { ContainerProps } from '@/shared/ui';
type Props = ContainerProps;
const PageWidget = (props: Props) => {
    return (
        <div
            {...props}
            className={`${style.wrapper} ${props.className ? props.className : ''}`}
        ></div>
    );
};

export default PageWidget;
