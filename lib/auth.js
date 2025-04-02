import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const JSON_SERVER_URL = process.env.JSON_SERVER_URL || "http://localhost:3001";

export const authOptions = {
  providers: [
    Google,
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {

        try {
          const res = await fetch(`${JSON_SERVER_URL}/users?email=${credentials.email}`);
          const users = await res.json();
          const user = users[0];

          if (!user || !user.password) {
            throw new Error("User not found or no password stored");
          }

          const isValid = await bcrypt.compare(credentials.password, user.password);
          if (!isValid) {
            throw new Error("Invalid credentials");
          }

          return { id: user.id, name: user.name, email: user.email };
        } catch (error) {
          console.error("Auth Error:", error);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("SignIn Callback", user, account, profile);
      // redirect("/dashboard");
      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login", // Redirect to /login if not authenticated
  },
  session: {
    strategy: "jwt",
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
