'use client'

import { UserCard } from '@/entities/user'
import { cn } from '@/shared/lib/utils'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, useSidebar } from '@/shared/ui/sidebar'
import { BarChart, Calendar, Cog, FileText, Instagram, Layers, LayoutDashboard, Twitter, Users } from 'lucide-react'

import React from 'react'

import { SimpleNavMenu } from './simple-nav-menu'

const menuGroups = [
    {
        title: 'Content',
        items: [
            {
                title: 'Dashboard',
                icon: LayoutDashboard,
                url: '/dashboard',
            },
            {
                title: 'Calendar',
                icon: Calendar,
                url: '/calendar',
            },
            {
                title: 'Content Library',
                icon: Layers,
                url: '#',
                items: [
                    {
                        title: 'All Content',
                        url: '/content',
                    },
                    {
                        title: 'Drafts',
                        url: '/content/drafts',
                    },
                    {
                        title: 'Scheduled',
                        url: '/content/scheduled',
                    },
                    {
                        title: 'Published',
                        url: '/content/published',
                    },
                ],
            },
            {
                title: 'Analytics',
                icon: BarChart,
                url: '/analytics',
            },
        ],
    },
    {
        title: 'Configuration',
        items: [
            {
                title: 'Social Accounts',
                icon: Users,
                url: '/accounts',
                // items: [
                //     {
                //         title: "Twitter",
                //         icon: Twitter,
                //         url: "/accounts/twitter",
                //     },
                //     {
                //         title: "Instagram",
                //         icon: Instagram,
                //         url: "/accounts/instagram",
                //     },
                // ],
            },
            {
                title: 'Templates',
                icon: FileText,
                url: '/templates',
            },
            {
                title: 'Settings',
                icon: Cog,
                url: '/settings',
            },
        ],
    },
]

const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/placeholder.svg?height=40&width=40',
    plan: 'free', // Can be "free", "pro", "business" or null
}

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const { state } = useSidebar()
    const isCollapsed = state === 'collapsed'

    return (
        <Sidebar className="!bg-pink-50" collapsible="icon" {...props}>
            <SidebarHeader className="">
                <div className="flex items-center gap-2 pt-2">
                    <div className="text-primary">
                        <svg
                            width="35"
                            height="35"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="4"
                            className="h-11 w-fit md:w-auto md:h-auto"
                        >
                            <path d="M20,30 Q50,5 80,30" strokeLinecap="round" strokeWidth="5" />
                            <path d="M20,70 Q50,95 80,70" strokeLinecap="round" strokeWidth="5" />
                            <circle cx="50" cy="50" r="15" />
                            <line x1="50" y1="50" x2="58" y2="50" strokeLinecap="round" />
                            <line x1="50" y1="50" x2="50" y2="42" strokeLinecap="round" />
                            <circle cx="25" cy="25" r="2.5" fill="currentColor" />
                            <circle cx="75" cy="25" r="2.5" fill="currentColor" />
                            <circle cx="25" cy="75" r="2.5" fill="currentColor" />
                            <circle cx="75" cy="75" r="2.5" fill="currentColor" />
                        </svg>
                    </div>
                    {!isCollapsed && <h2 className="text-lg font-semibold">EasyPost</h2>}
                </div>
            </SidebarHeader>

            <SidebarContent>
                {menuGroups.map((group) => (
                    <SimpleNavMenu key={group.title} title={group.title} items={group.items} />
                ))}
            </SidebarContent>

            <SidebarFooter>
                <div className={cn(!isCollapsed && 'p-2')}>
                    <UserCard user={userData} />
                </div>
            </SidebarFooter>

            <SidebarRail />
        </Sidebar>
    )
}

export default AppSidebar
