import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'typescript',
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const lines = code.split('\n');

  return (
    <Card className={cn('overflow-hidden bg-gray-900', className)}>
      <div data-testid="code-block">
        <div className="flex items-center justify-between border-b border-gray-700 px-4 py-2">
          <span
            data-testid="code-language"
            className="text-xs font-medium uppercase text-gray-400"
          >
            {language}
          </span>
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
            <code className="font-mono text-sm text-gray-100">
              {lines.map((line, index) => (
                <div key={index} className="table-row">
                  {showLineNumbers && (
                    <span className="table-cell select-none pr-4 text-right text-gray-500">
                      {index + 1}
                    </span>
                  )}
                  <span className="table-cell">{line}</span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </Card>
  );
}
