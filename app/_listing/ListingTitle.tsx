"use client";

export function ListingTitle({
  title,
  size,
}: {
  title: string;
  size?: "small" | "large";
}) {
  return (
    <p
      className={`font-bold line-clamp-2 ${
        size ? (size === "small" ? "text-lg" : "text-3xl") : "text-3xl"
      }`}
    >
      {title}
    </p>
  );
}
