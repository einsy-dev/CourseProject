import { useMyContext } from "~/shared/hooks/useContext";

export function Sidebar() {
  const [context] = useMyContext();
  return (
    <div className={"ml-auto translate-x-[100%] transition-all " + (context ? "translate-x-0" : "")}>
      <h1>context: {context?.toString()}</h1>
    </div>
  );
}
