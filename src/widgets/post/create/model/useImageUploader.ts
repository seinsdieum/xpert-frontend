import { selectAccount } from '@/entities/auth'
import { uploadFile } from '@/shared/api'
import { deletePostFile } from '@/shared/api/client'
import { FileEntity } from '@/shared/types'
import { AxiosError } from 'axios'
import { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'

const useImageUploader = () => {
    const authState = useSelector(selectAccount)
    const imageUploads = useRef<Promise<FileEntity>[]>([])
    const uploadImage = useCallback(
        async (
            postId: Promise<number>,
            image: File,
            onUpload?: (index: number) => void,
            onReject?: (index: number, message: string) => void
        ) => {
            let index = imageUploads.current.length
            try {
                let id = await postId
                imageUploads.current.push(
                    uploadFile(`/image/${id}`, image, authState?.access_token)
                )
                await imageUploads.current[index]
                onUpload?.(index)
            } catch (err) {
                let error = err as AxiosError
                onReject?.(index, error.response?.statusText || 'error')
            }
        },
        []
    )
    const deleteImage = useCallback(
        async (
            postId: Promise<number>,
            index: number,
            onDelete?: (index: number) => void
        ) => {
            let id = await postId
            let a = await imageUploads.current[index]
            await deletePostFile(
                `/image/${id}?imagePath=${a.path}`,
                authState?.access_token
            )
            onDelete?.(index)
        },
        []
    )

    return { uploadImage, deleteImage, imageUploads }
}

export default useImageUploader
