import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers
  : { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Sign in data:", { user, account, profile })
      return true
    },
    async session({ session, token }) {
      console.log("Session data:", { session, token })
      return session
    },
  },
})