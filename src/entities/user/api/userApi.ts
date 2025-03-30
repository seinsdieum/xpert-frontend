import { baseStateApi } from '@/shared/api'
import { UserEntity } from '@/shared/types'

const userApi = baseStateApi.injectEndpoints({
    endpoints: build => ({
        getProfile: build.query<UserEntity, void>({
            query: () => '/user/profile-data'
            // providesTags
        })
    })
})

export const { useGetProfileQuery } = userApi

export default userApi
