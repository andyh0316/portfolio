import { createContext, ReactNode, useState } from "react";

export interface HomeContextType {
  nameContainerLayoutId: string;
  // isNameMoved: boolean;
  // setNameMoved: (value: boolean) => void;
}

export const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider = (props: { children: ReactNode }) => {
  // const [isNameMoved, setIsNameMoved] = useState(false);

  return (
    <HomeContext.Provider
      value={{
        nameContainerLayoutId: "nameContainerLayoutId",
        // isNameMoved,
        // setNameMoved: setIsNameMoved,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
