import api from '@/shared/api/axios'
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar'
import { Button } from '@/shared/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/shared/ui/dropdown-menu'
import { LogIn } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'

const LoginButton = async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')

    const { data } = await api.get('/auth/user-info', {
        headers: {
            Authorization: `Bearer ${token?.value}`,
        },
    })
    const { user } = data

    if (!user) {
        return (
            <Button size="lg" className="flex items-center gap-2 shadow-lg hover:shadow-xl" asChild>
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
                    <Avatar className="h-10 w-10 border-2 primary shadow-md">
                        <Link href={'/dashboard'}>
                            <AvatarImage src={user.picture || ''} alt="User Avatar" />
                            <AvatarFallback className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white">
                                {user.name ? user.name.substring(0, 2).toUpperCase() : 'CN'}
                            </AvatarFallback>
                        </Link>
                    </Avatar>
                    <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white"></span>
                </Button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}

export default LoginButton
