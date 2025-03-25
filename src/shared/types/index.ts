export interface RoleEntity {
    id: number;
    name: string;
}

export interface UserEntity {
    id: number;
    name: string;
    email?: string;
    description: string;
    role_id: number;
    created_at: string;
    modified_at: string;
    is_banned: boolean;

    role?: Partial<RoleEntity>;
}

export interface TaskEntity {
    //todo change structure
    id: number;
    name: string;
    description?: string;
    user_id?: number;
    task_status: string;

    user?: Partial<UserEntity>;
}

export interface CreatePostDto {
    body?: string;
    task_id?: number;
}

export interface PostEntity {
    id: number;
    body: string;
    user_id?: number;
    task_id?: number;
    created_at: string;
    modified_at: string;

    post_image?: FileEntity[];
    user?: Partial<UserEntity>;
    task?: Partial<TaskEntity>;
}

export interface FileEntity {
    path: string;
    filename: string;
}

export interface ReviewEntity {
    id: number;
    body: string;
    post_id: number;
    user_id: number;
    rate: number;

    post?: PostEntity;
    user?: UserEntity;
}
