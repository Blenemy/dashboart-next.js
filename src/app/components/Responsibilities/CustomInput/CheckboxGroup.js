/**
 * Renders a group of custom checkbox components, each accompanied by a label.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.options - An array of options for the checkboxes, each containing an id, label, and checked state.
 * @param {Function} props.onChange - The callback function to execute when any checkbox is changed, taking the id and checked state as parameters.
 * @param {string} props.title - The title of the checkbox group.
 *
 * @returns {JSX.Element} A group of checkboxes rendered with a title.
 */

import { CustomCheckbox } from "./CustomCheckbox";

export const CheckboxGroup = ({ options, onChange, title }) => {
  return (
    <div className="space-y-2 basis-1/2">
      <div>
        <h4 className="mb-2 text-descriptionText font-medium text-xs leading-4">
          {title}
        </h4>
        {options.map((option) => (
          <CustomCheckbox
            key={option.id}
            id={`${title}-${option.id}`}
            label={option.label}
            checked={option.checked}
            onChange={(e) => onChange(option.id, e.target.checked)}
          />
        ))}
      </div>
    </div>
  );
};
