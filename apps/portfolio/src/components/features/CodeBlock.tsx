import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({ code, language = "typescript", showLineNumbers = true, className }: CodeBlockProps) {
  const lines = code.split("\n");

  return (
    <Card className={cn("overflow-hidden bg-gray-900", className)}>
        <div  data-testid="code-block">
      <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
        <span data-testid="code-language" className="text-xs font-medium text-gray-400 uppercase">{language}</span>
        <button
          data-testid="code-copy-button"
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs text-gray-400 hover:text-gray-200"
        >
          Copy
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre data-testid="code-pre" className="p-4">
          <code className="text-sm text-gray-100 font-mono">
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-gray-500 select-none text-right">
                    {index + 1}
                  </span>
                )}
                <span className="table-cell">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div></div>
    </Card>
  );
}
