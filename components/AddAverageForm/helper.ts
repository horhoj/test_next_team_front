export const getNewIntegerValue = (oldValue: number, newValue: unknown) => {
  if (newValue === '') {
    return 0;
  }

  const newValueStr = String(newValue);

  if (/\d+/.test(newValueStr)) {
    const x = Number.parseInt(newValueStr);

    return Number.isNaN(x) ? 0 : x;
  }
  return oldValue;
};

interface GetCurrentValuePayload {
  integerPartOfNumber: number;
  fractionalPartOfNumber: number;
  isHasFractionalPart: boolean;
  isNegativeNumber: boolean;
}

export const getCurrentValue = ({
  integerPartOfNumber,
  fractionalPartOfNumber,
  isHasFractionalPart,
  isNegativeNumber,
}: GetCurrentValuePayload) => {
  let result = integerPartOfNumber;

  if (isHasFractionalPart && fractionalPartOfNumber > 0) {
    const { length } = fractionalPartOfNumber.toString();
    const x = Math.pow(10, length);
    result = result + fractionalPartOfNumber / x;
  }

  if (isNegativeNumber) {
    result = -1 * result;
  }

  return result;
};
