import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { MyContext } from "./shared";
import { Footer, Header, Sidebar } from "./widgets";
import { LoaderCircle } from "lucide-react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
  }
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-[90vh]">
        <MyContext>
          <Header />
          <div className="flex relative h-full overflow-hidden">
            <main className="max-w-[1200px] w-full mx-auto p-5 shadow-[0px_0px_50px_0px_rgba(0,0,0,0.1)]">{children}</main>
            <Sidebar />
          </div>
          <Footer />
        </MyContext>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <LoaderCircle width={40} height={40} className="animate-[spin_0.5s_linear_infinite] absolute top-1/2 left-1/2 stroke-red-700" />;
}
