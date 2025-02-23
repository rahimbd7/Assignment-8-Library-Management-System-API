const pick = <T extends Record<string, unknown>, K extends keyof T>(obj: T, keys: K[]): Partial<T> => {
    const result: Partial<T> = {};

    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }
    console.log(result);
    return result;
}

export default pick