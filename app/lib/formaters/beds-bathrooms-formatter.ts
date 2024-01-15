export function bedsBathroomsFormatter(beds: number, bathrooms: number) {
  const formatUnitCount = (unit: string, count: number) =>
    `${count} ${unit}${count === 1 ? "" : "s"}`;

  if (beds === 0) {
    return formatUnitCount("bath", bathrooms);
  }
  if (bathrooms === 0) {
    return formatUnitCount("bed", beds);
  }
  return `${formatUnitCount("bed", beds)} | ${formatUnitCount("bath", bathrooms)}`;
}
