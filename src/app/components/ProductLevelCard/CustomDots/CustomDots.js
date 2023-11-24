/**
 * Renders a vertical series of dots used as a draggable handle or a visual indicator for a user interface element.
 *
 * @returns {JSX.Element} A component with three vertically spaced dots.
 */

export const CustomDots = () => {
  return (
    <div className="flex flex-col space-y-1 mr-1">
      <div className="w-1 h-1 bg-borderColor rounded-full"></div>
      <div className="w-1 h-1 bg-borderColor rounded-full"></div>
      <div className="w-1 h-1 bg-borderColor rounded-full"></div>
    </div>
  );
};
