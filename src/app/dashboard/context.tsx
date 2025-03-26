import { createContext, MutableRefObject, ReactNode, useEffect, useState } from "react";

export interface DashboardContextType {
  isLayoutFirstMount: MutableRefObject<boolean>;
  nameContainerLayoutId: string;
  // isNameMoved: boolean;
  // setNameMoved: (value: boolean) => void;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = (props: { isLayoutFirstMount: MutableRefObject<boolean>; children: ReactNode }) => {
  return (
    <DashboardContext.Provider
      value={{
        isLayoutFirstMount: props.isLayoutFirstMount,
        nameContainerLayoutId: "nameContainerLayoutId",
        // isNameMoved,
        // setNameMoved: setIsNameMoved,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};
