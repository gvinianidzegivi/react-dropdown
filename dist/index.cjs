"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/stories/index.ts
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  Dropdown: () => Dropdown,
  Input: () => Input
});
module.exports = __toCommonJS(index_exports);

// src/stories/Dropdown/index.tsx
var import_lucide_react = require("lucide-react");
var import_react = require("react");
var import_react_dom = require("react-dom");

// src/stories/Badge/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var variantClasses = {
  primary: "bg-gray-100 text-black hover:bg-gray-300",
  secondary: "bg-red-400 text-white hover:bg-red-600"
};
var Badge = ({ id, onClick, className, children, variant = "primary" }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = ({
  value,
  onChange,
  placeholder = "",
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `${className}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var Dropdown = ({
  options,
  withSearch,
  multiple,
  renderOption,
  withPortal
}) => {
  const [open, setOpen] = (0, import_react.useState)(false);
  const [query, setQuery] = (0, import_react.useState)("");
  const [selectedOptions, setSelectedOptions] = (0, import_react.useState)([]);
  const [selectedOption, setSelectedOption] = (0, import_react.useState)(null);
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
  const content = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "absolute w-full bg-white border mt-1 rounded-sm shadow-md z-[1100]", children: [
    withSearch && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "border-b p-2 flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.Search, { className: "text-gray-400" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Input,
        {
          className: "w-full pl-2 outline-none",
          value: query,
          onChange: (e) => setQuery(e.target.value)
        }
      ),
      query && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.CircleX, { className: "text-gray-500 cursor-pointer", onClick: () => setQuery("") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex flex-col", children: filteredOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Badge,
      {
        onClick: () => handleSelect(option),
        className: isSelected(option) ? "bg-gray-200" : "",
        children: renderOption ? renderOption(option, isSelected(option)) : option.label
      },
      option.id
    )) })
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "relative", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        className: "border rounded-sm p-2 flex justify-between items-center cursor-pointer border-gray-400 hover:border-gray-500",
        onClick: () => setOpen((open2) => !open2),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "flex gap-2", onClick: (e) => e.stopPropagation(), children: multiple ? selectedOptions.map((selectedOption2) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "div",
            {
              className: " bg-gray-100 gap-1 p-2 rounded-4xl flex items-center",
              children: [
                selectedOption2.label,
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_lucide_react.CircleX,
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react.ChevronDown, {})
        ]
      }
    ),
    open && (withPortal ? (0, import_react_dom.createPortal)(content, document.body) : content)
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Dropdown,
  Input
});
//# sourceMappingURL=index.cjs.map