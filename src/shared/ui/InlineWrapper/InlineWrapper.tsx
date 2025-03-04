import style from './InlineWrapper.module.css';
import { ContainerProps } from '../types';

type Props = ContainerProps;
const InlineWrapper = (props: Props) => {
    return <div className={style.wrapper}>{props.children}</div>;
};

export default InlineWrapper;
