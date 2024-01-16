import { ListingType } from "@/app/lib/listing/data";
import { bedsBathroomsFormatter } from "@/app/lib/formaters/beds-bathrooms-formatter";
import { ListingTitle } from "@/app/_listing/ListingTitle";
import { ListingSalePrice } from "@/app/_listing/ListingPrice";
import LinkButton from "@/app/_components/buttons/LinkButton";
import ListingLocation from "@/app/_listing/ListingLocation";

interface ListingCardProps {
  listing: ListingType;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <div className="border border-gray-600 w-full flex flex-col">
      <img src={listing.PictureURL} alt="listing-picture" />
      <div className="p-4">
        <div className="min-h-16">
          <ListingTitle title={listing.Title} size="small" />
        </div>
        <ListingLocation location={listing.Location} />
        <p className="text-gray-500 mb-4">
          {bedsBathroomsFormatter(listing.Bedrooms, listing.Bathrooms)}
        </p>
        <div className="my-4">
          <ListingSalePrice price={listing["Sale Price"]} />
        </div>
        <LinkButton href={`listings/${listing.Id}`} label="View Details" />
      </div>
    </div>
  );
}
