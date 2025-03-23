import { createContext, ReactNode, useState } from "react";

export interface DashboardContextType {
  nameContainerLayoutId: string;
  // isNameMoved: boolean;
  // setNameMoved: (value: boolean) => void;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = (props: { children: ReactNode }) => {
  // const [isNameMoved, setIsNameMoved] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        nameContainerLayoutId: "nameContainerLayoutId",
        // isNameMoved,
        // setNameMoved: setIsNameMoved,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};
