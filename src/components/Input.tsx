type InputProps = React.ComponentProps<"input">;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`w-full border border-border rounded-md px-3 py-2 focus:ring-2 focus:ring-ring focus:outline-none bg-background text-foreground placeholder:text-muted-foreground ${className ?? ""}`}
      {...props}
    />
  );
};

export default Input;
