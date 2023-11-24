import { useCallback, useState } from "react";
import { initialCardsState } from "../assets/constants/initialCardsState";

export const useCardsManager = () => {
  const [cards, setCards] = useState(initialCardsState);
  const [activeCardId, setActiveCardId] = useState(null);

  const onDragStart = useCallback((e, id) => {
    e.dataTransfer.setData("cardId", id);
  }, []);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const onDrop = useCallback(
    (e, dropOverCardId) => {
      const draggedCardId = e.dataTransfer.getData("cardId");
      const dropOverCardIndex = cards.findIndex(
        (card) => card.id === dropOverCardId
      );

      setCards((prevCards) => {
        const newCards = [...prevCards];
        newCards.splice(
          dropOverCardIndex,
          0,
          ...newCards.splice(
            prevCards.findIndex((card) => card.id === Number(draggedCardId)),
            1
          )
        );
        return newCards;
      });
    },
    [cards]
  );

  const handleAddNewCard = useCallback(() => {
    const newCardId = Math.max(0, ...cards.map((c) => c.id)) + 1;
    const newCard = {
      id: newCardId,
      title: "Новобранец",
      price: "50",
      description: "от 10 lvl",
    };

    setCards((prevCards) => [newCard, ...prevCards]);
    setActiveCardId(newCardId);
  }, [cards]);

  const handleFinishEditing = useCallback(() => {
    setActiveCardId(null);
  }, []);

  const handleSaveChanges = useCallback(() => {
    setActiveCardId(false);
  }, []);

  return {
    cards,
    onDragStart,
    onDragOver,
    onDrop,
    handleAddNewCard,
    handleFinishEditing,
    activeCardId,
    setActiveCardId,
    handleSaveChanges,
  };
};
