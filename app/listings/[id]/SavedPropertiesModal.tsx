"use client";

import DefaultButton from "@/app/_components/buttons/DefaultButton";

interface SavedPropertiesModalProps {
  savedProperties: Array<number>;
  isOpen: boolean;
  onClose: () => void;
}

export default function SavedPropertiesModal({
  savedProperties,
  isOpen,
  onClose,
}: SavedPropertiesModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed w-screen h-screen bg-gray-500 bg-opacity-80 top-0 left-0">
      <div className="flex h-full items-center justify-center">
        <div className="bg-gray-200 p-12 rounded-lg w-1/3">
          <ul className="mb-4">
            {savedProperties.map((propertyId) => (
              <li key={propertyId}>Property ID: {propertyId}</li>
            ))}
          </ul>
          <DefaultButton onClickHandler={onClose} label="Close"></DefaultButton>
        </div>
      </div>
    </div>
  );
}
