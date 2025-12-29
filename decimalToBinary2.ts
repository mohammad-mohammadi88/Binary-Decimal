const decimalToBinary2 = (decimal: number, base: number = 2): string =>
    decimal < base
        ? String(decimal)
        : decimalToBinary2(Math.floor(decimal / base), base) +
          String(decimal % base);

export default decimalToBinary2;
