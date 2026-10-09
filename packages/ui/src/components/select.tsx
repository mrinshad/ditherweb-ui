"use client";

import * as React from "react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "../lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectChangeEvent {
  target: {
    value: string;
    name?: string;
  };
}

export interface SelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  options?: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement> | SelectChangeEvent) => void;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  name?: string;
  required?: boolean;
  multiple?: boolean;
}

interface RawOptionProps {
  value?: unknown;
  children?: React.ReactNode;
  disabled?: boolean;
}

function parseOptionChildren(children: React.ReactNode): SelectOption[] {
  const result: SelectOption[] = [];
  const walk = (nodes: React.ReactNode) => {
    React.Children.forEach(nodes, (child) => {
      if (!React.isValidElement(child)) return;
      if (child.type === React.Fragment) {
        const fragProps = child.props as { children?: React.ReactNode };
        walk(fragProps.children);
        return;
      }
      const props = child.props as RawOptionProps | undefined;
      if (props && ("value" in props || "children" in props)) {
        const val = props.value !== undefined ? String(props.value) : "";
        let label = val;
        if (props.children !== undefined) {
          if (
            typeof props.children === "string" ||
            typeof props.children === "number"
          ) {
            label = String(props.children);
          } else if (Array.isArray(props.children)) {
            label = props.children
              .map((c: unknown) =>
                typeof c === "string" || typeof c === "number" ? c : "",
              )
              .join("");
          }
        }
        result.push({
          value: val,
          label: label || val,
          disabled: Boolean(props.disabled),
        });
      }
    });
  };
  walk(children);
  return result;
}

