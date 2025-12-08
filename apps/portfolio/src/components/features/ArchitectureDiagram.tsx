import { cn } from "@/lib/utils";

interface ArchitectureDiagramProps {
  title: string;
  layers: {
    name: string;
    components: string[];
    description?: string;
  }[];
  className?: string;
}

export function ArchitectureDiagram({ title, layers, className }: ArchitectureDiagramProps) {
  return (
    <div data-testid="architecture-diagram" className={cn("space-y-4", className)}>
      <h3 data-testid="architecture-title" className="text-xl font-semibold text-center">{title}</h3>
      <div className="space-y-4">
        {layers.map((layer, idx) => (
          <div
            key={idx}
            data-testid="architecture-layer"
            className="border-2 border-blue-600/20 dark:border-blue-400/20 rounded-lg p-6 bg-gradient-to-r from-blue-50/5 dark:from-blue-950/5 to-gray-50/5 dark:to-gray-950/5"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 data-testid="layer-name" className="text-lg font-semibold">{layer.name}</h4>
                <span className="text-xs text-gray-600 dark:text-gray-400">Layer {idx + 1}</span>
              </div>
              {layer.description && (
                <p data-testid="layer-description" className="text-sm text-gray-600 dark:text-gray-400">{layer.description}</p>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {layer.components.map((component) => (
                  <div
                    key={component}
                    data-testid="layer-component"
                    className="px-3 py-2 bg-background border rounded-md text-sm font-medium text-center hover:bg-accent transition-colors"
                  >
                    {component}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
