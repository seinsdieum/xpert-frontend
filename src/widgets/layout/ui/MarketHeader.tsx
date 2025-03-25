import { HiBell, HiUser } from 'react-icons/hi';
import style from './MarketHeader.module.css';
import { IconLink } from '@/shared/ui';
import { MarketSearch } from '@/features/search';
import { useSelector } from 'react-redux';
import { clearAccount, selectAccount } from '@/entities/auth';
import { Link } from 'react-router-dom';
import { signRoute } from '@/shared/config';
import { useDispatch } from 'react-redux';

function MarketHeader() {
    const authState = useSelector(selectAccount);
    const dispatch = useDispatch();

    return (
        <div className={style.wrapper}>
            <div className={style.right_wrapper}>
                <h2>Logo</h2>
            </div>
            <div className={style.center_wrapper}>
                <MarketSearch />
            </div>
            <div className={style.right_wrapper}>
                {authState ? (
                    <>
                        <IconLink className={style.profile_button} icon={HiBell} />
                        <IconLink
                            className={style.profile_button}
                            isExpanded
                            title={authState.username}
                            icon={HiUser}
                        ></IconLink>
                        <button onClick={() => dispatch(clearAccount())}>logout</button>
                    </>
                ) : (
                    <>
                        <Link to={signRoute}>
                            <IconLink
                                className={style.profile_button}
                                isExpanded
                                title="Войти"
                                icon={HiUser}
                            ></IconLink>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default MarketHeader;
