import { selectAccount } from '@/entities/auth';
import { publishPost } from '@/shared/api/client';
import { PostEntity } from '@/shared/types';
import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const usePublishPost = (
    postId: number,
    onReject?: (err: Error | AxiosError) => void,
    onResolve?: (res: PostEntity) => void
) => {
    const authState = useSelector(selectAccount);
    const publish = useCallback(() => {
        publishPost(postId, authState?.access_token)
            .then(res => {
                onResolve?.(res.data);
            })
            .catch(err => {
                onReject?.(err);
            });
    }, [postId, onReject, onResolve]);
    return publish;
};

export default usePublishPost;
