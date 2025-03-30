import { useGetProfilePostsQuery } from '@/entities/posts'
import { FeedSkeleton } from '@/features/feed'
import { MarketPost } from '@/features/post'
import { postsRoute } from '@/shared/config'
import { editRoute } from '@/shared/config/frontend'
import { editContextAction } from '@/shared/lib/contextActions'
import { useNavigate } from 'react-router-dom'

const ProfileFeed = () => {
    const { data: posts, isLoading } = useGetProfilePostsQuery()
    const navigate = useNavigate()
    return (
        <>
            {isLoading ? (
                <FeedSkeleton />
            ) : (
                posts?.map(x => (
                    <MarketPost
                        options={[
                            editContextAction(() => {
                                navigate(`${postsRoute}${editRoute}/${x.id}`)
                            })
                        ]}
                        payload={x}
                        key={x.id}
                    />
                ))
            )}
        </>
    )
}

export default ProfileFeed
