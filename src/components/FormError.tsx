import { CircleAlert } from "lucide-react";

const FormError = ({ message }: { message: string }) => {
  return (
    <div
      role="alert"
      className="bg-destructive/10 border border-destructive/30 text-destructive rounded-xl p-3 flex gap-2 items-start text-sm "
    >
      <CircleAlert />
      <p className="pr-9">{message}</p>
    </div>
  );
};

export default FormError;
