import { createContext } from "react";
import { IDummyCTX } from "types";

export const DummyContext = createContext<IDummyCTX | null>(null);
