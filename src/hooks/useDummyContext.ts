import { useContext } from "react";
import { DummyContext } from "context/DummyContext";

export const useDummyContext = () => {
  const dummyContext = useContext(DummyContext);

  if (dummyContext === null) {
    throw new Error("dummyContext must be used within DummyProvider!");
  }

  return dummyContext;
};
