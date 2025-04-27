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
  /**the type of the input text | email | password */
  type?: "text" | "email" | "password";
  className?: string;
  /**render the input or the paragraph */
  edit?: boolean;
  /** the autoComplete of the input */
  autoComplete?: string;
}
export function Input({ label = "", defaultValue = "", placeholder = "", autoComplete = "off", name, type = "text", edit = false, className }: Props) {
  const [state, setState] = useState(defaultValue);
  return (
    <Label label={label}>
      {edit ? (
        <input
          className={`px-2 py-1 shadow-lg border rounded-lg ${className}`}
          name={name}
          type={type}
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
