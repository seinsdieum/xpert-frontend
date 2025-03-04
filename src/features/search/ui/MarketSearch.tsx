import { IconWrapper } from '@/shared/ui';
import { HiDotsHorizontal, HiSearch } from 'react-icons/hi';
import style from './MarketSearch.module.css';
import { useState } from 'react';
import useMarketSearch from '../model/useMarketSearch';
import { useDebounce, useHotKey, useThrottle } from '@/shared/lib';
import { Link, useNavigate } from 'react-router-dom';
import { searchRoute } from '@/shared/config';
const MarketSearch = () => {
    const [search, setSearch] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const navigate = useNavigate();

    const debounceLoading = useDebounce((isLoading: boolean) => {
        setIsLoading(isLoading);
    }, 100);

    const marketSearch = useMarketSearch(
        () => {},
        () => {
            debounceLoading(false);
        }
    );
    const throttleSearch = useThrottle((str: string) => {
        marketSearch.search(str);
    }, 500);
    const debounceFocus = useDebounce((isFocused: boolean) => {
        setIsFocused(isFocused);
    }, 100);

    useHotKey(
        ['Enter'],
        () => {
            if (search) navigate(`${searchRoute}?query=${search}`);
        },
        isFocused
    );

    return (
        <div
            onFocus={() => debounceFocus(true)}
            onBlur={() => debounceFocus(false)}
            className={style.wrapper}
        >
            <IconWrapper>{isLoading ? <HiDotsHorizontal /> : <HiSearch />}</IconWrapper>
            <input
                value={search}
                onChange={e => {
                    debounceLoading(true);
                    setSearch(e.target.value);
                    throttleSearch(e.target.value);
                }}
            ></input>
            {isFocused && search ? (
                <div className={`${style.suggestions_wrapper}`}>
                    <Link
                        onClick={() => debounceFocus(false)}
                        className={style.link}
                        to={`${searchRoute}?query=${search}`}
                    >
                        <p>{search}</p>
                    </Link>
                    {marketSearch.results.map(x =>
                        x.route ? (
                            <Link
                                onClick={() => debounceFocus(false)}
                                className={style.link}
                                key={x.route}
                                to={`${searchRoute}?query=${x.title}`}
                            >
                                <p>{x.title}</p>
                            </Link>
                        ) : (
                            <div key={x.title}>
                                <p>{x.title}</p>
                            </div>
                        )
                    )}
                </div>
            ) : null}
        </div>
    );
};

export default MarketSearch;
