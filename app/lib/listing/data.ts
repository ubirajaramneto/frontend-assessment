import { notFound } from "next/navigation";

export interface ListingType {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  "Sale Price": number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
}

const LISTING_URL =
  "https://s3.us-west-2.amazonaws.com/cdn.number8.com/LA/listings.json";

export interface ListingSearchParams {
  bedrooms?: string;
  bathrooms?: string;
  parking?: string;
  price?: string;
}

const meetsBedroomsCondition = (
  listing: ListingType,
  bedrooms: string | undefined,
) => bedrooms === undefined || listing.Bedrooms >= Number(bedrooms);

const meetsBathroomsCondition = (
  listing: ListingType,
  bathrooms: string | undefined,
) => bathrooms === undefined || listing.Bathrooms >= Number(bathrooms);

const meetsParkingCondition = (
  listing: ListingType,
  parking: string | undefined,
) => parking === undefined || listing.Parking >= Number(parking);

const meetsPriceCondition = (listing: ListingType, price: string | undefined) =>
  price === undefined || listing["Sale Price"] <= Number(price);

export async function ListingData(
  searchParams?: ListingSearchParams,
): Promise<Array<ListingType>> {
  const response = await fetch(LISTING_URL);
  const data = await response.json();

  return data.filter((listing: ListingType) => {
    const checks = [
      () => meetsBedroomsCondition(listing, searchParams?.bedrooms),
      () => meetsBathroomsCondition(listing, searchParams?.bathrooms),
      () => meetsParkingCondition(listing, searchParams?.parking),
      () => meetsPriceCondition(listing, searchParams?.price),
    ];

    return checks.every((check) => check());
  });
}

export async function GetListing(id: string): Promise<ListingType | undefined> {
  const listings = await ListingData();
  const listing = listings.find((listing) => listing.Id === Number(id));
  if (!listing) {
    return notFound();
  }
  return listing;
}
