import { HiBell, HiUser } from 'react-icons/hi';
import style from './MarketHeader.module.css';
import { logoIcon } from '@/assets/product/icons';
import { IconLink, ImageIcon } from '@/shared/ui';
import { IconButton } from '@/shared/ui';
import { MarketSearch } from '@/widgets/search';

const MarketHeader = () => {
    return (
        <div className={style.wrapper}>
            <ImageIcon className={style.head_icon} src={logoIcon} />
            <div className={style.center_wrapper}>
                <MarketSearch />
            </div>
            <div className={style.right_wrapper}>
                <IconLink className={style.profile_button} icon={HiBell} />
                <IconLink className={style.profile_button} icon={HiUser} />
            </div>
        </div>
    );
};

export default MarketHeader;
