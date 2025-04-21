import { useState } from "react";
import { useMyContext } from "~/shared/hooks";

interface Props {
  text: string;
  name: string;
  className?: string;
}
export function Textarea({ text, name, className }: Props) {
  const [state, setState] = useState(text);
  const [context] = useMyContext();
  if (!text) return <></>;
  return (
    <>
      {context.edit ? (
        <textarea
          name={name}
          className={`px-2 py-1 shadow-lg border rounded-lg resize-none h-fit ${className}`}
          onChange={(e) => setState(e.target.value)}
          defaultValue={state}
        />
      ) : (
        <div>
          {state.split("\n").map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
    </>
  );
}
