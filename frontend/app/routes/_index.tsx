import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { v4 } from "uuid";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App2" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item) => (
        <Link to={`form/${item.id}`} key={item.id}>
          <div key={item.id} className="bg-slate-300 rounded-lg w-full flex shadow-xl cursor-pointer">
            <img src={item.img} alt="" className=" aspect-video w-4/12 object-cover" />
            <div className="p-4 flex flex-col">
              <div className="flex flex-col gap-2">
                <h1 className="text-2xl">{item.name}</h1>
                <p className="">{item.title}</p>
              </div>
              <div className="flex gap-5 mt-auto">
                <p className="">{item.description}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

const data = [
  {
    id: v4(),
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "John Doe",
    title: "CEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate."
  },
  {
    id: v4(),
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "John Doe",
    title: "CEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate."
  },
  {
    id: v4(),
    img: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "John Doe",
    title: "CEO",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptate."
  }
];
