import style from './Loader.module.css';
import { spinner } from '@/assets/product/icons';
type Props = {
    className?: string;
};
const Loader = ({ className }: Props) => {
    return (
        <div className={`${style.wrapper} ${className ?? ''}`}>
            <img src={spinner} />
        </div>
    );
};

export default Loader;
