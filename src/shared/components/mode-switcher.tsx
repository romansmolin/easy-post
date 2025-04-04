"use client"

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ModeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-10 w-10 justify-start border-1 border-primary p-2 hover:[&>div>svg]:text-white"
            size="icon"
            variant="outline"
        >
            <div className="flex gap-2 dark:hidden ">
                <Moon className="size-5 text-primary dark:text-white" />
            </div>

            <div className="dark:flex gap-2 hidden">
                <Sun className="size-5 text-primary dark:text-white" />
            </div>

            <span className="sr-only">Trocar de tema</span>
        </Button>
    );
};