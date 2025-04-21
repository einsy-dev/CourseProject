import { useMyContext } from "~/shared/hooks/useContext";
import { v4 } from "uuid";
import { Link } from "@remix-run/react";

export function Sidebar() {
  const [{ sidebar: context }] = useMyContext();

  const list = [
    { title: "Login/Register", link: "/auth" }
    // { title: "Profile", link: "/profile" },
    // { title: "Settings", link: "/settings" },
    // { title: "Logout", link: "/logout" }
  ];
  return (
    <div className={`absolute top-0 h-full right-0 ml-auto transition-all p-5 bg-white shadow-2xl  ${context ? "translate-x-[0%]" : "translate-x-[100%] "}`}>
      <ul className="flex flex-col gap-2">
        {list.map((item) => (
          <li key={v4()}>
            <Link to={item.link}>
              <div className={`btn min-w-[200px] text-center`}>{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
