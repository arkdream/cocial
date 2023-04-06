export interface InputProps {
  label: string;
  type: "string" | "password" | "email" | "number" | "tel" | "url";
  placeholder: string;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Input(props: InputProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-theme-secondary focus:outline outline-theme-foreground-dark rounded-theme">
      {props.icon && props.icon}
      <input
        className="w-full bg-transparent outline-none text-theme-foreground-dark placeholder:text-theme-muted-dark dark:text-theme-text-dark "
        {...props}
      />
    </div>
  );
}
