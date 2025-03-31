import { selectAccount } from '@/entities/auth'
import { putPost } from '@/shared/api'
import { useDebounce } from '@/shared/lib'
import { CreatePostDto, PostEntity } from '@/shared/types/entities'
import { AxiosResponse } from 'axios'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

const usePostUpdater = () => {
    const authState = useSelector(selectAccount)
    const updateState = useRef<null | Promise<AxiosResponse<PostEntity, any>>>(
        null
    )

    const updatePost = useDebounce(
        async (
            idPromise: Promise<number>,
            post: CreatePostDto,
            onUpdateSuccess?: (res: PostEntity) => void
        ) => {
            if (updateState.current) await updateState.current
            if (!post.body) return
            let id = await idPromise
            updateState.current = putPost(id, post, authState?.access_token)
            updateState.current.then(x => onUpdateSuccess?.(x.data))
        },
        1000
    )

    return { updatePost, current: updateState.current }
}

export default usePostUpdater
