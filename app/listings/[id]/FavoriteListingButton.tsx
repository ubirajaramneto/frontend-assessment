"use client";

import DefaultButton from "@/app/_components/buttons/DefaultButton";

export default function FavoriteListingButton({ id }: { id: number }) {
  return (
    <DefaultButton
      label="Save Property"
      onClickHandler={() => {
        console.log("FavoriteListingButton clicked: ", id);
      }}
    />
  );
}