const Select = forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      options,
      children,
      value: controlledValue,
      defaultValue,
      onChange,
      onValueChange,
      placeholder = "Select...",
      disabled = false,
      invalid = false,
      className,
      id: customId,
      name,
      required,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const listboxId = `${id}-listbox`;

    const parsedOptions = React.useMemo(() => {
      if (options && options.length > 0) return options;
      return parseOptionChildren(children);
    }, [options, children]);

    const isControlled = controlledValue !== undefined;
    const initialDefault = defaultValue !== undefined ? defaultValue : parsedOptions[0]?.value ?? "";
    const [uncontrolledValue, setUncontrolledValue] = useState<string>(initialDefault);

    const currentValue = isControlled ? controlledValue! : uncontrolledValue;
    const selectedOption = parsedOptions.find((opt) => opt.value === currentValue);

    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    // Sync highlighted index when dropdown opens
    useEffect(() => {
      if (isOpen) {
        const currentIdx = parsedOptions.findIndex((opt) => opt.value === currentValue);
        setHighlightedIndex(currentIdx >= 0 ? currentIdx : 0);
      } else {
        setHighlightedIndex(-1);
      }
    }, [isOpen, currentValue, parsedOptions]);

    // Handle outside click
    useEffect(() => {
      const handleOutsideClick = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener("mousedown", handleOutsideClick);
      }
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, [isOpen]);

    const selectOption = useCallback(
      (option: SelectOption) => {
        if (option.disabled) return;
        if (!isControlled) {
          setUncontrolledValue(option.value);
        }
        onValueChange?.(option.value);
        if (onChange) {
          const syntheticEvent: SelectChangeEvent = {
            target: {
              value: option.value,
              name,
            },
          };
          onChange(syntheticEvent);
        }
        setIsOpen(false);
        triggerRef.current?.focus();
      },
      [isControlled, name, onChange, onValueChange],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;

      if (!isOpen) {
        if (
          e.key === "ArrowDown" ||
          e.key === "ArrowUp" ||
          e.key === "Enter" ||
          e.key === " "
        ) {
          e.preventDefault();
          setIsOpen(true);
          return;
        }
      }

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          if (parsedOptions.length === 0) return;
          setHighlightedIndex((prev) => {
            const next = prev + 1 >= parsedOptions.length ? 0 : prev + 1;
            return next;
          });
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (parsedOptions.length === 0) return;
          setHighlightedIndex((prev) => {
            const next = prev - 1 < 0 ? parsedOptions.length - 1 : prev - 1;
            return next;
          });
          break;
        }
        case "Home": {
          e.preventDefault();
          if (parsedOptions.length > 0) {
            setHighlightedIndex(0);
          }
          break;
        }
        case "End": {
          e.preventDefault();
          if (parsedOptions.length > 0) {
            setHighlightedIndex(parsedOptions.length - 1);
          }
          break;
        }
        case "Enter":
        case " ": {
          e.preventDefault();
          if (
            isOpen &&
            highlightedIndex >= 0 &&
            highlightedIndex < parsedOptions.length
          ) {
            selectOption(parsedOptions[highlightedIndex]);
          } else {
            setIsOpen((prev) => !prev);
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          setIsOpen(false);
          break;
        }
        case "Tab": {
          setIsOpen(false);
          break;
        }
      }
    };

    const activeOptionId =
      isOpen && highlightedIndex >= 0 && highlightedIndex < parsedOptions.length
        ? `${id}-option-${highlightedIndex}`
        : undefined;

    return (
      <div
        ref={containerRef}
        className={cn("relative w-full font-mono", className)}
        {...props}
      >
        {/* Hidden input for native form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={currentValue}
            required={required}
          />
        )}

        <button
          ref={(node) => {
            triggerRef.current = node;
            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          id={id}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-controls={listboxId}
          aria-activedescendant={activeOptionId}
          aria-invalid={invalid || undefined}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          disabled={disabled}
          onClick={() => {
            if (!disabled) {
              setIsOpen((prev) => !prev);
            }
          }}
          onKeyDown={handleKeyDown}
          className={cn(
            "bevel-inset flex w-full items-center justify-between bg-background px-3 py-1.5 text-sm text-foreground rounded-none text-left select-none cursor-pointer",
            "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            invalid && "border-destructive focus-visible:outline-destructive text-destructive",
          )}
        >
          <span
            className={cn(
              "truncate",
              !selectedOption && "text-muted-foreground",
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <span
            className="ml-2 text-xs font-mono text-muted-foreground select-none shrink-0"
            aria-hidden="true"
          >
            {isOpen ? "▲" : "▼"}
          </span>
        </button>

        {/* Custom Retro Dropdown Popup List */}
        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-label={ariaLabel}
            tabIndex={-1}
            className={cn(
              "absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto",
              "bevel-raised bg-surface shadow-hard p-1 font-mono text-sm",
            )}
          >
            {parsedOptions.length === 0 ? (
              <div className="px-3 py-2 text-xs text-muted-foreground italic text-center">
                No options available
              </div>
            ) : (
              parsedOptions.map((option, index) => {
                const isSelected = option.value === currentValue;
                const isHighlighted = index === highlightedIndex;
                const optionId = `${id}-option-${index}`;

                return (
                  <div
                    key={`${option.value}-${index}`}
                    id={optionId}
                    role="option"
                    aria-selected={isSelected}
                    aria-disabled={option.disabled}
                    onMouseEnter={() => {
                      if (!option.disabled) {
                        setHighlightedIndex(index);
                      }
                    }}
                    onMouseDown={(e) => {
                      // Prevent trigger blur before click finishes
                      e.preventDefault();
                    }}
                    onClick={() => selectOption(option)}
                    className={cn(
                      "flex items-center justify-between px-2.5 py-1.5 cursor-pointer select-none text-xs sm:text-sm",
                      isHighlighted &&
                        "bg-primary text-primary-foreground font-bold",
                      !isHighlighted && isSelected && "bg-muted font-bold text-foreground",
                      !isHighlighted && !isSelected && "text-foreground hover:bg-muted",
                      option.disabled &&
                        "opacity-50 cursor-not-allowed pointer-events-none",
                    )}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && (
                      <span className="font-bold text-xs ml-2 shrink-0" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    );
  },
);

Select.displayName = "Select";

export { Select };
