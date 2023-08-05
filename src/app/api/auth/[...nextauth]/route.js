import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import connect from "@/utils/db";
// import Users from "@/models/Users";
// import bcrypt from "bcryptjs";
const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.Goggle_Client_Id,
      clientSecret: process.env.Goggle_Client_Secret,
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
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as POST, handler as GET };
