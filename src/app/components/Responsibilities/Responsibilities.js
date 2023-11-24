/**
 * Renders a form composed of multiple checkbox groups representing various responsibilities.
 * It uses custom hooks to manage the state of each checkbox group.
 *
 * @returns {JSX.Element} A form with checkbox groups for trading, production, skirmish, and management options.
 */

import { CheckboxGroup } from "./CustomInput/CheckboxGroup";
import {
  managementOptions,
  productionOptions,
  tradingOptions,
  skirmishOptions,
} from "@/app/assets/constants/responsibilitiesData";
import { useCheckboxState } from "@/app/hooks/useCheckboxState";

export const Responsibilities = () => {
  const [tradingCheckboxes, setTradingChecked] =
    useCheckboxState(tradingOptions);
  const [productionCheckboxes, setProductionChecked] =
    useCheckboxState(productionOptions);
  const [managementCheckboxes, setManagementChecked] =
    useCheckboxState(managementOptions);
  const [skirmishCheckboxes, setSkirmishChecked] =
    useCheckboxState(skirmishOptions);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-y-3">
      <CheckboxGroup
        options={tradingCheckboxes}
        onChange={setTradingChecked}
        title="Торговля"
      />
      <CheckboxGroup
        options={productionCheckboxes}
        onChange={setProductionChecked}
        title="Производство"
      />
      <CheckboxGroup
        options={skirmishCheckboxes}
        onChange={setSkirmishChecked}
        title="Разборки"
      />
      <CheckboxGroup
        options={managementCheckboxes}
        onChange={setManagementChecked}
        title="Управление"
      />
    </form>
  );
};
