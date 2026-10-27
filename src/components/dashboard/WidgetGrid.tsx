"use client";

import React from "react";
import { LayoutGrid } from "lucide-react";

/**
 * The dashboard grid. Nothing is persisted and there is no data source, so the
 * grid renders its empty state rather than a set of sample widgets.
 */
const WidgetGrid: React.FC = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-10 text-center md:col-span-2 xl:col-span-3">
          <LayoutGrid className="mb-3 h-8 w-8 text-muted-foreground" />
          <h2 className="text-lg font-medium">No widgets on this dashboard</h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            Widgets added here would appear in this grid, and their layout would
            be saved per browser. Nothing is stored yet, so the grid is empty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WidgetGrid;
