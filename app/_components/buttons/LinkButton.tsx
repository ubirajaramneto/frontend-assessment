"use client";

import Link from "next/link";

export default function LinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="rounded bg-blue-500 text-white p-4 block w-full text-center"
    >
      {label}
    </Link>
  );
}
