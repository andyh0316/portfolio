import { createContext, ReactNode, useEffect, useState } from "react";

export interface DashboardContextType {
  entranceAnimationStart: boolean;
  nameContainerLayoutId: string;
  // isNameMoved: boolean;
  // setNameMoved: (value: boolean) => void;
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = (props: { entranceAnimationStart: boolean; children: ReactNode }) => {
  return (
    <DashboardContext.Provider
      value={{
        entranceAnimationStart: props.entranceAnimationStart,
        nameContainerLayoutId: "nameContainerLayoutId",
        // isNameMoved,
        // setNameMoved: setIsNameMoved,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};
