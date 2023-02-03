import { useDummyContext } from "hooks";

export const ContextMutator = () => {
  const { dummy, setDummy } = useDummyContext();

  return (
    <>
      <h2>Context Mutator</h2>
      <div>
        <pre>{JSON.stringify(dummy, null, 2)}</pre>
      </div>
      <button onClick={() => setDummy({ ...dummy, age: dummy.age + 1 })}>
        increment dummy age
      </button>
    </>
  );
};
