import { createContext } from "react";
import { ScrollContextType } from "../ui/ScrollProvider";

export const ScrollContext = createContext<ScrollContextType | null>(null);