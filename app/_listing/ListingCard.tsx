import { ListingType } from "@/app/lib/listing/data";
import { bedsBathroomsFormatter } from "@/app/lib/formaters/beds-bathrooms-formatter";
import Link from "next/link";
import { SalePriceFormatter } from "@/app/lib/formaters/sale-price-formatter";

interface ListingCardProps {
  listing: ListingType;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="border border-gray-600 w-[300px] flex flex-col">
      <img src={listing.PictureURL} alt="listing-picture" />
      <div className="p-4">
        <p className="text-lg font-bold line-clamp-2 min-h-16">
          {listing.Title}
        </p>
        <p className="text-gray-700">{listing.Location}</p>
        <p className="text-gray-500 mb-4">
          {bedsBathroomsFormatter(listing.Bedrooms, listing.Bathrooms)}
        </p>
        <p className="text-2xl font-bold">
          {SalePriceFormatter(listing["Sale Price"])}
        </p>
        <Link
          href={`listings/${listing.Id}`}
          className="rounded bg-blue-500 text-white p-4 block w-3/4 text-center mt-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
