import { changeRoute, changeSearch, searchQueryParam, selectRoute } from '@/features/search';
import { portfolioRoute, searchRoute, tasksRoute, usersRoute } from '@/shared/config';
import { Button, IconWrapper, InlineWrapper } from '@/shared/ui';
import { MarketPage } from '@/widgets/page';
import { useCallback, useEffect, useMemo } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const routeState = useSelector(selectRoute);
    const [params] = useSearchParams();
    const queryString = useMemo(() => params.get(searchQueryParam), [params]);
    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(changeSearch(queryString || ''));
    }, [queryString]);

    useEffect(() => {
        dispatch(changeRoute(location.pathname.split(searchRoute).join('')));
    }, [location]);

    const objectPath = useCallback(
        (objPath: string) => {
            return `${searchRoute}${objPath}?${searchQueryParam}=${queryString}`;
        },
        [queryString]
    );

    useEffect(() => {
        window.scroll({ top: 0, behavior: 'smooth' });
    }, []);

    const isCurrentObject = useCallback(
        (targetRoute: string) => {
            return routeState === targetRoute;
        },
        [routeState]
    );

    return (
        <MarketPage>
            <InlineWrapper>
                <IconWrapper disabled>
                    <HiSearch />
                </IconWrapper>
                <h2>{queryString}</h2>
            </InlineWrapper>
            <InlineWrapper>
                <Link to={objectPath('')}>
                    <Button isActive={isCurrentObject('')}>Все</Button>
                </Link>

                <Link to={objectPath(tasksRoute)}>
                    <Button isActive={isCurrentObject(tasksRoute)}>Заказы</Button>
                </Link>

                <Link to={objectPath(portfolioRoute)}>
                    <Button isActive={isCurrentObject(portfolioRoute)}>Портфолио</Button>
                </Link>
                <Link to={objectPath(usersRoute)}>
                    <Button isActive={isCurrentObject(usersRoute)}>Пользователи</Button>
                </Link>
            </InlineWrapper>
            <Outlet></Outlet>
        </MarketPage>
    );
};

export default SearchPage;
