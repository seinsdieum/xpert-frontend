import style from './InlineWrapper.module.css';
import { ContainerProps } from '../types';
import { useClassName } from '@/shared/lib';

type Props = ContainerProps;
const InlineWrapper = (props: Props) => {
    const betweenClassName = useClassName(props.spaceBetween, style.between);
    const propsClassName = useClassName(props.className !== undefined, props.className);
    return (
        <div className={`${style.wrapper} ${betweenClassName} ${propsClassName}`}>
            {props.children}
        </div>
    );
};

export default InlineWrapper;
