import { type MetaFunction } from "@remix-run/node";
import { Form, NavigateFunction, useLoaderData, useNavigate } from "@remix-run/react";
import { Button, Input, Radio, req, Textarea, useMyContext } from "~/shared";
import { useEffect, useState } from "react";
import { CirclePlus } from "lucide-react";

export const meta: MetaFunction = () => {
  return [{ title: "Edit Form" }, { content: "Edit or create a form" }];
};

export async function loader({ params }: any) {
  const { id } = params;
  return await req(`form/${id}`);
}

export default function MainForm() {
  const [context] = useMyContext();
  const data: any = useLoaderData();
  const [edit, setEdit] = useState(false);
  const navigate: NavigateFunction = useNavigate();
  useEffect(() => {
    if (context.user?.id == data.authorId) {
      setEdit(true);
    }
  }, [context.user?.id, data.authorId]);

  return (
    <Form method="post" onSubmit={handleSubmit} className="w-full h-full">
      <div className="flex flex-col gap-3">
        <Input name="title" defaultValue={data.title} className="w-fit text-center mx-auto" edit={edit} />
        <Textarea name="description" defaultValue={data.description} edit={edit} />
      </div>
      <div className="mt-3 flex flex-col gap-5">
        {data.items.map((item: any) => (
          <div key={item.id} className="">
            <FormElement data={item} edit={edit} />
          </div>
        ))}
        <button className="mx-auto" onClick={() => addItem(data, navigate)}>
          <CirclePlus width={60} height={60} />
        </button>
      </div>
      <Button type="submit" title="Submit" />
    </Form>
  );
}

async function addItem(data: any, navigate: NavigateFunction) {
  req("form/item", { method: "POST", body: JSON.stringify({ formId: data.id, type: "yesNo", label: "New Item" }) }).then(() => {
    navigate(`.`);
  });
}

function FormElement({ data, edit }: { data: any; edit: boolean }) {
  switch (data.type) {
    // case "selectOne":
    //   return <Select data={data} />;
    // case "selectMany":
    //   return <Select data={data} />;
    case "yesNo":
      return <YesNo data={data} edit={edit} />;
    // case "selectOrder":
    //   return <Select data={data} />;
    default:
      return <></>;
  }
}

function YesNo({ data, edit }: any) {
  return (
    <div className="bg-slate-300 rounded-lg flex overflow-hidden text-wrap shadow-xl flex-col p-4 gap-4">
      <Input name={`${data.id}/title`} defaultValue={data.label} edit={edit} />
      <Textarea name={`${data.id}/description`} defaultValue={data.description} edit={edit} />
      <div className="flex flex-col gap-2">
        <Radio name={data.label} title="Yes" edit={edit} />
        <Radio name={data.label} title="No" edit={edit} />
      </div>
    </div>
  );
}
// function Select({ data }: any) {
//   return (
//     <div className="bg-slate-300 rounded-lg flex overflow-hidden text-wrap shadow-xl flex-col p-4 gap-4">
//       <Input name={`${data.id}/title`} text={data.title} />
//       <Textarea name={`${data.id}/description`} text={data.description} />
//       <div className="grid grid-cols-3 gap-2">
//         {data.options?.map((option: any) => (
//           <Radio key={option} name={`${data.id}`} title={option} />
//         ))}
//       </div>
//     </div>
//   );
// }

function handleSubmit(e: any) {
  e.preventDefault();
  const result = Object.fromEntries(new FormData(e.target));
  console.log(result);
}
