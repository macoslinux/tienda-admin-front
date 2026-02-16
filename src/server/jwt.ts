import "server-only";

import { type JWTPayload, jwtVerify, SignJWT } from "jose";
import { encryptObj } from "@/utils/security";

const ALGORITHM = process.env.ALGORITHM ?? "HS256";
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);
const EXPIRATION = process.env.SET_EXPIRATION_TIME ?? "60 seconds";

export async function jwtEncrypt(data: object): Promise<string | null> {
  try {
    return await new SignJWT({ data: encryptObj(data) })
      .setProtectedHeader({ alg: ALGORITHM })
      .setIssuedAt()
      .setExpirationTime(EXPIRATION)
      .sign(JWT_SECRET);
  } catch (error) {
    console.error("JWT Encrypt Error:", error);
    return null;
  }
}

export async function jwtDecrypt(token?: string): Promise<JWTPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET, {
      algorithms: [ALGORITHM],
    });
    return payload;
  } catch (error) {
    console.error("JWT Decrypt Error:", error);
    return null;
  }
}
