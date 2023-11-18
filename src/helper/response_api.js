export const responseAPI = (message, data = null, total_page = 0) => {
  let result = {
    message,
    data,
    total_page,
  };
  return result;
};
