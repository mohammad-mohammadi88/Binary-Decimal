import binaryToDecimal from "./binaryToDecimal";
import decimalToBinary from "./decimalToBinary";
import sumBinaries from "./sumBinaries";

const combination = (decimal1: number, decimal2: number, base: number = 2) => {
    const { binary: binary1 } = decimalToBinary(decimal1, base);
    const { binary: binary2 } = decimalToBinary(decimal2, base);

    const summationBinary = sumBinaries(binary1, binary2, base);

    return {
        summationBinary,
        decimal: binaryToDecimal(summationBinary, base),
    };
};

export default combination;
