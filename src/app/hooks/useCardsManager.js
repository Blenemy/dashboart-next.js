import { useCallback, useState } from "react";
import { initialCardsState } from "../assets/constants/initialCardsState";
import useLocalStorage from "./useLocalStorage";

export const useCardsManager = () => {
  const [cards, setCards] = useLocalStorage(initialCardsState);
  const [activeCardId, setActiveCardId] = useState(null);

  const createCard = (title) => {
    return {
      id: Math.max(0, ...cards.map((c) => c.id)) + 1,
      title,
      price: "50",
      description: "от 10 lvl",
    };
  };

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
    const newCard = createCard("Новобранец");
    setCards((prevCards) => [newCard, ...prevCards]);
    setActiveCardId(newCard.id);
  }, [cards]);

  const handleFinishEditing = useCallback(() => {
    setActiveCardId(null);
  }, []);

  const handleSaveChanges = useCallback(
    (title) => {
      if (activeCardId) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === activeCardId ? { ...card, title } : card
          )
        );
      } else {
        const newCard = createCard(title);
        setCards((prevCards) => [newCard, ...prevCards]);
      }
      setActiveCardId(null);
    },
    [activeCardId, cards]
  );

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
