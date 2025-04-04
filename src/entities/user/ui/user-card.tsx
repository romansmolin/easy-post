'use client'

import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { useSidebar } from '@/shared/ui/sidebar'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/shared/ui/tooltip'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { CreditCard, Sparkles } from 'lucide-react'
import { useSession } from 'next-auth/react'

interface UserCardProps {
    user: {
        name: string
        email: string
        avatar: string
        plan: string | null
    }
}

const UserCard = ({ user }: UserCardProps) => {
    const { state } = useSidebar()
    const { data: session } = useSession()

    const isCollapsed = state === 'collapsed'

    // Get initials from name
    const initials = user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()

    // Collapsed version of the user card
    if (isCollapsed) {
        return (
            <div className="flex justify-center cursor-pointer">
                <Avatar className="border-2 primary shadow-md rounded-full">
                    <AvatarImage
                        src={session?.user.image || ''}
                        alt={session?.user.name || ''}
                        className="rounded-full"
                    />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
            </div>
        )
    }

    // Expanded version of the user card
    return (
        <div className="rounded-lg border bg-card p-3 text-card-foreground shadow-sm">
            <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 primary shadow-md rounded-full">
                    <AvatarImage
                        src={session?.user.image || ''}
                        alt={session?.user.name || ''}
                        className="rounded-full"
                    />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 overflow-hidden">
                    <div className="flex items-center gap-2">
                        <p className="truncate text-sm font-medium">{session?.user.name || ''}</p>
                        {user.plan && user.plan !== 'free' && (
                            <Badge variant="outline" className="capitalize">
                                {user.plan}
                            </Badge>
                        )}
                    </div>
                    <p className="truncate text-xs text-primary">{session?.user.email}</p>
                </div>
            </div>

            {(!user.plan || user.plan === 'free') && (
                <div className="mt-3">
                    <Button className="w-full" size="sm">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Upgrade to Pro
                    </Button>
                </div>
            )}
        </div>
    )
}

export default UserCard
