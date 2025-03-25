import { useSelector } from 'react-redux';
import { selectSearch } from '@/features/search';
import { useEffect, useMemo, useState } from 'react';
import { postApi } from '@/shared/api';
import { PostEntity } from '@/shared/types';
import { MarketPost } from '@/features/post';
const PostSearch = () => {
    const [posts, setPosts] = useState<PostEntity[]>([]);
    const take = useMemo(() => 10, []);
    const [skip] = useState(0);
    const search = useSelector(selectSearch);
    const [errorLabel, setErrorLabel] = useState('');

    useEffect(() => {
        postApi
            .get(`?search=${search}&take=${take}&skip=${skip}`)
            .then(res => setPosts(res.data))
            .catch(_ => setErrorLabel('ащипка'));
    }, [search]);

    return (
        <div>
            {errorLabel ? (
                <p>{errorLabel}</p>
            ) : posts.length > 0 ? (
                posts.map(x => <MarketPost key={x.id} payload={x} />)
            ) : (
                <p>Ничего не найдено</p>
            )}
        </div>
    );
};

export default PostSearch;
