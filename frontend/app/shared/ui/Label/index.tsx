export function Label({ label, children }: any) {
  if (!label) return <>{children}</>;
  return (
    <label className="flex flex-col">
      <span>{label}</span>
      {children}
    </label>
  );
}
