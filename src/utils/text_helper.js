const checkOnlyString = (value) => {
  const regex = /[^a-zA-Z]/;
  return regex.test(value.trim());
};

const checkIsEmail = (value) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(value.trim());
};

const checkEmptyText = (value) => {
  return !value.trim();
};

export { checkOnlyString, checkIsEmail, checkEmptyText };
