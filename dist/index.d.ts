import * as react_jsx_runtime from 'react/jsx-runtime';

interface Option {
    id: number;
    label: string;
    value: string;
}
interface DropdownProps {
    options: Option[];
    withSearch?: boolean;
    multiple?: boolean;
    renderOption?: (option: Option, isSelected: boolean) => React.ReactNode;
    withPortal?: boolean;
}
declare const Dropdown: ({ options, withSearch, multiple, renderOption, withPortal, }: DropdownProps) => react_jsx_runtime.JSX.Element;

interface BadgeProps {
    id?: string | number;
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}
declare const Badge: ({ id, onClick, className, children, variant }: BadgeProps) => react_jsx_runtime.JSX.Element;

interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    className?: string;
}
declare const Input: ({ value, onChange, placeholder, className, ...props }: InputProps) => react_jsx_runtime.JSX.Element;

export { Badge, Dropdown, Input };
