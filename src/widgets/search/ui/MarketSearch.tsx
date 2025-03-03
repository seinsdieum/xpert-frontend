import { IconWrapper } from '@/shared/ui';
import { HiSearch } from 'react-icons/hi';
import style from './MarketSearch.module.css';
import { useState } from 'react';
import { useThrottle } from '@/shared/lib';
import useDebounce from '@/shared/lib/useDebounce';
const MarketSearch = () => {
    const [search, setSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const throttledSearch = useThrottle((str: string) => {
        setLoading(false);
    }, 500);
    return (
        <div className={style.wrapper}>
            <IconWrapper>
                <HiSearch />
            </IconWrapper>
            <input
                value={search}
                onChange={e => {
                    setLoading(true);
                    setSearch(e.target.value);
                    throttledSearch(e.target.value);
                }}
            ></input>
            {loading ? <p className="inline">loading...</p> : null}
        </div>
    );
};

export default MarketSearch;
