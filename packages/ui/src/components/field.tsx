"use client";

import {
  createContext,
  forwardRef,
  useContext,
  useId,
} from "react";
import { cn } from "../lib/utils";
import { Label } from "./label";

interface FieldContextValue {
  id: string;
  descriptionId: string;
  errorId: string;
  required?: boolean;
  disabled?: boolean;
  hasError?: boolean;
}

const FieldContext = createContext<FieldContextValue | null>(null);

export function useFieldContext() {
  return useContext(FieldContext);
}

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
  required?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
}

const FieldComponent = forwardRef<HTMLDivElement, FieldProps>(
  (
    {
      className,
      id: customId,
      required = false,
      disabled = false,
      invalid = false,
      label,
      description,
      error,
      children,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const id = customId || generatedId;
    const descriptionId = `${id}-description`;
    const errorId = `${id}-error`;

    const hasError = invalid || Boolean(error);

    return (
      <FieldContext.Provider
        value={{
          id,
          descriptionId,
          errorId,
          required,
          disabled,
          hasError,
        }}
      >
        <div
          ref={ref}
          className={cn("flex flex-col gap-1.5 w-full", className)}
          {...props}
        >
          {label && <FieldLabel>{label}</FieldLabel>}
          {children}
          {description && !error && (
            <FieldDescription>{description}</FieldDescription>
          )}
          {error && <FieldError>{error}</FieldError>}
        </div>
      </FieldContext.Provider>
    );
  },
);

FieldComponent.displayName = "Field";

export type FieldLabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

const FieldLabel = forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, children, ...props }, ref) => {
    const context = useFieldContext();
    const htmlFor = props.htmlFor || context?.id;
    const isRequired = context?.required;

    return (
      <Label
        ref={ref}
        htmlFor={htmlFor}
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        <span>{children}</span>
        {isRequired && (
          <span className="text-destructive font-bold" aria-hidden="true">
            *
          </span>
        )}
      </Label>
    );
  },
);

FieldLabel.displayName = "FieldLabel";

export type FieldDescriptionProps =
  React.HTMLAttributes<HTMLParagraphElement>;

const FieldDescription = forwardRef<
  HTMLParagraphElement,
  FieldDescriptionProps
>(({ className, id: customId, children, ...props }, ref) => {
  const context = useFieldContext();
  const id = customId || context?.descriptionId;

  return (
    <p
      ref={ref}
      id={id}
      className={cn("font-mono text-xs text-muted-foreground leading-normal", className)}
      {...props}
    >
      {children}
    </p>
  );
});

FieldDescription.displayName = "FieldDescription";

export type FieldErrorProps = React.HTMLAttributes<HTMLParagraphElement>;

const FieldError = forwardRef<HTMLParagraphElement, FieldErrorProps>(
  ({ className, id: customId, children, ...props }, ref) => {
    const context = useFieldContext();
    const id = customId || context?.errorId;

    return (
      <p
        ref={ref}
        id={id}
        role="alert"
        aria-live="polite"
        className={cn("font-mono text-xs font-semibold text-destructive leading-normal", className)}
        {...props}
      >
        {children}
      </p>
    );
  },
);

FieldError.displayName = "FieldError";

// Attach compound subcomponents
const Field = Object.assign(FieldComponent, {
  Label: FieldLabel,
  Description: FieldDescription,
  Error: FieldError,
});

export { Field, FieldLabel, FieldDescription, FieldError };
