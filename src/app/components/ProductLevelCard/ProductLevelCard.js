/**
 * Renders a card component that displays product information. The card is draggable and can be used in a drag-and-drop interface.
 *
 * @param {Object} props - The props object.
 * @param {number|string} props.id - The identifier for the product level card.
 * @param {number|string} props.price - The price of the product or service.
 * @param {string} props.title - The title of the product or service.
 * @param {string} props.description - A short description of the product or service.
 * @param {Function} props.onDragStart - The function to call when dragging is started.
 * @param {Function} props.onDragOver - The function to call when an item is dragged over this component.
 * @param {Function} props.onDrop - The function to call when an item is dropped on this component.
 * @param {boolean} props.isActive - Flag to indicate if the card is active.
 * @param {boolean} props.isLast - Flag to indicate if the card is the last one in the list (for styling purposes).
 *
 * @returns {JSX.Element} The rendered product level card component.
 */

import cn from "classnames";
import { CustomDots } from "./CustomDots/CustomDots";
import { memo } from "react";

export const ProductLevelCard = memo(
  ({
    id,
    price,
    title,
    description,
    onDragStart,
    onDragOver,
    onDrop,
    isActive,
  }) => {
    return (
      <div
        draggable
        onDragStart={(e) => onDragStart(e, id)}
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, id)}
        className={cn(
          "bg-lightBg text-[#F5F5F5] rounded-lg hover:cursor-grab relative h-20",
          {
            "border-2 border-customViolet": isActive,
          }
        )}
      >
        <div className="py-4 px-5">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex items-center justify-center mr-4">
                <CustomDots />
                <CustomDots />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-[14px] leading-5 font-semibold">{title}</h4>
                <p className="text-descriptionText font-bold text-xs leading-4">
                  {description}
                </p>
              </div>
            </div>

            <p className="text-[14px]">
              <span className="text-cardYellow font-bold">${price}</span>{" "}
              <span className="text-descriptionText font-bold">/ час</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
);
