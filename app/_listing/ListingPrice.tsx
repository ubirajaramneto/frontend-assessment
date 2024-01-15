"use client";

import { SalePriceFormatter } from "@/app/lib/formaters/sale-price-formatter";

export function ListingSalePrice({ price }: { price: number }) {
  return <p className="font-bold text-3xl">{SalePriceFormatter(price)}</p>;
}
