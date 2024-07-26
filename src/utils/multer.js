import multer from "multer";
import path from "path";
import { saveFileUpload } from "../utils/upload_file.js";

// Set storage engine
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, saveFileUpload() + path.extname(file.originalname));
  },
});

// Init upload
const upload = multer({ storage: storage }).array("files", 10); // 'image' is the field name

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 100000000 }, // limit file size to 1MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).array("files", 12); // 'image' is the field name

// Check File Type
function checkFileType(file, cb) {
  const filetypes = /jpeg|jpg|png|pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

export { storage, upload, checkFileType };
