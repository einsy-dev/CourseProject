import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { req } from "~/shared";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App2" }, { name: "description", content: "Welcome to Remix!" }];
};

export async function loader() {
  return await req("form/all");
}

export default function Index() {
  const data: any = useLoaderData();
  return (
    <div className="grid grid-cols-4 gap-4 w-full h-full">
      {data.map((item: any) => (
        <Link to={`form/${item.id}`} key={item.id} className="h-fit">
          <FormCard data={item} />
        </Link>
      ))}
    </div>
  );
}

function FormCard({ data }: any) {
  return (
    <div key={data.id} className="bg-slate-300 rounded-lg w-full flex flex-col shadow-xl cursor-pointer overflow-hidden relative [&>div]:hover:translate-y-0">
      <img
        src={
          data.img ||
          "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        alt=""
        className=" aspect-[8/9]  object-cover"
      />
      <div className="p-4 flex flex-col absolute bottom-0 bg-white bg-opacity-60 w-full translate-y-full transform transition-all">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{data.name}</h1>
          <p className="">{data.title}</p>
        </div>
        <div className="flex gap-5 mt-auto">
          <p className="">{data.description}</p>
        </div>
      </div>
    </div>
  );
}
