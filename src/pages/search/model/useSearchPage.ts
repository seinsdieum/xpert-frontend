import { searchActions, searchQueryParam, selectRoute } from '@/features/search';
import { searchRoute } from '@/shared/config';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useSearchParams } from 'react-router-dom';

const useSearchPage = () => {
    const currentRoute = useSelector(selectRoute);
    const [params] = useSearchParams();
    const searchQuery = params.get(searchQueryParam) || '';
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchActions.changeSearch(searchQuery));
    }, [dispatch, searchQuery]);

    useEffect(() => {
        const cleanRoute = location.pathname.replace(searchRoute, '');
        dispatch(searchActions.changeRoute(cleanRoute));
    }, [dispatch, location.pathname]);

    return { currentRoute, searchQuery };
};

export default useSearchPage;
