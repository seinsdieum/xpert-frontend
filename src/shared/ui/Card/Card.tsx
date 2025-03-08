import { ContainerProps } from '../types';

type Props = ContainerProps;
const Card = (props: Props) => {
    return <div {...props} className={'card'}></div>;
};

export default Card;
