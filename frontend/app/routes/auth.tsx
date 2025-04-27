import { type MetaFunction } from "@remix-run/node";
import { Form, Link, useNavigate, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Input, req, useMyContext } from "~/shared";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Auth() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, setContext] = useMyContext();
  const type = searchParams.get("type");
  const navigate = useNavigate();

  useEffect(() => {
    if (type !== "login" && type !== "register") {
      setSearchParams({ type: "login" });
    }
  }, [setSearchParams, type]);

  return (
    <Form method="post" onSubmit={handleSubmit} className="flex flex-col gap-5 w-fit">
      {type === "register" && <Input name="name" label="Name" autoComplete="name" edit />}
      <Input name="email" label="Email" autoComplete="email" edit />
      <Input name="password" label="Password" type="password" autoComplete="password" edit />
      <span>
        Don`t have an account?{" "}
        <Link to={`/auth?type=${type === "login" ? "register" : "login"}`} className="underline text-blue-500 hover:text-blue-600">
          {type === "register" ? "Login" : "Register"}
        </Link>
      </span>
      <Button type="submit" title={type === "login" ? "Login" : "Register"} />
    </Form>
  );

  async function handleSubmit(e: any) {
    e.preventDefault();
    const result = Object.fromEntries(new FormData(e.target));
    const res = await req(`auth/${type == "login" ? "login" : "register"}`, { method: "POST", body: JSON.stringify(result) });
    if (res.error) return alert(res.error);
    console.log(res.access_token);
    document.cookie = `token=${res.access_token}`;
    setContext((prev) => ({ ...prev, user: res.user }));
    navigate("/");
  }
}
