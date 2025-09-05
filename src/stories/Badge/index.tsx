interface BadgeProps {
  id?: string | number;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const variantClasses = {
  primary: 'bg-gray-100 text-black hover:bg-gray-300',
  secondary: 'bg-red-400 text-white hover:bg-red-600',
};

export const Badge = ({ id, onClick, className, children, variant = 'primary' }: BadgeProps) => {
  return (
    <div
      key={id}
      onClick={onClick}
      className={`p-2 inline-block cursor-pointer rounded ${variantClasses[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
