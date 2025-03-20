import { backendBaseUrl } from '../config';
import axios from 'axios';
import { FileEntity } from '../types';
const storageApi = axios.create({
    baseURL: `${backendBaseUrl}/storage`,
    timeout: 10000
});

export default storageApi;

export const storageApiConfig = {
    headers: [{ 'Content-Type': 'multipart/form-data' }]
};

export const uploadFile = async (relativePath: string, file: File, session: string) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('session', session);
    console.log(formData);
    return storageApi.post<FileEntity>(relativePath, formData, storageApiConfig);
};
