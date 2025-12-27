// import { type ReverseDictionary } from "./binaryToDecimal";

// interface OptionalDicts {
//     binery1: ReverseDictionary;
//     binery2: ReverseDictionary;
// }
// const initialDicts: OptionalDicts = {
//     binery1: {},
//     binery2: {},
// };

const sumBinaries = (
    binery1: string,
    binery2: string,
    base: number = 2
    // optionalDicts: OptionalDicts = initialDicts
) => {
    const getLastChars = (): [number, number] => [
        Number(binery1[binery1.length - 1]),
        Number(binery2[binery2.length - 1]),
    ];
    const removeLastChars = () => {
        binery1 = binery1.slice(0, -1);
        binery2 = binery2.slice(0, -1);
    };
    const calcSum = (newBinery: string = "", extra: boolean = false) => {
        const [elem1, elem2] = getLastChars();
        if (Number.isNaN(elem1) && Number.isNaN(elem2))
            return (extra ? "1" : "") + newBinery;

        removeLastChars();
        const binerySum = (elem1 || 0) + (elem2 || 0) + Number(extra);

        const updatedBinery =
            (binerySum < base ? binerySum : binerySum - base) + newBinery;
        return calcSum(updatedBinery, binerySum >= base);
    };
    return calcSum();
};

export default sumBinaries;
