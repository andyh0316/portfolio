import { createContext, ReactNode, useEffect, useState } from "react";

export interface DashboardContextType {
  firstTimeMount: boolean;
  nameContainerLayoutId: string;
  // isNameMoved: boolean;
  // setNameMoved: (value: boolean) => void;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = (props: { children: ReactNode }) => {
  // const [isNameMoved, setIsNameMoved] = useState(false);
  const [firstTimeMount, setFirstTimeMount] = useState<boolean>(true);

  useEffect(() => {
    if (firstTimeMount) setFirstTimeMount(false);
  }, [firstTimeMount]);

  return (
    <DashboardContext.Provider
      value={{
        firstTimeMount: firstTimeMount,
        nameContainerLayoutId: "nameContainerLayoutId",
        // isNameMoved,
        // setNameMoved: setIsNameMoved,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};
