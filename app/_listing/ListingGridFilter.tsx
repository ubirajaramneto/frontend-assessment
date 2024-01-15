"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

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

  const handleBedroomsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (Number(event.target.value) === 0) {
      params.delete("bedrooms");
    } else {
      params.set("bedrooms", event.target.value);
    }
    replace(`${pathName}?${params.toString()}`);
  };
  const handleBathroomsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (Number(event.target.value) === 0) {
      params.delete("bathrooms");
    } else {
      params.set("bathrooms", event.target.value);
    }
    replace(`${pathName}?${params.toString()}`);
  };
  const handleParkingChange = (event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (Number(event.target.value) === 0) {
      params.delete("parking");
    } else {
      params.set("parking", event.target.value);
    }
    replace(`${pathName}?${params.toString()}`);
  };
  const handlePriceChange = debounce((event: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    if (Number(event.target.value) === 0) {
      params.delete("price");
    } else {
      params.set("price", event.target.value);
    }
    replace(`${pathName}?${params.toString()}`);
  }, 300); // 300ms delay

  return (
    <div className="flex justify-between w-full max-w-[1283px] my-8">
      <div>
        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          name="bedrooms"
          id="bedrooms"
          min="0"
          onChange={handleBedroomsChange}
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
          onChange={handleBathroomsChange}
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
          onChange={handleParkingChange}
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
            onChange={handlePriceChange}
            defaultValue={searchParams.get("price") ?? 0}
            className="border border-gray-600 rounded p-2"
          />
        </div>
        <p>{searchParams.get("price") ?? 0}</p>
      </div>
    </div>
  );
}
