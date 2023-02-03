import { useDummyContext } from "hooks";

export const ContextConsumer = () => {
  const { dummy } = useDummyContext();

  return (
    <>
      <h2>Context Consumer</h2>
      <div>
        <pre>{JSON.stringify(dummy, null, 2)}</pre>
      </div>
    </>
  );
};
