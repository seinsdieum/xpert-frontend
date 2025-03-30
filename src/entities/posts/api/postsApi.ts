import { postsRoute } from '@/shared/config'
import { baseStateApi } from '@/shared/api'
import { PostEntity } from '@/shared/types'
const postsApi = baseStateApi.injectEndpoints({
    endpoints: build => ({
        getPosts: build.query<PostEntity[], void>({
            query: () => postsRoute,
            providesTags: []
        }),
        createPost: build.mutation<PostEntity, Partial<PostEntity>>({
            query: body => ({
                url: postsRoute,
                method: 'POST',
                body
            }),
            invalidatesTags: []
        }),
        getProfilePosts: build.query<PostEntity[], void>({
            query: _ => ({
                url: `${postsRoute}/profile`
            })
        }),
        getProfilePrivatePosts: build.query<PostEntity[], void>({
            query: _ => ({
                url: `${postsRoute}/private`
            })
        }),
        getProfileDrafts: build.query<PostEntity[], void>({
            query: _ => ({
                url: `${postsRoute}/drafts`
            })
        })
    })
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useGetProfilePostsQuery,
    useGetProfileDraftsQuery,
    useGetProfilePrivatePostsQuery
} = postsApi

export default postsApi
