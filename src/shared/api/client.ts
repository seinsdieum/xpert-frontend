import { backendBaseUrl } from '../config';
import axios from 'axios';
import { CreatePostDto, FileEntity, PostEntity } from '../types';

export const postApi = axios.create({
    baseURL: `${backendBaseUrl}/posts`,
    timeout: 10000
});

export const authHeader = (bearer?: string) => ({ Authorization: `Bearer ${bearer}` });
export const fileHeader = { 'Content-Type': 'multipart/form-data' };

export const postPost = async (post: CreatePostDto, bearer?: string) => {
    if (!bearer) throw 'bearer is null';
    console.log(bearer);
    return postApi.post<PostEntity>('/', post, {
        headers: { ...authHeader(bearer) }
    });
};

export const putPost = async (postId: number, post: CreatePostDto, bearer?: string) => {
    if (!bearer) throw 'bearer is null';
    return postApi.put<PostEntity>(`/${postId}`, post, { headers: { ...authHeader(bearer) } });
};

export const uploadPostFile = async (relativePath: string, file: File, bearer?: string) => {
    if (!bearer) throw 'bearer is null';
    const formData = new FormData();
    formData.append('file', file);
    console.log(formData);

    return postApi.post<FileEntity>(relativePath, formData, {
        headers: { ...authHeader(bearer), ...fileHeader }
    });
};

export const publishPost = async (postId: number, bearer?: string) => {
    if (!bearer) throw 'bearer is null';
    return postApi.put<PostEntity>(
        `/publish/${postId}`,
        {},
        { headers: { ...authHeader(bearer) } }
    );
};
