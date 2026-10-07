"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "../lib/utils";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface ComboboxProps {
  options: ComboboxOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  emptyMessage?: string;
  className?: string;
  id?: string;
  name?: string;
  required?: boolean;
}

const Combobox = forwardRef<HTMLInputElement, ComboboxProps>(
  (
    {
      options = [],
      value: controlledValue,
      defaultValue = "",
      onValueChange,
      placeholder = "Select an option...",
      disabled = false,
      invalid = false,
      emptyMessage = "No matching results",
      className,
      id: customId,
      name,
      required,
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const listboxId = `${id}-listbox`;

    const isControlled = controlledValue !== undefined;
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const currentValue = isControlled ? controlledValue! : uncontrolledValue;

    // Selected option label
    const selectedOption = options.find((opt) => opt.value === currentValue);

    // State for open and search filter
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    // Filtered options based on search query
    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Sync input text display
    useEffect(() => {
      if (!isOpen) {
        setSearchQuery(selectedOption ? selectedOption.label : "");
        setHighlightedIndex(-1);
      }
    }, [isOpen, selectedOption]);

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
      (option: ComboboxOption) => {
        if (option.disabled) return;
        if (!isControlled) {
          setUncontrolledValue(option.value);
        }
        onValueChange?.(option.value);
        setSearchQuery(option.label);
        setIsOpen(false);
        inputRef.current?.focus();
      },
      [isControlled, onValueChange],
    );

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (disabled) return;

      if (!isOpen) {
        if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter") {
          e.preventDefault();
          setIsOpen(true);
          setHighlightedIndex(filteredOptions.length > 0 ? 0 : -1);
          return;
        }
      }

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          if (filteredOptions.length === 0) return;
          setHighlightedIndex((prev) => {
            const next = prev + 1 >= filteredOptions.length ? 0 : prev + 1;
            return next;
          });
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          if (filteredOptions.length === 0) return;
          setHighlightedIndex((prev) => {
            const next = prev - 1 < 0 ? filteredOptions.length - 1 : prev - 1;
            return next;
          });
          break;
        }
        case "Home": {
          e.preventDefault();
          if (filteredOptions.length > 0) {
            setHighlightedIndex(0);
          }
          break;
        }
        case "End": {
          e.preventDefault();
          if (filteredOptions.length > 0) {
            setHighlightedIndex(filteredOptions.length - 1);
          }
          break;
        }
        case "Enter": {
          if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
            e.preventDefault();
            selectOption(filteredOptions[highlightedIndex]);
          }
          break;
        }
        case "Escape": {
          e.preventDefault();
          setIsOpen(false);
          setHighlightedIndex(-1);
          break;
        }
        case "Tab": {
          setIsOpen(false);
          break;
        }
      }
    };

    const activeOptionId =
      isOpen && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length
        ? `${id}-option-${highlightedIndex}`
        : undefined;

    return (
      <div ref={containerRef} className={cn("relative w-full", className)}>
        {/* Hidden input for native form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={currentValue}
            required={required}
          />
        )}

        <div className="relative flex w-full items-center">
          <input
            ref={(node) => {
              inputRef.current = node;
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={id}
            type="text"
            role="combobox"
            aria-expanded={isOpen}
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-activedescendant={activeOptionId}
            aria-invalid={invalid || undefined}
            disabled={disabled}
            placeholder={placeholder}
            value={isOpen ? searchQuery : selectedOption?.label || ""}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (!isOpen) setIsOpen(true);
              setHighlightedIndex(0);
            }}
            onFocus={() => {
              if (!disabled) {
                setIsOpen(true);
              }
            }}
            onKeyDown={handleKeyDown}
            className={cn(
              "bevel-inset flex w-full bg-background px-3 py-1.5 pr-8 text-sm font-mono text-foreground rounded-none",
              "placeholder:text-muted-foreground",
              "focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              invalid && "border-destructive focus-visible:outline-destructive text-destructive",
            )}
          />

          <button
            type="button"
            tabIndex={-1}
            disabled={disabled}
            aria-label={isOpen ? "Close options" : "Open options"}
            onClick={() => {
              if (!disabled) {
                setIsOpen((prev) => !prev);
                inputRef.current?.focus();
              }
            }}
            className="absolute right-2 text-xs font-mono text-muted-foreground hover:text-foreground select-none disabled:opacity-50"
          >
            {isOpen ? "▲" : "▼"}
          </button>
        </div>

        {/* Dropdown Popup List */}
        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            className={cn(
              "absolute left-0 right-0 z-50 mt-1 max-h-60 overflow-y-auto",
              "bevel-raised bg-surface shadow-hard p-1 font-mono text-sm",
            )}
          >
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-xs text-muted-foreground italic text-center">
                {emptyMessage}
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const isSelected = option.value === currentValue;
                const isHighlighted = index === highlightedIndex;
                const optionId = `${id}-option-${index}`;

                return (
                  <div
                    key={option.value}
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
                      // Prevent input blur before click finishes
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
                    <span>{option.label}</span>
                    {isSelected && (
                      <span className="font-bold text-xs" aria-hidden="true">
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

Combobox.displayName = "Combobox";

export { Combobox };
