import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Google
  ],
  callbacks:{
    async signIn({user,account,profile}){
      console.log("SignIn Callback",user,account,profile )
      return true
    },
    authorized: async ({ auth }) => {
      return !!auth; // Only allow authenticated users
    },
  }
};

export const {handlers,auth,signIn,signOut} = NextAuth(authOptions);
