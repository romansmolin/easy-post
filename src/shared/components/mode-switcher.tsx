"use client"

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ModeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-10 w-10 justify-start border-1 border-primary p-2"
            size="icon"
            variant="outline"
        >
            <div className="flex gap-2 dark:hidden hover:[&>svg]:text-white">
                <Moon className="size-5 text-primary dark:text-white" />
                <span className="block lg:hidden"> Escuro </span>
            </div>

            <div className="dark:flex gap-2 hidden hover:[&>svg]:text-white">
                <Sun className="size-5 text-primary dark:text-white" />
                <span className="block lg:hidden">Claro</span>
            </div>

            <span className="sr-only">Trocar de tema</span>
        </Button>
    );
};