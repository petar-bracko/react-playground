export interface IDummy {
  name: string;
  age: number;
}

export interface IDummyCTX {
  dummy: IDummy;
  setDummy: React.Dispatch<React.SetStateAction<IDummy>>;
}
