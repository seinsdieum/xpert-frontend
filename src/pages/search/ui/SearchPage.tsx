import { searchRoute, usersRoute } from '@/shared/config';
import { Button, IconWrapper, InlineWrapper } from '@/shared/ui';
import { MarketPage } from '@/widgets/page';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link, Outlet } from 'react-router-dom';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <MarketPage>
            <InlineWrapper>
                <IconWrapper onClick={() => navigate(-1)}>
                    <HiOutlineChevronLeft />
                </IconWrapper>
                <h1>Поиск</h1>
            </InlineWrapper>
            <InlineWrapper>
                <Link to={`${searchRoute}?query=${params.get('query')}`}>
                    <Button isActive={location.pathname === searchRoute}>Все</Button>
                </Link>
                <Link to={`${searchRoute}${usersRoute}?query=${params.get('query')}`}>
                    <Button isActive={location.pathname === `${searchRoute}${usersRoute}`}>
                        Пользователи
                    </Button>
                </Link>
            </InlineWrapper>
            <Outlet></Outlet>
        </MarketPage>
    );
};

export default SearchPage;
