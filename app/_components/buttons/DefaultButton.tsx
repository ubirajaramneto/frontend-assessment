"use client";

export default function DefaultButton({
  onClickHandler,
  label,
}: {
  onClickHandler: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClickHandler}
      className="rounded bg-blue-500 text-white p-4 block w-full text-center"
    >
      {label}
    </button>
  );
}
