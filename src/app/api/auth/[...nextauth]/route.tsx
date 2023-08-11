import User from "@/model/User";
import connect from "@/utils/db";
import { Profile, getServerSession } from 'next-auth';
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs'
import { UserTypeModel } from "@/utils/typescriptModel";

interface GoogleProfile extends Profile {
  given_name?: string;
  family_name?: string;
  // Add any other properties you expect to find in the Google profile
}

interface ICredential {
  email: string,
  password: string
}
export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Goggle_Client_Id as string,
      clientSecret: process.env.Goggle_Client_Secret as string,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'credentials',
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text5" },
        password: { label: "Password", type: "password" }
      },
      // the actual credential sighin
      // @ts-ignore
      async authorize(credentials, req) {
        const { email, password } = credentials as ICredential;

        try {
          await connect();
          const user: UserTypeModel | null = await User.findOne({ email });

          if (!user) {
            return null
            // throw new Error('User not Found');
          } else {
            const isPasswordCorrect: boolean = await bcrypt.compare(password, user.password);

            if (!isPasswordCorrect) {
              return null
              // throw new Error('Wrong credentials');
            } else {
              return user; // Return the authenticated user
            }

          }
          return null


        } catch (error) {
          console.error(error);
          return null
          // throw new Error(error as string);
        }
      }
    })

  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    // sign up iser if it is frst time signing in
    async signIn({ user, profile }): Promise<any> {

      await connect();

      const { email } = user
      const existingUser = await User.findOne({ email: email });
      if (!existingUser) {
        const { given_name, family_name, } = profile as GoogleProfile
        const generateRandomPass = Math.floor(Math.random() * 3004840).toString(); // Convert to string
        const password = await bcrypt.hash(generateRandomPass, 10);
        try {
          const res = await User.create({ email, firstName: given_name, lastName: family_name, password })
          return res;
        } catch (error) {
          console.log(error)
          return Promise.resolve(false);

        }

      }

      // console.log(user, profile, email, 'lolo weeee')
      console.log('loging in again')
      return existingUser;
    },
    async session({ session, user, token }): Promise<any> {
      const newUser = await User.findOne({ email: token.email })
      return { ...session, newUser, token }
    },
    // ts-ignore

  },


  pages: {
    signIn: "/login",
    error: "/login",
  },
});

export { handler as POST, handler as GET };
