import { GetListing } from "@/app/lib/listing/data";
import { ListingTitle } from "@/app/_listing/ListingTitle";
import { ListingSalePrice } from "@/app/_listing/ListingPrice";
import FavoriteListingButton from "@/app/listings/[id]/FavoriteListingButton";
import { ListingDate } from "@/app/_listing/ListingDate";
import ListingLocation from "@/app/_listing/ListingLocation";
import ContactForm from "@/app/listings/[id]/ContactForm";
import ListingFactsCard from "@/app/_listing/ListingFactsCard";

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
            <ListingFactsCard listing={listing} />
            <div className="col-span-2">
              <p className="text-gray-600">{listing.Description}</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="h-24 my-4">
              <FavoriteListingButton id={listing.Id} />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
