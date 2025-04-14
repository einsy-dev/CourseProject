import { Link } from "@remix-run/react";
import { Menu, UserRound } from "lucide-react";
import { useMyContext } from "~/shared/hooks/useContext";

export function Header() {
  const [context, setContext] = useMyContext();

  return (
    <header className="min-h-[5vh] w-full flex items-center justify-between bg-slate-300 px-[100px] sticky top-0">
      <Link to="/">
        <div className="font-bold">LOGO</div>
      </Link>
      <div className="flex items-center gap-5">
        <UserRound height={30} width={30} />
        <Menu height={35} width={35} onClick={() => setContext(!context)} />
      </div>
    </header>
  );
}
