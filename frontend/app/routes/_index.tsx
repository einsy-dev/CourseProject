import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  const [state, setState] = useState<PropsI[]>([]);

  useEffect(() => {
    setState(data);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-[100px] gap-5 select-none">
      {state.map((item, index) => (
        <SelectOne key={index} {...item} />
      ))}
    </main>
  );
}

function SelectOne({ name, title, description, img, options }: PropsI) {
  return (
    <div className="bg-slate-300 rounded-lg w-[50%] flex overflow-hidden">
      <img src={img} alt="" className=" aspect-video w-4/12 object-cover" />
      <div className="p-4 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{title}</h1>
          <p className="">{description}</p>
        </div>
        <div className="flex gap-5 mt-auto">
          {options?.map((option) => (
            <div key={option} className="flex">
              <input id={option} type="radio" data-value={option} name={name} />
              <label htmlFor={option} key={option}>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface PropsI {
  name?: string;
  title?: string;
  description?: string;
  img?: string;
  options?: string[];
}

const data: PropsI[] = [
  {
    name: "Sample",
    title: "Test your brain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Corrupti, quia.",
    img: "https://loremflickr.com/200/200",
    options: ["option1", "option2", "option3"]
  },
  {
    name: "Sample",
    title: "Test your brain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Corrupti, quia.",
    img: "https://loremflickr.com/300/200",
    options: ["option1", "option2", "option3"]
  },
  {
    name: "Sample",
    title: "Test your brain",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Corrupti, quia.",
    img: "https://loremflickr.com/200/300",
    options: ["option1", "option2", "option3"]
  }
];
