import { ListingType } from "@/app/lib/listing/data";

interface ListingFactsCardProps {
  listing: ListingType;
}

export default function ListingFactsCard({ listing }: ListingFactsCardProps) {
  return (
    <div className="flex justify-around my-4 border border-gray-500 p-4">
      <div className="text-center">
        <p className="text-black text-4xl">{listing.Bedrooms}</p>
        <p className="text-gray-500 uppercase">Beds</p>
      </div>
      <div className="text-center">
        <p className="text-black text-4xl">{listing.Bathrooms}</p>
        <p className="text-gray-500 uppercase">Baths</p>
      </div>
      <div className="text-center">
        <p className="text-black text-4xl">{listing.Parking}</p>
        <p className="text-gray-500 uppercase">Parking</p>
      </div>
      <div className="text-center">
        <p className="text-black text-4xl">{listing.Sqft}</p>
        <p className="text-gray-500 uppercase">Sqft</p>
      </div>
      <div className="text-center">
        <p className="text-black text-4xl">{listing.YearBuilt}</p>
        <p className="text-gray-500 uppercase">Year built</p>
      </div>
    </div>
  );
}
