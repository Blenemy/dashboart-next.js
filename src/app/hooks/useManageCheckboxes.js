const { useState } = require("react");
const {
  tradingOptions,
  productionOptions,
  skirmishOptions,
  managementOptions,
} = require("../assets/constants/responsibilitiesData");

export const useManageCheckboxes = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    trading: tradingOptions,
    production: productionOptions,
    skirmish: skirmishOptions,
    management: managementOptions,
  });

  const handleCheckboxChange = (group, id, checked) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [group]: prevStates[group].map((option) =>
        option.id === id ? { ...option, checked } : option
      ),
    }));
  };

  return { checkboxStates, handleCheckboxChange };
};
