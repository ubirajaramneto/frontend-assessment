import { ListingGrid } from "@/app/_listing/ListingGrid";
import ListingGridFilter from "@/app/_listing/ListingGridFilter";
import { Suspense } from "react";
import { ListingSearchParams } from "@/app/lib/listing/data";
import ListingGridSkeleton from "@/app/_listing/ListingGridSkeleton";

export default async function Home({
  searchParams,
}: {
  searchParams: ListingSearchParams;
}) {
  const beds = searchParams?.bedrooms ?? "0";
  const baths = searchParams?.bathrooms ?? "0";
  const park = searchParams?.parking ?? "0";
  const price = searchParams?.price ?? "0";

  return (
    <main className="flex -h-screen flex-col items-center justify-between p-24">
      <ListingGridFilter />
      <Suspense
        key={beds + baths + park + price}
        fallback={<ListingGridSkeleton />}
      >
        <ListingGrid searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
