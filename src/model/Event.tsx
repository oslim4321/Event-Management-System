import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    eventType: {
      type: String,
      required: true,
      enum: ["Birthday", "Wedding", "Burial", "Other"],
    },
    eventName: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    eventLocation: {
      type: String,
      required: true,
    },
    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    attire: {
      type: String
    },
    guestCount: {
      type: Number,
    },
    specialInstructions: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
