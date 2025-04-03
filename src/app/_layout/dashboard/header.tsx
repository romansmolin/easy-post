"use client"
import { ModeSwitcher } from "@/shared/components"
import { Button } from "@/shared/ui/button"
import { useSidebar } from "@/shared/ui/sidebar"
import { PanelLeft } from "lucide-react"

const Header = () => {
    const { toggleSidebar, state } = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
        <header className="flex h-16 shrink-0 items-center px-6 justify-between">
            <Button
                variant="outline"
                size="icon"
                onClick={toggleSidebar}
                className="mr-4 h-10 w-10 bg-transparent border-1 border-primary"
                title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
                <PanelLeft className="h-4 w-4 text-primary dark:text-white" />
                <span className="sr-only">{isCollapsed ? "Expand" : "Collapse"} Sidebar</span>
            </Button>
            <ModeSwitcher />
        </header>
    )
}

export default Header