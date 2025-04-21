import { useState } from "react";
import { useMyContext } from "~/shared/hooks";

interface Props {
  text: string;
  name: string;
  className?: string;
}
export function Input({ name, text, className }: Props) {
  const [state, setState] = useState(text);
  const [context] = useMyContext();
  return (
    <>
      {context.edit ? (
        <input
          className={`px-2 py-1 shadow-lg border rounded-lg ${className}`}
          name={name}
          type="text"
          onChange={(e) => setState(e.target.value)}
          defaultValue={state}
        />
      ) : (
        <p className={`${className}`}>{state}</p>
      )}
    </>
  );
}
