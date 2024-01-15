"use client";

import { ListingDateFormatter } from "@/app/lib/formaters/listing-date-formatter";

export function ListingDate({ date }: { date: string }) {
  return (
    <p className="text-gray-500">Date listed: {ListingDateFormatter(date)}</p>
  );
}
