interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export const Input = ({
  value,
  onChange,
  placeholder = '',
  className = '',
  ...props
}: InputProps) => {
  return (
    <div className={`${className}`}>
      <label />
      <input
        type="text"
        className="flex-1 outline-none"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
