'use client'

import api from '@/shared/api/axios'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { useSidebar } from '@/shared/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { ExternalLink, LogOut, Settings, Sparkles, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

interface UserCardProps {
    user: {
        name: string
        email: string
        avatar: string
        plan: string | null
    }
}

interface UserI {
    id: string | null
    name: string | null
    email: string | null
    googleId: string | null
    trialEndsAt: string | null
    picture: string | null
}

const initialUser: UserI = {
    id: null,
    name: null,
    email: null,
    googleId: null,
    trialEndsAt: null,
    picture: null,
}

const UserCard = ({ user }: UserCardProps) => {
    const router = useRouter()
    const { state } = useSidebar()
    const [userInfo, setUserInfo] = useState<UserI>(initialUser)

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const { data } = await api.get('/auth/user-info')
                setUserInfo(data.user)
            } catch (err) {}
        }

        getUserInfo()
    }, [])

    const handleLogout = () => {
        router.push('/')
    }

    const handleSettings = () => {
        router.push('/settings/profile')
    }

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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex justify-center cursor-pointer">
                        <Avatar className="border-2 border-primary/20 shadow-md rounded-full hover:border-primary/50 transition-colors duration-200">
                            <AvatarImage
                                src={user.avatar || userInfo.picture || '/default-avatar.png'}
                                alt={user.name || userInfo.name || 'User avatar'}
                                className="rounded-full"
                            />
                            <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
                        </Avatar>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium truncate">{user.name || userInfo.name}</p>
                            <p className="text-xs text-muted-foreground truncate">{user.email || userInfo.email}</p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSettings}>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Log out</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }

    // Expanded version of the user card
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-lg cursor-pointer hover:border-primary/40 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12 border-2 border-primary/20 shadow-md rounded-full flex-shrink-0">
                            <AvatarImage
                                src={userInfo.picture || user.avatar || '/default-avatar.png'}
                                alt={userInfo.name || user.name || 'User avatar'}
                                className="rounded-full"
                            />
                            <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col  overflow-hidden">
                            <p className="text-lg font-semibold truncate">{userInfo.name || user.name}</p>
                            <p className="text-sm text-muted-foreground truncate">{userInfo.email || user.email}</p>
                        </div>
                    </div>

                    {(!user.plan || user.plan === 'free') && (
                        <div className="mt-4">
                            <Button variant="outline" className="w-full bg-primary text-white" size="sm">
                                <Sparkles className="mr-2 h-4 w-4" />
                                Upgrade to Pro
                            </Button>
                        </div>
                    )}
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSettings}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserCard
