/**
 * Renders a form composed of multiple checkbox groups representing various responsibilities.
 * It uses custom hooks to manage the state of each checkbox group.
 *
 * @returns {JSX.Element} A form with checkbox groups for trading, production, skirmish, and management options.
 */

import { useManageCheckboxes } from "@/app/hooks/useManageCheckboxes";
import { CheckboxGroup } from "./CustomInput/CheckboxGroup";

export const Responsibilities = () => {
  const { handleCheckboxChange, checkboxStates } = useManageCheckboxes();

  return (
    <div className="flex flex-wrap gap-y-3">
      <CheckboxGroup
        options={checkboxStates.trading}
        onChange={(id, checked) => handleCheckboxChange("trading", id, checked)}
        title="Торговля"
      />
      <CheckboxGroup
        options={checkboxStates.production}
        onChange={(id, checked) =>
          handleCheckboxChange("production", id, checked)
        }
        title="Производство"
      />
      <CheckboxGroup
        options={checkboxStates.skirmish}
        onChange={(id, checked) =>
          handleCheckboxChange("skirmish", id, checked)
        }
        title="Разборки"
      />
      <CheckboxGroup
        options={checkboxStates.management}
        onChange={(id, checked) =>
          handleCheckboxChange("management", id, checked)
        }
        title="Управление"
      />
    </div>
  );
};
