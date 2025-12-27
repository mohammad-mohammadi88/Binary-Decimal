export const logarithm = (n: number, base: number) => {
    if (!Number.isInteger(n) || !Number.isInteger(base))
        throw new Error("Your number and base number should be a whole number");

    return Math.floor(Math.log(n) / Math.log(base));
};

export type Dictionary = Record<number, string>;
interface Result {
    binary: string;
    dict: Dictionary;
}
const decimalToBinary = (decimal: number, base: number = 2): Result => {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const dict: Dictionary = {};
    const getSingleChar = (num: number) => {
        if (dict[num]) return dict[num];

        const char = alphabet[0];
        dict[num] = char;
        alphabet = alphabet.slice(1);
        return char;
    };

    const toBinary = (n: number = logarithm(decimal, base)): string => {
        const power = base ** n;
        const count = Math.floor(decimal / power);

        decimal -= count * power;

        const res = count < 10 ? count : getSingleChar(count);
        if (n === 0) return res.toString();
        return res + toBinary(n - 1);
    };
    return {
        binary: toBinary(),
        dict,
    };
};

const getFormatedBinary = (decimal: number, base: number = 2) => {
    const { binary, dict } = decimalToBinary(decimal, base);
    console.log("\nBinary: " + binary);
    if (Object.keys(dict).length)
        Object.entries(dict).forEach(([key, value]) =>
            console.log(`${value} => ${key}`)
        );
};

// getFormatedBinary(13, 3);
// getFormatedBinary(21, 3);
// getFormatedBinary(16, 4);
// getFormatedBinary(4, 4);

export default decimalToBinary;
