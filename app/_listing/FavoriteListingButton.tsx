"use client";

import React, { useState, useEffect } from "react";
import DefaultButton from "@/app/_components/buttons/DefaultButton";
import SavedPropertiesModal from "@/app/_listing/SavedPropertiesModal";

interface FavoriteListingButtonProps {
  id: number;
}

// NOTE TO REVIEWER:
// The logic for displaying the modal is in the FavoriteListingButton component in order
// to avoid creating a context or any other means of sharing state between components.
// Simplicity was favored over the "correct" way of doing this.

export default function FavoriteListingButton({
  id,
}: FavoriteListingButtonProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [savedProperties, setSavedProperties] = useState<Array<number>>([]);

  useEffect(() => {
    // Load saved properties from localStorage
    const saved = JSON.parse(localStorage.getItem("savedProperties") || "[]");
    setSavedProperties(saved);
  }, []);

  const saveProperty = () => {
    if (savedProperties.includes(id)) {
      setModalOpen(true);
      return;
    }
    const updatedSavedProperties = [...savedProperties, id];
    setSavedProperties(updatedSavedProperties);
    localStorage.setItem(
      "savedProperties",
      JSON.stringify(updatedSavedProperties),
    );
    setModalOpen(true);
  };

  return (
    <div>
      <SavedPropertiesModal
        savedProperties={savedProperties}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
      <DefaultButton onClickHandler={saveProperty} label="Save Property" />
    </div>
  );
}
