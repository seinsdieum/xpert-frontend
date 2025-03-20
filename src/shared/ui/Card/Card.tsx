import { ContainerProps } from '../types';

type Props = ContainerProps;
const Card = (props: Props) => {
    return (
        <div
            onMouseLeave={props.onMouseLeave}
            onMouseEnter={props.onMouseEnter}
            onClick={props.onClick}
            className={`card ${props.className || ''}`}
            children={props.children}
        ></div>
    );
};

export default Card;
