import { HiBell, HiSearch, HiUser } from 'react-icons/hi';
import style from './MarketHeader.module.css';
import { logoIcon } from '@/assets/product/icons';
import { ImageIcon } from '@/shared/ui';
import { IconButton } from '@/shared/ui';

const MarketHeader = () => {
    return (
        <div className={style.wrapper}>
            <ImageIcon className={style.head_icon} src={logoIcon} />
            <div className={style.center_wrapper}>
                <IconButton className={style.profile_button} icon={HiSearch} />
                <input placeholder="Поиск..." className={style.search}></input>
            </div>
            <div></div>
            <div className={style.right_wrapper}>
                <IconButton className={style.profile_button} icon={HiBell} />
                <IconButton className={style.profile_button} icon={HiUser} />
            </div>
        </div>
    );
};

export default MarketHeader;
