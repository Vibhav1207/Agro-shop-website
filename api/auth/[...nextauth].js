import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      const allowedEmails = ["admin@example.com"]; // Add admin emails here
      return allowedEmails.includes(profile.email);
    },
  },
};

export default NextAuth(authOptions);
