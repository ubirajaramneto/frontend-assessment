import { Listing } from "@/app/_listing/Listing";
import { ListingType, ListingData } from "@/app/lib/listing/data";

export default async function Home() {
  const listing: Array<ListingType> = await ListingData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Listing listing={listing} />
    </main>
  );
}
