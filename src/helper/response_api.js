export const responseAPI = (message, data = null) => {
  let result = {
    message,
    data,
  };
  return result;
};
