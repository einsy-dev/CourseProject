import { Input } from "../Input";

interface Props {
  name: string;
  title?: string;
  edit?: boolean;
}
export function Radio({ name, title, edit = false }: Props) {
  if (!title) return <></>;
  return (
    <label className="flex gap-2 w-fit">
      <input value={title} name={name} className="px-2 py-1 shadow-lg border rounded-lg" type="radio" />
      <Input name={`${name}/option/${title}`} defaultValue={title} className="w-full" edit={edit} />
    </label>
  );
}
