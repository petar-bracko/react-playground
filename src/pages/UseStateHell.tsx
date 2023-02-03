import { useReducer } from "react";

type TInfo = {
  name: string;
  foo: string;
};

const initInfo = { name: "petar", foo: "bar" };

export const UseStateHell = () => {
  const [info, setInfo] = useReducer((current: TInfo, next: any): TInfo => {
    const result: TInfo = { ...current, ...next };

    if (next.name.length > 10) {
      console.log("here");
      next.name = current.name;
    } else {
      console.log("skipping");
    }

    return result;
  }, initInfo);

  return (
    <>
      <h2>UseStateHell</h2>
      <div>
        <pre>{JSON.stringify(info, null, 2)}</pre>
      </div>
      <input
        value={info.name}
        onChange={(e) => setInfo({ name: e.target.value })}
        // maxLength={10}
      />
      <input
        value={info.foo}
        onChange={(e) => setInfo({ foo: e.target.value })}
      />
    </>
  );
};
