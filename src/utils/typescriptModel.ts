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
export type EventTypeModel = {
  _id: string;
  image: string;
  eventType: 'Birthday' | 'Wedding' | 'Burial' | 'Other';
  eventName: string;
  eventDate: string; // You might want to use Date type here
  eventLocation: string;
  organizer: string;
  attire: string;
  guestCount: number;
  specialInstructions: string;
  celebrantName?: string; // Only present for 'Birthday' events
  age?: number; // Only present for 'Birthday' events
  musicianNames?: string; // Only present for 'Musical' events
  musicGenre?: string; // Only present for 'Musical' events
  performerNames: string[]; // List of performer names for 'Musical' events
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type serverUser = {
  name?: string,
  email?: string,
  image?: string
}