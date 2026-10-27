import React from "react";
import { Database } from "lucide-react";

export interface DataDisplayWidgetProps {
  id: string;
  title: string;
  size?: "small" | "medium" | "large";
  config?: {
    endpoint?: string;
    lastSync?: string;
    recordCount?: number;
    fields?: Array<{
      name: string;
      value: string;
    }>;
  };
}

const DataDisplayWidget: React.FC<DataDisplayWidgetProps> = ({
  title,
  size = "small",
  config = {},
}) => {
  const { endpoint, lastSync, recordCount, fields = [] } = config;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center">
        <Database className="mr-2 h-5 w-5 text-primary" />
        <h3 className="truncate text-lg font-medium">{title}</h3>
      </div>

      <div className="w-full">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">API Endpoint</span>
        </div>
        <div className="mb-4 truncate rounded-md bg-muted p-2 font-mono text-xs">
          {endpoint ?? "Not configured"}
        </div>

        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium">Last Sync</span>
          <span className="text-xs text-muted-foreground">
            {lastSync ?? "Never"}
          </span>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-medium">Records</span>
          <span className="text-xs text-muted-foreground">
            {recordCount === undefined ? "Unknown" : recordCount.toLocaleString()}
          </span>
        </div>

        {fields.length > 0 ? (
          <div className="overflow-hidden rounded-md border">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-3 py-2 text-left text-xs font-medium">
                    Field
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {fields.map((field, index) => (
                  <tr key={index}>
                    <td className="px-3 py-2 text-sm">{field.name}</td>
                    <td className="max-w-[150px] truncate px-3 py-2 font-mono text-sm">
                      {field.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            No fields configured. This widget shows whatever the endpoint
            returns once one is set; it does not connect to anything by default.
          </p>
        )}
      </div>
    </div>
  );
};

export const widgetMetadata = {
  name: "Data Display",
  description: "Shows the fields returned by an API endpoint you configure",
  version: "1.0.0",
  author: "dashboard-stores",
  category: "data" as const,
  icon: "Database",
  defaultSize: "small" as const,
  defaultConfig: {
    fields: [],
  },
};

export default DataDisplayWidget;
