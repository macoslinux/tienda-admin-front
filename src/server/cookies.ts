import "server-only";

import { type NextRequest, NextResponse } from "next/server";
import { jwtEncrypt } from "./jwt";

const MAX_AGE = 60 * 60 * 24 * 365;

import { cookies } from "next/headers";
import { getUserInfoFromADClaroAsync } from "@/services/sso.admin.service";

export async function createTiendaToken(
  request: NextRequest,
  requestHeaders?: Headers,
) {
  const ssoAdminToken = request.cookies.get("TIENDA_AD_ACCESS_TOKEN")?.value;
  if (!ssoAdminToken) return null;

  try {
    const user = await getUserInfoFromADClaroAsync();
    if (!user?.documentNumber) return null;

    const token = await jwtEncrypt(user);
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    if (token) {
      response.cookies.set("TIENDA_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: MAX_AGE,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });
    } else {
      response.cookies.delete("TIENDA_ACCESS_TOKEN");
    }

    return response;
  } catch (error) {
    console.error("Create Token Error:", error);
    return null;
  }
}

export const deleteSessionAsync = async () => {
  try {
    const cookie = await cookies();
    const ssoToken = cookie.get("CLARO_SSO_ACCESS_TOKEN")?.value;
    if (ssoToken) {
      //await logoutFromADClaroAsync();
    }
  } catch (error: unknown) {
    console.log(error);
  }
  (await cookies()).set("TIENDA_AD_ACCESS_TOKEN", "", {
    expires: new Date(0),
  });
};
