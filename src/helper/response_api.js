export const responseAPI = (message, data = null, total_data = 0) => {
  let result = {
    message,
    data,
    total_data,
  };
  return result;
};
