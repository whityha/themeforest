export const cutString = (initialString: string, limit: number) => {
    return initialString.length >= limit ? `${initialString.slice(0, limit)}...` : initialString;
};
