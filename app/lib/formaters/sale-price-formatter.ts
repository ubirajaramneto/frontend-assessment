export function SalePriceFormatter(price: number, currency: string = "USD") {
  return `${price.toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  })}`;
}
