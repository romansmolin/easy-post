'use client'

import api from '@/shared/api/axios'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { AxiosError } from 'axios'
import { Loader2, LogIn } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import React, { JSX, useState } from 'react'

const SignInForm = ({ thirdPartyAuth }: { thirdPartyAuth: JSX.Element }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const handleSignIn = async () => {
        if (!email || !password) {
            toast.error('Email and password are required.')
            return
        }

        try {
            setIsLoading(true)

            const res = await api.post('/signin', {
                email,
                password,
                provider: 'credentials',
            })

            toast.success('Signed in successfully!')
            router.push('/dashboard')

            return res
        } catch (err) {
            if (err instanceof AxiosError && err.response) {
                toast.error(err.response.data.message)
            } else {
                toast.error('Something went wrong.')
            }
            console.error('Sign-in error:', err)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                handleSignIn()
            }}
        >
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                        />
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Signing In...
                            </>
                        ) : (
                            <>
                                <LogIn className="mr-2 h-4 w-4" />
                                Login
                            </>
                        )}
                    </Button>
                </div>

                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-primary">Or</span>
                </div>
                <div>{thirdPartyAuth}</div>
            </div>
        </form>
    )
}

export default SignInForm
