import {
  ListingData,
  ListingSearchParams,
  ListingType,
} from "@/app/lib/listing/data";
import { ListingCard } from "./ListingCard";
import { unstable_noStore } from "next/cache";

export async function ListingGrid({
  searchParams,
}: {
  searchParams: ListingSearchParams;
}) {
  unstable_noStore(); // This is just to show the ui skeletons ;)
  const listing: Array<ListingType> = await ListingData(searchParams);

  if (!listing.length) {
    return <p className="text-xl">No listing matches your criteria</p>;
  }

  return (
    <div className="w-3/4 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-y-12 gap-x-4">
      {listing.map((listingItem) => (
        <ListingCard key={listingItem.Id} listing={listingItem} />
      ))}
    </div>
  );
}
