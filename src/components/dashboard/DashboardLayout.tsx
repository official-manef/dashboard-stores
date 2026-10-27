"use client";

import React, { useState, useEffect } from "react";
import { Settings, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Sidebar from "./Sidebar";
import WidgetGrid from "./WidgetGrid";
import DevTools from "./DevTools";

const DashboardLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showDevTools, setShowDevTools] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Preferences live in this browser only; there is no account to store them against.
  useEffect(() => {
    const storedSidebarState = localStorage.getItem("sidebar-collapsed");
    if (storedSidebarState !== null) {
      setSidebarCollapsed(storedSidebarState === "true");
    }

    const storedDevToolsState = localStorage.getItem("devtools-visible");
    if (storedDevToolsState !== null) {
      setShowDevTools(storedDevToolsState === "true");
    }

    const storedDarkMode = localStorage.getItem("dark-mode");
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", sidebarCollapsed.toString());
  }, [sidebarCollapsed]);

  useEffect(() => {
    localStorage.setItem("devtools-visible", showDevTools.toString());
  }, [showDevTools]);

  useEffect(() => {
    localStorage.setItem("dark-mode", darkMode.toString());
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex h-screen w-full bg-background">
      <div
        className={cn(
          "hidden shrink-0 overflow-hidden transition-all duration-300 md:block",
          sidebarCollapsed ? "w-0 opacity-0" : "w-[280px] opacity-100",
        )}
      >
        {!sidebarCollapsed && <Sidebar />}
      </div>

      <div className="flex h-full min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between gap-2 border-b px-4">
          <div className="flex min-w-0 items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              aria-label={
                sidebarCollapsed ? "Show sidebar" : "Hide sidebar"
              }
              aria-expanded={!sidebarCollapsed}
              className="hidden md:inline-flex"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="truncate text-xl font-semibold">Dashboard Stores</h1>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <div className="flex items-center gap-2">
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
              <Label htmlFor="dark-mode" className="text-xs">
                Dark Mode
              </Label>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDevTools(!showDevTools)}
              className="flex items-center gap-2"
            >
              <Settings size={16} />
              <span className="hidden sm:inline">
                {showDevTools ? "Hide DevTools" : "Show DevTools"}
              </span>
            </Button>
          </div>
        </header>

        <main className="min-w-0 flex-1 overflow-auto">
          <WidgetGrid />
        </main>
      </div>

      {showDevTools && <DevTools onClose={() => setShowDevTools(false)} />}
    </div>
  );
};

export default DashboardLayout;
