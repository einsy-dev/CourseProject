export function Checkbox({ children }: any) {
  return (
    <label className="group">
      <input type="checkbox" />
      {children}
    </label>
  );
}
