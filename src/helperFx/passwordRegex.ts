function validatePassword(password: string): boolean {
  const regex =
    /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?`~=-\\[\];',./]).{8,}$/;

  return regex.test(password);
}
export {validatePassword};
