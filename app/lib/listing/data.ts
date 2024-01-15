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

export async function ListingData(
  searchParams: ListingSearchParams | undefined,
): Promise<Array<ListingType>> {
  const response = await fetch(LISTING_URL);
  const data = await response.json();

  return data.filter((listing: ListingType) => {
    let isValid = true;

    if (searchParams?.bedrooms !== undefined) {
      isValid = isValid && listing.Bedrooms >= Number(searchParams?.bedrooms);
    }
    if (searchParams?.bathrooms !== undefined) {
      isValid = isValid && listing.Bathrooms >= Number(searchParams?.bathrooms);
    }
    if (searchParams?.parking !== undefined) {
      isValid = isValid && listing.Parking >= Number(searchParams?.parking);
    }
    if (searchParams?.price !== undefined) {
      const price = Number(searchParams?.price);
      isValid = isValid && listing["Sale Price"] <= price;
    }

    return isValid;
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
