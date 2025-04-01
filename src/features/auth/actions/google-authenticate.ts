"use server"

import { signIn } from "../lib/auth"

export const googleAuthenticate = async () => {
    try {
        await signIn('google', {
            redirectTo: '/dashboard',
        })
    } catch (error) {
        console.error('Google authentication failed:', error)
        throw new Error('Failed to authenticate with Google')
    }
}
