import { type MetaFunction } from "@remix-run/node";
import { Link, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { MyContext } from "~/shared/hooks/useContext";

import { Footer, Header } from "~/widgets";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");

  useEffect(() => {
    if (type !== "login" && type !== "register") {
      setSearchParams({ type: "login" });
    }
  }, [setSearchParams, type]);

  return (
    <MyContext>
      <Header />
      <main className="flex h-[100%] bg-slate-400">
        {type == "login" && (
          <div className="">
            <Link to="/">Home</Link>
          </div>
        )}
      </main>
      <Footer />
    </MyContext>
  );
}
