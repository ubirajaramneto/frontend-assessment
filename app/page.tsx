import { ListingGrid } from "@/app/_listing/ListingGrid";
import { ListingType, ListingData } from "@/app/lib/listing/data";
import ListingGridFilter from "@/app/_listing/ListingGridFilter";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    price?: string;
    bedrooms?: string;
    bathrooms?: string;
    parking?: string;
  };
}) {
  const listing: Array<ListingType> = await ListingData(searchParams);

  const price = searchParams?.price || "";
  const bedrooms = searchParams?.bedrooms || "";
  const bathrooms = searchParams?.bathrooms || "";
  const parking = searchParams?.parking || "";

  return (
    <main className="flex -h-screen flex-col items-center justify-between p-24">
      <ListingGridFilter />
      <ListingGrid listing={listing} />
    </main>
  );
}
