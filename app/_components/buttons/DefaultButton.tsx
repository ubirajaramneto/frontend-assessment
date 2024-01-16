"use client";

export default function DefaultButton({
  onClickHandler,
  label,
  type = "button",
}: {
  onClickHandler?: () => void;
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      onClick={onClickHandler}
      className="rounded bg-blue-500 text-white p-4 block w-full text-center"
      type={type}
    >
      {label}
    </button>
  );
}
