export const doesStringHasValue = (str: string | null | undefined): boolean => {
  if (str === null) {
    return false;
  } else if (str === undefined) {
    return false;
  } else if (str === '') {
    return false;
  } else if (str.length === 0) {
    return false;
  } else {
    return true;
  }
};
