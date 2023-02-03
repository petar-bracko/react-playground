import { useState } from "react";
import { IDummy } from "types";
import { DummyContext } from "./DummyContext";

export const DummyProvider = ({ children }: { children: React.ReactNode }) => {
  const [dummy, setDummy] = useState<IDummy>({ name: "Petar", age: 26 });

  return (
    <DummyContext.Provider value={{ dummy, setDummy }}>
      {children}
    </DummyContext.Provider>
  );
};
