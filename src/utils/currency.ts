export type CurrencyType = {
  value: number;
  simbol?: "" | "RD$" | "RD$ " | "RD $" | "$" | "$ ";
  minFraction?: number;
  maxFraction?: number;
  useFree?: boolean;
};

export const priceFormat = ({
  value,
  simbol = "RD$",
  minFraction = 0,
  maxFraction = 0,
  useFree = true,
}: CurrencyType) => {
  const currency = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: minFraction,
    maximumFractionDigits: maxFraction,
  })
    .format(value)
    .replace(/\s/g, "") /* remove spaces */
    .replace("DOP", simbol);
  if (currency === `${simbol}0` && useFree) {
    return "Gratis";
  }
  if (currency === "RD$0" && !useFree) {
    return currency;
  }
  return currency.includes("NaN") ? "No Disponible" : currency;
};
