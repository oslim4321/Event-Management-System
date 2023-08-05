import Users from "@/models/Users";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  const { name, email, password } = await request.json();
  await connect();
  const hashedPass = await bcrypt.hash(password, 10);
  try {
    const newUser = Users.create({ name, email, password: hashedPass });
    console.log("created");
    return new NextResponse("User has been Created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
