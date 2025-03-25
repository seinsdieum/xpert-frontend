import { IconWrapper, InlineWrapper } from '@/shared/ui';
import { PageWidget } from '@/widgets/page';
import { HiSearch } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import SearchRouteButton from './SearchRouteButton';
import searchRoutes from '../model/searchRoutes';
import useSearchPage from '../model/useSearchPage';

const SearchPage = () => {
    const search = useSearchPage();
    return (
        <PageWidget>
            <InlineWrapper>
                <IconWrapper disabled>
                    <HiSearch />
                </IconWrapper>
                <h2>{search.searchQuery}</h2>
            </InlineWrapper>
            <InlineWrapper>
                {searchRoutes.map(x => (
                    <SearchRouteButton
                        key={x.targetRoute}
                        targetRoute={x.targetRoute}
                        title={x.title}
                        route={search.currentRoute}
                        search={search.searchQuery ?? ''}
                    />
                ))}
            </InlineWrapper>
            <Outlet></Outlet>
        </PageWidget>
    );
};

export default SearchPage;
