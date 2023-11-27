const hasOnlyAlphabets = (input: string): boolean => {
  const regex = /^[a-zA-Z]*$/;
  return regex.test(input);
};

export {hasOnlyAlphabets};
