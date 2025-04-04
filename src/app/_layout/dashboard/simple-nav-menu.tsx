'use client'

import { cn } from '@/shared/lib/utils'
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    useSidebar,
} from '@/shared/ui/sidebar'
import { ChevronDown } from 'lucide-react'

import * as React from 'react'

interface NavItem {
    title: string
    url: string
    icon?: React.ElementType
    items?: NavItem[]
    isActive?: boolean
}

interface NavMenuGroupProps {
    title: string
    items: NavItem[]
}

export function SimpleNavMenu({ title, items }: NavMenuGroupProps) {
    const { state } = useSidebar()
    const isCollapsed = state === 'collapsed'

    // Track open state for each menu
    const [openMenus, setOpenMenus] = React.useState<Record<string, boolean>>({})

    // Toggle menu open state
    const toggleMenu = (menuTitle: string) => {
        setOpenMenus((prev) => ({
            ...prev,
            [menuTitle]: !prev[menuTitle],
        }))
    }

    return (
        <SidebarGroup>
            <SidebarGroupLabel className={cn(isCollapsed && 'justify-center text-center')}>{title}</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {items.map((item) => {
                        // If the item has subitems, render a menu with submenu
                        if (item.items && item.items.length > 0) {
                            const isOpen = openMenus[item.title] || false

                            return (
                                <div key={item.title} className="w-full">
                                    <SidebarMenuItem>
                                        <SidebarMenuButton
                                            tooltip={item.title}
                                            className={cn('h-[35px]', isCollapsed && 'justify-center')}
                                            onClick={() => toggleMenu(item.title)}
                                        >
                                            {item.icon && <item.icon className="size-4" />}
                                            {!isCollapsed && <span>{item.title}</span>}
                                            {!isCollapsed && (
                                                <ChevronDown
                                                    className={cn(
                                                        'ml-auto size-4 transition-transform',
                                                        isOpen && 'rotate-180'
                                                    )}
                                                />
                                            )}
                                        </SidebarMenuButton>

                                        {isOpen && (
                                            <SidebarMenuSub>
                                                {item.items.map((subItem) => (
                                                    <SidebarMenuSubItem key={subItem.title}>
                                                        <SidebarMenuSubButton asChild isActive={subItem.isActive}>
                                                            <a href={subItem.url}>
                                                                {subItem.icon && (
                                                                    <subItem.icon className="mr-2 size-3" />
                                                                )}
                                                                {subItem.title}
                                                            </a>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        )}
                                    </SidebarMenuItem>
                                </div>
                            )
                        }

                        // Otherwise, render a regular menu item
                        return (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={item.isActive}
                                    tooltip={item.title}
                                    className={cn('h-[35px]', isCollapsed && 'justify-center')}
                                >
                                    <a href={item.url}>
                                        {item.icon && <item.icon className="size-4" />}
                                        {!isCollapsed && <span>{item.title}</span>}
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        )
                    })}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}
