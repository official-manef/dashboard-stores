import React from "react";
import { BarChart4 } from "lucide-react";

export interface AnalyticsWidgetProps {
  id: string;
  title: string;
  size?: "small" | "medium" | "large";
  config?: {
    chartType?: "bar" | "line" | "pie";
    showLegend?: boolean;
    data?: any[];
  };
}

const AnalyticsWidget: React.FC<AnalyticsWidgetProps> = ({
  title,
  size = "medium",
  config = {},
}) => {
  const { chartType = "bar", data = [] } = config;
  const hasData = data.length > 0;

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <BarChart4 className="mb-4 h-16 w-16 text-muted-foreground" />
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <p className="text-center text-muted-foreground">
        {chartType.charAt(0).toUpperCase() + chartType.slice(1)} chart
      </p>
      <p className="mt-2 max-w-xs text-center text-sm text-muted-foreground">
        {hasData
          ? `${data.length} data points configured. The chart renderer is not built yet, so they are not plotted.`
          : "No data configured, so there is nothing to plot."}
      </p>
    </div>
  );
};

export const widgetMetadata = {
  name: "Analytics Chart",
  description: "A chart placeholder that plots the data you configure",
  version: "1.0.0",
  author: "dashboard-stores",
  category: "analytics" as const,
  icon: "BarChart",
  defaultSize: "medium" as const,
  defaultConfig: {
    chartType: "bar",
    showLegend: true,
    data: [],
  },
};

export default AnalyticsWidget;
