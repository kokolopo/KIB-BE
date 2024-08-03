const jakartaOffset = 7 * 60 * 60 * 1000; // Jakarta UTC+7
const jakartaTime = new Date(Date.now() + jakartaOffset);
const year = jakartaTime.getUTCFullYear();
const month = ("0" + (jakartaTime.getUTCMonth() + 1)).slice(-2); // Menambahkan leading zero
const day = ("0" + jakartaTime.getUTCDate()).slice(-2); // Menambahkan leading zero

export const ResetDTO = (dto) => {
  for (let key in dto) {
    dto[key] = null;
  }

  dto.created = jakartaTime;
  dto.tahun = year;
  dto.file_nm = [];
  dto.petugas = [];

  return dto;
};
