export const cutString = (string: string, limit: number) => {
    return string.length >= limit ? `${string.slice(0, limit)}...` : string;
};
