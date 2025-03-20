import { postsRoute } from '@/shared/config';
import { baseStateApi } from '@/shared/api';
import { PostEntity } from '@/shared/types';
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
        })
    })
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;

export default postsApi;
