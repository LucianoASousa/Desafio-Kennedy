import { ButtonHTMLAttributes} from "react";

export default function Button({
  children,
  styles,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  styles: "danger" | "success" | "neutral";
}) {

  let color = "bg-primary-neutral hover:bg-hover-neutral active:bg-click-neutral";

  switch (styles) {
    case "danger":
      color = "bg-primary-danger hover:bg-hover-danger active:bg-click-danger";
      break;
    case "success":
      color = "bg-primary-success hover:bg-hover-success active:bg-click-success";
      break;
    case "neutral":
      color = "bg-primary-neutral hover:bg-hover-neutral active:bg-click-neutral";
      break;
  }


  return (
    <button className={`${color} text-center text-white px-[20px] pt-[10px] pb-[10px] rounded-[5px] flex gap-2 items-center`}
      {...rest}
    >
      {children}
    </button>
  );
}