import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface ContextI {
  sidebar: boolean;
  edit: boolean;
}

const defaultContext = {
  sidebar: false,
  edit: false
};

const Context = createContext<{ context: ContextI; setContext: Dispatch<SetStateAction<ContextI>> }>({
  context: defaultContext,
  setContext: () => defaultContext
});

export function MyContext({ children }: any) {
  const [context, setContext] = useState<ContextI>(defaultContext);
  return <Context.Provider value={{ context, setContext }}>{children}</Context.Provider>;
}

export function useMyContext(): [context: ContextI, setContext: Dispatch<SetStateAction<ContextI>>] {
  const { context, setContext } = useContext<{ context: ContextI; setContext: Dispatch<SetStateAction<ContextI>> }>(Context);
  return [context!, setContext!];
}
