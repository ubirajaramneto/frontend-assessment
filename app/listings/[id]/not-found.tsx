import LinkButton from "@/app/_components/buttons/LinkButton";

export default function ListingNotFound() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="w-1/3 text-center">
        <h1 className="text-3xl font-bold">Listing Not Found</h1>
        <LinkButton label="Go back to the home page" href="/" />
      </div>
    </div>
  );
}
