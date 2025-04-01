import api from "@/shared/api/axios";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code",
                },
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            const { email, name, sub } = token

            try {
                const res = await api.post('/signup', {
                    name,
                    email,
                    googleId: sub
                })
                
                if (res.status === 201) {
                    session.user = token.user as any
                }
            } catch (error) {
                session.user = token.user as any;
            }

            return session;
        },
        async jwt({ token, user, trigger, session }) {            
            console.log('JWT Callback:', {
                token,
                user,
                trigger,
                session,
            })

            if (user) {
                token.user = user;
            }

            if (trigger === "update" && session) {
                token = { ...token, user: session }
                return token;
            };
            return token;
        },
    },
})