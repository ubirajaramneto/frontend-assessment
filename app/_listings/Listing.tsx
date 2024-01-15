import { ListingType } from "@/app/lib/listings/data";
import { ListingCard } from "./ListingCard";

interface ListingsProps {
  listing: Array<ListingType>;
}

export function Listing({ listing }: ListingsProps) {
  return (
    <div>
      <div className="w-full grid grid-cols-4 gap-y-12 gap-x-4">
        {listing.map((listingItem) => (
          <ListingCard key={listingItem.Id} listing={listingItem} />
        ))}
      </div>
    </div>
  );
}
