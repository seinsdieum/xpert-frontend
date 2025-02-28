import { HiBell, HiSearch, HiUser } from 'react-icons/hi';
import style from './MarketHeader.module.css';
import icon from '../../assets/product/icons/logo.svg';
import ImageIcon from '../../shared/ui/ImageIcon/ImageIcon';
import IconButton from '../../shared/ui/IconButton/IconButton';

const MarketHeader = () => {
    return (
        <div className={style.wrapper}>
            <ImageIcon className={style.head_icon} src={icon} />
            <div className={style.center_wrapper}>
                <IconButton className={style.profile_button} icon={HiSearch} />
                <input placeholder="Поиск..." className={style.search}></input>
            </div>
            <div className={style.right_wrapper}>
                <IconButton className={style.profile_button} icon={HiBell} />
                <IconButton className={style.profile_button} icon={HiUser} />
            </div>
        </div>
    );
};

export default MarketHeader;
