import api from '@/shared/api/axios'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        // Credentials({
        //     credentials: {
        //         email: { label: 'Email', type: 'email' },
        //         password: { label: 'Password', type: 'password' },
        //         name: { label: 'Name', type: 'text' },
        //         isSignUp: { label: 'Is Sign Up', type: 'boolean' },
        //     },
        //     authorize: async (credentials) => {
        //         try {
        //             if (credentials.isSignUp) {
        //                 // SIGN UP
        //                 const signUpRes = await api.post('/signup', {
        //                     name: credentials?.name,
        //                     email: credentials?.email,
        //                     password: credentials?.password,
        //                     provider: 'credentials',
        //                 })

        //                 if (signUpRes.data) {
        //                     const user = {
        //                         id: signUpRes.data.id,
        //                         name: signUpRes.data.name,
        //                         email: signUpRes.data.email,
        //                         image: signUpRes.data.image,
        //                         backendData: signUpRes.data,
        //                     }
        //                     return user
        //                 }
        //             } else {
        //                 // SIGN IN
        //                 const signInRes = await api.post('/signin', {
        //                     email: credentials?.email,
        //                     password: credentials?.password,
        //                     provider: 'credentials',
        //                 })

        //                 if (signInRes.data) {
        //                     const user = {
        //                         id: signInRes.data.id,
        //                         name: signInRes.data.name,
        //                         email: signInRes.data.email,
        //                         image: signInRes.data.image,
        //                         backendData: signInRes.data,
        //                     }
        //                     return user
        //                 }
        //             }

        //             throw new Error(credentials.isSignUp ? 'Sign up failed' : 'Invalid credentials')
        //         } catch (error: any) {
        //             console.error('Authentication error:', error)
        //             throw new Error(error.message || 'Authentication failed')
        //         }
        //     },
        // }),
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                if (account?.provider === 'google') {
                    try {
                        const signInRes = await api.post('/signin', {
                            email: user.email,
                            provider: 'google',
                            googleId: user.id,
                        })

                        if (!signInRes.data.user) {
                            const signUpRes = await api.post('/signup', {
                                name: user.name,
                                email: user.email,
                                googleId: user.id,
                                image: user.image,
                            })

                            user.backendData = signUpRes.data
                            return true
                        }

                        user.backendData = signInRes.data
                        return true
                    } catch (signInErr) {
                        return false
                    }
                }

                return false
            } catch (err) {
                console.error('Auth error:', err)
                return false
            }
        },
        async session({ session, token }) {
            if (token.backendData && typeof token.backendData === 'object') {
                const backendData = token.backendData as Record<string, any>

                session.user = {
                    ...session.user,
                    ...backendData,
                    // Ensure required fields have values
                    id: backendData.id || token.sub || '',
                    email: backendData.email || token.email || '',
                    name: backendData.name || token.name || '',
                }

                console.log('Session updated with backend data: ', session)
            } else {
                // Fallback to token data if no backend data
                const { email, name, sub } = token

                if (session.user) {
                    session.user.id = session.user.id || sub || ''
                    session.user.email = session.user.email || email || ''
                    session.user.name = session.user.name || name || ''
                    // Set a default emailVerified value to satisfy the type
                    session.user.emailVerified = session.user.emailVerified || null
                } else {
                    session.user = {
                        id: sub || '',
                        email: email || '',
                        name: name || '',
                        emailVerified: null,
                    }
                }
            }

            return session
        },
        async jwt({ token, user, trigger, session }) {
            // Store user data including backend data from signIn
            if (user) {
                token.user = user
                // Pass backend data to token if available
                if (user.backendData) {
                    token.backendData = user.backendData
                }
            }

            if (trigger === 'update' && session) {
                token = { ...token, user: session }
                return token
            }

            return token
        },
    },
})
