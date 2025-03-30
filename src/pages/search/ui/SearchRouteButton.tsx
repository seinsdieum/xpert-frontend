import { searchQueryParam, SearchState } from '@/features/search'
import { searchRoute } from '@/shared/config'
import { Button } from '@/shared/ui'
import { Link } from 'react-router-dom'
import { RouteTarget } from '@/shared/types'
interface Props extends SearchState, RouteTarget {}
const SearchRouteButton = (props: Props) => {
    return (
        <Link
            to={`${searchRoute}${props.targetRoute}?${searchQueryParam}=${props.search}`}>
            <Button isActive={props.route === props.targetRoute}>
                {props.title}
            </Button>
        </Link>
    )
}

export default SearchRouteButton
