import { useGetPostsQuery } from '@/entities/posts';
import { MarketPost } from '@/features/post';
import { FeedSkeleton } from '../../../../features/feed/skeleton';

const Feed = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery();

    if (isLoading) return <FeedSkeleton />;
    if (error) return <h1>error loading</h1>;

    return (
        <>
            {posts?.map(x => (
                <MarketPost key={x.id} payload={x}></MarketPost>
            ))}
        </>
    );
};

export default Feed;
