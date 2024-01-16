"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function ListingGridFilter() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  let debounceTimeoutId: NodeJS.Timeout;

  function debounce(func: (...args: any[]) => void, delay: number) {
    return (...args: any[]) => {
      clearTimeout(debounceTimeoutId);
      debounceTimeoutId = setTimeout(() => func(...args), delay);
    };
  }

  const handleInputChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const value = Number(event.target.value);
    const name = event.target.name;

    if (value === 0) {
      params.delete(name);
    } else {
      params.set(name, event.target.value);
    }

    replace(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div className="flex justify-between w-full max-w-[1283px] my-8">
      <div>
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          min="0"
          onChange={handleInputChange}
          defaultValue={searchParams.get("bedrooms") ?? 0}
          className="border border-gray-600 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          name="bathrooms"
          id="bathrooms"
          min="0"
          onChange={handleInputChange}
          defaultValue={searchParams.get("bathrooms") ?? 0}
          className="border border-gray-600 rounded p-2"
        />
      </div>
      <div>
        <label htmlFor="parking">Parking:</label>
        <input
          type="number"
          name="parking"
          id="parking"
          min="0"
          onChange={handleInputChange}
          defaultValue={searchParams.get("parking") ?? 0}
          className="border border-gray-600 rounded p-2"
        />
      </div>
      <div>
        <div className="flex items-center">
          <label htmlFor="price" className="mr-4">
            Price range:
          </label>
          <input
            type="range"
            name="price"
            min="0"
            max="1000000"
            id="price"
            step="10000"
            onChange={handleInputChange}
            defaultValue={searchParams.get("price") ?? 0}
            className="border border-gray-600 rounded p-2"
          />
        </div>
        <p>{searchParams.get("price") ?? 0}</p>
      </div>
    </div>
  );
}
