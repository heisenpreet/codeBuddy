const phoneValidationCheck = (input:string):boolean => {
  let regex = /^[6-9]\d{9}$/gi;

  return regex.test(input);
};

export  {phoneValidationCheck};
