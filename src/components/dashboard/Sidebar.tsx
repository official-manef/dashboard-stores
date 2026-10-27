import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className = "" }: SidebarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-full w-[280px] flex-col bg-background p-4",
        className,
      )}
    >
      <div className="flex min-w-0 items-center gap-2 px-2 py-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-primary text-primary-foreground">
          <LayoutDashboard size={20} />
        </div>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold">Dashboard Stores</span>
          <span className="truncate text-xs text-muted-foreground">
            Local only
          </span>
        </div>
      </div>

      <nav aria-label="Sections" className="mt-4 space-y-1">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center gap-3 truncate rounded-md px-3 py-2 text-sm font-medium transition-colors",
            pathname === "/dashboard"
              ? "bg-secondary text-secondary-foreground"
              : "text-muted-foreground hover:bg-secondary/50 hover:text-secondary-foreground",
          )}
        >
          <span className="flex h-5 w-5 items-center justify-center">
            <LayoutDashboard size={18} />
          </span>
          <span className="flex-1 truncate">Dashboard</span>
        </Link>
      </nav>

      <p className="mt-auto px-3 text-xs text-muted-foreground">
        One route exists. History, settings, models and project sections are not
        built, so they are not listed here.
      </p>
    </div>
  );
};

export default Sidebar;
