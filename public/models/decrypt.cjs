const crypto = require("crypto");
const fs = require("fs");

const decryptFile = (inputFile, outputFile, password) => {
  const key = crypto.createHash("sha256").update(password).digest();
  
  const buffer = fs.readFileSync(inputFile);
  const iv = buffer.slice(0, 16);
  const encryptedData = buffer.slice(16);

  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  
  let decrypted = decipher.update(encryptedData);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  
  fs.writeFileSync(outputFile, decrypted);
};

decryptFile("character.enc", "character.glb", "Character3D#@");
