import { Buffer } from "node:buffer";
import { createCipheriv, createDecipheriv } from "node:crypto";

const ALGORITHM = "aes-256-cbc";
export const encrypt = (textToEncrypt: string | undefined): string | undefined => {
  if (!textToEncrypt) return undefined;
  try {
    const CRYPTO_KEY_IV = process.env.CRYPTO_KEY_IV as string;
    const CRYPTO_KEY = Buffer.from(process.env.CRYPTO_KEY as string, "utf8");
    const cipher = createCipheriv(ALGORITHM, CRYPTO_KEY, CRYPTO_KEY_IV);
    cipher.setAutoPadding(true); // PKCS7

    const encrypted = Buffer.concat([
      cipher.update(textToEncrypt, "utf8"),
      cipher.final(),
    ]);

    return encrypted.toString("base64");
  } catch {
    return undefined;
  }
};

export const decrypt = (ciphertext: string | undefined): string | undefined => {
  if (!ciphertext) return undefined;
  try {
    const CRYPTO_KEY_IV = process.env.CRYPTO_KEY_IV as string;
    const CRYPTO_KEY = Buffer.from(process.env.CRYPTO_KEY as string, "utf8");
    const decipher = createDecipheriv(ALGORITHM, CRYPTO_KEY, CRYPTO_KEY_IV);
    decipher.setAutoPadding(true); // PKCS7

    const decrypted = Buffer.concat([
      decipher.update(Buffer.from(ciphertext, "base64")),
      decipher.final(),
    ]);
    return decrypted.toString("utf8");
  } catch {
    return undefined;
  }
};

export const encryptObj = (objToEncrypt: object = {}): string => {
  const json = JSON.stringify(objToEncrypt);
  return encrypt(json) ?? "";
};

export const decryptObj = (ciphertext: string | undefined): object | undefined => {
  const decrypted = decrypt(ciphertext);
  if (!decrypted) return undefined;
  try {
    return JSON.parse(decrypted);
  } catch {
    return undefined;
  }
};
