export const getUserInfoFromADClaroAsync = async () => {
  const response = await fetch("/api/sso/admin/user", {
    method: "GET",
  });
  if (!response.ok) throw new Error("Failed to fetch user info");
  return response.json();
};
