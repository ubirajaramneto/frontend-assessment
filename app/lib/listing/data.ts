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

export async function ListingData(): Promise<Array<ListingType>> {
  const response = await fetch(LISTING_URL);
  return await response.json();
}

export async function GetListing(id: string): Promise<ListingType | undefined> {
  const listings = await ListingData();
  const listing = listings.find((listing) => listing.Id === Number(id));
  if (!listing) {
    return notFound();
  }
  return listing;
}
