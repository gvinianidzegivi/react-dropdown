// src/stories/Dropdown/index.tsx
import { ChevronDown, CircleX, Search } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

// src/stories/Badge/index.tsx
import { jsx } from "react/jsx-runtime";
var variantClasses = {
  primary: "bg-gray-100 text-black hover:bg-gray-300",
  secondary: "bg-red-400 text-white hover:bg-red-600"
};
var Badge = ({ id, onClick, className, children, variant = "primary" }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick,
      className: `p-2 inline-block cursor-pointer rounded ${variantClasses[variant]} ${className}`,
      children
    },
    id
  );
};

// src/stories/Input/index.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Input = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ jsxs("div", { className: `${className}`, children: [
    /* @__PURE__ */ jsx2("label", {}),
    /* @__PURE__ */ jsx2(
      "input",
      {
        type: "text",
        className: "flex-1 outline-none",
        value,
        onChange,
        placeholder,
        ...props
      }
    )
  ] });
};

// src/stories/Dropdown/index.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Dropdown = ({
  options,
  withSearch,
  multiple,
  renderOption,
  withPortal
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const filteredOptions = options.filter(
    (option) => option.label.toLowerCase().includes(query.toLowerCase())
  );
  const handleSelect = (option) => {
    if (multiple) {
      setSelectedOptions(
        (prev) => prev.some((o) => o.id === option.id) ? prev.filter((o) => o.id !== option.id) : [...prev, option]
      );
    } else {
      setSelectedOption(option);
      setOpen(false);
    }
  };
  const isSelected = (option) => multiple ? selectedOptions.some((selectedOption2) => selectedOption2.id === option.id) : selectedOption?.id === option.id;
  const content = /* @__PURE__ */ jsxs2("div", { className: "absolute w-full bg-white border mt-1 rounded-sm shadow-md z-[1100]", children: [
    withSearch && /* @__PURE__ */ jsxs2("div", { className: "border-b p-2 flex items-center", children: [
      /* @__PURE__ */ jsx3(Search, { className: "text-gray-400" }),
      /* @__PURE__ */ jsx3(
        Input,
        {
          className: "w-full pl-2 outline-none",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }
      ),
      query && /* @__PURE__ */ jsx3(CircleX, { className: "text-gray-500 cursor-pointer", onClick: () => setQuery("") })
    ] }),
    /* @__PURE__ */ jsx3("div", { className: "flex flex-col", children: filteredOptions.map((option) => /* @__PURE__ */ jsx3(
      Badge,
      {
        onClick: () => handleSelect(option),
        className: isSelected(option) ? "bg-gray-200" : "",
        children: renderOption ? renderOption(option, isSelected(option)) : option.label
      },
      option.id
    )) })
  ] });
  return /* @__PURE__ */ jsxs2("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs2(
      "div",
      {
        className: "border rounded-sm p-2 flex justify-between items-center cursor-pointer border-gray-400 hover:border-gray-500",
        onClick: () => setOpen((open2) => !open2),
        children: [
          /* @__PURE__ */ jsx3("div", { className: "flex gap-2", onClick: (e) => e.stopPropagation(), children: multiple ? selectedOptions.map((selectedOption2) => /* @__PURE__ */ jsxs2(
            "div",
            {
              className: " bg-gray-100 gap-1 p-2 rounded-4xl flex items-center",
              children: [
                selectedOption2.label,
                /* @__PURE__ */ jsx3(
                  CircleX,
                  {
                    size: 18,
                    onClick: () => {
                      setSelectedOptions(
                        (prev) => prev.filter((option) => option.id !== selectedOption2.id)
                      );
                    }
                  }
                )
              ]
            },
            selectedOption2.id
          )) : selectedOption?.label }),
          /* @__PURE__ */ jsx3(ChevronDown, {})
        ]
      }
    ),
    open && (withPortal ? createPortal(content, document.body) : content)
  ] });
};
export {
  Badge,
  Dropdown,
  Input
};
//# sourceMappingURL=index.js.map