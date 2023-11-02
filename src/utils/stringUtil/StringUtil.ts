const doesStringHasValue = (str: string | null | undefined): boolean => {
  if (str === null) {
    return false;
  }
  if (str === undefined) {
    return false;
  }
  if (str === '') {
    return false;
  }
  if (str.length === 0) {
    return false;
  }
  return true;
};

export default doesStringHasValue;
