import NextAuth from "next-auth";
import Google from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
    ],
    pages: {
        signIn: '/auth',
        error: '/auth/error',
    },
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            // Log the session and token data
            console.log('Session Callback:', {
                session,
                token,
            })
            
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            session.user = token.user as any;
            return session;
        },
        async jwt({ token, user, trigger, session }) {
            // Log the JWT callback data
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

export const { auth, signIn, signOut, update } = handler
export const handlers = handler