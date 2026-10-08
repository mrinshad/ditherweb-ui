import { cn } from "@ditherweb/ui";

export interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

export interface ApiTableProps {
  props: PropDefinition[];
  title?: string;
  className?: string;
}

export function ApiTable({
  props,
  title = "Props Reference",
  className,
}: ApiTableProps) {
  if (!props || props.length === 0) {
    return (
      <div className="bevel-inset bg-surface p-4 text-xs font-mono text-muted-foreground">
        No specific custom props defined. Inherits all standard HTML element attributes.
      </div>
    );
  }

  return (
    <div className={cn("space-y-2 font-mono text-xs", className)}>
      {title && (
        <div className="flex items-center justify-between">
          <h3 className="font-bold uppercase tracking-wider text-foreground">
            {title}
          </h3>
          <span className="text-[11px] text-muted-foreground">
            {props.length} {props.length === 1 ? "property" : "properties"}
          </span>
        </div>
      )}

      <div className="bevel-raised bg-surface border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-border bg-muted/30 text-muted-foreground text-[11px] uppercase tracking-wider">
                <th scope="col" className="px-3 py-2 font-bold text-foreground">
                  Prop
                </th>
                <th scope="col" className="px-3 py-2 font-bold text-foreground">
                  Type
                </th>
                <th scope="col" className="px-3 py-2 font-bold text-foreground">
                  Default
                </th>
                <th scope="col" className="px-3 py-2 font-bold text-foreground min-w-[200px]">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {props.map((p) => (
                <tr key={p.name} className="hover:bg-muted/20 transition-colors">
                  <td className="px-3 py-2.5 font-bold text-primary align-top whitespace-nowrap">
                    <code>{p.name}</code>
                    {p.required && (
                      <span className="ml-1 text-[10px] text-destructive font-bold" title="Required">
                        *
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2.5 align-top text-muted-foreground">
                    <code className="text-foreground text-[11px] bg-muted/40 px-1 py-0.5 rounded-none border border-border/50">
                      {p.type}
                    </code>
                  </td>
                  <td className="px-3 py-2.5 align-top text-muted-foreground whitespace-nowrap">
                    {p.default ? (
                      <code className="text-foreground text-[11px]">{p.default}</code>
                    ) : (
                      <span className="text-muted-foreground/60">—</span>
                    )}
                  </td>
                  <td className="px-3 py-2.5 align-top text-muted-foreground leading-relaxed">
                    {p.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
