import { type MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { createId } from "@paralleldrive/cuid2";
import { Button, Input, Radio, Textarea, useMyContext } from "~/shared";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function MainForm() {
  const [, setContext] = useMyContext();
  function handleSubmit(e: any) {
    e.preventDefault();
    const result = Object.fromEntries(new FormData(e.target));
    console.log(result);
  }

  return (
    <>
      <button onClick={() => setContext((prev) => ({ ...prev, edit: !prev.edit }))}>Edit</button>
      <Form method="post" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Input name="title" text={data.title} className="text-center" />
          <Input name="description" text={data.description} />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-5">
          {Object.keys(data.form).map((item) => (
            <div key={item} className="">
              <Select data={{ id: item, ...data.form[item] }} />
            </div>
          ))}
        </div>
        <Button type="submit" title="Submit" />
      </Form>
    </>
  );
}

function Select({ data }: any) {
  return (
    <div className="bg-slate-300 rounded-lg flex overflow-hidden text-wrap shadow-xl flex-col p-4 gap-4">
      <Input name={`${data.id}/title`} text={data.title} />
      <Textarea name={`${data.id}/description`} text={data.description} />
      <div className="grid grid-cols-3 gap-2">
        {data.options?.map((option: any) => (
          <Radio key={option} name={`${data.id}`} title={option} />
        ))}
      </div>
    </div>
  );
}

function YesNo({ data }: any) {
  return (
    <div className="bg-slate-300 rounded-lg flex overflow-hidden text-wrap shadow-xl flex-col p-4 gap-4">
      <Input type="text" text={data.title} />
      <Textarea text={data.description} />
      <div className="flex flex-col gap-2">
        <Radio name={data.title} title="Yes" />
        <Radio name={data.title} title="No" />
      </div>
    </div>
  );
}

interface DataI {
  id: string;
  title: string;
  description: string;
  form: {
    [key: string]: {
      title: string;
      description: string;
      type: "selectOne" | "selectMany" | "yesNo" | "selectOrder" | "input" | "textarea";
      options?: string[];
    };
  };
}

const data: DataI = {
  id: createId(),
  title: "Do you like your work?",
  description: "This form was created for you, please fill it out. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate.",
  form: {
    [createId()]: {
      title: "How many hours do you work per day?",
      description: "",
      type: "selectOne",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    },
    [createId()]: {
      title: "1+1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate.",
      type: "selectOne",
      options: ["1", "2", "3"]
    }
  }
};
