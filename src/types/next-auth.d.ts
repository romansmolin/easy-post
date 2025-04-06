import 'next-auth'

declare module 'next-auth' {
    interface Session {
        user: {
            id?: string
            name?: string | null
            email?: string | null
            image?: string | null
            accessToken?: string
            role?: string
            plan?: string
            emailVerified?: Date | null
        }
    }

    interface User {
        id?: string
        name?: string | null
        email?: string | null
        image?: string | null
        accessToken?: string
        role?: string
        plan?: string
        emailVerified?: Date | null
        backendData?: any
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        user?: any
        backendData?: any
        accessToken?: string
        provider?: string
    }
}
