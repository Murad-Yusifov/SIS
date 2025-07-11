import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";

type InputTypeProps<T extends FieldValues> ={
     label:string;
    type?:string;
    register:UseFormRegister<T>;
    name:string;
    defaultValue?:string;
    error?:FieldError;
    inputProps?:React.InputHTMLAttributes<HTMLInputElement>;
}

const InputField = ({
    label,
    type="text",
    register,
    name,
    defaultValue,
    error,
    inputProps,
}:InputTypeProps) => {
  return (
     <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full "
        {...inputProps}
        defaultValue={defaultValue}
      />

      {error?.message && <p className="text-red-400 text-xs">{error?.message.toString()}</p>}
      </div>
  );
};

export default InputField