import { createContext, useContext } from "react";

const TabsContext = createContext({
  name: "",
});

interface TabsProps {
  children: React.ReactNode;
  name: string;
}

const Tabs = ({ children, name }: TabsProps) => {
  return (
    <TabsContext.Provider value={{ name }}>
      <div role="tablist" className="tabs tabs-lifted">
        {children}
      </div>
    </TabsContext.Provider>
  );
};

interface TabProps {
  label: string;
  children: React.ReactNode;
  defaultSelected?: boolean;
}

const Tab = ({ children, label, defaultSelected = false }: TabProps) => {
  const { name } = useContext(TabsContext);

  return (
    <>
      <input
        type="radio"
        name={name}
        role="tab"
        className="tab"
        aria-label={label}
        defaultChecked={defaultSelected}
      />
      <div
        role="tabpanel"
        className="tab-content bg-base-100 border-base-300 rounded-box p-6"
      >
        {children}
      </div>
    </>
  );
};

export { Tabs, Tab };
