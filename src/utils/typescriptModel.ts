import { ObjectId } from "mongoose";

export type UserTypeModel = {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};
