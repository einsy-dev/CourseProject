import { Link } from "@remix-run/react";
import { Menu } from "lucide-react";
import { useMyContext } from "~/shared/hooks/useContext";

export function Header() {
  const [, setContext] = useMyContext();

  return (
    <header className=" min-h-[5vh] w-full  bg-slate-300 px-[100px] sticky top-0 z-50">
      <nav className="min-h-[5vh] max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="font-bold">LOGO</div>
        </Link>
        <div className="flex items-center gap-5">
          <Menu height={35} width={35} onClick={() => setContext((prev: any) => ({ ...prev, sidebar: !prev.sidebar }))} />
        </div>
      </nav>
    </header>
  );
}
