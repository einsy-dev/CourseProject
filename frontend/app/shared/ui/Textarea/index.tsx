import { useState } from "react";
import { Label } from "~/shared";

interface Props {
  /**the name of the input */
  name: string;
  /**the label of the input */
  label?: string;
  /**value (defaultValue) of the input */
  defaultValue?: string;
  /**the placeholder of the input */
  placeholder?: string;
  className?: string;
  /**render the input or the paragraph */
  edit?: boolean;
  /** the autoComplete of the input */
  autoComplete?: string;
}
export function Textarea({ label = "", defaultValue = "", placeholder = "", autoComplete = "off", name, edit = false, className }: Props) {
  const [state, setState] = useState(defaultValue);
  return (
    <Label label={label}>
      {edit ? (
        <textarea
          className={`px-2 py-1 shadow-lg border rounded-lg resize-none ${className}`}
          name={name}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          defaultValue={state}
          autoComplete={autoComplete}
        />
      ) : (
        <p className={`${className}`}>{state}</p>
      )}
    </Label>
  );
}
