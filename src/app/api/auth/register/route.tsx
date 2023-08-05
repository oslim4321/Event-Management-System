// import Users from "@/models/Users";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// export const POST = async (request: Request) => {
//     const { name, email, password } = await request.json();
//     await connect();
//     const hashedPass = await bcrypt.hash(password, 10);
//     try {
//         const newUser = await Users.create({ name, email, password: hashedPass });
//         console.log("created");
//         return new NextResponse({
//             body: "User has been Created",
//             status: 201,
//         });
//     } catch (error) {
//         return new NextResponse({
//             body: error.message,
//             status: 500,
//         });
//     }
// };