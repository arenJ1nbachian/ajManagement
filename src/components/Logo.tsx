import { ChefHat } from "lucide-react";

const Logo = ({ size }: { size: number }) => {
  return (
    <div className="w-10 h-10 flex items-center justify-center bg-brand rounded-md">
      <ChefHat size={size} className="text-brand-foreground" />
    </div>
  );
};

export default Logo;
