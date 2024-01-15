import { GetListing } from "@/app/lib/listing/data";
import { ListingTitle } from "@/app/_listing/ListingTitle";
import { ListingSalePrice } from "@/app/_listing/ListingPrice";
import FavoriteListingButton from "@/app/listings/[id]/FavoriteListingButton";
import { ListingDate } from "@/app/_listing/ListingDate";
import ListingLocation from "@/app/_listing/ListingLocation";

export default async function ListingDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const listing = await GetListing(params.id);

  if (!listing) {
    return null;
  }

  return (
    <div className="flex justify-center items-center">
      <div className="container">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-2">
            <div className="flex justify-between my-4 h-24">
              <div>
                <ListingTitle title={listing.Title} />
                <ListingLocation location={listing.Location} />
              </div>
              <div>
                <ListingSalePrice price={listing["Sale Price"]} />
                <ListingDate date={listing.DateListed} />
              </div>
            </div>
            <div className="col-span-2">
              <img
                src={listing.PictureURL}
                alt="listing-picture"
                className="w-full h-[60vh] min-h-[400px] object-cover"
              />
            </div>
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
            <div className="col-span-2">
              <p className="text-gray-600">{listing.Description}</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-24 my-4">
              <FavoriteListingButton id={listing.Id} />
            </div>
            <div className="border border-gray-500 w-full h-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
