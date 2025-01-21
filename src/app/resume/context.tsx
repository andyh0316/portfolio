import { createContext } from "react";

export interface ResumeContextType {
  bgColor: string;
  isPdfMode: boolean;
}

export const ResumeContext = createContext<ResumeContextType | undefined>(undefined);
