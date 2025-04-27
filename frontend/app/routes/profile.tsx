import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App2" }, { name: "description", content: "Welcome to Remix!" }];
};

// export async function loader() {
//   return await req("form/all");
// }

export default function Profile() {
  return <div className="grid grid-cols-4 gap-4 w-full h-full">Profile</div>;
}
