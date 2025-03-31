import { selectAccount } from '@/entities/auth'
import { postPost } from '@/shared/api'
import { PostEntity } from '@/shared/types'
import { AxiosResponse } from 'axios'
import { useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'

const usePostCreator = (body: string) => {
    const authState = useSelector(selectAccount)
    const postCreation = useRef<null | Promise<AxiosResponse<PostEntity, any>>>(
        null
    )

    const getPostId = useCallback(async () => {
        if (!postCreation.current)
            postCreation.current = postPost({ body }, authState?.access_token)

        try {
            let result = await postCreation.current
            return result.data.id
        } catch (err) {
            return -1
        }
    }, [body])

    return getPostId
}

export default usePostCreator
