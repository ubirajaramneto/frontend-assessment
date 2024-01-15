import { ListingType } from "@/app/lib/listing/data";
import { ListingCard } from "./ListingCard";

interface ListingsProps {
  listing: Array<ListingType>;
}

export function ListingGrid({ listing }: ListingsProps) {
  return (
    <div className="w-3/4 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-y-12 gap-x-4">
      {listing.map((listingItem) => (
        <ListingCard key={listingItem.Id} listing={listingItem} />
      ))}
    </div>
  );
}
