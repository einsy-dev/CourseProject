import { createContext, useContext, useState } from "react";

const defaultContext = {
  context: null,
  setContext: () => null
};

export const Context = createContext<{ context: any; setContext: (context: any) => void }>(defaultContext);

export function MyContext({ children }: any) {
  const [context, setContext] = useState(null);
  return <Context.Provider value={{ context, setContext }}>{children}</Context.Provider>;
}

export function useMyContext() {
  const { context, setContext } = useContext(Context);
  return [context!, setContext!];
}
