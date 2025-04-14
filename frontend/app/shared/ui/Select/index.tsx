import { ElementI } from "~/shared/types";

export function Select({ id, title, description, img, options }: ElementI) {
  return (
    <div className={"bg-slate-300 rounded-lg w-[500px] flex overflow-hidden  shadow-xl  select-none"}>
      <img src={img} alt="" className=" aspect-video w-4/12 object-cover" />
      <div className="p-4 flex flex-col">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{title}</h1>
          <p className="">{description}</p>
        </div>
        <div className="flex gap-5 mt-auto">
          {options?.map((option) => (
            <div key={option} className="flex">
              <input id={option} type="radio" data-value={option} name={id} />
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
