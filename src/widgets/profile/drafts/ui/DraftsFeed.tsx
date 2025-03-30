import { useGetProfileDraftsQuery } from '@/entities/posts'
import { MarketPost } from '@/features/post'

const DraftsFeed = () => {
    const { data: posts, isLoading } = useGetProfileDraftsQuery()
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

export default DraftsFeed
