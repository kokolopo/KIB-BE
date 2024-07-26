import randomstring from "randomstring";

function saveFileUpload(prefix = "") {
  const fnamePrefix = prefix || "";
  const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, "");
  const randomString = randomstring.generate(10);
  const fname = `${fnamePrefix}${timestamp}${randomString}`;

  return fname;
}

export { saveFileUpload };
