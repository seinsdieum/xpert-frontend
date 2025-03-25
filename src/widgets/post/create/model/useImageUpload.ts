import { selectAccount } from '@/entities/auth';
import { uploadFile } from '@/shared/api';
import { FileEntity } from '@/shared/types';
import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

const useImageUpload = (
    postId: number,
    images: File[],
    onStart?: (index: number) => void,
    onReject?: (err: Error | AxiosError, index: number) => void,
    onResolve?: (res: FileEntity, index: number) => void
) => {
    const authState = useSelector(selectAccount);
    const uploadImage = useCallback(
        async (index: number) => {
            onStart?.(index);
            uploadFile(`/image/${postId}`, images[index], authState?.access_token)
                .then(res => {
                    onResolve?.(res.data, index);
                })
                .catch(err => {
                    onReject?.(err, index);
                });
        },
        [onStart, onReject, onResolve, postId, images]
    );

    return uploadImage;
};

export default useImageUpload;
