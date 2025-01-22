import { createContext, ReactNode, useState } from "react";

export interface ResumeContextType {
  bgColor: string;
  isPdfMode: boolean;
  setPdfMode: (mode: boolean) => void;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider = (props: { bgColor: string; children: ReactNode }) => {
  const [isPdfMode, setIsPdfMode] = useState(false);

  return (
    <ResumeContext.Provider
      value={{
        bgColor: props.bgColor,
        isPdfMode,
        setPdfMode: setIsPdfMode,
      }}
    >
      {props.children}
    </ResumeContext.Provider>
  );
};
