export default function ListingGridSkeleton() {
  const skeletonItems = [...Array(4)];

  return (
    <div className="w-3/4 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-y-12 gap-x-4">
      {skeletonItems.map((x, i) => (
        <div key={i} className="border border-gray-600 w-full flex flex-col">
          <div className="bg-gray-200 animate-pulse h-[310px] w-full flex flex-col justify-center items-center"></div>
          <div className="h-[268px] p-4">
            <div className="min-h-12 bg-gray-200 animate-pulse rounded"></div>
            <div className="min-h-12 mt-4 bg-gray-200 animate-pulse rounded"></div>
            <div className="min-h-12 mt-4 bg-gray-200 animate-pulse rounded"></div>
            <div className="min-h-12 mt-4 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
