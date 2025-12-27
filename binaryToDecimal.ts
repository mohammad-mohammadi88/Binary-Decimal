export type ReverseDictionary = Record<string, number>;
const binaryToDecimal = (
    binary: string,
    base: number = 2,
    dict: ReverseDictionary = {}
) => {
    const toDecimal = (str: string = binary, decimal: number = 0) => {
        const element = str[0];
        if (!element) return decimal;

        const newDecimal = Number.isInteger(Number(element))
            ? Number(element) * base ** (str.length - 1)
            : dict[element];
        return toDecimal(str.slice(1), decimal + newDecimal);
    };
    return toDecimal();
};

export default binaryToDecimal;
