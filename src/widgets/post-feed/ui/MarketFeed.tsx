import { useGetPostsQuery } from '@/entities/posts';
import { MarketPost } from '@/features/post';

const MarketFeed = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery();

    if (isLoading) return <h1>loading...</h1>;
    if (error) return <h1>error loading</h1>;

    return (
        <>
            {posts?.map(x => (
                <MarketPost key={x.id} payload={x}></MarketPost>
            ))}
        </>
    );
};

export default MarketFeed;
