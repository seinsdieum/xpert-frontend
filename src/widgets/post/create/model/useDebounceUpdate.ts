import { selectAccount } from '@/entities/auth';
import { postPost, putPost } from '@/shared/api';
import { useDebounce } from '@/shared/lib';
import { PostEntity } from '@/shared/types';
import { AxiosError } from 'axios';
import { useSelector } from 'react-redux';

const useDebounceUpdate = (
    onStart?: () => void,
    onReject?: (err: Error | AxiosError) => void,
    onResolve?: (res: PostEntity) => void
) => {
    const authState = useSelector(selectAccount);
    const debounceUpdate = useDebounce(
        async (
            body: string,
            postId: number,
            taskId?: number,
            onResolveLocal?: () => {},
            onRejectLocal?: () => {}
        ) => {
            onStart?.();
            if (postId < 0) {
                postPost({ body, task_id: taskId }, authState?.access_token)
                    .then(res => {
                        onResolve?.(res.data);
                        onResolveLocal?.();
                    })
                    .catch(err => {
                        onReject?.(err);
                        onRejectLocal?.();
                    });
            } else {
                putPost(postId, { body, task_id: taskId }, authState?.access_token)
                    .then(res => {
                        onResolve?.(res.data);
                        onResolveLocal?.();
                    })
                    .catch(err => {
                        onReject?.(err);
                        onRejectLocal?.();
                    });
            }
        },
        2000
    );

    return debounceUpdate;
};

export default useDebounceUpdate;
