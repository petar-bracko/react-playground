import { test, expect } from "vitest";

type Person = {
  name: string;
  age: number;
};

test("is person adult", () => {
  const person: Person = {
    age: 26,
    name: "Petar",
  };

  expect(person.age).toBeGreaterThanOrEqual(18);
});
