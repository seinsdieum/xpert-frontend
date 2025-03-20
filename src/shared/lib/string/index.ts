export const truncate = (text: string, limit: number): string =>
    text.length > limit ? text.slice(0, limit) + '...' : text;

export function randomString(length: number): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}
