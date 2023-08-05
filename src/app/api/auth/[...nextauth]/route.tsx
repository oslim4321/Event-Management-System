import User from "@/model/User";
import connect from "@/utils/db";
import { Profile } from 'next-auth';
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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



  ],
  callbacks: {
    async signIn({ user, profile }): Promise<any> {
      await connect();

      const { email } = user
      const { given_name, family_name, } = profile as GoogleProfile

      const existingUser = await User.findOne({ email: email });
      const generateRandomPass = Math.floor(Math.random() * 3004840)
      // const password = await bcrypt.hash(generateRandomPass, 10);
      if (!existingUser) {
        try {
          const res = await User.create({ email, firstName: given_name, lastName: family_name, generateRandomPass })
          return Promise.resolve(true);


        } catch (error) {
          console.log(error)
          return Promise.resolve(false);

        }

      }

      // console.log(user, profile, email, 'lolo weeee')
      console.log('loging in again')
      return true;
    },
  },


  pages: {
    error: "/dashboard/login",
  },
});

export { handler as POST, handler as GET };
