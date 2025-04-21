import { type MetaFunction } from "@remix-run/node";
import { Form, useSearchParams } from "@remix-run/react";
import { useEffect } from "react";
import { Button, Checkbox, Input } from "~/shared";

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
    <div>
      <Form method="post" className="flex flex-col gap-5 w-fit">
        <Input title="Email" type="password" placeholder="ivanov@example.com" />
        <Input title="Email" type="text" placeholder="ivanov@example.com" />
        <Checkbox>
          <span>Lol</span>
        </Checkbox>
        <Button type="submit" title="Войти" />
      </Form>
    </div>
  );
}
