import { IconWrapper } from '@/shared/ui';
import { HiDotsHorizontal, HiSearch, HiX } from 'react-icons/hi';
import style from './MarketSearch.module.css';
import { useCallback, useState } from 'react';
import useMarketSearch from '../model/useMarketSearch';
import { useClassName, useDebounce, useHotKey, useThrottle } from '@/shared/lib';
import { Link, useNavigate } from 'react-router-dom';
import { homeRoute, searchRoute } from '@/shared/config';
import { changeRoute, changeSearch, selectRoute, selectSearch } from '../model/searchSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { searchQueryParam } from '../config';
const MarketSearch = () => {
    const dispatch = useDispatch();
    const routeState = useSelector(selectRoute);
    const searchState = useSelector(selectSearch);
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

    const applySearch = useCallback(
        (str = search) => {
            if (str) {
                navigate(`${searchRoute}${routeState}?${searchQueryParam}=${str}`);
            }
        },
        [search, routeState]
    );

    const deleteSearch = () => {
        navigate(homeRoute);
        dispatch(changeSearch(''));
        dispatch(changeRoute(''));
        setSearch('');
        debounceFocus(false);
    };
    const activeSearchButton = useClassName(!isLoading, style.active);

    useHotKey(['Enter'], applySearch, isFocused);

    return (
        <div
            onFocus={() => debounceFocus(true)}
            onBlur={() => debounceFocus(false)}
            className={style.wrapper}
        >
            <IconWrapper className={style.search + ' ' + activeSearchButton}>
                {isLoading ? <HiDotsHorizontal /> : <HiSearch />}
            </IconWrapper>
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
                        onClick={() => {
                            debounceFocus(false);
                            applySearch();
                        }}
                        className={style.link}
                        to={`${searchRoute}${routeState}?${searchQueryParam}=${search}`}
                    >
                        <p>{search}</p>
                    </Link>
                    {marketSearch.results.map(x => (
                        <Link
                            onClick={() => {
                                debounceFocus(false);
                                applySearch(x.title);
                            }}
                            className={style.link}
                            key={x.route}
                            to={`${searchRoute}${routeState}?${searchQueryParam}=${x.title}`}
                        >
                            <p>{x.title}</p>
                        </Link>
                    ))}
                </div>
            ) : null}
            {searchState ? (
                <IconWrapper className={style.close + ' ' + style.active} onClick={deleteSearch}>
                    <HiX />
                </IconWrapper>
            ) : null}
        </div>
    );
};

export default MarketSearch;
