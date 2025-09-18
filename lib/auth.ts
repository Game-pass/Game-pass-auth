import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers
  : { GET, POST }, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: "1056640800223-90sn7jqc8tl01votnqqvivchsoh0fdkc.apps.googleusercontent.com",
      clientSecret: "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",
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