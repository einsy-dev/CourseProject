import type { MetaFunction } from "@remix-run/node";
import { MyContext } from "~/shared/hooks/useContext";

import { Footer, Header, Sidebar } from "~/widgets";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <MyContext>
      <Header />
      <main className="flex h-full">
        <div className="">content</div>
        <Sidebar />
      </main>
      <Footer />
    </MyContext>
  );
}
