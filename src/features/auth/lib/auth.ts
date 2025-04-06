import api from '@/shared/api/axios'
import axios from 'axios'
import NextAuth from 'next-auth'
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
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials,  }) {
            try {
                if (account?.provider === 'google') {

                    try {
                        const signInRes = await api.post('/signin', {
                            email: user.email,
                            provider: 'google',
                            googleId: user.id
                        })

                        if (!signInRes.data.user) {
                            console.log(" we neter here as signInRes is null")
                            const signUpRes = await api.post('/signup', {
                                name: user.name,
                                email: user.email,
                                googleId: user.id,
                                image: user.image
                            })
                            
                            user.backendData = signUpRes.data
                            return true
                        }
                        
                        console.log('SIGN IN: ', signInRes.data)
                        user.backendData = signInRes.data
                        return true
                    } catch (signInErr) {
                        console.log(signInErr)
                    }
                }

                return true
            } catch (err) {
                console.error('Auth error:', err)
                return false
            }
        },
        async session({ session, token }) {
            if (token.backendData) {
                session.user = {
                    ...session.user,
                    ...token.backendData,
                    // Ensure required fields have values
                    id: token.backendData.id || token.sub || "",
                    email: token.backendData.email || token.email || "",
                    name: token.backendData.name || token.name || "",
                }
                
                console.log('Session updated with backend data: ', session)
            } else {
                // Fallback to token data if no backend data
                const { email, name, sub } = token
                
                if (session.user) {
                    session.user.id = session.user.id || sub || "";
                    session.user.email = session.user.email || email || "";
                    session.user.name = session.user.name || name || "";
                    // Set a default emailVerified value to satisfy the type
                    session.user.emailVerified = session.user.emailVerified || null;
                } else {
                    session.user = {
                        id: sub || "",
                        email: email || "",
                        name: name || "",
                        emailVerified: null,
                    }
                }
            }

            return session
        },
        async jwt({ token, user, trigger, session }) {
            // Store user data including backend data from signIn
            if (user) {
                token.user = user;
                // Pass backend data to token if available
                if (user.backendData) {
                    token.backendData = user.backendData;
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
