import { tabs } from "../../assets/constants/tabs";
import { Tabs } from "../Tabs/Tabs";

export const DashBoard = () => {
  return (
    <section className="bg-darkBg border-2 border-borderColor rounded-lg w-[1034px]">
      <div className="p-6 h-full">
        <div className="border-2 border-borderColor border-r h-full rounded-lg overflow-hidden min-h-[836px]">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
};
