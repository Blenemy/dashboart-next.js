"use client";

/**
 * Renders a layout for managing product level cards. This includes a list of cards representing different
 * product levels and provides functionality for adding new cards and editing existing ones.
 * Uses a custom hook `useCardsManager` to manage card operations like drag-and-drop, adding new cards, and saving changes.
 *
 * @returns {JSX.Element} A component that displays product level cards with the ability to add and edit cards.
 */

import { ProductLevelCard } from "../ProductLevelCard/ProductLevelCard";
import { Button } from "../Button/Button";
import { NewCardRedact } from "../NewCardRedact/NewCardRedact";
import { useCardsManager } from "@/app/hooks/useCardsManager";

export const Positions = () => {
  const {
    cards,
    onDragStart,
    onDragOver,
    onDrop,
    handleAddNewCard,
    handleFinishEditing,
    activeCardId,
    handleSaveChanges,
  } = useCardsManager();

  return (
    <div className="px-10 py-6">
      <div className="flex gap-4">
        <div className="basis-1/3">
          <div className="flex flex-col max-h-[540px] no-scrollbar overflow-auto gap-2 mb-2">
            {cards.map((card) => (
              <ProductLevelCard
                key={card.id}
                id={card.id}
                title={card.title}
                price={card.price}
                description={card.description}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDrop={onDrop}
                isActive={card.id === activeCardId}
                onFinishEditing={handleFinishEditing}
              />
            ))}
          </div>

          <Button
            text="Создать новую должность"
            onClick={handleAddNewCard}
            classes="text-[#f5f5f5] w-full"
          />
        </div>
        <div className="flex flex-col basis-2/3">
          {activeCardId && (
            <NewCardRedact handleSaveChanges={handleSaveChanges} />
          )}
        </div>
      </div>
    </div>
  );
};
