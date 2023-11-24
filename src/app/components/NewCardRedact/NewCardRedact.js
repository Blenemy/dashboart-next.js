/**
 * Renders an editing interface for creating or modifying a new card. It includes input fields for
 * the card's title and responsibilities. The component is optimized using React.memo for performance.
 *
 * @param {Object} props - The props object.
 * @param {Function} props.handleSaveChanges - The function to call when the save button is clicked.
 *
 * @returns {JSX.Element} The component for editing or creating a new card.
 */

import { memo, useState } from "react";
import { Button } from "../Button/Button";
import { Responsibilities } from "../Responsibilities/Responsibilities";

export const NewCardRedact = memo(({ handleSaveChanges }) => {
  const [titleName, setTitleName] = useState("Новобранец");

  const handleOnChange = (e) => {
    setTitleName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveChanges(titleName);
  };

  return (
    <div className="bg-lightBg text-white rounded-lg h-full relative">
      <form className="p-4 pb-0 flex flex-col h-full" onSubmit={handleSubmit}>
        <div className="p-4 flex flex-col gap-1 bg-darkBg mb-4 rounded-lg">
          <h5 className="text-[#6B6B7B] font-bold">Название</h5>
          <input
            className="w-full p-4 placeholder:text-white bg-[#292930] outline-none border-2 border-[#3a3a40] rounded-lg"
            type="text"
            value={titleName}
            onChange={handleOnChange}
          />
        </div>
        <div className="bg-darkBg text-white rounded-lg grow mb-2">
          <h3 className="text-descriptionText font-bold shadow-[0_4px_16px_rgba(0,0,0,0.35)] p-4">
            Обязаности
          </h3>
          <div className="px-4 py-6">
            <Responsibilities />
          </div>
        </div>
        <div className="flex bg-darkBg">
          <Button text="Сохранить" type="submit" classes="basis-full" />
        </div>
        <div className="absolute -bottom-5 left-0 right-0 h-5 bg-lightBg" />
      </form>
    </div>
  );
});
