import { profileRoute } from '@/shared/config'
import { Button } from '@/shared/ui'
import { Link } from 'react-router-dom'

type Props = {
    route: string
    targetRoute: string
    title: string
}
const ProfileRouteButton = (props: Props) => {
    console.log(props.targetRoute)
    return (
        <Link to={`${profileRoute}${props.targetRoute}`}>
            <Button
                isActive={
                    props.route === `${profileRoute}${props.targetRoute}`
                }>
                {props.title}
            </Button>
        </Link>
    )
}

export default ProfileRouteButton
