import { useGetProfilePrivatePostsQuery } from '@/entities/posts'
import { MarketPost } from '@/features/post'

const PrivateFeed = () => {
    const { data: posts, isLoading } = useGetProfilePrivatePostsQuery()
    return (
        <>
            {isLoading ? (
                <>
                    <div className='skeleton'></div>
                    <div className='skeleton'></div>
                </>
            ) : (
                posts?.map(x => <MarketPost payload={x}></MarketPost>)
            )}
        </>
    )
}

export default PrivateFeed
