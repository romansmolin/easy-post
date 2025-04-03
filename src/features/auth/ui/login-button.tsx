"use client"

import { useSession, signOut } from "next-auth/react"
import Link from "next/link"
import { useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu"
import { LogIn, User, Settings, HelpCircle, LogOut } from "lucide-react"

const LoginButton = () => {
    const { data: session } = useSession()


    if (!session) {
        return (
            <Button
                size="lg"
                className="flex items-center gap-2 shadow-lg hover:shadow-xl"
                asChild
            >
                <Link href="/auth">
                    <LogIn className="h-4 w-4" />
                    <span>Log In</span>
                </Link>
            </Button>
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full p-0 hover:bg-slate-100 transition-all duration-300"
                >
                    <Avatar className="h-10 w-10 border-2 border-emerald-500 shadow-md">
                        <AvatarImage src={session.user.image || ""} alt="User Avatar" />
                        <AvatarFallback className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
                            {session.user.name ? session.user.name.substring(0, 2).toUpperCase() : "CN"}
                        </AvatarFallback>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{session.user.name || "User"}</p>
                        <p className="text-xs leading-none text-muted-foreground">{session.user.email || ""}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default LoginButton

