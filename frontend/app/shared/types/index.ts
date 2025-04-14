enum Types {
  SelectOne = "SelectOne",
  SelectMany = "SelectMany",
  YesNo = "YesNo",
  SelectOrder = "SelectOrder",
  Input = "Input",
  Textarea = "Textarea"
}

type TypesI = keyof typeof Types;

interface ElementI {
  id: string;
  title: string;
  description: string;
  img: string;
  options: string[];
  type?: Types;
}

export { Types };
export type { ElementI, TypesI };
