import { ChevronDown, CircleX, Search } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Badge } from '../Badge';
import { Input } from '../Input';
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

export const Dropdown = ({
  options,
  withSearch,
  multiple,
  renderOption,
  withPortal,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (option: Option) => {
    if (multiple) {
      setSelectedOptions((prev) =>
        prev.some((o) => o.id === option.id)
          ? prev.filter((o) => o.id !== option.id)
          : [...prev, option]
      );
    } else {
      setSelectedOption(option);
      setOpen(false);
    }
  };

  const isSelected = (option: Option) =>
    multiple
      ? selectedOptions.some((selectedOption) => selectedOption.id === option.id)
      : selectedOption?.id === option.id;

  const content = (
    <div className="absolute w-full bg-white border mt-1 rounded-sm shadow-md z-[1100]">
      {withSearch && (
        <div className="border-b p-2 flex items-center">
          <Search className="text-gray-400" />
          <Input
            className="w-full pl-2 outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <CircleX className="text-gray-500 cursor-pointer" onClick={() => setQuery('')} />
          )}
        </div>
      )}

      <div className="flex flex-col">
        {filteredOptions.map((option) => (
          <Badge
            key={option.id}
            onClick={() => handleSelect(option)}
            className={isSelected(option) ? 'bg-gray-200' : ''}
          >
            {renderOption ? renderOption(option, isSelected(option)) : option.label}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="border rounded-sm p-2 flex justify-between items-center cursor-pointer border-gray-400 hover:border-gray-500"
        onClick={() => setOpen((open) => !open)}
      >
        <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
          {multiple
            ? selectedOptions.map((selectedOption) => (
                <div
                  key={selectedOption.id}
                  className=" bg-gray-100 gap-1 p-2 rounded-4xl flex items-center"
                >
                  {selectedOption.label}
                  <CircleX
                    size={18}
                    onClick={() => {
                      setSelectedOptions((prev) =>
                        prev.filter((option) => option.id !== selectedOption.id)
                      );
                    }}
                  />
                </div>
              ))
            : selectedOption?.label}
        </div>
        <ChevronDown />
      </div>
      {open && (withPortal ? createPortal(content, document.body) : content)}
    </div>
  );
};
