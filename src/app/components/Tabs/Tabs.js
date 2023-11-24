"use client";

/**
 * Renders a tabbed interface where each tab can display different content.
 *
 * @param {Object} props - The props object.
 * @param {Array} props.tabs - The array of tab objects with 'name' and 'content'.
 */

import { Fragment, useState } from "react";
import cn from "classnames";

export const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <div className="mb-6">
      <div className="flex bg-darkBg">
        {tabs.map((tab, index) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={cn(
              "py-3 border-borderColor relative w-[254px] bg-darkBg text-[14px] font-medium leading-6",
              {
                "border-r-2": index !== tabs.length - 1,
                "border-l-2 ml-[-8px]": index !== 0,
                "border-b-2 text-tabsTitle": tab.name !== activeTab,
                "border-b-0 rounded-t-lg text-customViolet py-4 shadow-[inset_0_4px_8px_0_rgba(103,100,241,0.16)]":
                  tab.name === activeTab,
              }
            )}
            style={{
              zIndex: tab.name === activeTab ? 50 : index + 1,
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="h-full">
        {tabs.map((tab) => {
          if (tab.name === activeTab) {
            return <Fragment key={tab.name}>{tab.content}</Fragment>;
          }
          return null;
        })}
      </div>
    </div>
  );
};
