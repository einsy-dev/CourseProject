import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { req } from "../api";

interface ContextI {
  user: { id: string; name: string; email: string; role: string } | null;
  sidebar: boolean;
  edit: boolean;
}

const defaultContext = {
  user: null,
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
  useEffect(() => {
    if (!context.user) {
      req("auth/profile").then((res) => {
        setContext((prev) => ({ ...prev, user: res }));
      });
    }
  }, [context.user, setContext]);

  return [context!, setContext!];
}
