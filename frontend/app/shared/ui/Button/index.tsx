interface Props {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  clasName?: string;
}

export function Button({ title, onClick, clasName, type = "button" }: Props) {
  return (
    <button type={type} onClick={onClick} className={`btn ${clasName}`}>
      {title}
    </button>
  );
}
