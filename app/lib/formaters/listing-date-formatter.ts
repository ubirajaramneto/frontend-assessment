export function ListingDateFormatter(date: string) {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-US", {
    dateStyle: "medium",
  });
}
