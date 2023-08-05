import User from "@/model/User";
import { Profile } from 'next-auth';
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// import CredentialsProvider from "next-auth/providers/credentials";
// import connect from "@/utils/db";
// import Users from "@/models/Users";
// import bcrypt from "bcryptjs";

interface GoogleProfile extends Profile {
  given_name?: string;
  family_name?: string;
  // Add any other properties you expect to find in the Google profile
}
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Goggle_Client_Id as string,
      clientSecret: process.env.Goggle_Client_Secret as string,
    }),


    // ...add more providers here
    // CredentialsProvider({
    //   id: "credentials",
    //   name: "credentials",
    //   async authorize(credentials) {
    //     await connect();
    //     try {
    //       const user = await Users.findOne({ email: credentials.email });
    //       if (user) {
    //         const isPasswordCorrect = await bcrypt.compare(
    //           credentials.password,
    //           user.password
    //         );
    //         if (isPasswordCorrect) {
    //           return user;
    //         } else {
    //           throw new Error("wrong credentials");
    //         }
    //       } else {
    //         throw new Error("User not found");
    //       }
    //     } catch (error) {
    //       throw new Error(error);
    //     }
    //   },
    // }),
  ],
  callbacks: {
    async signIn({ user, profile }): Promise<any> {

      const { email } = user
      const { given_name, family_name, } = profile as GoogleProfile

      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return true
      }
      try {
        const res = await User.create({ email, firstName: given_name, lastName: family_name, password: Math.floor(Math.random() * 3000) })
        console.log(res)
      } catch (error) {
        console.log(error)
      }

      // console.log(user, profile, email, 'lolo weeee')
      return true;
    },
  },


  pages: {
    error: "/dashboard/login",
  },
});

export { handler as POST, handler as GET };
