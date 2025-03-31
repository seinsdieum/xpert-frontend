import { selectAccount } from '@/entities/auth'
import { publishPost } from '@/shared/api/client'
import { PostEntity } from '@/shared/types'
import { AxiosError } from 'axios'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

const usePostPublisher = () => {
    const authState = useSelector(selectAccount)
    const publish = useCallback(
        async (
            postIdAsync: Promise<number>,
            callback?: (data: PostEntity | AxiosError) => void
        ) => {
            let id = await postIdAsync
            publishPost(id, authState?.access_token)
                .then(res => {
                    callback?.(res.data)
                })
                .catch(err => {
                    callback?.(err)
                })
        },
        []
    )
    return publish
}

export default usePostPublisher
