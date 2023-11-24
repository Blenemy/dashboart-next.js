/**
 * Renders a custom checkbox component with a label. It includes custom styling and the ability to handle changes.
 *
 * @param {Object} props - The props object for the custom checkbox component.
 * @param {string} props.id - The unique identifier for the checkbox input element, also used for the label's 'htmlFor' attribute.
 * @param {string} props.label - The text label displayed next to the checkbox.
 * @param {boolean} props.checked - The state of the checkbox, whether it is checked or not.
 * @param {Function} props.onChange - The callback function that handles the change event of the checkbox.
 *
 * @returns {JSX.Element} The custom styled checkbox with a label.
 */

export const CustomCheckbox = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center mb-2 relative gap-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="appearance-none h-6 w-6 border-2 border-borderColor outline-none checked:border-customViolet rounded-sm bg-transparent cursor-pointer relative"
      />
      <label
        htmlFor={id}
        className="text-[#f5f5f5] text-xs cursor-pointer select-none font-medium leading-4"
      >
        {label}
      </label>
      <div className={`absolute left-1 ${checked ? "flex" : "hidden"}`}>
        <svg
          className="fill-current text-customViolet w-4 h-4"
          viewBox="0 0 20 20"
        >
          <path d="M16.707 5.293a1 1 0 0 1 0 1.414l-8.293 8.293a1 1 0 0 1-1.414 0l-3.293-3.293a1 1 0 1 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" />
        </svg>
      </div>
    </div>
  );
};
